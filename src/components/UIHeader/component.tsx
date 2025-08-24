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

  function Logo({ as: Component = "h1", children }: { as?: React.ElementType; children: React.ReactNode }) {
    return <Component className={styles.logo}>{children}</Component>;
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
        top: visible ? "0" : "-102px",
        transition: "top 0.5s ease-in-out",
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
