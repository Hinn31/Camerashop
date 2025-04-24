import React, { useState } from 'react';

export function Counter_function() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <button onClick={() => setCount(initialValue)}>Reset</button>
        </div>
    );
}