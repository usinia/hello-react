import React from "react";
import styles from "./Footer.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

const Footer = () =>
  <footer className={cx("footer")}>
    <Link to="/" className={cx("brand")}>
      reactblog
    </Link>
    <div className={cx("admin-login")}>관리자 로그인</div>
  </footer>;

export default Footer;
