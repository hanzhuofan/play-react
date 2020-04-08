import React from 'react';
import {connect} from "react-redux";
import {InputNumber} from 'antd';

let timer = 10;

class Testplay extends React.Component {
  // timer = 10;

  onPressEnter(e) {
    console.log('changed', e.type);
    console.log('changed', e.target);
    console.log('changed', e.target.value);
  }

  onChange(value) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('changed', value);
      clearTimeout(timer);
    }, 200)
  }

  render() {
    return (
      <div>
        <InputNumber onPressEnter={this.onPressEnter}/>
        <InputNumber onChange={this.onChange}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.user);//可持续更新
  return {
    user: state.user//组件AppContent的this.props.user始终为空
  }
};

export default connect(mapStateToProps)(Testplay);