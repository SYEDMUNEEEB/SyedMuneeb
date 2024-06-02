import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h1 className="text-4xl mb-8">Contact Me</h1>
      <form className="max-w-md mx-auto">
        <label className="block mb-4">
          Name:
          <input type="text" className="mt-1 p-2 w-full border rounded" />
        </label>
        <label className="block mb-4">
          Email:
          <input type="email" className="mt-1 p-2 w-full border rounded" />
        </label>
        <label className="block mb-4">
          Message:
          <textarea className="mt-1 p-2 w-full border rounded"></textarea>
        </label>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
};

export default Contact;
