import React from 'react'
import PropTypes from 'prop-types'

const Promocode = ({code, addCode}) => {
    let input
    return (
        <div className="promoCode">
            <p>Есть промокод?</p>
            <input type="text" placeholder="Введите промокод" /*value={code}*/ ref={node => input = node}/>
            <button onClick={() => {
                if (!input.value.trim()) {
                    return
                }
                addCode(input.value)
            }}>Применить</button>
        </div>
    )
}

export default Promocode