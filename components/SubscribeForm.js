import React from "react";

function SubscribeForm() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("http://brandonleichty.com/api/add-subscriber", {
      method: "POST",
      body: JSON.stringify({
        email: event.target.email.value,
      }),
    });

    console.log(res)
  };
  return (
    <form
      method="post"
      target="popupwindow"
      onSubmit={registerUser}
      className="embeddable-buttondown-form"
    >
      <input
        type="email"
        name="email"
        className="formkit-input"
        id="bd-email"
        placeholder="zelda@hyrule.com"
      />
      <input type="submit" className="formkit-submit" value="Hiya!" />
    </form>
  );
}

export default SubscribeForm;
