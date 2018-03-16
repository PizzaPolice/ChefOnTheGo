import React, {Component} from 'react';
import '../style.css';

function ChatMessages(props)
{
  console.log(props);
  const messages = props.chat.map((message) =>
    <div key={message.id} id={message.id}>
      {message.body}<br/>
    </div>
  );
  return(messages);
}

class Chat extends Component
{
  constructor(props)
  {

    super(props);
    this.state = 
      {
        currId:0,
        messages:[]
      }
  }
  render()
  {
    return(
      <div>
        <div className="style">
      <section className="chatmessages">	
      <section className="chatboxright">
      <p className="message">I am your chef today. What can i do for you?</p>
      </section>
      <ChatMessages chat={this.state.messages}></ChatMessages>
      </section>
      <div className="chatinput" name="chatinput">
      <h4>Enter your message here</h4>
      <textarea id="chatbox" cols="100" rows="10" className="chatbox"></textarea>
      
      <div className = "btn-group">
      <button onClick={this.chat.bind(this)}>Chat! </button>
      </div>
      </div>
      </div>
      </div>
    );
  }

  chat()
  {
    //The list of messages
    var chat = this.state.messages;

    var msgId = this.state.currId;
    var msgBody = document.getElementById("chatbox").value;

    if (msgBody === "")
    {
      alert("Please enter a message before chatting");
      return;
    }
    chat.push({id:msgId,body:msgBody});
    this.setState(function () {
      return {
        messages: chat,
        currId: msgId + 1
      }
    }
    );

    document.getElementById("chatbox").value = "";

  }

}
export default Chat
