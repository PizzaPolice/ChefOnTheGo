import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class ActiveChef extends Component
{
  constructor(props)
  {
    super(props);
    
    var hour = "0";
    var min = "0";
    
    if (typeof(this.props.location) !== 'undefined' && typeof(this.props.location.state) === 'object')
    {
      hour = this.props.location.state.hours;
      min = this.props.location.state.minutes;
    }
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
      <Link to="/inactive_chef">
        <button>Stop Serving</button>
      </Link>
      </form>
      </div>
    );
  }

  /* Mount a timer to the page ticking every second*/
  componentDidMount()
  {
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }

  /* Cleans up timer at end of life*/
  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  tick()
  {
    /* Gets the hours, minutes, and seconds left on the timer*/
    var hours = this.state.hours; 
    var mins = this.state.minutes; 
    var seconds = this.state.seconds; 

    /* Decrement seconds every 1000 ms when this func is called*/
    seconds = seconds - 1;

    /* Handle when to remove a minute/hour and add more mins/secs*/
    if (seconds === -1)
    {
      mins = mins - 1;
      seconds = seconds + 60;
    }

    if (mins === -1)
    {
      hours = hours - 1;
      mins = mins + 60;
    }
    /*Check if timer is done (0,0,0) */
    if (hours === -1)
    {
      hours = 0;
      mins = 0;
      seconds = 0;
    }

    this.setState(function (){
      return {
        hours:hours,
        minutes:mins,
        seconds:seconds
      }
    }
    );
  }
}


export default ActiveChef
