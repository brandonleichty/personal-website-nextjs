import React from "react";

function SubscribeForm() {
  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action="https://app.convertkit.com/forms/2261433/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="2261433"
        data-uid="eacaabaa82"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean" className="outer-form-wrapper">
          <ul
            class="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            class="seva-fields formkit-fields"
          >
            <div class="formkit-field">
              <input
                class="formkit-input"
                name="email_address"
                aria-label="Email Address"
                placeholder="zelda@hyrule.com"
                required=""
                type="email"
              />
            </div>
            <button
              data-element="submit"
              class="formkit-submit formkit-submit"
            >
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span class="">Subscribe</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SubscribeForm;