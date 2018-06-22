import { connect } from 'react-redux'
import Sum from '../Components/Sum'

const mapStateToProps = state => ({
    TotalSum: state.items.reduce((sum, current) => {
        return sum + current.price
    }, 0)
})

export default connect (
    mapStateToProps
)(Sum)