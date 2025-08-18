import React, { useState, useEffect } from "react";
import { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { UIIcon } from "../UIIcon";

export const UIHeader: React.FC<UIHeaderProps> = ({
  variant = "div",
  size,
  color,
  as: UIHeader = "header",
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

  function Logo({ children }: { children: React.ReactNode }) {
    return <div className={styles.logo}>{children}</div>;
  }

  function Items({ children }: { children: React.ReactNode }) {
    return <ul className={styles.items}>{children}</ul>;
  }

  function Item({ children }: { children: React.ReactNode }) {
    return <li className={styles.item}>{children}</li>;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <UIIcon variant="github" size="lg" />
          </Link>
        </Item>
        <Item>
          <Link to="/" target="_blank">
            <UIIcon variant="tistory" size="lg" />
          </Link>
        </Item>
        <Item>
          <Link to="/" target="_blank">
            <UIIcon variant="codepen" size="lg" />
          </Link>
        </Item>
      </Items>
    </UIHeader>
  );
};
