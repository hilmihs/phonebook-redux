import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Component } from "react";

library.add(faPlus)

export default class AddButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.toggle()

    }
    render() {
        return (
            <button className="btn btn-primary add-button" onClick={this.handleClick}>
                <FontAwesomeIcon icon='plus' /> add
            </button>
        )
    }
}
