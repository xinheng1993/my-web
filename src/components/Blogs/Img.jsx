import React, { Component } from "react";

class Img extends Component {


    render() {
        let addr = this.props.addr
        return (
            <div>
                 <img className='card-img-top' src={addr} alt='Card-pic' />

            </div>
        );
    }
}

export default Img;