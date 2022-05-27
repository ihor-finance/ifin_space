import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navbarClassname = classNames("navbar", { "navbar navbar--scrolled": isScrolled });

  const linkClassname = (path: string): string => classNames("navbar-menu__text", { 
    "navbar-menu__text navbar-menu__text--highlighted": pathname === path
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 30);
    });
  }, []);

  return (
    <nav className={navbarClassname}>
      <div className="container">
        <div className="navbar-wrapper">
          <h3 className="navbar__logo">
            {"< "}Nikita<span className="navbar__logo--dark">Isay</span>{" />"}
          </h3>
          <ul className="navbar-menu">
            <li className="navbar-menu__route">
              <Link to="/">
                <p className={linkClassname("/")}>Blog</p>
              </Link>
            </li>
            <li className="navbar-menu__route">
              <Link to="/about_me">
                <p className={linkClassname("/about_me")}>About me</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;