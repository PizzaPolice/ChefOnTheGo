import React, {Component} from 'react';

class Chat extends Component
{
  render()
  {
    return(
      <div>
      <section className="chatmessages">	
      <section className="chatboxright">
      <p className="name">chef_name</p>
      <p className="message">I am your chef today. What can i do for you</p>
      </section>
      </section>


      <div className="chatinput" name="chatinput">
      <h3>Enter your chat message here</h3>
      <textarea cols="100" rows="10" class="chatbox"> </textarea>
      <button onclick={this.chat}>Chat!</button>
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
