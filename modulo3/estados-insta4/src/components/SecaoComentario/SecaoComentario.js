import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		coment: ''
	}

	onChangeComentario = ( event) => {
		console.log(event.target.value)

		this.setState ({
			coment: event.target.value
		})
	}



render() {
        
	return <CommentContainer>
		<InputComentario
			placeholder={'Comentário'}
			value={this.state.coment}
			onChange={this.onChangeComentario}
		/>
		
		<button onClick={this.props.aoEnviar}>Enviar</button>
	
	</CommentContainer>
}
}