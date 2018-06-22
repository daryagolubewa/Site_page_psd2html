import React from 'react'
import PropTypes from 'prop-types'


const GoodsNumber = ({productNumber}) => (
    <ul>
        <li>В корзине: </li>
        <li> {productNumber} товара </li>
    </ul>
)


GoodsNumber.propTypes = {
    productNumber: PropTypes.number.isRequired
}

export default GoodsNumber


