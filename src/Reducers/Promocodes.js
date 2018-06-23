const promocodes = (state = {
    availableCodes: {
        '123456': 1800
    },
    activeCode: null

}, action) => {
    switch (action.type) {
        case 'ADD_PROMOCODE':
            if (typeof state.availableCodes[action.code] !== 'undefined') {
                return {...state, activeCode: action.code}

            }
    }
    return state
}

export default promocodes

