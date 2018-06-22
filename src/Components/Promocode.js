import React from 'react'
import PropTypes from 'prop-types'

const Promocode = ({Code}) => (
    <div class="promoCode">
        <p>Есть промокод?</p>
        <input type="text" placeholder="Введите промокод" />
        <button>Применить</button>
    </div>
)

