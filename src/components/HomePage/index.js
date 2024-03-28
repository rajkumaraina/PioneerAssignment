import {Component} from 'react'
import NavBar from '../NavBar'
import Graphs  from '../Graphs'
import './index.css'
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


class HomePage extends Component{
    state={clicked:false}

    hamburgerMenu=()=>{
        console.log('HI')
        this.setState(prevState=>({clicked:!prevState.clicked}))
    }
    render(){
        const{clicked}=this.state
        console.log(this.state)
        return(
            <div className="mainContainer">
                <div className='mbNav'><NavBar/></div> 
                    <div className='icon-container'>
                    <img src="https://res.cloudinary.com/dzcwfwoom/image/upload/v1711534744/logo2_dtyl0n.png" alt="not found" className='webicon-img'/>
                    {" "} <RxHamburgerMenu className="menu-icon" onClick={this.hamburgerMenu}/>
                </div>
                {clicked?
                <><ul className="unorder-list1" >
                     <div className="profile-cont1">
                {" "}<CgProfile className="profile-icon"/>
                <div className="cont">
                    <h1 className="heading">Rajkumar</h1>
                    <p className="para3">rajkumar@raina.com</p>
                </div>
                {" "} <BsThreeDotsVertical className="icon"/>
            </div>
                <li className="list-item2">
                    {" "}<FiHome className="icon-41"/>
                    <p className="para21">Home</p>
                </li>
                <li className="list-item2">
                    {" "}<CgOrganisation className="icon-31"/>
                    <p className="para11">Organisation</p>
                </li>
                <li className="list-item2">
                    {" "}<GrCube className="icon-3"/>
                    <p className="para11">Assets</p>
                </li>
                <li className="list-item2">
                    {" "}<PiArrowsDownUpFill className="icon-31"/>
                    <p className="para11">Trade</p>
                </li>
                <li className="list-item2">
                    {" "}<CgSandClock className="icon-31"/>
                    <p className="para11">History</p>
                </li>
                <li className="list-item2">
                    {" "}<PiWallet className="icon-31"/>
                    <p className="para11">Wallet</p>
                </li>
            </ul>
           
           
            </>:null}
                <Graphs/>
            </div>
        )
    }
    
}
export default HomePage 