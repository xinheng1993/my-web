import React, { Component } from "react";
import Title from './Title';
import Desc from './Desc';
import Content from './Content';
import Img from './Img';
import pkq from "../../assets/img/pkaqiu.png";


class Blogs extends Component {


    render() {
        return (
            <div className=''>
                <Title title='恒欣傻逼' />
                <Desc desc = 'A short Description' />
                <Img addr = {pkq}></Img>
                <Content content = 'asdljnvjksdnvljnsdvuoisnv;asefousfna;sfnasodfnoasfn' />
            </div>
        );
    }
}

export default Blogs;