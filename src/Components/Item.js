import React from 'react'
import PropTypes from 'prop-types'
import AddingButtons from '../Components/AddingToCartButtons'
import cancelButton from '../Components/cancelButton'

const Item = ({ pic, name, code, size, color, minusButton, amount, plusButton, price, cancelButton}) => (
    <tr>
        <td><img src={pic} /></td>
        <td>
            <ul>
                <li class="ItemName"> {name}</li>
                <li class="ItemCode">Код: {code}</li>
                <li class="ItemSize">Размер: {size}</li>
                <li class="ItemColour">Цвет: {color}</li>
            </ul>
        </td>
        <td>
            <AddingButtons minusButton={minusButton} amount={amount} plusButton={plusButton}/>
        </td>
        <td class="ItemPrice">{price} руб.</td>
        <td><cancelButton cancelButton={cancelButton}/></td>
    </tr>
)

Item.propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired,
}

export default Item