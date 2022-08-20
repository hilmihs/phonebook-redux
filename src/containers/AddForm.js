import { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { connect } from "react-redux"
import { addPhonebook } from '../actions/phonebooks'

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.toggle()

    }
    render () {
        return (
            <div className="card card-shadow ">
                <div className="card-header card-position">
                    Adding Form
                </div>
                <div className="card-body card-position">
                    <label className="name-label" htmlFor="name-add">Name</label>
                    <input type="text" id="name-add" name="name-add" className="form-control name-input" placeholder="name" />
                        <label className="name-label" htmlFor="phone-add">Phone</label>
                        <input type="text" id="phone-add" name="phone-add" className="form-control name-input" placeholder="phone" />
                            <button className="btn btn-success green-button">
                            <Icon.CheckCircle className='button-icon' />save
                             </button>
                            <button onClick={this.handleClick} className="btn btn-primary orange-button">
                            <Icon.XCircle className='button-icon' />  
                             cancel</button>
                        </div>
                </div>
                )
    }
    
}

const mapStateToProps = (state) => ({ phonebooks: state.phonebooks })

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: (name, phone) => dispatch(addPhonebook(name, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)