import { UITableProps } from "./types";
import styles from "./styles.module.scss";

export const Default = <T,>({
  columns,
  rows,
  className,
  rowKey,
  ...rest
}: UITableProps<T>) => {
  const classes = [
    styles["ui-table"],
    className,
  ].filter(Boolean).join(" ");

  return (
    <table className={classes} {...rest}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowKey ? rowKey(row, rowIndex) : rowIndex}>
            {columns.map(col => (
              <td key={String(col.key)} className={col.className}>
                {col.render
                  ? col.render(row[col.key as keyof T], row, rowIndex)
                  : (row[col.key as keyof T] as React.ReactNode)
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

(Default as React.FC).displayName = "UITable.Default";

const UITable = {
  Default,
};

export { UITable };
