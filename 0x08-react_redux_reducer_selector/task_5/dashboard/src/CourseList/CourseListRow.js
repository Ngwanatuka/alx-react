import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  // Define inline styles
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : (isChecked ? '#e6e4e4' : '#f5f5f5ab'),
  };

  const rowCheckedStyle = {
    backgroundColor: '#e6e4e4',
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr style={isChecked ? { ...rowStyle, ...rowCheckedStyle } : rowStyle}>
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
            {textFirstCell !== null && (
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            )}
            {textFirstCell}
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
  textFirstCell: '',
  textSecondCell: null,
};
