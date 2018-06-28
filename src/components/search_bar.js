import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (<div className="search-bar"><input 
            value={this.state.term}/*we are making input field a controlled component*/
            /*this.setState causes the value to rerender and whenever the value is rerendered it will put up the new value in searchbar */
            /*This is similar to outube search ie when you search a  video the new keyword is placed in the searchbar */
            onChange={event => this.onInputChange(event.target.value)/*State Updation, onChange updates the state*/
        }
        />
    </div>)
    }
onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
}

}

export default SearchBar;