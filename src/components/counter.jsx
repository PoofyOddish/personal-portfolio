import React, { useEffect, useState }  from "react";

// Click Counter
class ClickClack extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        size: 255,
        color:"rgb(255,255,255)",
        showShade: true,
        countDown: 11,
        buttonLock: false,
      }
    
    } 

    handleClick = () => {
      // Use updater function when new state is derived from old
        if (this.state.buttonLock) {
          return;
        }
        this.setState({buttonLock: true})
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    };

    componentDidUpdate(prevProps) {
      if(this.state.countDown === 0) {
        clearInterval(this.timerID);
      }
    }

    tick() {
      this.setState(prev => ({
        countDown: prev.countDown-1,
        size: prev.size - 25,
        color:`rgb(${this.state.size},${this.state.size},${this.state.size})`,
        showShade: this.state.countDown == 1 ? false : true ,
      }));
    }
  

    render() {
        //document.body.style.backgroundColor = `${this.state.color}`;
        //console.log(this.state.showShade)

        const ShadeBanner = () => {
          if (!this.state.showShade) {
            return null;
          }
        
          return (
            <div className = 'shade' 
              style={{backgroundColor: this.state.color}}>
            <div width="64" height="38">
            <button className="specialButton btn btn-dark" onClick={this.handleClick}  width="64" height="38">
              <div>{this.state.countDown === 11 ?
              "click me (:" :
              this.state.countDown}</div>
            </button> 
            </div>
          </div>
          );
        }

      return (
        <div className="store" style={{backgroundColor: this.state.color}}>
        < ShadeBanner />
        <iframe frameborder="0" src="https://itch.io/embed-upload/5146665?color=333333" allowfullscreen="" width="640" height="380">
                <a href="https://jserna.itch.io/hidden-vn">
                </a>
          </iframe>

        </div>
      );
    }
  }
  
export default ClickClack;