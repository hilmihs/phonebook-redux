import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import * as Icon from 'react-bootstrap-icons';
import { connect } from "react-redux"
import { addPhonebook } from '../actions/phonebooks'
import { updatePhonebook } from "../features/phonebook/phonebookSlice";

export default function addForm (props) {

    const dispatch = useDispatch();

    const [isAdd, setIsAdd] = useState(false)
    const [phonebook, setPhonebook] = useState({
        name: props.phonebook.name,
        phone: props.phonebook.phone
    })

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setPhonebook({
            ...phonebook,
            [name]: value
        })
    }

    const handleUpdate = () => {
        dispatch(updatePhonebook({ id: props.phonebook.id, ...phonebook}))
        setIsAdd(false)
    }

    if (isAdd) {
        return (
            <tr>
                <td>{props.no}</td>
                <td>
                    <input type="text" name="name" value={phonebook.name} className="form-control" onChange={handleInputChange} />
                </td>
                <td>
                <input type="number" name="phone" value={phonebook.phone} className="form-control" onChange={handleInputChange} />
                </td>
                <td>
                    <button type="button" className='btn btn-primary' onClick={handleUpdate}>save</button>
                    <button type="button" className='btn btn-warning' onClick={() => setIsEdit(false)}>cancel</button>
                </td>
            </tr >
        )
    } else {
        <tr>
        <td>{props.no}</td>
        <td>{props.phonebook.name}</td>
        <td>{props.phonebook.phone}</td>
        <td>
            <button type="button" className="btn btn-success" onClick={() => setIsEdit(true)}>edit</button>
            <button
                type="button"
                className={props.todo.sent ? 'btn btn-danger' : 'btn btn-warning'}
                onClick={props.todo.sent ? () => dispatch(removeTodo(props.todo._id)) : () => dispatch(resendTodo(props.todo))}>
                {props.todo.sent ? 'hapus' : 'kirim ulang'}
            </button>
        </td>
    </tr >
    }
}

class AddForma extends Component {
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

// export default connect(mapStateToProps, mapDispatchToProps)(AddForm)