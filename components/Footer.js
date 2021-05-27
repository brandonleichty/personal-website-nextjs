import React from 'react'
import SubscribeForm from './SubscribeForm'
import { useState } from 'react';

function Footer() {
  const [loading, setLoading] = useState(false)
  const [formMessage, setFormMessage] = useState("Sign up for my newsletter!")

  return (
    <footer className="text-black dark:text-white font-Gilroy font-thin text-gray">
      <div className="email-form-text mb-5 text-center">
        {loading ? <p>Processing...</p> : <p>{formMessage}</p>}
      </div>
      <SubscribeForm loading={loading} setLoading={setLoading} setFormMessage={setFormMessage} />
      <p className="text-3xl">✌️</p>
      <p className="pt-2">Made in Minneapolis</p>
      <p className="text-sm">&copy; 2021</p>
      {/* <a href="https://twitter.com/brandonleichty" target="_blank" rel="noopener noreferrer">@brandonleichty</a> */}
    </footer>
  )
}

export default Footer
