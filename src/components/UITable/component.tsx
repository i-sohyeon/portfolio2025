import { UITableProps,  } from "./types";
import styles from "./styles.module.scss";

export const Default: React.FC<UITableProps> = ({
  color,
  className,
  children,

  ...rest
}) => {
  const classes = [
    styles["ui-table"],
 
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <table className={classes} style={{}} {...rest}>
  
    </table>
  );
};

const UITable = {
  Default,
};

UITable.Default.displayName = "UITable.Default";

export { UITable };
