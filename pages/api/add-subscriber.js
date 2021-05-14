// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require("node-fetch");

export default async (req, res) => {
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
        body: req.body,
      }
    );

    console.log(buttonDownResponse.status);
    const results = await buttonDownResponse.json();

    if (buttonDownResponse.status == "201") {
      res.status(201).json(results);
    } else {
      res.status(buttonDownResponse.status).json(results);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
