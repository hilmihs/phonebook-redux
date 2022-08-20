import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

library.add(faPencil, faTrashCan)

const ListRows = (props) => {
    return (
         <tr>
        <td scope="row">
          1
          </td>
        <td>
          Reky Sanjaya
        </td>
        <td>
          08123456
        </td>
        <td>
          <button type="button" class="btn btn-success green-button"><FontAwesomeIcon icon="pencil" /> edit</button>
          <button type="button" class="btn btn-danger"><FontAwesomeIcon icon="trash-can" /> delete</button>
        </td>
      </tr>
      
    )
}

export default ListRows