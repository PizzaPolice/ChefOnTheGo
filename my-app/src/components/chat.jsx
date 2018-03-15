import React, {Component} from 'react';
import '../style.css';

class Chat extends Component
{
  render()
  {
    return(
      <div>
        <div className="style">
      <section className="chatmessages">	
      <section className="chatboxright">
      <p className="name">chef_name</p>
      <p className="message">I am your chef today. What can i do for you?</p>
      </section>
      </section>
      <div className="chatinput" name="chatinput">
      <h4>Enter your message here</h4>
      <textarea cols="100" rows="10" className="chatbox"></textarea>
      
      <div class = "btn-group">
      <button onClick={this.chat}>Chat! </button>
      </div>
      </div>
      </div>
      </div>
    );
  }

  chat()
  {
    alert("CHATTING");
  }

}
export default Chat
