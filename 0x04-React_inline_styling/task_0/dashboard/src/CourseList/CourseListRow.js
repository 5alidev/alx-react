import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader=false, textFirstCell, textSecondCell=null}) => {

    const rowBackColor = {backgroundColor: '#f5f5f5ab'};
    const headerBackColor = {backgroundColor: '#deb5b545'};
    return (
        <tr style={rowBackColor}>
            {isHeader?
                (textSecondCell === null ? (<th colSpan={2} style={headerBackColor}>{textFirstCell}</th>)
                    : (
                        <>
                            <th style={headerBackColor} >{textFirstCell}</th>
                            <th style={headerBackColor} >{textSecondCell}</th>
                        </>
                    )
                )
                : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )
            }
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

// defaultProps: No longer supported
// CourseListRow.defaultProps = {
//     isHeader: false,
//     textSecondCell: null
// }

export default CourseListRow;