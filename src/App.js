import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './features/store';
import Login from './components/Login';
import Home from './components/Home';
import './App.css'

const ProjectMain = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default ProjectMain;