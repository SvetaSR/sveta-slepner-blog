import React from "react";
import { FooterWrapper, Copyrights, RightSlot } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Copyrights>SvetaSlepner.com All Rights Reserved ©</Copyrights>
      <RightSlot>
        <a
          href="https://twitter.com/SlepnerSveta"
          title="twitter"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dq6tqnvbh/image/upload/w_20/v1675531102/blog/twitter.png"
            alt="twitter account"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sveta-slepner-0b5b2b8b/"
          title="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dq6tqnvbh/image/upload/w_20/v1675531102/blog/linkedin.png"
            alt="linkedin account"
          />
        </a>
      </RightSlot>
    </FooterWrapper>
  );
};
