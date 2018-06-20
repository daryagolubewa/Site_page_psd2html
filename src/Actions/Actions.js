
let ItemId = 0;
export const addItem = (ItemName, ItemCode, ItemSize, ItemColor, ItemPrice, ItemPic) => ({
    type: 'ADD_ITEM',
    ItemName,
    ItemCode,
    ItemSize,
    ItemColor,
    ItemPrice,
    ItemPic,
    id: ++ItemId
})

export const removeItem = (ItemName, ItemCode, ItemSize, ItemColor, ItemPrice, ItemPic) => ({
    type: 'REMOVE_ITEM',
    ItemName,
    ItemCode,
    ItemSize,
    ItemColor,
    ItemPrice,
    ItemPic,
    id: ++ItemId
})

export const addPromocode = (Code) => ({
    type: 'ADD_PROMOCODE',
    Code
})