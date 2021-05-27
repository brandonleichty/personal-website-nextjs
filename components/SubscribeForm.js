import React, { useState } from "react";

function SubscribeForm(props) {
  const { loading, setLoading, setFormMessage } = props;
  const [emailInputValue, setEmailInputValue] = useState('');

  const onChange = (event) => {
    setEmailInputValue(event.target.value);
  };


  const registerUser = async (event) => {
    setLoading(true);
    setEmailInputValue('');
    event.preventDefault();

    const res = await fetch("/api/add-subscriber", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: event.target.email.value,
      }),
    });
    const jsonResponseData = await res.json()
    const { status, message } = jsonResponseData;
    if (status != 200 || status != 201) {
      setFormMessage(message)
      setTimeout(() => setFormMessage("Sign up for my newsletter!"), 5000);
    } else {
      setFormMessage("Sign up for my newsletter!")
    }
    setLoading(false);
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
        value={emailInputValue}
        onChange={onChange}
        className="formkit-input"
        id="bd-email"
        placeholder="zelda@hyrule.com"
      />
      <input type="submit" className="formkit-submit" value="Hiya!" />
    </form>
  );
}

export default SubscribeForm;
