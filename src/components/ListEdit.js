
const ListEdit = () => {
    return (
        <tr>
        <td scope="row">
          2
          </td>
        <td>
          <input type="text" id="name-edit" name="name-edit" class="form-control edit-input" value="Rubi Henjaya" placeholder="name" />
        </td>
        <td>
          <input type="text" id="phone-edit" name="phone-edit" class="form-control edit-input" value="088223344" placeholder="phone" />
        </td>
        <td>
          <button type="button" class="btn btn-primary">save</button>
        </td>
      </tr>
    )
}

export default ListEdit