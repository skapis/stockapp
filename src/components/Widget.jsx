import React from 'react'

const Widget = ({title, value, prc, currency}) => {
  
  return (
    <div className="min-w-0 rounded-lg shadow-lg overflow-hidden bg-white ">
    <div className="p-4 flex items-center">
      <div>
        <p className="mb-2 text-sm font-semibold text-black">{title}</p>
        { title === "Gain/Loss" ?
          <p className={`text-lg font-semibold ${value < 0  ? 'text-red-600' : 'text-green-600'}`}>{value} {currency} ({prc} %)</p>

          :
          <p className="text-lg font-semibold text-black">{value} {currency}</p>
        }
      </div>
    </div>
  </div>
  )
}

export default Widget