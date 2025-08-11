import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0); // [0, f]

    const increment


  return (
    <div>
      <button>Увеличить на 1</button>
      <button>Увеличить на 5</button>
      <button>Сбросить</button>
    </div>

    <h2>{count}</h2>
  );
 
}


export default Counter;



// Задание 1: Счетчик +1, +5, сброс
// Цель: создать 3 кнопки, которые увеличивают значение на 1, на 5 и сбрасывают до 0.
// Добавь три кнопки:
// 1. Увеличить на 1
// 2. Увеличить на 5
// 3. Сбросить

