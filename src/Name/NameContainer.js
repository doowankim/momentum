// 사용자의 이름을 입력받기 위한 Container
import React, {Component} from 'react';
import NamePresenter from "./NamePresenter";

class NameContainer extends Component {
    state = {
        value: ''
    };

    // 사용자가 입력한 input 값을 value에 저장
    handleChange = e => {
        this.setState({
            value: e.target.value // 현재 input에 입력된 값 가져오기
        });
    };

    handleSubmit = e => {
        e.preventDefault(); // onSubmit의 기본적인 이벤트 방지(새로고침)
        const { value } = this.state;
        this.props.saveName(value); // 입력 내용을 saveName에 저장한 후 props로 받아온다
    };
    render() {
        const { value } = this.state;
        // presenter에 prop 값 전달
        return (
            <NamePresenter handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={value} />
        );
    }
}

export default NameContainer;
