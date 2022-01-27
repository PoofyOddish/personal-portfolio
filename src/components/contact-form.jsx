import React, { Component } from "react";


class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
            nameValue: '',
            emailValue: '',
            bodyValue: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
  
    handleSubmit(event) {
      alert('Name: ' + this.state.nameValue +'\n'
      +'Email: ' + this.state.emailValue +'\n'
      +'Message: ' + this.state.bodyValue +'\n'
      +'\n cool thanks for the message i guess');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
              
              <input type="text" 
                className="form-control" 
                name="nameValue"
                
                value={this.state.nameValue} 
                onChange={this.handleChange}
                />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              
              <input type="email" 
                className="form-control" 
                name="emailValue"
                value={this.state.emailValue} 
                onChange={this.handleChange} />

              <div id="emailHelp" className="form-text">Please note I won't actually see this.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              
              <textarea 
                type="text" 
                className="form-control" 
                name="bodyValue"
                rows='3' 
                value={this.state.bodyValue}
                onChange={this.handleChange}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label">I confirm I know this isn't a real form.</label>
            </div>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default ContactForm;