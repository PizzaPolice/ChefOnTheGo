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
  <form className="input" onSubmit={this.validateTime}>
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
  updateMinute(e)
  {
    this.setState({
      minutes:e.target.value
    });
    alert("MINUTES");
    
  }

  updateHours(e)
  {
    this.setState({
      minutes:e.target.value
    });
  }
  validateTime()
  {
    alert("VALIDATINGSDFS");
    if (this.state.minutes < 0 || this.state.hours < 0 )
    {
      alert("BAD VALUES");
    }
    alert("VALIDATING TIME");
  }
}
export default InactiveChef
