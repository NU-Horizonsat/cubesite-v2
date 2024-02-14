'use client'

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const message_comp:any = "Message from " + name + " (" + email + ")" + " - " + company +": "+ message;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message_comp }),
      });
      console.log(response);
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Error sending message." + response.status + " " + response.statusText);
        setError("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  }

  return (

      <div className="flex flex-col space-y-8 items-center bg-black bg-opacity-75 m-20 rounded-2xl">
        <p></p>
        <p></p>
        <h1 className="text-red-600 text-5xl text-center w-max font-bold">CONTACT US</h1>
        {isSubmitted ? (
          <div className="space-y-8 items-center ">
            <h2 className="text-2xl text-white">Thank you for your message!</h2>
            <p className="text-white">We will get back to you as soon as possible.</p>
          </div>
        ) : (
          // name
          <form onSubmit={handleSubmit} className="flex-col w-2/3 space-y-8 items-center">
            <div className="flex flex-col space-y-8 items-center">
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            {/* email */}
            <div className="flex flex-col space-y-8 items-center ">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            {/* company */}
            <div className="flex flex-col space-y-8 items-center ">
              <label htmlFor="company" className="text-white">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            {/* message */}
            <div className="flex flex-col space-y-8 items-center">
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                name="message"
                id="message"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            {(error === "") ? null : <div
              className="flex flex-col space-y-8 items-center bg-red-900 border p-5 rounded-xl"
            > 
              <p className="text-white">{error}</p>
            </div>}
            <div className="flex flex-col space-y-8 items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white hover:bg-red-700 p-5 px-10 rounded-xl transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )
        }
        <p></p>
        <p className="text-white">Copyright 2023 - Project Horizon</p>
        <p></p>
      </div>
    )
  }

  export default Contact;