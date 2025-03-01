import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold text-center mb-4">YOOX NEWS</h2>
      <p className="text-center mb-6">Sign up for the newsletter and discover the latest arrivals and promotions</p>
      
      <form onSubmit={handleSubmit} className="flex justify-center mt-4">
  <input
    type="email"
    placeholder="Insert your e-mail address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="p-4 text-black rounded-l-lg w-1/2 sm:w-1/3 mb-4"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white p-4 rounded-r-lg hover:bg-blue-400"
  >
    Sign Up
  </button>
</form>

      <div className="text-center mt-4">
        <label className="inline-block mr-4">
          <input type="radio" name="gender" value="woman" className="mr-2" />
          Woman
        </label>
        <label className="inline-block">
          <input type="radio" name="gender" value="man" className="mr-2" />
          Man
        </label>
      </div>
    </div>
  );
};

export default Newsletter;
