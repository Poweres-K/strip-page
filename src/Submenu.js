import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const subMenuRef = useRef();
  const { subMenuDetail, showSubMenu, setSubMenu, subMiddle } =
    useGlobalContext();
  const { page, links } = subMenuDetail;
  useEffect(() => {
    subMenuRef.current.style.left = subMiddle + "px";
  }, [subMiddle]);
  return (
    <aside
      ref={subMenuRef}
      className={showSubMenu ? "submenu show" : "submenu"}
      onMouseLeave={() => {
        setSubMenu(false);
      }}
      onMouseEnter={() => {
        setSubMenu(true);
      }}
    >
      <section>
        <h4>{page}</h4>
        <div className={"submenu-center col-" + links.length}>
          {links.map((link) => {
            const { label, icon, url } = link;
            return (
              <a href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
