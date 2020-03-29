import React from 'react';
import { Provider } from "react-redux";
import store from "../store/store";
import TodoApp from "../components/TodoApp";

export default class Detail extends React.Component {
    render() {
        return (
            <div>
                <a href='#/'>回到home</a>
                <Provider store={store}>
                    <TodoApp clasname = "container"/>
                </Provider>
            </div>
        )
    }
}