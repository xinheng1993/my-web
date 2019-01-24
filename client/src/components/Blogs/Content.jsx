import React, { Component } from "react";

class Content extends Component{

    render(){
        let content = this.props.content
        return(
            <p>
                {content}
            </p>
        );
    }
}

export default Content;