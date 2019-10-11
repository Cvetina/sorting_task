import React from 'react';

const DataList = ({ data, containerClass, itemClass }) => {
  return (
    <ol className={containerClass}>
        {data.map((item) => {
          return (
            <li key={item.title}>
              <span className={itemClass}>{item.title}</span>
              <span className={itemClass}><b>Stars: </b> {item.stars}</span>
            </li>
          )})
        }
    </ol>
  )};
export default DataList;