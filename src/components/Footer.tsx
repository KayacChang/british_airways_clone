import React, { Fragment } from "react";
import styles from "./Footer.module.scss";

const HOST = `https://www.britishairways.com`;
const socials = [
  "/assets/images/global/site/icons/instagram_button_50x50.png",
  "/assets/images/global/site/icons/facebook_Button_50x50.png",
  "/assets/images/global/site/icons/twitter_Button_50x50.png",
  "/assets/images/global/site/icons/linkedin-button-50x50.png",
].map((link) => HOST + link);

const icon1 = HOST + "/apps/ba-home/images/ba_speedmarque.png";
const icon2 = HOST + "/cms/global/assets/images/site/icon/oneworldlrg.png";

const list = [
  "Help and contacts",
  "Accessibility and site help",
  "Website security",
  "Privacy policy",
  "Legal",
  "About BA",
  "Media Centre",
  "Customer Commitment",
  "Careers",
  "Corporate Responsibility",
  "Modern Slavery statement",
  "Iberia.com",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        {list.map((link, index) => (
          <Fragment key={link}>
            <a href="/">{link}</a>
            {index !== list.length - 1 && <span>|</span>}
          </Fragment>
        ))}
      </div>

      <div className={styles.socials}>
        {socials.map((link) => (
          <img src={link} alt={link} />
        ))}
      </div>

      <div>
        <span className={styles.copyright}>
          © British Airways - all rights reserved
        </span>
      </div>

      <div className={styles.icons}>
        <img className={styles.icon1} src={icon1} alt={icon1} />
        <img className={styles.icon2} src={icon2} alt={icon2} />
      </div>
    </footer>
  );
}
