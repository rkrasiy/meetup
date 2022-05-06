import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation(props) {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header className={`${classes.header} ${!scrolling ? classes.sticky : ''}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? classes.active : ""} 
              to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? classes.active : ""} 
              to="/new-meetup">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? classes.active : ""}
              to="/favoritos">
              My Favorites
                <span className={classes.badge}>{props.favoriteCount}</span>
              </NavLink>
          </li>
          {/* <li>
            <a href="/" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
