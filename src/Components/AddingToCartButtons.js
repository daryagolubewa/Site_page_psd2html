
import React from 'react'
import PropTypes from 'prop-types'

const AddingButtons = ({plusButton, amount, minusButton}) => (
    <div>
        <span class="AmountChange" onClick={minusButton}> - </span>
        <span> {amount} </span>
        <span class="AmountChange" onClick={plusButton}> + </span>
    </div>
)

AddingButtons.propTypes = {
    minusButton: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    plusButton: PropTypes.func.isRequired
}

export default AddingButtons
