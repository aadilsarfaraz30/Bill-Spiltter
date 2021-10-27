import React, { useContext, useState } from 'react';
import '../bill/Bill.css';
import person from '../../../assets/icon-person.svg';
import { ApiContext } from '../../../context/ApiContext';
const People = () => {
  const [border, setBorder] = useState(false);
  const { people, bill, tip } = useContext(ApiContext);
  const [input, setInput] = people;
  const [billValue, setBillValue] = bill;
  const [tipValue, setTipValue] = tip;
  return (
    <div className='input-container'>
      <div className='subTitles'>
        <span id='people'>Number of People</span>
        {billValue > 0 && input < 1 ? (
          <span style={{ color: 'red' }}>Can't be zero</span>
        ) : null}
      </div>
      {
        <form
          className='input-component'
          type='submit'
          onClick={() => setBorder(!border)}
          style={{
            border:
              billValue > 0 && input < 1 && border === false
                ? '1px solid red'
                : '1px solid hsl(183, 100%, 15%)',
          }}>
          <div className='input-bar'>
            <span>
              <img src={person} alt='person' />
            </span>
            <input
              type='text'
              placeholder='0'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
      }
    </div>
  );
};

export default People;
