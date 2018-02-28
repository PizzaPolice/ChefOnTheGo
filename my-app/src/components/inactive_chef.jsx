import React,{Component} from 'react';

class InactiveChef extends Component
{
  render()
  {
    return(

<div>
  <title>Inactive Chef</title>

  <h2>You are currently inactive</h2>
  <form className="input" action="active_chef.html" onSubmit={this.validateTime}>
    <h3>How long do you want to be active until</h3>
    <input type="number" name="hour" value="0"></input>
    <b>Hours</b>
    <input type="number" name="minute" value ="0"></input>
    <b>Minutes</b>
    <input type="submit" value="Start Serving!"></input>
  </form>


</div>
      
    );
  }

  validateTime()
  {
    alert("VALIDATING TIME");
  }
}
export default InactiveChef
