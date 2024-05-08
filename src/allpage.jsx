import React, { useState } from 'react';

import "./App.css";

const Allpages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
       <div className="flex h-screen bg-white divide-x-2 ">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-80 bg-white divide-y ">
        <div className="flex  h-16 bg-white">
          <span className="text-black font-bold mt-5 pl-2 text-lg ">Logo</span>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-7 mr-1"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path fill="black" d="M18 9v2H6l4 4l-1 2l-7-7l7-7l1 2l-4 4z" />
            </svg>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 ml-2"
                width="1em"
                height="1em"
                viewBox="0 0 28 28"
              >
                <path
                  fill="black"
                  d="M10.75 15A2.25 2.25 0 0 1 13 17.25v5.5A2.25 2.25 0 0 1 10.75 25h-5.5A2.25 2.25 0 0 1 3 22.75v-5.5A2.25 2.25 0 0 1 5.25 15zm12 0A2.25 2.25 0 0 1 25 17.25v5.5A2.25 2.25 0 0 1 22.75 25h-5.5A2.25 2.25 0 0 1 15 22.75v-5.5A2.25 2.25 0 0 1 17.25 15zm-12-12A2.25 2.25 0 0 1 13 5.25v5.5A2.25 2.25 0 0 1 10.75 13h-5.5A2.25 2.25 0 0 1 3 10.75v-5.5A2.25 2.25 0 0 1 5.25 3zm12 0A2.25 2.25 0 0 1 25 5.25v5.5A2.25 2.25 0 0 1 22.75 13h-5.5A2.25 2.25 0 0 1 15 10.75v-5.5A2.25 2.25 0 0 1 17.25 3z"
                />
              </svg>
              My Dashbord
              <svg
                className="w-3 h-3 text-gray-800  ml-20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 ml-2"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="black"
                  d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197M467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959"
                />
              </svg>
              TOTM links
              <svg
                className="w-3 h-3 text-gray-800  ml-24 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 ml-2"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="black">
                  <path d="M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" />
                  <path
                    fill-rule="evenodd"
                    d="M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
              Daily Summary
              <svg
                className="w-3 h-3 text-gray-800  ml-16"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-black bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 2L3 6v1h14V6zM5 8l-.2 7h2.5L7 8zm4 0l-.2 7h2.5L11 8zm4 0l-.2 7h2.5L15 8zM3 18h14v-2H3z"
                />
              </svg>
              Bank Details
              <svg
                className="w-3 h-3 text-gray-800  ml-20 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="block text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        {isOpen && (
          <div className="flex flex-col w-80 bg-white divide-y">
            <div className="flex h-16 bg-white">
              <span className="text-black font-bold mt-5 pl-2 text-lg">
                Logo
              </span>
            </div>
           
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-7 mr-1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="black"
                    d="M18 9v2H6l4 4l-1 2l-7-7l7-7l1 2l-4 4z"
                  />
                </svg>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 ml-2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="black"
                      d="M10.75 15A2.25 2.25 0 0 1 13 17.25v5.5A2.25 2.25 0 0 1 10.75 25h-5.5A2.25 2.25 0 0 1 3 22.75v-5.5A2.25 2.25 0 0 1 5.25 15zm12 0A2.25 2.25 0 0 1 25 17.25v5.5A2.25 2.25 0 0 1 22.75 25h-5.5A2.25 2.25 0 0 1 15 22.75v-5.5A2.25 2.25 0 0 1 17.25 15zm-12-12A2.25 2.25 0 0 1 13 5.25v5.5A2.25 2.25 0 0 1 10.75 13h-5.5A2.25 2.25 0 0 1 3 10.75v-5.5A2.25 2.25 0 0 1 5.25 3zm12 0A2.25 2.25 0 0 1 25 5.25v5.5A2.25 2.25 0 0 1 22.75 13h-5.5A2.25 2.25 0 0 1 15 10.75v-5.5A2.25 2.25 0 0 1 17.25 3z"
                    />
                  </svg>
                  My Dashbord
                  <svg
                    className="w-3 h-3 text-gray-800  ml-20"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 ml-2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="black"
                      d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197M467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959"
                    />
                  </svg>
                  TOTM links
                  <svg
                    className="w-3 h-3 text-gray-800  ml-24 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 ml-2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="black">
                      <path d="M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" />
                      <path
                        fill-rule="evenodd"
                        d="M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                  Daily Summary
                  <svg
                    className="w-3 h-3 text-gray-800  ml-16"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-black bg-gray-100 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10 2L3 6v1h14V6zM5 8l-.2 7h2.5L7 8zm4 0l-.2 7h2.5L11 8zm4 0l-.2 7h2.5L15 8zM3 18h14v-2H3z"
                    />
                  </svg>
                  Bank Details
                  <svg
                    className="w-3 h-3 text-gray-800  ml-20 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
      <hr />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center justify-center space-x-28 mt-5 text-lg ">
            <a href="#" className="nav-link  hidden md:block">
              Home
            </a>
            <a href="#" className="nav-link  hidden md:block">
              Service
            </a>
            <a href="#" className="nav-link  hidden md:block">
              Blog
            </a>
            <a href="#" className="nav-link   hidden md:block">
              Offers
            </a>
            <a href="#" className="nav-link  mr-22 hidden md:block">
              About Us
            </a>
            <a className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10.783 18.828a8.046 8.046 0 0 0 7.439-4.955a8.034 8.034 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.046 8.046 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"
                />
              </svg>
            </a>
            <a className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M2 10q0-2.5 1.113-4.587T6.1 1.95l1.175 1.6q-1.5 1.1-2.387 2.775T4 10zm18 0q0-2-.888-3.675T16.726 3.55l1.175-1.6q1.875 1.375 2.988 3.463T22 10zM4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"
                />
              </svg>
            </a>
            <a className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="black" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 mr-8 ml-4 ">
          <h1 className="text-2xl font-bold">Update Bank Detail </h1>
          <p className="mt-2 text-black">
            Sed ut perspiciatis Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae optio similique doloremque numquam nam
            neque aperiam blanditiis dolore ad qui maiores, quo earum, autem
            quibusdam, reprehenderit consectetur molestiae? Vel pariatur fugiat
            fuga laborum nemo labore.
          </p>
        </div>
        <div>
          <div className="pt-4 pb-0 mt-6 lg:mt-0 rounded shadow bg-white border-4 border-gray-100 mx-5 lg:mx-10">
            <form>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    ACCOUNT HOLDER NAME
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="ACCOUNT HOLDER NAME"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    ACCOUNT NUMBER
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="ACCOUNT NUMBER"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    IFSC CODE
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="IFSC CODE"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    BANK NAME
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="BANK NAME"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    BANK CITY
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="BANK CITY"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    BRANCH NAME
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="BRANCH NAME"
                  />
                </div>
              </div>
              <div className="md:flex mb-6 ml-5">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="my-textfield"
                  >
                    RELATION WITH ACCOUNT HOLDER
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <input
                    className="form-input block w-full focus:bg-white border border-gray-300 rounded-md"
                    id="my-textfield"
                    type="text"
                    placeholder="RELATION WITH ACCOUNT HOLDER"
                  />
                </div>
              </div>

              <div className="md:flex mb-6">
                <div className="md:w-1/3 ml-5">
                  <label
                    className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                    for="consent-checkbox"
                  >
                    CONSENT
                  </label>
                </div>
                <div className="md:w-2/3 mr-10">
                  <div className="flex items-center bg-gray-100 mb-2 border border-gray-300 rounded-md p-3 ">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      className="form-checkbox h-5 w-5 text-green-500"
                    />
                    <label
                      className="ml-5 text-gray-700 font-medium"
                      for="consent-checkbox"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Suscipit, commodi.
                    </label>
                  </div>
                </div>
              </div>
             
                <div className="md:flex md:items-center">
                  <div className="md:w-2/3"></div>
                  <div className="md:w-1/3 flex justify-end mr-8">
                   <a href="/Otp">                    <button
                      className="shadow bg-green-600 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
                      type="button"
                    >
                      Save
                    </button>
                  </a>
                
                  </div>
                </div>
              
            </form>
          </div>
          <div className="pt-4 pb-0 mt-6  lg:mt-0  bg-white  mx-5 lg:mx-10">
            <p className="uppercase text-center mb-4">
              The above details are final and will be used for payment. If any
              of these details are wrong, please contact your manager
              immediately. Also, email the same to account@exambazaar.com
            </p>
            <br />
            <div className="border-t border-gray-300 my-4"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Allpages
