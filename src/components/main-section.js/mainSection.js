import React, { useRef, useState, useEffect } from "react";

const Input = ({
  setConvertFrom,
  setConvertTo,
  currency,
  setValue,
  output,
}) => {
  const dropdownRef = useRef();

  useEffect(() => {
    changeDropdown();
  }, []);

  const changeDropdown = () => {
    setConvertFrom && setConvertFrom(dropdownRef.current.value);
    setConvertTo && setConvertTo(dropdownRef.current.value);
  };

  const changeValue = (e) => {
    setValue && setValue(e.target.value);
  };

  return (
    <div>
      <input type="number" onChange={changeValue} value={output && output} />
      <select name="select" ref={dropdownRef} onChange={changeDropdown}>
        <option value={1}>UAH</option>
        {currency.map((item, index) => {
          return (
            <option key={index} value={item.buy}>
              {item.ccy}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const MainSection = ({ items = [] }) => {
  const [convertFrom, setConvertFrom] = useState();
  const [convertTo, setConvertTo] = useState();
  const [value, setValue] = useState();
  const [output, setOutput] = useState();
//   const rate = currenciesRates.find(n => n.ccy === convertTo);

  const curr = items.slice(0, 2);

  const currenciesRates = curr.map((item, index) => {
    return { ccy: item.ccy, buy: 1 / item.buy };
  });
  currenciesRates.unshift({ ccy: "UAH", rate: 1 });

  useEffect(() => {
    setOutput(value * convertFrom);
  }, [value]);

  return (
    <>
      mainSection
      <Input
        setConvertFrom={setConvertFrom}
        setValue={setValue}
        currency={curr}
      />
      <Input setConvertTo={setConvertTo} currency={curr} output={output} />
    </>
  );
};

export default MainSection;
