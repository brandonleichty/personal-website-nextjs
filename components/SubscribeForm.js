import React from "react";

function SubscribeForm() {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/brandonleichty"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/brandonleichty', 'popupwindow')"
      class="embeddable-buttondown-form"
    >
      <input type="email" name="email" className="formkit-input" id="bd-email" placeholder="zelda@hyrule.com" />
      <input type="hidden" value="1" name="embed" />
      <input type="submit" className="formkit-submit" value="Hiya!" />
    </form>
  );
}

export default SubscribeForm;
