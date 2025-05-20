import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(true);
  const [showApplications, setShowApplications] = useState(false);
  const [showWebDevelopment, setShowWebDevelopment] = useState(false);
  const [showUiUx, setShowUiUx] = useState(false);

  const handleAll = () => {
    setShowAll(true);
    setShowApplications(false);
    setShowWebDevelopment(false);
    setShowUiUx(false);
  };

  const handleApplications = () => {
    setShowAll(false);
    setShowApplications(true);
    setShowWebDevelopment(false);
    setShowUiUx(false);
  };

  const handleWebDevelopment = () => {
    setShowAll(false);
    setShowApplications(false);
    setShowWebDevelopment(true);
    setShowUiUx(false);
  };

  const handleUiUx = () => {
    setShowAll(false);
    setShowApplications(false);
    setShowWebDevelopment(false);
    setShowUiUx(true);
  };

  return (
    <>
      <div className="mt-20 p-4 flex flex-row gap-8 font-semibold">
        <button
          onClick={handleAll}
          className={`cursor-pointer ${
            showAll === true ? "text-[#fde68a]" : "text-gray-200 type"
          }`}
        >
          All
        </button>
        <button
          onClick={handleApplications}
          className={`cursor-pointer ${
            showApplications === true ? "text-[#fde68a]" : "text-gray-200 type"
          }`}
        >
          Applications
        </button>
        <button
          onClick={handleWebDevelopment}
          className={`cursor-pointer ${
            showWebDevelopment === true
              ? "text-[#fde68a]"
              : "text-gray-200 type"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={handleUiUx}
          className={`cursor-pointer ${
            showUiUx === true ? "text-[#fde68a]" : "text-gray-200 type"
          }`}
        >
          UI/UX
        </button>
      </div>
      <div className="p-4 mt-5 grid grid-cols-2 gap-10">
        {showAll && (
          <>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/real-estate"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg shadow-xl min-h-51"
                src={new URL(`../assets/real-estate.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/chat-app"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl"
                src={new URL(`../assets/chat-app.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/project-tracker"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl min-h-52.5 responsive"
                src={
                  new URL(`../assets/project-tracker.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/blog"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={new URL(`../assets/blog.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/todo-react-backend"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={
                  new URL(`../assets/todo-app-react.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/newsletter"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl"
                src={new URL(`../assets/newsletter.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/login"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl min-h-52.5"
                src={new URL(`../assets/login.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/todo"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={new URL(`../assets/todo-app.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/tribute"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={new URL(`../assets/tribute.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/table"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={new URL(`../assets/table.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/dynamic-form-1"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={
                  new URL(`../assets/dynamic-form.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/dynamic-form-2"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={
                  new URL(`../assets/dynamic-form-2.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
          </>
        )}
        {showApplications && (
          <>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/chat-app"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl"
                src={new URL(`../assets/chat-app.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/project-tracker"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl min-h-52.5 responsive"
                src={
                  new URL(`../assets/project-tracker.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/todo-react-backend"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={
                  new URL(`../assets/todo-app-react.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/login"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl min-h-52.5"
                src={new URL(`../assets/login.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/dynamic-form-2"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={
                  new URL(`../assets/dynamic-form-2.JPG`, import.meta.url).href
                }
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
          </>
        )}
        {showWebDevelopment && (
          <>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/real-estate"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg shadow-xl min-h-51"
                src={new URL(`../assets/real-estate.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/blog"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl responsive"
                src={new URL(`../assets/blog.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="http://gitlab.perryville.perseverenow.org/dbusch/newsletter"
              target="_blank"
              className="image-container cursor-pointer"
            >
              <img
                className="image-overlay rounded-lg m-auto shadow-xl"
                src={new URL(`../assets/newsletter.JPG`, import.meta.url).href}
              />
              <div className="overlay">
                <div className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fde68a"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default Portfolio;
