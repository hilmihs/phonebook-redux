import * as Icon from 'react-bootstrap-icons';

const SearchForm = () => {
    return (
        <div class="card card-shadow ">
    <div class="card-header card-position">
      Search Form
    </div>
    <div class="card-body card-position">
      <label class="name-label" for="name-search">Name</label>
      <input type="text" id="name-search" name="name-search" className="form-control name-input" placeholder="name" />
      <label class="name-label" for="phone-search">Phone</label>
      <input type="text" id="phone-search" name="phone-search" className="form-control name-input" placeholder="phone" />
    </div>
  </div>
    )
}

export default SearchForm