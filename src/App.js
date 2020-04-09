import React, {Component} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import Name from './components/Name';
import Clock from './components/Clock';
import Search from './components/Search';
import Weather from './components/Weather';

class App extends Component {
    // name 이라는 state 초기 설정
    state = {
        name: null, // 초기의 name은 아무것도 없다
    };

    // NamePresenter 컴포넌트에서 전달받은 데이터를 state의 name과 localStorage에 저장
    saveName = data => {
        this.setState({
            name: data, // name에 입력받은 data를 넣으면서 state를 수정
        });
        localStorage.setItem('MOMENTUM_NAME', data); // localStorage에 입력받은 name 값(data)을 저장
    };

    // getName 함수를 통하여 현재 localStorage에 저장된 name 값이 null이 아닌 경우에 name 값을 저장하도록 함
    getName = () => {
        const name = localStorage.getItem('MOMENTUM_NAME');
        if(name !== null) {
            this.setState({
                name,
            });
        }
    };

    componentDidMount() {
        this.getName();
    }

    render() {
        const { name } = this.state;
        return (
            <>
                <GlobalStyle />
                {name === null ? (
                        <Name saveName={this.saveName} />
                    ) : (
                        <>
                            <Clock name={name} />
                            <Search />
                            <Weather />
                        </>
                    )}
            </>
        );
    }
}

export default App;