import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please Fill All Input Fields");
    } else {
      const formData = { name, email, message };

      // Serialize the formData object to JSON and store it in local storage
      localStorage.setItem("ContactUs", JSON.stringify(formData));

      // Deserialize the formData object from JSON stored in local storage
      const storedData = JSON.parse(localStorage.getItem("ContactUs"));

      console.log(storedData); // Log the retrieved data to console

      alert("Message Sent Successfully");
    }
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-5xl font-bold text-blue-500 font-serif text-center mb-5 mt-12">CONTACT US</h1>
      <form className="md:max-w-lg max-w-md  mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-6 mt-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" value={message} onChange={handleMessageChange}></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
