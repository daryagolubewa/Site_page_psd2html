import { connect } from 'react-redux'
import {addPromocode} from '../Actions/Actions'
import Promocode from '../Components/Promocode'

const mapStateToProps = state => ({
    code: state.promocodes.activeCode || ''
})

const mapDispatchToProps = dispatch => ({
    addCode: code => dispatch(addPromocode(code))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Promocode)
