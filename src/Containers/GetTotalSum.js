import { connect } from 'react-redux'
import Sum from '../Components/Sum'


const mapStateToProps = state => ({
    TotalSum: state.items.reduce((sum, current) => {
        return sum + current.price * current.amount
    }, 0),
    Discount: state.promocodes.activeCode ? state.promocodes.availableCodes[state.promocodes.activeCode] : 0
})




export default connect (
    mapStateToProps
)(Sum)