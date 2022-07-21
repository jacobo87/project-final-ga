import "./footer.css";
import { useContext } from "react";
import { numeroAleatorio } from "../../Utils/utils";

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from "../../AppContext";

const Footer = (props) => {
  const context = useContext(AppContext);

  const socialIcons = [
    {
      name: "Facebook",
      src: "http://assets.stickpng.com/thumbs/60fea6c83d624000048712b7.png",
    },
    {
      name: "Twitter",
      src: "https://icon-library.com/images/twitter-white-icon/twitter-white-icon-19.jpg",
    },
    {
      name: "Instagram",
      src: "https://www.citypng.com/public/uploads/preview/-51609193615decnmgwyz7.png",
    },
    {
      name: "Google",
      src: "https://icon-library.com/images/google-plus-icon-white-png/google-plus-icon-white-png-5.jpg",
    },
  ];

  const footerText = [
    {
      title: context.language.FOOTER_TEXT[0].title,
      content: context.language.FOOTER_TEXT[0].content,
      conten2: context.language.FOOTER_TEXT[0].content2,
      conten3: context.language.FOOTER_TEXT[0].content3,
    },
    {
      title: context.language.FOOTER_TEXT[1].title,
      content: context.language.FOOTER_TEXT[1].content,
      conten2: context.language.FOOTER_TEXT[1].content2,
      conten3: context.language.FOOTER_TEXT[1].content3,
    },
    {
      title: context.language.FOOTER_TEXT[2].title,
      content: context.language.FOOTER_TEXT[2].content,
      conten2: context.language.FOOTER_TEXT[2].content2,
      conten3: context.language.FOOTER_TEXT[2].content3,
    },
  ];

  return (
    <footer>
      <div className="container-footer">
        <div className="row">
          <div className="col-md-12">
            {footerText.map((item, index) => (
              <>
                <div className="about">
                  <h3 key={numeroAleatorio}>
                    {context.language.FOOTER_TEXT[index].title}
                  </h3>
                  <ul>
                    <li key={numeroAleatorio}>
                      {context.language.FOOTER_TEXT[index].content}
                    </li>
                    <li key={numeroAleatorio}>
                      {context.language.FOOTER_TEXT[index].content2}
                    </li>
                    <li key={numeroAleatorio}>
                      {context.language.FOOTER_TEXT[index].content3}
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </div>
          <div className="footer-logo">
            <a href="/">
              <img src="./Resources/logo_white.png" alt="logo" />
            </a>
            <div className="footer-social">
              {socialIcons.map((icon) => (
                <a href="/" key={icon.name}>
                  <img src={icon.src} alt={icon.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>
          {context.language.FOOTER_COPYRIGHT}{" "}
          <a
            href="https://github.com/Lyanna666"
            target="_blank"
            rel="noreferrer"
          >
            Andrea Gonzalez
          </a>{" "}
          &#38;{" "}
          <a
            href="https://github.com/jacobo87"
            target="_blank"
            rel="noreferrer"
          >
            Jacobo Azmani
          </a>
          .
        </p>
      </div>
      <div className="made">
        <p>
          {context.language.FOOTER_MADE} <span>&#10084;</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;