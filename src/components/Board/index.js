import React from 'react';
import Knight from '../Knight'
import SmartSquare from '../SmartSquare'
import {moveKnight, canGoHere} from '../../utils/gameStuff'
import {DragDropContextProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
// import renderSquare from '../../utils/renderSquare'

export default class Board extends React.Component{
	constructor(props){
		super(props)

		this.renderSquare = this.renderSquare.bind(this)
		this.renderPiece = this.renderPiece.bind(this)
		this.handleSquareClick = this.handleSquareClick.bind(this)
	}

	renderPiece(x,y, [knightX, knightY]){
		if(x === knightX && y === knightY){
			return <Knight />
		}
	}

	renderSquare(i, knightPosition){
		const x = i % 8;
		const y = Math.floor(i/8);

		return (
			<div 
				key={i} 
				style={{width: '12.5%', height: '12.5%'}}
				onClick={() => this.handleSquareClick(x,y)}>
				<SmartSquare 
					x={x}
					y={y}>
					{this.renderPiece(x,y,knightPosition)}
				</SmartSquare>
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
			<DragDropContextProvider backend={HTML5Backend}>
				<div style={divStyle}>
					{squares}
				</div>
			</DragDropContextProvider>
		)

	}
}