import React from 'react'
import PropTypes from 'prop-types'


const Sum = ({TotalSum}) => (

<div>
<p>{TotalSum} руб.</p>
<p class="sum">-1800 руб.</p>

<p class="total">{TotalSum} руб.</p>

</div>
)

Sum.PropTypes = {
    TotalSum: PropTypes.number.isRequired
}

export default Sum