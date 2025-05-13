
// FilterExample.js
import React from 'react';
import { getData } from './data';

function FilterExample() {
  const filtered = getData().filter(item => item.loai === "LUMIX DMC-G2");

  return (
    <div>
      <h3>Dùng filter(): Chỉ hiển thị LUMIX DMC-G2</h3>
      <ul>
        {filtered.map((cam, index) => (
          <li key={index}>
            <img src={cam.image} alt={cam.name} width="100" />
            <p>{cam.name} - {cam.loai}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterExample;
