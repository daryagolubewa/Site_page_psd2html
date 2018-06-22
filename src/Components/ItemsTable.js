import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Components/Item'

const ItemsTable = ({items, plusItem , minusItem, removeItem}) => (
    items.map(item =>
        <Item
            key={item.id}
            {...item}
            minusButton={() => minusItem(item.id)}
            plusButton={() => plusItem(item.id)}
            cancelButton={() => removeItem(item.id)}
        />
    )
)

export default ItemsTable
