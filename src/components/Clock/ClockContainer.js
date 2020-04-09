import React, {Component} from 'react';
import ClockPresenter from "./ClockPresenter";

class ClockContainer extends Component {
    // state 값인 time, greeting의 초기 설정(두 개 다 String, 왜냐하면 ClockPresenter에서 PropTypes를 String으로 지정해 줬기 때문)
    state = {
        time: '',
        greeting: ''
    };

    // 시간과 인사 문구를 얻는 getTime 함수
    getTime = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        // time 조건문(9이하 숫자 앞에는 0을 붙인다)
        const time = `${hour > 9 ? hour : `0${hour}`} : ${minute > 9 ? minute : `0${minute}`}`;
        this.setState({
            time
        });

        // 시간대 별 인사 문구
        if(hour >= 5 && hour < 12) {
            this.setState({
                greeting: 'Good Morning'
            });
        } else if(hour >= 12 && hour < 17) {
            this.setState({
                greeting: 'Good Afternoon'
            });
        } else {
            this.setState({
                greeting: 'Good Evening'
            });
        }
    };

    componentDidMount() {
        setInterval(this.getTime, 1); // 현재 시간을 실시간으로 업데이트 되게 한다
    }

    render() {
        const { time, greeting } = this.state;
        const { name } = this.props;
        return (
            <ClockPresenter greeting={greeting} time={time} name={name} />
        );
    }
}

export default ClockContainer;