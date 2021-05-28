import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";

function SubscribeForm(props) {
  const { loading, setLoading, setFormMessage } = props;
  const [emailInputValue, setEmailInputValue] = useState("");
  const inputRef = useRef();

  const onChange = (event) => {
    setEmailInputValue(event.target.value);
  };

 

  const realisticConfetti = () => {
    const rect = inputRef.current.getBoundingClientRect()
    const count = 200;
    const defaults = {
      origin: { y: (rect.y / window.innerHeight)},
      colors: ["#6303FE", "#03CFFE"],
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const registerUser = async (event) => {
    setLoading(true);
    setEmailInputValue("");
    event.preventDefault();

    const res = await fetch("/api/add-subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: event.target.email.value,
      }),
    });
    const jsonResponseData = await res.json();
    const { status, message } = jsonResponseData;
    if (status != 200 && status != 201) {
      setFormMessage(message);
      setTimeout(() => setFormMessage("Sign up for my newsletter!"), 5000);
    } else {
      // Only shoot confetti if a user successfully signs up
      realisticConfetti();
      setFormMessage(message);
      setTimeout(() => setFormMessage("Sign up for my newsletter!"), 7000);
    }
    setLoading(false);
  };
  return (
    <form
      method="post"
      target="popupwindow"
      onSubmit={registerUser}
      className="embeddable-buttondown-form"
      ref={inputRef}
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
