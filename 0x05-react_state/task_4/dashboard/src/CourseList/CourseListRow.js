import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Define inline styles
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : isChecked ? '#e6e4e4' : '#f5f5f5ab'
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            {textFirstCell === null ? (
              <input type="checkbox" checked={isChecked} onChange={handleChange} />
            ) : (
              textFirstCell
            )}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: null,
  textSecondCell: null,
};
