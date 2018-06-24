import React from 'react'
import PropTypes from 'prop-types'
import AddingButtons from '../Components/AddingToCartButtons'
import CancelButton from '../Components/cancelButton'

const Item = ({ pic, name, code, size, color, minusButton, amount, plusButton, price, cancelButton}) => (
    <tr>
        <td><img src={pic} /></td>
        <td>
            <ul>
                <li className="ItemName"> {name}</li>
                <li className="ItemCode">Код: {code}</li>
                <li className="ItemSize">Размер: {size}</li>
                <li className="ItemColour">Цвет: {color}</li>
            </ul>
        </td>
        <td>
            <AddingButtons minusButton={minusButton} amount={amount} plusButton={plusButton}/>
        </td>
        <td className="ItemPrice">{price} руб.</td>
        <td className='cancelButton'><CancelButton cancelButton={cancelButton}/></td>
    </tr>
)

Item.propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired
}

export default Item