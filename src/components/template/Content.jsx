import React from 'react'
import './Content.css'
import {Button} from 'react-bootstrap'

import List from '../main/List'

export default class Content extends React.Component {
    constructor(props){
        super(props)
        this.addList = this.addList.bind(this)
        this.state={
            listName: '',
            listAdd: false,
            lists: [
                {
                    title:'Coisas para fazer',
                    desc: '',
                    cards:[
                        {
                            title:'Mover Cartões',
                            desc: ''
                        },
                        {
                            title:'Cadastrar e Excluir Cartões',
                            desc: ''
                        }
                    ] 
                }
            ]
        }
    }

    renderLists(){
        return (
            <div className="lists Container">
                {this.state.lists.map((list,i) =>{
                    return <List list={list} key={i+' l'} />     
                })}

                <div style={{padding:'15px'}}>
                    <Button variant="dark" onClick={e =>this.addList(e)} >
                        <svg className="bi bi-plus" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                        </svg>
                        Adicionar nova lista
                    </Button>
                </div>
            </div>
            
        )
    }

    
    
    addList(e){
        console.log(e.target.value)
    }

    addCard(name){
        
    }

    render(){
        return(
            <div className="Content">
                {this.renderLists()}
            </div>
        )
    }
}