import { useState } from "react";
import "../index.css";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo"
import bg from '../Assets/background.jpg'

function CurrencyConverter() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => setConvertedAmount(Number(amount * currencyInfo[to]).toFixed(2))

  return (
    <div>

      <div className='center fade space-y-2 sm:space-y-3'>
        <h1 className="text-center">Currency Converter</h1>
        <p>A versatile tool enabling seamless conversion of monetary values between different currencies, facilitating easy comparison and transactions in global markets.</p>
      </div>

      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gray-700 bg-cover fadeIn" style={{
        backgroundImage: `url('${bg}')`,
      }}>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <InputBox label="From" amount={amount} onAmountChange={(amount) => setAmount(amount)} currencyOptions={options} onCurrencyChange={(v) => setFrom(v)} selectCurrency={from} />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
export default CurrencyConverter