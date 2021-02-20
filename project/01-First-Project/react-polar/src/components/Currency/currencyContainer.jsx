import React from 'react';
import Currency from './currency';
import { connect } from 'react-redux';
import { showAC, hideAC, setCurrenciesAC } from '../../redux/currencyReducer';

let mapStateToProps = (state) => {
    return {
        currencies: state.currencyPage.currencies
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        show: (currencyId) => {
            dispatch(showAC(currencyId));
        },
        hide: (currencyId) => {
            dispatch(hideAC(currencyId));
        },
        setCurrencies: (currencies) => {
            dispatch(setCurrenciesAC(currencies));
        }
    }
}

const CurrencyContainer = connect(mapStateToProps, mapDispatchToProps)(Currency);

export default CurrencyContainer;