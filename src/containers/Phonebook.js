import { connect } from "react-redux"
import { loadPhonebook, removePhonebook, resendPhonebook } from '../actions/phonebooks'
import ListRows from "../components/ListRows"



const mapDispatchToProps = (dispatch, ownProps) => ({
    remove: () => dispatch(removePhonebook(ownProps.id)),
    resend: () => dispatch(resendPhonebook(ownProps.id, ownProps.name, ownProps.phone))
})

export default connect(null, mapDispatchToProps)(ListRows)