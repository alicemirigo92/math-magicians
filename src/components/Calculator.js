import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

function Calculator() {
  const [results, setRes] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onKeyClick = (e) => {
    setRes(calculate(results, e.target.textContent));
  };

  return (
    <div className="container">
      <input
        className="screen"
        type="text"
        value={results.next || results.total || '0'}
      />
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        AC
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        +/-
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        %
      </button>
      <button type="button" className="symb" onClick={onKeyClick}>
        ÷
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        7
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        8
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        9
      </button>
      <button type="button" className="symb" onClick={onKeyClick}>
        *
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        4
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        5
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        6
      </button>
      <button type="button" className="symb" onClick={onKeyClick}>
        +
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        1
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        2
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        3
      </button>
      <button type="button" className="symb" onClick={onKeyClick}>
        -
      </button>
      <button type="button" className="zero" onClick={onKeyClick}>
        0
      </button>
      <button type="button" className="calc-Btns" onClick={onKeyClick}>
        .
      </button>
      <button type="button" className="symb" onClick={onKeyClick}>
        =
      </button>
    </div>
  );
}

export default Calculator;
