

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    amount,
    id
})

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    amount,
    id
})

export const removeItem = (id) => ({
type: 'REMOVE_ITEM',
    id
})

export const addPromocode = (Code) => ({
    type: 'ADD_PROMOCODE',
    Code
})

