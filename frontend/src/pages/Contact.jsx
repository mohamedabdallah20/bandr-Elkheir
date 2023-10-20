import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col relative justify-start mb-20 mt-20">
      <div className="md:top-0 md:left-0 sm:inset-0 md:mx-8 sm:px-20">
        <h1 className="lg:text-7xl md:text-5xl text-4xl ">Get in touch</h1>
        <p className="mt-4  max-w-md md:text-3xl text-lg">
          Have you got any questions we could help you with? Whether you want to
          work with us, or just talk to us, we would love to hear from you.
        </p>
        <div className="px-3">
          <p className="my-8 text-2xl">
            Landline:&nbsp;&nbsp;&nbsp;&nbsp;+971 4 333 9896{' '}
          </p>
          <p className="my-8 text-2xl">
            Mobile:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+971 54 773 0717{' '}
          </p>
          <p className="my-8 text-2xl">
            Address:&nbsp;&nbsp;&nbsp;&nbsp; Office 20B-03 BC Resi 1072 Tower Al
            Muteena, Dubai, UAE.{' '}
          </p>
          <p className="my-8 text-2xl">
            P.O.Box:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11863{' '}
          </p>
          <p className="my-8 text-2xl">
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info@rokalkayan.com{' '}
          </p>
        </div>
        <form>
          <div className="mt-10 gap-x-6 md:gap-y-8 gap-y-3 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                first name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    autoComplete="firstName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your first name"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                last name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    autoComplete="lastName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your last name"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your email"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="block md:max-w-md w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              // className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
