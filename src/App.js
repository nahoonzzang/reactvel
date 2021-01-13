import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  id = 2      // 그냥 내부 변수로 선언된 거임 -> 컴포넌트 내부에서 필요한 값 중에서, 렌더링 되는것과 상관이 없는 것들은 굳이 state에 넣어줄 필요가 없음
  state = {
    information: [
      {
        id: 0,
        name: '이름', 
        phone: '010-0000-0000'
      }, 
      {
        id: 1,
        name: '홍길동', 
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}  // 여기서 onCreate 는 Props 의 객체 이름을 정하는 것. OnCreate 말고 OnONON 도 가능
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
