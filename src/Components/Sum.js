import React from 'react'
import PropTypes from 'prop-types'


const Sum = ({TotalSum, Discount}) => (

    <div className="makeOrder">
        <div>
            <p>Сумма заказа:</p>
            {Discount > 0 &&
            <p className="sum">Промокод:</p>
            }

            <p className="total">Всего:</p>
        </div>
        <div>
            <div>
                <p>{TotalSum} руб.</p>

                {Discount > 0 &&
                <p className="sum"> -{Discount}</p>
                }

                <p className="total">{TotalSum - Discount} руб.</p>

            </div>

        </div>
    </div>
)

Sum.propTypes = {
    TotalSum: PropTypes.number.isRequired
}

export default Sum