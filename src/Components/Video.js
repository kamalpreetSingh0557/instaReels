import React from 'react';
import './Video.css';
import ReactDOM from 'react-dom';
function Video(props){
    console.log(props.src);
    const handleClick = (e)=>{
        e.preventDefault();
        e.target.muted = !e.target.muted;
    }
    const handleScroll = (e)=>{
        // let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
        let next = ReactDOM.findDOMNode(e.target).parentNode;
        console.log(next);
        if(next){
            next.scrollIntoView();
            e.target.muted = true;
        }
    }
    return(
        <video src={props.src} onEnded={handleScroll} className ='videos-styling' muted="muted" onClick={handleClick} ></video>
    )
}

export default Video;