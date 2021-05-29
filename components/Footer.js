import React from 'react'
import SubscribeForm from './SubscribeForm'

function Footer() {


  return (
    <footer className="text-black dark:text-white font-Gilroy font-thin text-gray">

      <SubscribeForm />
      <p className="text-3xl">✌️</p>
      <p className="pt-2">Made in Minneapolis</p>
      <p className="text-sm">&copy; 2021</p>
      {/* <a href="https://twitter.com/brandonleichty" target="_blank" rel="noopener noreferrer">@brandonleichty</a> */}
    </footer>
  )
}

export default Footer
