import React from 'react';
import { SORTING_STATUSES } from './helpers';

const SelectList = ({ onChange, className }) => {
  return (
    <select id="select" className={className} onChange={onChange}>
      {Object.keys(SORTING_STATUSES).map((key) => {
        return (<option value={key} key={key}>{`${key} sort`}</option>)})
      }
    </select>
  )};
export default SelectList;