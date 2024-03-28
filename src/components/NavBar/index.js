import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { GrCube } from "react-icons/gr";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { PiWallet } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import './index.css'


const NavBar =()=>{
    return(
        <div className='navbar-cont'>
            <div className='icon-cont'>
                <img src="https://res.cloudinary.com/dzcwfwoom/image/upload/v1711534744/logo2_dtyl0n.png" alt="not found" className='webicon-img'/>
                {" "} <RxHamburgerMenu className="menu-icon"/>
            </div>

            <div className="input-cont">
                {" "}<CiSearch className="search-icon"/>
                <input className="input-item" type="search" placeholder="Search"/>
            </div>

            <ul className="unorder-list" >
                <li className="list-item">
                    {" "}<FiHome className="icon-4"/>
                    <p className="para2">Home</p>
                </li>
                <li className="list-item">
                    {" "}<CgOrganisation className="icon-3"/>
                    <p className="para">Organisation</p>
                </li>
                <li className="list-item">
                    {" "}<GrCube className="icon-3"/>
                    <p className="para">Assets</p>
                </li>
                <li className="list-item">
                    {" "}<PiArrowsDownUpFill className="icon-3"/>
                    <p className="para">Trade</p>
                </li>
                <li className="list-item">
                    {" "}<CgSandClock className="icon-3"/>
                    <p className="para">History</p>
                </li>
                <li className="list-item">
                    {" "}<PiWallet className="icon-3"/>
                    <p className="para">Wallet</p>
                </li>
            </ul>

            <div className="list-item1">
            {" "}<IoIosNotificationsOutline className="icon-3"/>
                 <p className="para1">Notifications</p>
                 <p className="count">12</p>
            </div>

            <div className="list-item">
            {" "}<BsQuestionCircle className="icon-3"/>
                 <p className="para1">Support</p>
            </div>

            <div className="list-item">
            {" "}<TbSettings className="icon-3"/>
                 <p className="para1">Settings</p>
            </div>

            <div className="profile-cont">
                {" "}<CgProfile className="profile-icon"/>
                <div className="cont">
                    <h1 className="heading">Rajkumar</h1>
                    <p className="para3">rajkumar@raina.com</p>
                </div>
                {" "} <BsThreeDotsVertical className="icon"/>
            </div>
        </div>
    )
}
export default NavBar