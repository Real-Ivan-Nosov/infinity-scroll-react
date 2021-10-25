import React, { Component } from 'react';
import LeftScroll from '../Components/LeftScroller';
import RightScroll from '../Components/RightScroller';
import PictureBoundary from '../Components/PictureBoundary';

class ScrollBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='scroll-boundary'>
               <LeftScroll />
               <PictureBoundary />
               <RightScroll /> 
            </div>
        )
    }
}

export default ScrollBoundary;