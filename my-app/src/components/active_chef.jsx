import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class ActiveChef extends Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
    var hour=this.props.location.state.hours;
    var min = this.props.location.state.minutes;
      this.state = 
      {
        hours:hour,
        minutes:min,
        seconds:"0"
      }; 
    
  }

  render()
  {
    return(
  <div>

  <section className="timer">
    <h2>You are currently inactive</h2>
    <table className="timertable">
      <tbody>
      <tr className="info">
        <td colSpan="3">You will be active for: </td>
      </tr>
      <tr>
        <td id="hours">{this.state.hours}</td>
        <td id="minutes">{this.state.minutes}</td>
        <td id="seconds">{this.state.seconds}</td>
      </tr>
      <tr>
        <td>Hours</td>
        <td>Minutes</td>
        <td>Seconds</td>
      </tr>
      </tbody>
    </table>
  </section>

  <form className="stopserve">
    <Link to="/inactive_chef" value="Stop Serving">Stop Serving</Link>
  </form>
  </div>
    );
  }
}
export default ActiveChef
