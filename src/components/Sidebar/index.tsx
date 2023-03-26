import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "assets/logo.svg";
import ArrowIcon from "../Icons/ArrowIcon";
import LayerIcon from "../Icons/LayerIcon";
import MapIcon from "../Icons/MapIcon";
import ButtonIcon from "../Icons/ButtonIcon";
import LayerPlusIcon from "../Icons/LayerPlusIcon";
import BinIcon from "../Icons/BinIcon";

function Sidebar() {
  const [miniSidebar, setMiniSidebar] = useState(true);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const path = window.location.pathname;

  return (
    <div className="flex">
      <div
        className={`flex justify-between flex-col bg-primary ${
          miniSidebar ? "w-28" : "w-52"
        } w-28 h-screen py-5 ease-in-out duration-300 z-50`}
      >
        <div className="flex flex-col text-white">
          <Link to="/">
            <img className="w-16 mx-auto mb-8" src={Logo} alt="logo" />
          </Link>
          <Link
            className={`flex ${
              miniSidebar ? "justify-center items-center" : "items-center"
            } gap-6 text-sm p-4 ease-in-out duration-300 hover:bg-white/10 ${
              path === "/" && "bg-white/30"
            }`}
            to="/"
            onClick={() => setMenuSidebar(true)}
          >
            <LayerIcon className="w-4" />
            {miniSidebar ? " " : "Layer List"}
          </Link>
          <Link
            className={`flex ${
              miniSidebar ? "justify-center items-center" : "items-center"
            } gap-6 text-sm p-4 ease-in-out duration-300 hover:bg-white/10 ${
              path === "/active-layer/point" || path === "/active-layer/polygon"
                ? "bg-white/30"
                : ""
            }`}
            to="/active-layer/point"
            onClick={() => setMenuSidebar(true)}
          >
            <MapIcon className="w-4" />
            {miniSidebar ? " " : "Active Layer"}
          </Link>
        </div>
        <ArrowIcon
          className={`w-8 mx-auto cursor-pointer ${
            miniSidebar && "rotate-180"
          }`}
          onClick={() => setMiniSidebar(!miniSidebar)}
        />
      </div>

      <div
        className={`flex flex-col items-center w-52 p-5 gap-4 h-screen bg-accent text-sm font-medium shadow-md z-10 ease-in-out duration-300 ${
          menuSidebar ? "translate-x-0" : "-translate-x-[210px]"
        }`}
      >
        <Link
          to="/active-layer/point"
          className="flex justify-between items-center w-full bg-white rounded-md p-2 shadow-sm"
        >
          Point
          {path === "/active-layer/point" ||
          path === "/active-layer/polygon" ? (
            <BinIcon className="w-4" />
          ) : (
            <LayerPlusIcon className="w-5" />
          )}
        </Link>
        <Link
          to="/active-layer/polygon"
          className="flex justify-between items-center w-full bg-white rounded-md p-2 shadow-sm"
        >
          Polygon
          {path === "/active-layer/point" ||
          path === "/active-layer/polygon" ? (
            <BinIcon className="w-4" />
          ) : (
            <LayerPlusIcon className="w-5" />
          )}
        </Link>
      </div>
      <ButtonIcon
        className={`w-12 absolute top-1/2 cursor-pointer ease-in-out ${
          miniSidebar ? "left-[88px]" : "left-[184px]"
        } ${
          menuSidebar
            ? "transform -scale-x-100 translate-x-[210px]"
            : "translate-x-0"
        } duration-300 z-50`}
        onClick={() => setMenuSidebar(!menuSidebar)}
      />
    </div>
  );
}

export default Sidebar;
