export default function renderSquare(i, [knightX, knightY]){
	const x = i % 8;
	const y = Math.floor(i/8);
	const isKnightHere = (x === knightX && y === knightY);
	const isBlack = (x+y) % 2 === 1;
	const piece = isKnightHere ? <Knight /> : null;

	return (

		<div 
			key={i}
			style={{width: '12.5%', height: '12.5%'}}>
			<Square black={isBlack} >
				{piece}
			</Square>

		</div>

	)

}