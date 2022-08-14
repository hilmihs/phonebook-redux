import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)
const AddButton = () => {
    return (
        <button className="btn btn-primary add-button">
        <FontAwesomeIcon icon='plus' /> add
        </button>
    )
}

export default AddButton