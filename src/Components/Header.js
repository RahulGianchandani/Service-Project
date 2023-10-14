import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
const Header = () => {
    const token = localStorage.getItem('token');
    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 20 || document.body.clientWidth < 978 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('resize', changeNavBg);
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }


    }, [])

    const location = useLocation();
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (
        <nav class={`navbar navbar-expand-lg header ${navBg ? "sticky" : ""} max-sm:py-0 bg-black  `}>
            <div class="container-fluid px-64 py-0">
                <div id='imgDiv' className='navbar-brand py-0 h-[70px] w-[70px]'>
                    <NavLink
                        to="/"
                        className={" text-decoration-none "}
                    >
                        <img src={"https://source.unsplash.com/random/70x70/?logo"} className='inline rounded-full' />
                    </NavLink>

                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu color='#3385d7' />
                </button>
                <div class="collapse navbar-collapse justify-end " id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ">
                        <NavLink
                            to="/"
                            className={` text-decoration-none fw-bold text-white ${location.pathname === "/home" ? "active" : ""}`}
                        >
                            Home
                        </NavLink>
                        {(location.pathname === "/" || location.pathname === "/home") && <> <span
                            onClick={() => window.location.replace("/#aboutSec")}
                            className={" text-decoration-none text-white text-sm cursor-pointer ms-lg-5 fw-bold"}
                        >
                            About Us
                        </span>
                            <span
                                onClick={() => window.location.replace("/#whatwedoSec")}
                                className={" text-decoration-none text-white text-sm cursor-pointer ms-lg-5 fw-bold"}
                            >
                                What We Do
                            </span>
                            <span
                                onClick={() => window.location.replace("/#qualitySec")}
                                className={" text-decoration-none text-white text-sm cursor-pointer ms-lg-5 fw-bold"}
                            >
                                Quality
                            </span>
                        </>}

                        <NavLink
                            to="/book-service"
                            className={" text-decoration-none text-white ms-lg-5 fw-bold"}
                        >
                            Book Services
                        </NavLink>
                        {!token === "admin" &&
                            <NavLink
                                to="/admin-login"
                                className={" text-decoration-none text-white ms-lg-5 fw-bold"}
                            >
                                Admin
                            </NavLink>
                        }
                        {/* {token === "admin" && */}
                            <NavLink
                                to="/admin-dashboard"
                                className={" text-decoration-none text-white ms-lg-5 fw-bold"}
                            >
                                Dashboard
                            </NavLink>
                        {/* } */}
                        {token === "admin" &&
                            <span className='text-sm cursor-pointer ms-lg-5 fw-bold text-white' onClick={logout}> Logout</span>
                        }

                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Header