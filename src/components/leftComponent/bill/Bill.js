import React, { useContext, useState } from 'react';
import './Bill.css';
import dollar from '../../../assets/icon-dollar.svg';
import { ApiContext } from '../../../context/ApiContext';
const Bill = () => {
  const [border, setBorder] = useState(false);
  const { bill } = useContext(ApiContext);
  const [input, setInput] = bill;
  return (
    <div className='input-container'>
      <span>Bill</span>
      <form
        className='input-component'
        type='submit'
        onClick={() => setBorder(!border)}
        style={{ border: border ? '1px solid hsl(183, 100%, 15%)' : 'none' }}>
        <div className='input-bar'>
          <span>
            <img src={dollar} alt='$' />
          </span>
          <input
            type='text'
            placeholder='0'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Bill;
