import React from 'react';
import Knight from '../Knight'
import Square from '../Square'
// import renderSquare from '../../utils/renderSquare'

function renderSquare(i, [knightX, knightY]){
	const x = i % 8;
	const y = Math.floor(i/8);
	const isKnightHere = (x === knightX && y === knightY);
	const isBlack = (x+y) % 2 === 1;
	const piece = isKnightHere ? <Knight /> : null;

	return (

		<div key={i} style={{width: '12.5%', height: '12.5%'}}>
			<Square black={isBlack}>
				{piece}
			</Square>
		</div>

	)

}

export default function Board({knightPosition}){

	const squares = [];

	for (let i=0; i < 64; i++){
		squares.push(this.renderSquare(i, knightPosition))
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