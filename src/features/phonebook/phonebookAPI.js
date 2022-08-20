import { request } from "../../utils/api";

export const read = () => request.get('phonebooks')

export const create = (name, phone) => request.post('phonebooks', { name, phone })

export const update = (id, name, phone) => request.put(`phonebooks/${id}`, { name, phone })

export const remove = id => request.delete(`phonebooks/${id}`)