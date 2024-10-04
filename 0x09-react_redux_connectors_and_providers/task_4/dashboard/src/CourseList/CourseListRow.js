import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const rowBackColor = { backgroundColor: "#f5f5f5ab" };
  const headerBackColor = { backgroundColor: "#deb5b545" };

  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(!checked);
  };

  return (
    <tr
      style={rowBackColor}
      className={checked ? css(rowsStyles.rowChecked) : ""}
    >
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} style={headerBackColor} className={css(styles.th)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerBackColor} className={css(styles.th)}>
              {textFirstCell}
            </th>
            <th style={headerBackColor} className={css(styles.th)}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// defaultProps: No longer supported
// CourseListRow.defaultProps = {
//     isHeader: false,
//     textSecondCell: null
// }

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },
  td: {
    width: "80%",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;
