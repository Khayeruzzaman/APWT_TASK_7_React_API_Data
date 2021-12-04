import React,{Component} from "react";

class Contact extends Component{

    constructor(){
        super()
        this.state={
            message: "Details"
        }
    }

    changedMessage(){
        this.setState(
            {
                message: "Contact Number: +8801745508787"
            }
        )
    }

    render(){
        return(
            <div>
                <br/>
                <b>
                    <h4 onClick={()=>this.changedMessage()}>{this.state.message}</h4>
                </b>
            </div>
        )
    }
}

export default Contact;