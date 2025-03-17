import React, { useState, useEffect } from "react";
import { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const UIHeader: React.FC<UIHeaderProps> = ({
  variant = "div",
  size,
  color,
  as: UIHeader = "div",
  className,
  children,
  ...rest
}) => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 500) {
      setVisible(false);
    } else if (currentScrollPos < 500) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = styled.div`
    color: #3f89e6;
  `;

  const Items = styled.ul`
    display: flex;
  `;
  const Item = styled.li``;

  const classes = [
    styles["ui-header"],
    styles[`ui-header-${variant}`],
    styles[`ui-header-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIHeader
      className={classes}
      style={{
        display: "flex",
        justifyContent: "space-between",
        top: visible ? "0" : "-102px",
        left: 0,
        right: 0,
        transition: "top 0.5s ease-in-out",
        zIndex: 100,
        fontFamily: "Bagel fat one",
        fontSize: "30px",
      }}
      {...rest}>
      <Logo>
        <Link to="/">{children}</Link>
      </Logo>
      <Items>
        <Item>
          <Link to="https://github.com/i-sohyeon" target="_blank">
            github
          </Link>
        </Item>
        <Item>
          <Link to="/">tistory</Link>
        </Item>
      </Items>
      {/* <Link to="/"></Link> */}
    </UIHeader>
  );
};
