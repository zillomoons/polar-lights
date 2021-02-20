import React from 'react';

let Currency = (props) => {
    return <div>
        {/* <span>
            <label htmlFor="sum"></label>
            <input type="text" name="sum" id="sum" />
            <select name="currency" id="currency">
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
                <option value="cny">CNY</option>
            </select>

        </span>
        <span>
            <label htmlFor="sum"></label>
            <input type="text" name="sum" id="sum" />
            <select name="currency" id="currency">
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
                <option value="cny">CNY</option>
            </select>
        </span>
        <span><button>Convert</button></span> */}

        {
            props.currencies.map(curr => <div>
                <label htmlFor="sum"></label>
                <input type="text" name="sum" id="sum" placeholder={curr.symbol} />
                <select name="currency" id="currency">
                    <option value="usd">{curr.name}</option>
                </select>
                <button>Select</button>
            </div>

            )
        }

    </div>
}

export default Currency;