import React from "react"

export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </React.Fragment>


// react.fragment serve para não ter nada no inspecionar
// pode retornar um array para mostrar mais de um componente adjacente
// propriedades passadas para o componente