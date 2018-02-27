class review exends React-Component{

  render()
  {
    return(
      <h1>Thank you for using Chef on the Go!</h1>
      <h2>Please let us know about your experience Below</h2>

      <div className="rating">
      <form>
      <h4>My Experience was ...</h4>
      <input type="radio" name="star" value="1">Absolutely Terrible
      <input type="radio" name="star" value="2">Sub-par
      <input type="radio" name="star" value="3">Good
      <input type="radio" name="star" value="4">Very Good
      <input type="radio" name="star" value="5">Amazing!
      </form>

      <textarea name="How was your experience?" rows="10" cols="70">Enter your review here! Be sure to be descriptive, "It was good" tells fellow connoisseurs almost nothing about the chef.</textarea>

      <div>
      <form onSubmit = {this.handleSubmit}>
      <input type="submit" className="review" value="Submit">  
      <input type="submit" className="noreview" value="I don't want to leave a review">
      </form>
      </div>
      </div>


    );
  }
  handleSubmit(event)
  {
    alert("SUBMITTED");
  }

}

export default review
