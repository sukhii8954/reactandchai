import { useState } from "react";
import {InputBox} from "./Components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  //  getting keys from data of currencyinfo which is unique like :- usd , inr etc
  const options = Object.keys(currencyInfo);

  //  onclick will apply this method
  // setConverted(amount * currencyInfo[to])

  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted(amount); // amount that user given will swap in converted amount
    setAmount(converted); //the amount that is converted will become the amount entered by user
  };
  
  const convert = () => {
    if (currencyInfo[to]) {
      setConverted(amount * currencyInfo[to]);
    } else {
      console.error("Conversion rate not available");
    }
  };


  const handleAmountChange = (newAmount) => {
    // Clear `0` if it's the first character
    const numericValue = parseFloat(newAmount);
    setAmount(isNaN(numericValue) ? "" : numericValue);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
               label="From" 
              amount = {amount}
              currencyOption = {options}
              // this is correct line , mistake is there in video
              oncurrencyChange={ (currency)=> setFrom(currency)}
              selectCurrency= {from}
              onAmountChange= {handleAmountChange}
               />
            </div>
            <div className="relative w-full h-0.5">
              <button
                 onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                 swap
              </button>



            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
               amount={converted} 
               currencyOption={options}
               oncurrencyChange={(currency) => setTo(currency)}
               selectCurrency={to}
                amountDisable
               />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
                 Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
