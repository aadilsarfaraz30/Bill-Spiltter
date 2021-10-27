import React, { useContext } from 'react';
import './RightComponent.css';
import dollar from '../../assets/icon-dollar.svg';
import { ApiContext } from '../../context/ApiContext';

const RightComponent = () => {
  const { bill, tip, people, custom } = useContext(ApiContext);
  const [billValue, setBillValue] = bill;
  const [tipValue, setTipValue] = tip;
  const [peopleValue, setPeopleValue] = people;
  const [customValue, setCustomValue] = custom;
  const tipValues = tipValue ? tipValue : customValue;
  const tipAmount = billValue * (tipValues / 100);

  const clear = () => {
    setBillValue('');
    setTipValue(0);
    setPeopleValue('');
    setCustomValue('');
  };
  const tipPerPerson = (tipAmount / peopleValue).toFixed(2);
  const totalAmountPerPerson = ((billValue - -tipAmount) / peopleValue).toFixed(
    2,
  );
  return (
    <div className='right-container'>
      <div className='amount'>
        <div className='amount-container'>
          <section className='display'>
            <span className='top'>Tip Amount</span>
            <span className='bottom'>/ person</span>
          </section>
          <section className='amount-display'>
            <span>${peopleValue > 0 ? tipPerPerson : 0.0}</span>
          </section>
        </div>
        <div className='amount-container'>
          <section className='display'>
            <span className='top'>Total</span>
            <span className='bottom'>/ person</span>
          </section>
          <section className='amount-display'>
            <span>${peopleValue > 0 ? totalAmountPerPerson : 0.0}</span>
          </section>
        </div>
      </div>
      <div className='reset-button'>
        <button
          className={billValue === 0 ? 'no-drop' : 'button'}
          onClick={clear}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default RightComponent;
