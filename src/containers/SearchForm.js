import * as Icon from 'react-bootstrap-icons';

const SearchForm = () => {
    return (
        <div className="card card-shadow ">
    <div className="card-header card-position">
      Search Form
    </div>
    <div className="card-body card-position">
      <label className="name-label" htmlFor="name-search">Name</label>
      <input type="text" id="name-search" name="name-search" className="form-control name-input" placeholder="name" />
      <label className="name-label" htmlFor="phone-search">Phone</label>
      <input type="text" id="phone-search" name="phone-search" className="form-control name-input" placeholder="phone" />
    </div>
  </div>
    )
}

export default SearchForm