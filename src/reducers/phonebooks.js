import * as actions from '../constants'

const phonebooks = (state = [], action) => {
    switch (action.type) {
            case actions.LOAD_PHONEBOOK_SUCCESS:
            action.data.map(item => {
                item.sent = true
                return item
            })
          
            case actions.LOAD_PHONEBOOK_FAILURE:
            default:
                return state
              
    }
}

export default phonebooks