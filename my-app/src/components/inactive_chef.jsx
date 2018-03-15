import React,{Component} from 'react';
import {Link} from "react-router-dom";
import '../style.css';


class InactiveChef extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      minutes: "0",
      hours: "0"
    }
  }

  render()
  {
    return(

<div>

  <div className="style">
  <title>Inactive Chef</title>
  
  
  <form className="input" onSubumit={this.validateTime.bind(this)}>
    <h4>Enter the amount of time you will be active:</h4>
    <input type="number" name="hour" onChange={this.updateHours.bind(this)}defaultValue="0"></input>
    <b>Hours</b>
    <input
     type="number" name="minute" onChange={this.updateMinute.bind(this)} defaultValue ="0"></input>
    <b>Minutes</b>
    <input type="submit" value="Start Serving!"></input>
  </form>

  <h4>Use Edit Dishes to change your menu</h4>
 
  <Link to="/edit_dishes">
  
      <input type="submit" value="Edit Dishes"></input>

      </Link>

    </div>
  </div>
  );

  }
  /* Update the minutes state when it is modified*/
  updateMinute(e)
  {
    var min = e.target.value
    this.setState(function(){
      return {minutes:min}
    });
  }

  /* Update hours when it is modified */
  updateHours(e)
  {
    var hour = e.target.value
    this.setState(function() {
      return {hours:hour}
    });
    
  }

  /* Make sure that the time is non-negative */
  validateTime()
  {
    if (this.state.minutes < 0 || this.state.hours < 0 )
    {
      alert("Please make sure your time is non-negative");
    }
    else
    {
      this.props.history.push({
        pathname: '/active_chef',
        state:{minutes:this.state.minutes,hours:this.state.hours}
      });
    }
  }
}
export default InactiveChef
