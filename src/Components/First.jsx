import React, { useState } from 'react';

const First = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="card p-3 my-3">
      <h3>El número del contador es: {counter}</h3>
      <button 
        type="button" 
        className="btn btn-primary mt-2" 
        onClick={() => setCounter(counter + 1)}
      >
        Sumar contador
      </button>
    </div>
  );
}

export default First;
