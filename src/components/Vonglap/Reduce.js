// ReduceExample.js
import React from 'react';
import { getData } from './data';

function ReduceExample() {
  const counts = getData().reduce((acc, item) => {
    acc[item.loai] = (acc[item.loai] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h3>Dùng reduce(): Đếm số sản phẩm theo loại</h3>
      <ul>
        {Object.entries(counts).map(([loai, count], index) => (
          <li key={index}>{loai}: {count} sản phẩm</li>
        ))}
      </ul>
    </div>
  );
}

export default ReduceExample;
