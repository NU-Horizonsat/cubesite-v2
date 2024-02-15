'use client'

import { useState } from "react";
import { Textarea, Input } from "@nextui-org/react"


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
    if (!(name == "" && email == "" && company == "" && message == "")) {
      if (RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)) {
        setIsSubmitting(true);
      try {
        const message_comp: any = "Message from " + name + " (" + email + ")" + " - " + company + ": " + message;
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
      }}
      else{
        setError("Invalid email address!")
      }
    }else{
      setError("Please fill in all fields!")
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
        <form onSubmit={handleSubmit} className="flex-col w-3/4 space-y-8 items-center">
          <div className="flex flex-col space-y-8 items-center">
            <label htmlFor="name" className="text-white">Name</label>
            <Input
              isRequired
              size="md"
              type="text"
              name="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          {/* email */}
          <div className="flex flex-col space-y-8 items-center ">
            <label htmlFor="email" className="text-white">Email</label>
            <Input
              isRequired
              size="md"
              type="email"
              name="E-mail"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          {/* company */}
          <div className="flex flex-col space-y-8 items-center ">
            <label htmlFor="company" className="text-white">Company</label>
            <Input
              size="md"

              type="text"
              name="Company"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full"
            />
          </div>
          {/* message */}
          <div className="flex flex-col space-y-8 items-center">
            <label htmlFor="message" className="text-white">Message</label>
            <Textarea
              isRequired
              size="md"

              name="Message"
              id="message"
              rows={10}
              value={message}
              maxLength={2000}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full"
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