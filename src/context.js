import React, { useState, useContext } from "react";
import sublinks from "./data";

const Wrap = React.createContext();

const WrapProvider = ({ children }) => {
  const [showSubMenu, setSubMenu] = useState(false);
  const [subMenuDetail, setSubMenuDetail] = useState(sublinks[0]);
  const [subMiddle, setSubMiddle] = useState(0);
  const [showSideBar, setshowSideBar] = useState(false);

  const handleChageSubMenu = ({ e, index }) => {
    setSubMenuDetail(sublinks[index]);
    setSubMenu(true);
    const { left, width } = e.target.getBoundingClientRect();
    const middlePoint = left + width / 2;
    setSubMiddle(middlePoint);
  };

  return (
    <Wrap.Provider
      value={{
        sublinks,
        showSubMenu,
        subMiddle,
        showSideBar,
        subMenuDetail,
        setSubMenu,
        setshowSideBar,
        setSubMenuDetail,
        handleChageSubMenu,
      }}
    >
      {children}
    </Wrap.Provider>
  );
};

export { WrapProvider, Wrap };

export const useGlobalContext = () => {
  return useContext(Wrap);
};
