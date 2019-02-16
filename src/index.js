import React, { Component } from 'react'
import { render } from 'react-dom'

// Create the object skiData

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

// Create components as functions if you're accessing props 
// and if you want to add your custom methods outside of the context of that component.

const getPercent = decimal => {
	return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
	return getPercent(total/goal)
}

// Create a component called a SkiDayCounter.


// Destructure these properties so that you can access them by name. 
// Use the curly braces to access these props by name.

const SkiDayCounter = ({total, powder, backcountry, goal}) => {
	return (
		<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Powder Days: {powder}</p>
				</div>
				<div>
					<p>Backcountry Days: {backcountry}</p>
				</div>
				<div>
					<p>Goal Progress: {calcGoalProgress(total, goal)}</p>
				</div>
		</section>
	)
}


render(
	<SkiDayCounter 
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>, 
	document.getElementById('root')
)

