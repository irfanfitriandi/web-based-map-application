import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ArrowIcon from "../Icons/ArrowIcon";
import LayerIcon from "../Icons/LayerIcon";
import MapIcon from "../Icons/MapIcon";

const Sidebar = () => {
  return (
    <div className="flex justify-between flex-col bg-primary w-52 h-[100vh] py-5">
      <div className="flex flex-col text-white">
        <Link to={`/`}>
          <img className="w-20 mx-auto mb-8" src={Logo} alt="logo" />
        </Link>
        <Link
          className="flex items-center gap-6 text-sm p-4 hover:bg-white/30"
          to={`/`}
        >
          <LayerIcon className="w-4" />
          Layer List
        </Link>
        <Link
          className="flex items-center gap-6 text-sm p-4 hover:bg-white/30"
          to={`/active-layer`}
        >
          <MapIcon className="w-4" />
          Active Layer
        </Link>
      </div>
      <ArrowIcon className="w-8 mx-auto cursor-pointer" />
    </div>
  );
};

export default Sidebar;
