import React from 'react';
import Knight from '../Knight'
import Square from '../Square'
import {moveKnight, canGoHere} from '../../utils/gameStuff'
// import renderSquare from '../../utils/renderSquare'

export default class Board extends React.Component{
	constructor(props){
		super(props)

		this.renderSquare = this.renderSquare.bind(this)
		this.handleSquareClick = this.handleSquareClick.bind(this)
	}

	renderSquare(i, [knightX, knightY]){
		const x = i % 8;
		const y = Math.floor(i/8);
		const isKnightHere = (x === knightX && y === knightY);
		const isBlack = (x+y) % 2 === 1;
		const piece = isKnightHere ? <Knight /> : null;

		return (

			<div 
				key={i} 
				style={{width: '12.5%', height: '12.5%'}}
				onClick={() => this.handleSquareClick(x,y)}>
				<Square black={isBlack}>
					{piece}
				</Square>
			</div>

		)

	}
	
	handleSquareClick(toX, toY){
		if(canGoHere(toX, toY)){
			moveKnight(toX, toY)
		}
	}

	render(){

		const squares = [];

		for (let i=0; i < 64; i++){
			squares.push(this.renderSquare(i, this.props.knightPosition))
		}

		const divStyle = {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexWrap: 'wrap'
		}

		return (
			<div style={divStyle}>
				{squares}
			</div>
		)

	}
}