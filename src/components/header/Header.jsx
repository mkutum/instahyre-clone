import React from 'react';
import "./style.scss";
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <ContentWrapper>
                <div className="logo">
                    <Link to={"/"}>Instahyre</Link>
                </div>
                <ul className='menuItems'>
                    <li className='menuItem'>
                        <Link to={"/premium"}>GO PREMIUM</Link>
                    </li>
                    <li className='menuItem'>
                        <Link to={"/interview"}>INTERVIEW PREP</Link>

                    </li>
                    <li className='menuItem'>
                        <Link to={"/resume"}>RESUME BUILDER</Link>

                    </li>
                    <li className='menuItem'>
                        <Link to={"/opportunities"}>
                            OPPORTUNITIES
                        </Link>
                    </li>
                    <li className='menuItem'>
                        <Link to={"activity"}>
                            ACTIVITY
                        </Link>

                    </li>
                    <li className='menuItem'>
                        <Link to={"/inbox"}>
                            INBOX
                        </Link>

                    </li>
                    <li className='menuItem'>
                        <Link to={"/profile"}>
                            PROFILE
                        </Link>

                    </li>
                </ul>
            </ContentWrapper>
        </header>
    )
}

export default Header;