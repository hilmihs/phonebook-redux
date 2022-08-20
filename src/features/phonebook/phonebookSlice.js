import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from './phonebookAPI'
import {
    READ_PHONEBOOK,
    CREATE_PHONEBOOK,
    UPDATE_PHONEBOOK,
    REMOVE_PHONEBOOK,
    RESEND_PHONEBOOK
} from '../../utils/constants'

const initialState = {
    phonebooks: [],
    status: 'idle'
}

export const readPhonebook = createAsyncThunk(
    READ_PHONEBOOK,
    async () => {
        try {
            const { data } = await API.read();
            if (data.success) {
                return data.data.map(item => {
                    item.sent = true
                    return item
                })
            } else {
                return []
            }
        } catch (error) {
            return []
        }
    }
);

export const createPhonebookAsync = createAsyncThunk(
    CREATE_PHONEBOOK,
    async ({ id, name, phone }) => {
        try {
            const { data } = await API.create(id, name, phone);
            if (data.success) {
                return { id, phonebook: data.data }
            }
        } catch (error) {
            return { id, phonebook: false }
        }
    }
)

export const resendPhonebook = createAsyncThunk(
    RESEND_PHONEBOOK,
    async ({ id, name, phone }) => {
        try {
            const { data } = await API.create(name, phone);
            if (data.success) {
                return { id, phonebook: data.data }
            }
        } catch (error) {
            return { id, phonebook: false }
        }
    }
)

export const updatePhonebook = createAsyncThunk(
    UPDATE_PHONEBOOK,
    async ({ id, name, phone }) => {
        try {
            const { data } = await API.update(id, name, phone);
            if (data.success) {
                return data.data
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

export const removePhonebook = createAsyncThunk(
    REMOVE_PHONEBOOK,
    async (id) => {
        try {
            const { data } = await API.remove(id);
            if (data.success) {
                return data.data
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        create: (state, action) => {
            state.phonebooks = [
                ...state.phonebooks,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    sent: true
                }
            ]
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(readPhonebook.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(readPhonebook.fulfilled, (state, action) => {
                state.status = 'idle',
                    state.phonebooks = action.payload
            })
            .addCase(createPhonebookAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.phonebook) {
                    state.phonebooks = state.phonebooks.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...action.payload.phonebook, sent: true }
                        }
                        return item
                    })
                } else {
                    state.phonebooks = state.phonebooks.map(item => {
                        if (item.id === action.payload.id) {
                            item.sent = false
                        }
                        return item
                    })
                }
            })
            .addCase(resendPhonebook.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.phonebook) {
                    state.phonebooks = state.phonebooks.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...action.payload.phonebook, sent: true }
                        }
                    })
                }
            })
            .addCase(updatePhonebook.fulfilled, (state, action) => {
                state.status = 'idle';
                state.phonebooks = state.phonebooks.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload, sent: true }
                    }
                    return item
                })
            })
    }
})

 const { create } = phonebookSlice.actions;

 export const selectPhonebooks = (state) => state.phonebook.phonebooks;

 export const createPhonebook = (name, phone) => (dispatch, getState) => {
    const id = Date.now()
    dispatch(create({id, name, phone}))
    dispatch(createPhonebookAsync({id, name, phone}))
 }