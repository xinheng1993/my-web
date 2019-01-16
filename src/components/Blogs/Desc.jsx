import React, { Component } from "react";

class Desc extends Component{


    render(){
        let desc = this.props.desc;
        return(
            <h6>
                {desc}
            </h6>
        );
    }
}

export default Desc;