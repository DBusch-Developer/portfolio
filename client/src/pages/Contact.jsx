import { useState } from "react";
import axios from "axios";
import "animate.css";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState(false);

  const [sendEmail, setSendEmail] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailObj = {
      fullName: sendEmail.fullName,
      email: sendEmail.email,
      subject: sendEmail.subject,
      message: sendEmail.message,
    };
    console.log(emailObj);
    const addEmail = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/emails`,
      emailObj
    );
    console.log(addEmail);
    setShowToast(true);
    setToast(true);
    setSendEmail({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setToast(false);
    }, 5000);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mt-20 p-5">Contact Form</h1>
      <p>
        <iframe
        className="m-auto rounded-lg map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105093.1993923816!2d-112.53595507228393!3d34.60005266053226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d28d400717ceb%3A0x9a43de752eefedd!2sPrescott%2C%20AZ!5e0!3m2!1sen!2sus!4v1748054001204!5m2!1sen!2sus"
          width="875"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>

      
      <form onSubmit={handleSubmit} className="">
        <div className="grid gap-4 mb-4 sm:grid-cols-2 p-5">
          <div>
            <input
              required
              value={sendEmail.fullName}
              onChange={(e) =>
                setSendEmail({
                  ...sendEmail,
                  fullName: e.target.value,
                })
              }
              type="text"
              name="full-name"
              id="full-name"
              className="bg-[#262626]  border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Full name"
            />
          </div>
          <div>
            <input
              value={sendEmail.email}
              onChange={(e) =>
                setSendEmail({
                  ...sendEmail,
                  email: e.target.value,
                })
              }
              type="text"
              name="email"
              id="email"
              className="bg-[#262626] border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Email address"
              required
            />
          </div>
          <div className="col-span-2">
            <input
              value={sendEmail.subject}
              onChange={(e) =>
                setSendEmail({
                  ...sendEmail,
                  subject: e.target.value,
                })
              }
              type="text"
              name="subject"
              id="subject"
              className="bg-[#262626] border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <textarea
              value={sendEmail.message}
              onChange={(e) =>
                setSendEmail({
                  ...sendEmail,
                  message: e.target.value,
                })
              }
              id="message"
              name="message"
              rows="4"
              className="bg-[#262626] border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message"
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-end">
          <button type="submit" className="p-5 ">
            <div className="button text-[#fde68a] bg-[#262626] rounded-lg shadow-xl">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
                <p>Send Message</p>
              </div>
            </div>
          </button>
        </div>
      </form>
      {showToast && (
        <>
          <div
            id="toast-bottom-right"
            class={`${
              toast
                ? "animate__animated animate__slideInRight animate__fast"
                : "animate__animated animate__fadeOutRightBig"
            } fixed p-5 text-[#fde68a] bg-[#262626] rounded-xl shadow-xl right-5 bottom-5`}
            role="alert"
          >
            <div className="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
              </svg>
              <p>Message Sent Successfully!</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
