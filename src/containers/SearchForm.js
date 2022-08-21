
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { readPhonebook } from '../features/phonebook/phonebookSlice';
const SearchForm = () => {
  const dispatch = useDispatch();
  const [phonebook, setPhonebook] = useState({
    name: '',
    phone: ''
})

const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPhonebook({
        ...phonebook,
        [name]: event.target.value
    });

    
}

useEffect(() => {
  dispatch(readPhonebook({name: phonebook.name, phone: phonebook.phone}))
}, [dispatch, phonebook])

    return (
        <div className="card card-shadow ">
    <div className="card-header card-position">
      Search Form
    </div>
    <div className="card-body card-position">
      <label className="name-label" htmlFor="name">Name</label>
      <input type="text" id="name" name="name" className="form-control name-input" value={phonebook.name} onChange={handleInputChange}  placeholder="name" />
      <label className="name-label" htmlFor="phone">Phone</label>
      <input type="text" id="phone" name="phone" className="form-control name-input" value={phonebook.phone} onChange={handleInputChange} placeholder="phone" />
    </div>
  </div>
    )
}

export default SearchForm