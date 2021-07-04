import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Header = () => {
  const user = useUser();

  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  // let hamburger = document.getElementById('hamburgerbtn');
  // let mobileMenu = document.getElementById('mobileMenu');
  // hamburger.addEventListener('click', function(){
  //   mobileMenu.classList.toggle('active');
  // });

  const openmenu = () => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("mobile-menu")[0];
    const subContainer = document.getElementsByClassName("subsub-container")[0];

    toggleButton.addEventListener("click", () => {
      subContainer.classList.toggle("active");
    });
    toggleButton.click();
  };

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="contain-container flex justify-between items-center py-3  md:space-x-10 text-center sm:text-left">
            {/* <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 text-center sm:text-left"> */}

            <div className="sub-containers flex justify-start lg:w-0 ">
              <Link href="/">
                <a>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt
                  />
                  {/* <img className="h-12 w-auto sm:h-14" src="/curios.png" alt /> */}
                </a>
              </Link>
              <div className="md:flex text-base font-bold mt-3">
                {/* <p className="text-indigo-500">
              Curiosity
              </p> */}
              </div>
            </div>
            {/* <div class="flex md:hidden">
              <button id="hamburgerbtn">
                <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
              </button>
          </div> */}
            {/* <p id="hamburgerbtn" class="md:hidden bg-purple-800">
            <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          </p> */}
            <div className="subsub-container">
              <nav
                className="mobile-menu md:flex justify-between space-x-10"
                id="mobileMenu"
              >
                <Link href="/">
                  <div>
                    <a className=" text-base font-medium text-gray-500 hover:text-gray-900">
                      Home
                    </a>
                  </div>
                </Link>
                <Link href="/subjects">
                  <div>
                    <a className="text-centre text-base font-medium text-gray-500 hover:text-gray-900">
                      Subjects
                    </a>
                  </div>
                </Link>

                <div className=" relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    onClick={() => setIsOpen1(!isOpen1)}
                    className="text-gray-500 group flex bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span>More</span>
                    {/*
            Heroicon name: solid/chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          */}
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/*
          'More' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
          */}
                  <Transition
                    show={isOpen1}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {(ref) => (
                      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              {/* Heroicon name: outline/support */}
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  For individuals
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Have a conversation with our GPT-3 driven
                                  subject matter experts right here.
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              {/* Heroicon name: outline/bookmark-alt */}
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  For business
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Incorporate our GPT-3 driven SMEs in your
                                  website.
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                Recent Posts
                              </h3>
                              <ul className="mt-4 space-y-4">
                                <li className="text-base truncate">
                                  <a
                                    href="#"
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    The initial idea
                                  </a>
                                </li>
                                <li className="text-base truncate">
                                  <a
                                    href="#"
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    Second Post
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {" "}
                                View all posts <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Transition>
                </div>
              </nav>

              {/* {<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            { <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a> }
            <Link href="/login">
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Login
            </a>
            </Link>
          </div> } */}
              <div
                className="md:flex  justify-end  lg:w-0 lg:flex-1"
                id="login-button"
              >
                {user ? (
                  <>
                    <Link href="/profile">
                      <a className="hidden md:flex ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600">
                        Profile
                      </a>
                    </Link>
                    <Link href="/api/logout">
                      <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600">
                        Logout
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600">
                        Login
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <a href="#" onClick={openmenu} className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
          </div>
        </div>
        <style jsx>{`
          .active {
            display: block;
          }
        `}</style>
      </div>
    </>
  );
};
export default Header;
