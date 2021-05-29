// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const { format } = require("date-fns");
const { Client } = require("@notionhq/client");
const fetch = require("node-fetch");

// Initializing a Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Serverless functions takes a request that has 1. an email adddress, and 2. the subscribers name (optional).
export default async (req, res) => {
  const { email, name } = req.body;
  try {
    const result = await addButtonDownSubscriber(email, name);
    const { status } = result;
    res.status(status).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

async function addButtonDownSubscriber(email, name = "") {
  var notes = name ? `Name: ${name}` : "";

  try {
    const buttonDownResponse = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token " + process.env.BUTTONDOWN_API_KEY,
        },
        body: JSON.stringify({
          email,
          notes,
        }),
      }
    );

    if (buttonDownResponse.status == 201 || buttonDownResponse.status == 200) {
      await addSubscriberToNotionDatabase(email, name);
      return {
        status: buttonDownResponse.status,
        message: "Success! You've subscribed!",
        email,
        name,
      };
    } else {
      const errorMessage = await buttonDownResponse.json();
      const message = parseButtondownErrorMessage(errorMessage);
      return {
        status: buttonDownResponse.status,
        message,
        email,
        name,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

function parseButtondownErrorMessage(errorMessage) {
  const duplcateEmailSubscriber = "That email address";
  const spammyEmail = "Sorry, our system has previously detected this email";
  const blankEmail = "This field may not be blank";

  if (
    errorMessage[0]
      ?.toLowerCase()
      .includes(duplcateEmailSubscriber.toLowerCase())
  ) {
    return "You're already subscribed! 🥳";
  }
  if (errorMessage[0]?.toLowerCase().includes(spammyEmail.toLowerCase())) {
    return "Oh no! There was an error. ☹️";
  }
  if (
    errorMessage?.email[0]?.toLowerCase().includes(blankEmail.toLowerCase())
  ) {
    return "Oops! No address was provided.";
  }

  return "Oh no! An unknown error occurred.";
}

async function addSubscriberToNotionDatabase(email, name = "") {
  const today = format(new Date(), "yyyy-MM-dd");

  try {
    const newSubscriber = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Email: {
          email: email,
        },
        "Date added": {
          type: "date",
          date: {
            start: today,
          },
        },
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
      },
    });
    return newSubscriber;
  } catch (error) {
    console.error(error);
  }
}

// // Initializing a client
// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// });

// // Serverless functions takes a request that has 1. an email adddress, and 2. the subscribers name (optional).
// export default async (req, res) => {
//   const { email, name } = JSON.parse(req.body);
//   try {
//     const buttonDownResponse = await addButtonDownSubscriber(email, name);

//     const results = await buttonDownResponse.json();

//     if (buttonDownResponse.status == "201") {
//       res.status(201).json(results);
//     } else {
//       res.status(buttonDownResponse.status).json(results);
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

// async function addButtonDownSubscriber(email, name = "") {
//   // This is specially added for the "note" feature of Buttondown. If a subscriber name is provided, a note/string will be added that reads "Name: John Doe"
//   var notes = name ? `Name: ${name}` : "";

//   try {
//     const buttonDownResponse = await fetch(
//       "https://api.buttondown.email/v1/subscribers",
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Token " + process.env.BUTTONDOWN_API_KEY,
//         },
//         body: JSON.stringify({
//           email,
//           notes
//         })
//       }
//     )

//     // If a subscriber is successfully added to Buttondown, add them to a Notino database
//     if (buttonDownResponse.status == "201") {
//       await addSubscriberToNotionDatabase(email, name);
//     }
//     // Return the entire Buttondown response object
//     return buttonDownResponse;
//   } catch (error) {
//     console.error(error)
//   }
// }

// async function addSubscriberToNotionDatabase(email, name = "") {
//   const today = format(new Date(), 'yyyy-MM-dd');

//   try {
//     // Add a new subscriber to a Notion database that includes an email, date added, and optional name
//     const newSubscriber = await notion.pages.create({
//       "parent": {
//         "database_id": process.env.NOTION_DATABASE_ID
//       },
//       "properties": {
//         "Email": {
//           "email": email
//         },
//         "Date added": {
//           "type": "date",
//           "date": {
//             "start": today
//           }
//         },
//         "Name": {
//           "title": [
//             {
//               "text": {
//                 "content": name
//               }
//             }
//           ]
//         }
//       }
//     })
//     return newSubscriber;
//   } catch (error) {
//     console.error(error)
//   }
// }
