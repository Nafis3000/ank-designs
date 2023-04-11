import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function reset() {
    setName("");
    setEmail("");
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    
    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      // clear form
      reset()
      alert('Success! Message sent.')

    } else {
      console.log(res)
      alert('Error! Message not sent.')
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full w-full bg-gradient-to-b from-indigo-300 to-slate-50">
        <div className="flex h-screen flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-4xl font-semibold py-3 mb-1">Get In Touch!</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/4 h-3/5 sm:w-1/2 rounded-2xl justify-around items-center"
          >
            <input
              type="text"
              id="text"
              name="name"
              className="w-4/5 rounded p-2"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              id="email"
              className="w-4/5 rounded p-2"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              id="message"
              className="rounded w-4/5 resize-none p-2"
              placeholder="Message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="rounded bg-[#0d1821] mt-3 w-2/6 h-12 self-center sm:text-2xl font-medium leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full self-center">
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
