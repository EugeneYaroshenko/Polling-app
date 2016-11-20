import React, {Component} from 'react'
import { Link } from 'react-router'
export default class Join extends Component {

  constructor() {
    super()

    this.join = this.join.bind(this)
  }

  join() {
    let memberName = this.refs.name.value
    this.props.emit('join', {name: memberName})
  }

  render() {
        return (
          <form action="javascript:void(0)" onSubmit={this.join}>
            <label>Full Name</label>
            <input ref="name"
                   className="form-control"
                   placeholder="enter your full name"
                   required/>
            <button className="btn btn-primary">Join</button>
            <Link to="/speaker">Start Presentation</Link>
              <Link to="/board">Go to the Scoreboard</Link>
          </form>
        )
      }

}
