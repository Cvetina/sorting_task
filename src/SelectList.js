import React from 'react';
import SORTING_STATUSES from './enums';

const SelectList = ({ onChange, className }) => {
  return (
    <select id="select" className={className} onChange={onChange}>
      {Object.keys(SORTING_STATUSES).map((item) => {
        return (<option value={item} key={item}>{`${item} sort`}</option>)})
      }
    </select>
  )};
export default SelectList;