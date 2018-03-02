import React,{Component} from 'react';
class InactiveChef extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      minutes: "",
      hours: ""
    }
  }

  render()
  {
    return(

<div>
  <title>Inactive Chef</title>

  <h2>You are currently inactive</h2>
  <form className="input" onSubmit={this.validateTime.bind(this)}>
    <h3>How long do you want to be active until</h3>
    <input type="number" name="hour" onChange={this.updateHours.bind(this)}defaultValue="0"></input>
    <b>Hours</b>
    <input type="number" name="minute" onChange={this.updateMinute.bind(this)} defaultValue ="0"></input>
    <b>Minutes</b>
    <input type="submit" value="Start Serving!"></input>
  </form>


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
        state:{minutes:this.minutes,hours:this.hours}
      });
    }
  }
}
export default InactiveChef
