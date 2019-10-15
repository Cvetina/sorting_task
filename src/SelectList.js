import React from 'react';

const SelectList = ({ sortOptions, onChange, className }) => {
  return (
    <select id="select" className={className} onChange={onChange}>
      {Object.keys(sortOptions).map((key) => {
        return (<option value={key} key={key}>{`${key} sort`}</option>)})
      }
    </select>
  )};
export default SelectList;