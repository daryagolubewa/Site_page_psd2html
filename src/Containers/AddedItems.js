import { connect } from 'react-redux'
import Item from '../Components/ItemsTable'
import {plusItem} from '../Actions/Actions'
import {minusItem} from '../Actions/Actions'

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({

    plusItem: id => dispatch(plusItem(id)),
    minusItem: id => dispatch(minusItem(id)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)

