import React from 'react'
import './App.css'

import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Main from './components//main/Main'


export default class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header className="Header" />
                <Main className="Content"/>
                <Footer className="Footer"/>
            </div>
        )
    }
}