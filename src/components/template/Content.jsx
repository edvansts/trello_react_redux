import React from 'react'
import './Content.css'
import {Button} from 'react-bootstrap'

import List from '../main/List'

export default class Content extends React.Component {
    constructor(props){
        super(props)
        this.addList = this.addList.bind(this)
        this.inputList = this.inputList.bind(this)
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
                    return <List addC={_ => this.addCard} list={list} key={i+' l'} />     
                })}

                <div style={{padding:'15px'}}>
                    {this.inputList(this.state.listAdd)}
                </div>
            </div>
            
        )
    }

    inputList(bool){
        return bool ? 
        (<p>
            <input type="text" placeholder="Insira o nome da lista..." 
                    name="txtList" id="txtList"
                    value={this.state.listName} onChange={e => this.setState({listName:e.target.value})}/>
            <Button onClick={_ => this.addList()} style={{margin:'10px',padding:'0px 5px 0px 5px'}}>Enviar</Button>
        </p>) 
        : <Button onClick={_ => this.setState({listAdd:true})} style={{marginTop: '10px'}} 
                    variant="dark" >
                        <svg class="bi bi-plus" width="1.2em" height="1.2em" viewBox="2 2 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                        </svg>
                    Adicionar nova lista</Button>
    }
    
    
    addList(){
        const list = {
            title: this.state.listName,
            desc: '',
            cards:[

            ]
        }
        this.setState({
            lists: [...this.state.lists,list],
            listAdd: false,
            listName: ''
        })
    }


    render(){
        return(
            <div className="Content">
                {this.renderLists()}
            </div>
        )
    }
}