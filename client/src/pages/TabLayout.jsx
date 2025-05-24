import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./BlogList";

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", name: "About", name2: "About Me", content: <AboutMe /> },
    {
      id: "tab2",
      name: "Blog",
      name2: "Blog",
      content: <Blog />,
    },
    {
      id: "tab3",
      name: "Resume",
      name2: "Resume",
      content: <Resume />,
    },
    {
      id: "tab4",
      name: "Portfolio",
      name2: "Portfolio",
      content: <Portfolio />,
    },
   
    {
      id: "tab5",
      name: "Contact",
      name2: "Contact",
      content: <Contact />,
    }
  ];

  return (
    <>
      <div className="container w-1/2 my-20 ml-160">
        {/* Tabs Section */}
        <div className="tabs-container flex flex-row justify-between rounded-3xl rounded-b-none">
          <div className="p-4 text-4xl grow">
            <div className="absolute top-30 ml-4 mt-5 font-bold">
              {tabs.find((tab) => tab.id === activeTab)?.name2}{" "}
              <hr className="text-[#fde68a] w-12 mt-5 mt-1" />
            </div>
          </div>
          <div className="grow-0 flex justify-end">
            <button
              key="tab1"
              onClick={() => setActiveTab("tab1")}
              className={`tab ${activeTab === "tab1" ? "active" : ""} button-1`}
            >
              About
            </button>
            <button
              key="tab2"
              onClick={() => setActiveTab("tab2")}
              className={`tab ${activeTab === "tab2" ? "active" : ""} button-2`}
            >
              Blog
            </button>
            <button
              key="tab3"
              onClick={() => setActiveTab("tab3")}
              className={`tab ${activeTab === "tab3" ? "active" : ""} button-3`}
            >
              Resume
            </button>
            <button
              key="tab4"
              onClick={() => setActiveTab("tab4")}
              className={`tab ${activeTab === "tab4" ? "active" : ""} button-4`}
            >
              Portfolio
            </button>
            
            <button
              key="tab5"
              onClick={() => setActiveTab("tab5")}
              className={`tab ${activeTab === "tab5" ? "active" : ""} button-5`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="content rounded-3xl rounded-t-none">
          <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
        </div>
      </div>
    </>
  );
};

export default TabLayout;
