import {Component} from 'react'
import './index.css'
class ClickCounter extends Component {
  state = {count: 0}
  onIncreamnet = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="count_num">{count} </span>
          times
        </h1>
        <p className="para">Click the button to increase the Count</p>
        <div className="button-container">
          <button className="button" type="button" onClick={this.onIncreamnet}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
