import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="background-image-2">
            <nav className="header">
                <Link to="/">
                    {/* in below code, used require to import images from images folder */}
                    <img src={require(`../images/logo-4.png`)} />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
