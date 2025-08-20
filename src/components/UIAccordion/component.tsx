import React, { useState } from "react";
import { UIAccordionProps } from "./types";
import styles from "./styles.module.scss";

export const Line: React.FC<UIAccordionProps> = ({
  id, 
  title, 
  children, 
  defaultOpen = false,
  variant,
  size,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const classes = [
    styles["ui-acc"],
    styles[`ui-acc-${variant}`],
    styles[`ui-acc-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.accordion} ${classes}`} >
      <h3>
        <button
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={toggleAccordion}
          className="accordion-trigger"
        >
          {title}
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!isOpen}
        className="accordion-panel"
      >
        {children}
      </div>
  </div>
  );
};

const UIAccordion = {
  Line,
}
  

UIAccordion.Line.displayName = "UIAccordion.Line";

export {UIAccordion}