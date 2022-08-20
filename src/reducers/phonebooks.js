import * as actions from '../constants'

const phonebooks = (state = [], action) => {
    switch (action.type) {
        case actions.LOAD_PHONEBOOK_SUCCESS:
            action.phonebooks.map(item => {
                item.sent = true
                return item
            })

        case actions.ADD_DRAW_PHONEBOOK:
            return [...state, {
                id: action.id,
                name: action.name,
                phone: action.phone,
                sent: true
            }]

        case actions.ADD_PHONEBOOK_SUCCESS:
            return state.map(item => {
                item.id = action.phonebook.id
                return item
            })

        case actions.ADD_PHONEBOOK_FAILURE:
            return state.map(item => {
                if (item.id == action.id)
                    item.sent = false
                return item
            })

        case actions.REMOVE_PHONEBOOK_SUCCESS:
            return state.filter(item => item.id !== action.id)


        case actions.RESEND_PHONEBOOK_SUCCESS:
            return state.map(item => {
                if (item.id == action.oldId) {
                    item.sent = true
                    item.id = action.oldId
                }
                return item
            })

        case actions.RESEND_PHONEBOOK_FAILURE:
        case actions.REMOVE_PHONEBOOK_FAILURE:
        case actions.LOAD_PHONEBOOK_FAILURE:
        default:
            return state

    }
}

export default phonebooks