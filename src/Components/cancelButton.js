import React from 'react'
import PropTypes from 'prop-types'

const CancelButton = ({cancelButton}) => (
    <img src="Img/cancel.png" onClick={cancelButton} className="cancel" />
)

CancelButton.propTypes = {
    cancelButton: PropTypes.func.isRequired
}

export default CancelButton