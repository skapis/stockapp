import React from 'react';
import { useState } from 'react';
import PortfolioCurrency from '../functions/currency';

const currencies = require('../data/currencies.json').currencies

const Select = () => {
    const [currency, setCurrency] = useState(PortfolioCurrency.getCurrency())

    const change = event => {
        PortfolioCurrency.setCurrency(event.target.value)
        setCurrency(event.target.value)
        window.location.reload()
    }

    return (
        <div>
            <select 
                id="currencies" 
                className='bg-white border rounded-lg border-gray-300 block w-full px-2 py-1'
                value={currency}
                onChange={change}>
                {currencies.map((item) => (
                    <option key={item.symbol} value={item.code}>{item.code}</option>
                ))}
            </select>
        </div>
    )
}

export default Select