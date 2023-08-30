import petlogo from '../assets/images/logo-pt.png'
import icondog from '../assets/images/icon-dog.png'
import iconcat from '../assets/images/icon-cat.png'
import '../components/Navbar.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Navbar(props){
    return (
        <header>
        <div className="inner-header container">
            <div id="logo_header">
                <a href="" id="logo" title="SHOP PET TIN" >Shop Pet Tin</a>  
            </div>   
            <div id="petlogo">
                <a href="#"><img className="logopet" src={petlogo} alt="" /></a>
            </div>          
            <nav>
                <ul id="main-menu">
                    <li>
                         <Link to={`/`} className="active" title="Trang Chủ">
                            <img width={20} height={20} src={petlogo} alt="" /> 
                            <b>Trang Chủ</b>
                        </Link>
                        {/* <a href="#" className="active" title="Trang Chủ"> 
                            <img width={20} height={20} src={petlogo} alt="" /> 
                                <b>Trang Chủ</b>
                        </a> */}
                    </li>  
                    <li>
                        <Link to={`/dogs`} className="active" title="Chó Cảnh">
                            <img width={20} height={20} src={icondog} alt="" /> 
                            <b>Chó Cảnh</b>
                        </Link>
                        {/* <a href="#" className="active" title="Chó Cảnh">
                            <img width={20} height={20} src={icondog} alt="" /> 
                                <b> Chó Cảnh </b> 
                        </a>                          */}
                    </li>
                    <li>
                    <Link to={`/cats`} className="active" title="Mèo Cảnh">
                            <img width={20} height={20} src={iconcat} alt="" /> 
                            <b>Mèo Cảnh</b>
                        </Link>
                        {/* <a href="#" className="active" title="Mèo Cảnh"> 
                            <img width={20} height={20} src={iconcat} alt="" />  
                                <b> Mèo Cảnh</b>
                        </a>  */}
                    </li> 
                    <div className='navphone'>
                        <li>
                            <a href="tel:0969.696.969" className="" title="Phone"> 
                            <FaPhoneAlt className="icon-phone"/>
                                <span>0969.696.969</span>
                            </a> 
                        </li> 
                    </div> 
                    <div className="navsearch">
                        <input className="search" type="Tìm Kiếm: " placeholder="Tìm kiếm…"/> 
                            <FaSearch className="icon-search"/>    
                    </div>  
                    {/* <button id="switch-mode"><MdDarkMode className='darkmode'/></button>                 */}
                </ul>
            </nav>
        </div> 
    </header>
    )
}

export default Navbar;

