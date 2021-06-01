import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./Header"
import Table from "./Table"

class Container extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: [],
        sort: this.initialSort,
    };

    get initialSort() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }
}

componentDidMount() {
    // api call
}

handleInputChange = (e) => {
    // handle input
}

handleFormSubmit = (e) => {
    //  handle form
}

sortBy = () => {
    // figure out sort
}

filterResults = () => {
    // filter results
}

formatDate = () => {
    // format date
}

render() {
    return(
        <div class="container-fluid">
            <Table />
        </div>
    )
}

export default Container;