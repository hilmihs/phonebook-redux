import * as Icon from 'react-bootstrap-icons';

const AddForm = () => {
    return (
        <div class="card card-shadow">
            <div class="card-header">
                Adding Form
            </div>
            <div class="card-body">
                <label class="name-label" for="name-add">Name</label>
                <input type="text" id="name-add" name="name-add" class="form-control name-input" placeholder="name" />
                    <label class="name-label" for="phone-add">Phone</label>
                    <input type="text" id="phone-add" name="phone-add" class="form-control name-input" placeholder="phone" />
                        <button type="button" class="btn btn-success green-button">
                        <Icon.CheckCircle className='button-icon' />save
                         </button>
                        <button type="button" class="btn btn-primary orange-button">
                        <Icon.XCircle className='button-icon' />  
                         cancel</button>
                    </div>
            </div>
            )
}

export default AddForm