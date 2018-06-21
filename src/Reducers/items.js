

const items = (state = [{
    name: 'Платье-миди с расклешенной юбкой',
    code: '82039-11',
    size: '44',
    color: 'синий',
    price: 2450,
    pic: "Img/Dress_1.png",
    amount: 1,
    id: 0
},
    {name: 'Туфли женские украшенные кружевными вставками',
        code: '13524-01',
        size: '38',
        color: 'черный',
        price: 2450,
        pic: "Img/Sandals.png",
        amount: 1,
        id: 1
    },

    {name: 'Платье-миди',
        code: '75039',
        size: '44',
        color: 'белый',
        price: 2450,
        pic: "Img/WhiteDress.png",
        amount: 1,
        id: 2
},
    {name: 'Платье-миди',
        code: '75039',
        size: '44',
        color: 'белый',
        price: 2450,
        pic: "Img/WhiteDress.png",
        amount: 1,
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
    }
    return state
}

export default items















