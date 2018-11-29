import React from 'react';
import { ItemTypes } from '../../utils/gameStuff'
import { DragSource } from 'react-dnd';

const knightSource = {
	beginDrag(props){
		return {};
	}
}

function collect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

function Knight({connectDragSource, isDragging}){
	console.log('knight isDragging')
	console.log(isDragging)

	return connectDragSource(
		<div style={{
			opacity: isDragging ? 0 : 1,
			fontSize: 25,
			fontWeight: 'bold',
			cursor: 'move'
		}}>
			&#9816;
		</div>
	)

}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)