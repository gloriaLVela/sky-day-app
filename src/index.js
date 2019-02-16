import React from 'react'
import ReactDOM from 'react-dom'

// Use the color that is set in the parameters or props

// The props are color, msg and minutes

class Message extends React.Component {
	render() {
		return (
            <div>
                <h1 style={{color: this.props.color}}>
					{this.props.msg}
				</h1>
				<p>I'll check back in {this.props.minutes} minutes</p>
			</div>
		)
	}
}

//Whenever we're passing in a number or a Boolean, something that's not a string, we need to use that JSX expression. 


ReactDOM.render(
	<Message color="blue" msg="how are you?" minutes={9}/>, 
	document.getElementById('root')
)