import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./Header"
import Table from "./Table"
import apiCall from "../utils/API"

class Container extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: [],
        sortDirection: this.initialSort,
    };

    get initialSort() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }



    componentDidMount() {
        apiCall()
          .then((res) =>
            this.setState({
                results: res.data.results,
              filteredResults: res.data.results,
            })
          )
          .catch((err) => console.log(err));
      }
    

    handleInputChange = (e) => {
        const searchString = e.target.value;
        this.setState({ search: searchString });
        this.filteredResults(searchString.toLowerCase().trim());
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    sortBy = (key, primary = 0, secondary = 0) => {
        let sortedResults = this.state.filteredResults;
        if (this.state.sortDirection[key]) {
          this.setState({
            filteredResults: sortedResults.reverse(),
            sortDirection: {
              ...this.initialSortDirection,
              [key]: this.state.sortDirection[key] === "asc" ? "desc" : "asc",
            },
          });
        } else {
          sortedResults = this.state.filteredResults.sort((a, b) => {
            a = a[key];
            b = b[key];
    
            if (primary) {
              if (secondary && a[primary] === b[primary]) {
                return a[secondary].localeCompare(b[secondary]);
              }
              return a[primary].localeCompare(b[primary]);
            } else {
              return a.localeCompare(b);
            }
          });
    
          this.setState({
            filteredEmployees: sortedResults,
            sortDirection: {
              ...this.initialSortDirection,
              [key]: "asc",
            },
          });
        }
      };
    

    filterResults = (data) => {
        if (data) {
            this.setState({
                filteredResults: this.state.results.filter((result) => {
                    return (
                        result.name.first.toLowerCase().concat(" ", result.name.last.toLowerCase()).includes(data) ||
                        result.phone.includes(data) ||
                        result.phone.replace(/[^\w\s]/gi, "").includes(data) ||
                        result.email.includes(data) ||
                        this.formatDate(result.dob.date.includes(data))

                    )
                })
            })
        } else {
            this.setState({ filteredResults: this.state.results })
        }
    }

    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push(("0" + (date.getMonth() + 1)).slice(-2));
        dob.push(("0" + date.getDate()).slice(-2));
        dob.push(date.getFullYear());
    
        return dob.join("-");
      };

    render() {
        return (
            <div class="container-fluid">
                <Table 
                state={this.state}
                sortBy={this.sortBy}
                filterResults={this.filterResults}
                formatDate={this.formatDate}
                />
            </div>
        )
    }
}

export default Container;