import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [billValue, setBillValue] = useState(null);
  const [peopleValue, setPeopleValue] = useState(null);
  const [tipValue, setTipValue] = useState(null);
  const [customValue, setCustomValue] = useState(null);
  return (
    <ApiContext.Provider
      value={{
        bill: [billValue, setBillValue],
        people: [peopleValue, setPeopleValue],
        tip: [tipValue, setTipValue],
        custom: [customValue, setCustomValue],
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
