import React, { useState } from 'react';

function GradeCalculator() {
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [average, setAverage] = useState(null);
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const physicsScore = parseFloat(physics);
    const chemistryScore = parseFloat(chemistry);

    const avg = (physicsScore + chemistryScore) / 2;
    setAverage(avg);

    if (avg >= 8) {
      setGrade('Giỏi');
    } else if (avg >= 6.5) {
      setGrade('Khá');
    } else if (avg >= 5) {
      setGrade('Trung Bình');
    } else {
      setGrade('Yếu');
    }
  };

  return (
    <div>
      <h2>Tính điểm trung bình và xếp loại</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Môn Lý: </label>
          <input
            type="number"
            value={physics}
            onChange={(e) => setPhysics(e.target.value)}
            min="0"
            max="10"
            required
          />
        </div>
        <div>
          <label>Môn Hóa: </label>
          <input
            type="number"
            value={chemistry}
            onChange={(e) => setChemistry(e.target.value)}
            min="0"
            max="10"
            required
          />
        </div>
        <button type="submit">Tính kết quả</button>
      </form>

      {average !== null && (
        <div>
          <h3>Kết quả:</h3>
          <p>Điểm trung bình: {average.toFixed(2)}</p>
          <p>Xếp loại: {grade}</p>
        </div>
      )}
    </div>
  );
}

export default GradeCalculator;














// import React, { useState } from 'react';

// function GreetingFunction() {
//   const [name, setName] = useState('');

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Nhập tên..."
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Xin chào, {name || 'bạn'}!</p>
//     </div>
//   );
// }

// export default GreetingFunction;
