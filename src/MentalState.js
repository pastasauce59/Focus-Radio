import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function MentalState(props) {
    const [count, setCount] = useState(0)

    let handlePrev = () => {
        if(count - 1 < 0){
            return
        }
        setCount(count - 1)
    }

    let handleNext = () => {
        if(count + 1 >= props.audio.audio.length){
            return
        }
        setCount(count + 1)
    }

    return (
        <div>
            <div className='home'>
            <Link to='/'>Home/Re-Focus</Link>
            </div>

            <h1>Current Mental State: {props.audio.state}</h1>
            <h4>Current Song: {props.audio.audio[count].title}</h4>
            <audio onEnded={handleNext} controls autoPlay='autoplay' src={props.audio.audio[count].src} type="audio/mpeg">
                Audio is not supported in your web browser.
            </audio>
            <div className='prev-next-btns'>
                <h4 onClick={handlePrev} className='prev-next'>⏪</h4>
                <h4 onClick={handleNext} className='prev-next'>⏩</h4>
            </div>
        </div>
    );
}

export default MentalState;