import React, { Component } from 'react';

class Searchbar extends Component {
    state = {query: ''};

    handleChange = e => {
        this.setState({query: e.currentTarget.value})
    }

    handelSubmit = e => {
        e.preventDefault();
 }

    render() {
        return(
                <header className="Searchbar">
                <form onSubmit= {this.handelSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    value = {this.state.query}
                    onChange = {this.handleChange}
                    />
                </form>
                </header>
        )
    };
}

export default Searchbar;