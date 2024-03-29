import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

// addPost('gg')

let rerenderEntireTree = (state) => {


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default rerenderEntireTree;