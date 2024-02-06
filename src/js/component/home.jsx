import React from "react";
import Counter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		
		<div className="text-center">
			<h1 id='demo'><Counter digitOne={props.digitOne} digitTwo={props.digitTwo} digitThree={props.digitThree} digitFour={props.digitFour} digitFive={props.digitFive} digitSix={props.digitSix}/></h1>
			{/* <h2 id='demo2'><CounterTens /></h2> */}
			
		</div>
	);
	
};
let digit1 = 0
let digit2 = 0
// setInterval(function () {
//     digit1++;
//     document.getElementById('demo').innerHTML(digit1);
// }, 1000);

export default Home;
