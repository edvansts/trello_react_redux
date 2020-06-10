import React,{Fragment} from 'react'
import Card from './Card'
import { useState } from 'react'
import {Button} from 'react-bootstrap'


export default props => {
    const [list, setList] = useState(props.list)
    const [cardAdd, setCardAdd] = useState(false)
    const [cardName, setCardName] = useState('')

    function showList(list){
        return(
            <div className={'list '+list.title}>
                <table>
                    <thead>
                        <tr>
                            <th>{list.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.cards.map((card,i) =>{
                            return <Card key={i+' c'} card={card}/>
                        })}
                    </tbody>
                </table> 
                {inputCard(cardAdd)}
            </div>)
    }
    
    function inputCard(bool){
        return bool ? 
        (<p>
            <input type="text" placeholder="Insira o nome do cartão..." 
                    name="txtCard" id="txtCard"
                    value={cardName} onChange={e => setCardName(e.target.value)}/>
            <Button onClick={_ => addCard()} style={{marginLeft:'10px',padding:'0px 5px 0px 5px'}}>Enviar</Button>
        </p>) 
        : <Button onClick={_ => setCardAdd(true)} style={{marginTop: '10px'}} 
                    variant="light" >Adicionar novo cartão</Button>
    }

    function addCard() {
        if(cardName.length>1){
            const Card = {
                title:cardName,
                desc:" "
            }
            let lista = list
            lista.cards.push(Card)
            setList(lista)
            setCardAdd(false)
            setCardName('')
        }
    }
    return(
        <Fragment>
            {showList(props.list)}
        </Fragment>
    )
}