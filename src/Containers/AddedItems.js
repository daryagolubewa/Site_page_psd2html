import { connect } from 'react-redux'
import ItemsTable from '../Components/ItemsTable'
import {plusItem} from '../Actions/Actions'
import {minusItem} from '../Actions/Actions'
import {removeItem} from '../Actions/Actions'

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    plusItem: id => dispatch(plusItem(id)),
    minusItem: id => dispatch(minusItem(id)),
    removeItem: id => dispatch(removeItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsTable)

