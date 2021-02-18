import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">StatStack</li>
          {/* <li>
            <Link to="/user">Home</Link>
          </li> */}
          <li>
            <Link to='/batting'>Batting</Link>
          </li>
          <li>
            <Link to='/fielding'>Fielding</Link>
          </li>
          <li>
            <Link to='/pitching'>Pitching</Link>
          </li>
          <li>
            <Link to='/pastTen'>Past 10</Link>
          </li>
          <li>
            <Link to='/compare'>Compare</Link>
          </li>
          <li>
            <Link to='/postStats'>Add Game Stats</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
