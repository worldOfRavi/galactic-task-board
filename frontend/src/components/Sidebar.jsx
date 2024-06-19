import { PiUsersBold } from "react-icons/pi";
import { BiCabinet, BiSolidReport } from "react-icons/bi";
import { BsCalendarMonth } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="menu bg-base-200 w-[5%] md:w-[10%] lg:w-[15%] ">
      <ul>
        <li>
          <a className="text-2xl flex flex-col py-4">
            <PiUsersBold /> <span>Manage</span>
          </a>
        </li>
        <li>
          <a className="text-2xl flex flex-col py-4">
            <BiCabinet />
            Boards
          </a>
        </li>
        <li>
          <a className="text-2xl flex flex-col py-4">
            <BsCalendarMonth />
            <span> Schedule</span>
          </a>
        </li>
        <li>
          <a className="text-2xl flex flex-col py-4">
            <BiSolidReport />
            <span> Reports</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
