import React from 'react'
import PropTypes from 'prop-types'

const cancelButton = ({cancelButton}) => (
    <td><img src="%PUBLIC_URL%/Img/cancel.png" onClick={cancelButton} /> </td>
)

cancelButton.propTypes = {
    cancelButton: PropTypes.func.isRequired
}

export default cancelButton