import React, { Component } from 'react'
import { render } from 'react-dom'

// Create the object skiData

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

// Create a component called a SkiDayCounter.

class SkiDayCounter extends Component {
	render() {
        // The final thing I want to show you is we can use a slightly shorter syntax for destructuring this.props. 
        // So I could say const, our props are total, power, backcountry and goal, equals this.props.
		const {total, powder, backcountry, goal} = this.props
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
					<p>Goal: {goal}</p>
				</div>
			</section>
		)
	}
}

render(
	<SkiDayCounter 
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>, 
	document.getElementById('root')
)
