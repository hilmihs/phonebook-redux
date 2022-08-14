import ListEdit from "./ListEdit"
import ListRows from "./ListRows"

const TableList = () => {
    return (
            <table id="tabel_masuk" className="table table-hover table-striped table-list" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Phone</th>
                    <th scope="col" colspan="2">Actions</th>

                </tr>
            </thead>
            <tbody>
            <ListRows/>
            <ListEdit/>
  </tbody>
  </table>
    )
}

export default TableList