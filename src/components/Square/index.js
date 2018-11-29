import React from 'react';

export default function Square({black, children}){
	const fillColor = black ? 'black' : 'white';
	const strokeColor = black ? 'white' : 'black';
	const sqStyle = {
		backgroundColor: fillColor,
		color: strokeColor,
		width: '100%',
		height: '100%'
	}
	return <div style={sqStyle} className={'square'}>
		{children}
	</div>
}