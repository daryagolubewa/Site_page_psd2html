import { connect } from 'react-redux'
import GoodsNumber from '../Components/ItemsInCart'

const mapStateToProps = state => ({
    productNumber: state.items.reduce((sum, current) => {
        return sum + current.amount
    }, 0)
})

export default connect (
    mapStateToProps
)(GoodsNumber)