import React, { useContext, useState } from 'react';
import { ApiContext } from '../../../context/ApiContext';
import './Tips.css';
const Tips = () => {
  const { tip, custom } = useContext(ApiContext);
  const [value, setValue] = tip;
  const [enable, setEnable] = useState(false);
  const [customValue, setCustomValue] = custom;

  const buttonClicked = (num) => {
    setValue(num);
    setEnable(!enable);
    setCustomValue('');
  };

  return (
    <div className='tips-container'>
      <span className='tip-title'>Select Tip %</span>
      <div className='tip-block'>
        <div className='tip-block-main'>
          <button
            className={enable && value === 5 ? 'tip-enable' : 'tip'}
            onClick={() => buttonClicked(5)}>
            5%
          </button>
          <button
            className={enable && value === 10 ? 'tip-enable' : 'tip'}
            onClick={() => buttonClicked(10)}>
            10%
          </button>
          <button
            className={enable && value === 15 ? 'tip-enable' : 'tip'}
            onClick={() => buttonClicked(15)}>
            15%
          </button>
          <button
            className={enable && value === 25 ? 'tip-enable' : 'tip'}
            onClick={() => buttonClicked(25)}>
            25%
          </button>
          <button
            className={enable && value === 50 ? 'tip-enable' : 'tip'}
            onClick={() => buttonClicked(50)}>
            50%
          </button>
          <form className='tip custom'>
            {/* <span>Custom</span> */}
            <input
              placeholder='Custom'
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              onClick={(e) => setCustomValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tips;
