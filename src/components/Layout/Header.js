import React from "react";
import { Link } from "gatsby";
import { HeaderWrapper, RightSlot } from "./Header.styles";
import DayNightToggle from "react-day-and-night-toggle";

export const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <HeaderWrapper>
      <nav>
        <Link to="/" title="Blog">
          Blog
        </Link>
        <Link to="/about" title="About">
          About
        </Link>
      </nav>
      <RightSlot>
        <a href="https://svetaslepner.com/rss.xml" title="RSS feed" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/dq6tqnvbh/image/upload/w_25/v1675529799/blog/social_style_3_rss-512-1.png"
            alt="rss feed"
          />
        </a>
        <DayNightToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={24}
        />
      </RightSlot>
    </HeaderWrapper>
  );
};
