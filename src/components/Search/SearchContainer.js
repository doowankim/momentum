import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
    state = {
        value: '',
        isOpen: false
    };

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // 현재 입력된 value 값이 쿼리문에 담긴 url주소로 리다이렉트
        window.location.href = `https://www.bing.com/search?q=${this.state.value}&PC=ATMM&FORM=MMXT01`;
    }

    searchButton = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { value, isOpen } = this.state;
        return (
            <SearchPresenter
                handleSubmit={this.handleSubmit}
                searchButton={this.searchButton}
                handleChange={this.handleChange}
                isOpen={isOpen}
                value={value}
            />
        );
    }
}

export default SearchContainer;