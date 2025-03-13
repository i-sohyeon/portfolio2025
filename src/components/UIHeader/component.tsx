import React, { useState, useEffect } from 'react';
import { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const classes = [
    styles["ui-header"],
    styles[`ui-header-${variant}`],
    styles[`ui-header-${size}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
      <UIHeader
        className={classes}
        style={{
          top: visible ? '0' : '-102px', 
          left: 0,
          right: 0,
          transition: 'top 0.5s ease-in-out',
          zIndex: 100,
        }}
        {...rest}
    >
      <div>
        {children}
      </div>
    </UIHeader>
  );
};