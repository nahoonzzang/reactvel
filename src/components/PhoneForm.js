import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // '[]' 문법은 = Computed property names 문법
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지, e.preventDefault() 원리 이벤트가 해야 하는 작업을 방지시킨다는 의미
        // 원래 form 에서 submit 가 발생하면 페이지를 다시 불러오게 되는데, 그렇게 되면 우리가 지니고 있는 상태를 다 잃어버리게 되기때문에
        // 이를 통해 방지.
        e.preventDefault();
        // 상태값을 onCreate 를 통해 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"   // 이 name 값을 setState 의 e.target.name 로 접근하는 개념
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;