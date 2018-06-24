
import React from 'react'
import PropTypes from 'prop-types'

const AddingButtons = ({plusButton, amount, minusButton}) => (
    <div className='likeButtons'>
        <span className="AmountChange" onClick={minusButton}> - </span>
        <span className="Amount"> {amount} </span>
        <span className="AmountChange" onClick={plusButton}> + </span>
    </div>
)

AddingButtons.propTypes = {
    minusButton: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    plusButton: PropTypes.func.isRequired
}

export default AddingButtons
