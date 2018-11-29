let knightPosition = [1,7];
let observer = null;

function emitChange(){
	observer(knightPosition)
}

export function observe(o){
	if(observer){
		throw new Error('Multiple observers not implemented')
	}

	observer = o;
	emitChange();
}

export function moveKnight(toX, toY){
	knightPosition = [toX, toY]
	emitChange();
}

export function canGoHere(xPos, yPos){
	const [x, y] = knightPosition;
	const dx = xPos - x;
	const dy = yPos - y;

	return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
			(Math.abs(dx) === 1 && Math.abs(dy) === 2) ;
}

export const ItemTypes = {
	KNIGHT: 'knight'
}