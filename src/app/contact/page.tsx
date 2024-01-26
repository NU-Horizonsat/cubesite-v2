'use client'

import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          console.error("Error sending message.");
        }
      } catch (error) {
        console.error(error);
      }

      setIsSubmitting(false);
    }

    return (

      <div className="flex flex-col space-y-8 items-center ">
        <p></p>
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left w-1/2 font-bold">CONTACT US</h1>
          {isSubmitted ? (
            <div className="flex flex-col space-y-8 items-center ">
              <h2 className="text-2xl text-white">Thank you for your message!</h2>
              <p className="text-white">We will get back to you as soon as possible.</p>
            </div>
          ) : (
            // name
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8 items-center border">
              <div className="flex flex-col space-y-8 items-center ">
                <label htmlFor="name" className="text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
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
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* company */}
              <div className="flex flex-col space-y-8 items-center ">
                <label htmlFor="company" className="text-white">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* message */}
              <div className="flex flex-col space-y-8 items-center ">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex flex-col space-y-8 items-center ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white"
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

  export default Contact