import React, { Component } from "react";
import Title from './Title';
import Desc from './Desc';
import Content from './Content';
class Blogs extends Component {


    render() {
        return (
            <div>
                <Title title='恒欣傻逼' />
                <Desc desc = 'A short Description' />
                <Content content = 'this is content component ' />
            </div>
        );
    }
}

export default Blogs;