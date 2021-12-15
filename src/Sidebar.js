import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showSideBar, setshowSideBar } = useGlobalContext();

  return (
    <div className={showSideBar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <aside className="sidebar">
        <button
          className="close-btn"
          onClick={() => {
            setshowSideBar(false);
          }}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((li, index) => {
                    const { label, icon, url } = li;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
