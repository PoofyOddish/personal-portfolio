import * as React from "react";
import ClickClack from "../../components/counter";



class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            theme: 'normal',
        }

        //this.handleCallback = this.handleCallback.bind(this);
    }

   /* handleCallback = (childData) => {
        this.setState({theme: childData});
        this.props.parentCallback(this.state.theme);
    }*/

    /*componentDidUpdate(prevProps) {
        if(this.props.theme != prevProps.theme)
            {
                this.props.parentCallback(this.props.theme);
            }
    }*/

    render () {
        //console.log(this.state.theme)
        const {theme} = this.state;

        return (
            <div>
                
                <div>
                    < ClickClack  />
                </div>
            </div>
        );
};

}

export default Store;