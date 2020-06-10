import React from 'react'

export default props => {
    const card = props.card

    function renderCards(card){
        return(
            <tr >
                <td >
                    {card.title}
                </td>
            </tr>
        )
    }
    return(
        renderCards(card)
    )
}