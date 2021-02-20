const SHOW = 'SHOW'; // creating action type
const HIDE = 'HIDE';
const SET_CURRENCIES = 'SET_CURRENCIES';

let initialState = {
    currencies: [
        { id: 1, name: 'USD', symbol: '$', show: true },
        { id: 2, name: 'RUB', symbol: '₽', show: false },
        { id: 3, name: 'GBP', symbol: '£', show: false },
        { id: 4, name: 'EUR', symbol: '€', show: false },
        { id: 5, name: 'CNY', symbol: '¥', show: false }
    ]
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                currencies: state.currencies.map(curr => {
                    if (curr.id === action.currencyId) {
                        return { ...curr, show: true };
                    }
                    return curr;
                })
            }
        case HIDE:
            return {
                ...state,
                currencies: state.currencies.map(curr => {
                    if (curr.id === action.currencyId) {
                        return { ...curr, show: false };
                    }
                    return curr;
                })
            }
        case SET_CURRENCIES:
            return {
                ...state,
                currencies: [...state.currencies, ...action.currencies]
            }
        default:
            return state;
    }
}

export const showAC = (currencyId) => ({ type: SHOW, currencyId }); // adding actionCreator
export const hideAC = (currencyId) => ({ type: HIDE, currencyId });
export const setCurrenciesAC = (currencies) => ({ type: SET_CURRENCIES, currencies });

export default currencyReducer;