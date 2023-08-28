import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";

const EmployerLinks = () => {
    return (
        <div className='employer-links'>
            <ul>
                <li className='link-website'>
                    <Link to="/resume">
                        <RiExternalLinkFill />
                    </Link>
                </li>
                <li>
                    <Link to="/">

                        <IoLogoLinkedin />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FaTwitterSquare />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <AiFillFacebook />
                    </Link>
                </li>
                <li>
                    <Link>
                        <TiSocialInstagram />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default EmployerLinks;