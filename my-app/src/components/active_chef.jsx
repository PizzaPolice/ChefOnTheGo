import React,{Component} from 'react';

class ActiveChef extends Component
{
  render()
  {
    return(
<div>

  <section className="timer">
    <h2>You are currently inactive</h2>
    <table className="timertable">
      <tr className="info">
        <td colspan="3">You will be active for: </td>
      </tr>
      <tr>
        <td id="hours">HOURS</td>
        <td id="minutes">MINUTES</td>
        <td id="seconds">SECONDS</td>
      </tr>
      <tr>
        <td>Hours</td>
        <td>Minutes</td>
        <td>Seconds</td>
      </tr>
    </table>
  </section>

  <form className="stopserve" action="inactive_chef.html" method="post">
    <input type="submit" value="Stop Serving"></input>
  </form>
      </div>
    );
  }
}
export default ActiveChef
