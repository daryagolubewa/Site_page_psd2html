

const items = (state = [{
    name: 'Платье-миди с расклешенной юбкой',
    code: '82039-11',
    size: '44',
    color: 'синий',
    amount: 1,
    price: 2450,
    pic: "Img/Dress_1.png",
    id: 0
},
    {name: 'Туфли женские украшенные кружевными вставками',
        code: '13524-01',
        size: '38',
        color: 'черный',
        amount: 1,
        price: 2450,
        pic: "Img/Sandals.png",
        id: 1
    },

    {name: 'Платье-миди',
        code: '75039',
        size: '44',
        color: 'белый',
        amount: 1,
        price: 2450,
        pic: "Img/WhiteDress.png",
        id: 2
},
    {name: 'Платье-миди',
        code: '75039',
        size: '44',
        color: 'белый',
        amount: 1,
        price: 2450,
        pic: "Img/WhiteDress.png",
        id: 3
    }], action) => {
    switch (action.type) {
        case 'PLUS_ITEM':
            return state.map(item =>
                (item.id === action.id)
            ? {...item, amount: item.amount + 1} : item
            )
        case 'MINUS_ITEM':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, amount: item.amount - 1} : item
            )
        case 'REMOVE_ITEM':
            return state.filter(item =>
                (item.id !== action.id)

            )
        default:
            return state
    }
    return state
}

export default items















