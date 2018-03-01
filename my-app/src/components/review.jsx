
import React, { Component } from 'react';

class Review extends Component{

  render()
  {
    return(
      <div>
      <h1>Thank you for using Chef on the Go!</h1>
      <h2>Please let us know about your experience Below</h2>

      <div className="rating">
      <form>
      <h4>My Experience was ...</h4>
      <label>
      Absolutely Terrible
      <input type="radio" name="star" value="1"></input>
      </label>
      <label>
      Sub-par
      <input type="radio" name="star" value="2"></input>
      </label>
      <label>
      Good
      <input type="radio" name="star" value="3"></input>
      </label>
      <label>
      Very Good
      <input type="radio" name="star" value="4"></input>
      </label>
      <label>
      Amazing
      <input type="radio" name="star" value="5"></input>
      </label>
      </form>

      <textarea name="How was your experience?" rows="10" cols="70" defaultValue="Enter your review here! Be sure to be descriptive, It was good tells fellow connoisseurs almost nothing about the chef"></textarea>

      <div>
      <form onSubmit = {this.handleSubmit}>
      <input type="submit" className="review" value="Submit"></input>
      <input type="submit" className="noreview" value="I don't want to leave a review"></input>
      </form>
      </div>
      </div>
      </div>

    );
  }
  handleSubmit(event)
  {
    alert("SUBMITTED");
  }

}

export default Review
