import { CgNotes } from "react-icons/cg"; 
import { FcCustomerSupport } from "react-icons/fc"; 
import { GrUnorderedList } from "react-icons/gr"; 
import { RiDashboardFill } from "react-icons/ri"; 
import { Link, NavLink } from "react-router-dom";
import { MdFastfood, MdOutlineFastfood } from "react-icons/md";


export default function ListMenu() {

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`

    return (
                    <div id="sidebar-menu" className="mt-10">
                        <ul id="menu-list" className="space-y-3">
                            <li>
                                <NavLink  id="menu-1" to="/" className={menuClass}>
                                    <RiDashboardFill  className="mr-4 text-xl"/>Dashboard</NavLink>
                              </li>
                            <li>
                                <NavLink id="menu-2" to="/orders" className={menuClass}>
                                    <GrUnorderedList  className="mr-4 text-xl"/>Orders</NavLink>
                              </li>
                              <li>
                                <NavLink id="menu-3" to="/customers" className={menuClass}>
                                    <FcCustomerSupport  className="mr-4 text-xl"/>Customers</NavLink>
                              </li>
                              <li>
                                <NavLink id="menu-4" to="/error/400" className={menuClass}>
                                    <FcCustomerSupport  className="mr-4 text-xl"/>400</NavLink>
                              </li>
                              <li>
                                <NavLink id="menu-5" to="/error/401" className={menuClass}>
                                    <FcCustomerSupport  className="mr-4 text-xl"/>401</NavLink>
                              </li>
                              <li>
                                <NavLink id="menu-6" to="/error/403" className={menuClass}>
                                    <FcCustomerSupport  className="mr-4 text-xl"/>403</NavLink>
                              </li>
                              <li>
                                    <NavLink
                                            id="menu-4"
                                            to="/products"
                                            className={menuClass}
                                        >
                                            <MdFastfood className="mr-4 text-xl" />
                                            Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                            id="menu-4"
                                            to="/notes"
                                            className={menuClass}
                                        >
                                            <CgNotes  className="mr-4 text-xl" />
                                            Notes
                                    </NavLink>
                                </li>
                        </ul>
                    </div>
    );
}

