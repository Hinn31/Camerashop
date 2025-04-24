import React, { useState } from 'react';

function GreetingFunction() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Xin chào, {name || 'bạn'}!</p>
    </div>
  );
}

export default GreetingFunction;
