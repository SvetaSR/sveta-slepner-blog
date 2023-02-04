import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./Header.styles";
import DayNightToggle from "react-day-and-night-toggle";

export const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Wrapper>
      <nav>
        <Link to="/" title="Blog">
        Blog
        </Link>
        <Link to="/about-me" title="About me">
          About me
        </Link>
      </nav>
      <div>
        <DayNightToggle
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={24}
        />
      </div>
    </Wrapper>
  );
};
