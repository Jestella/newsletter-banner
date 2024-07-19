import React, { useState } from "react";
import validator from "validator";

function Banner() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("");
    setLoading(true);

    console.log("New Subscriber:", email);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setMessage("Thank you for subscribing!");
    }, 2000);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full md:w-auto md:px-12 md:pt-8 md:pb-6">
        <div className="p-6">
          <h2 className="text-[26px] md:text-3xl font-semibold tracking-tight text-black text-left mb-4">
            Sign up for our newsletter
          </h2>
          <p className="text-lg leading-6 sm:leading-8 text-black text-left mb-6">
            Keep up to date on the latest in R&D tax credits and innovation
            funding.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
            noValidate
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-auto rounded-md border border-gray-400 bg-white/5 px-3.5 py-2 text-gray-500 shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 placeholder-gray-500 sm:text-sm sm:leading-6 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-black px-4 py-2 md:w-36 text-md font-semibold text-white shadow-sm hover:bg-accent"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>{" "}
          <div className="mt-2 h-6">
            {message && (
              <p
                className={`text-sm text-left ${
                  message === "Thank you for subscribing!"
                    ? "text-accent"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
