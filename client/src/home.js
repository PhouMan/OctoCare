import './home.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LockOff } from './images/LockOff.svg'
import { ReactComponent as LockOn } from './images/LockOn.png'

function Home(){
    return (
        <div className="home-body">
            <div className="landing-header"></div>
            {//emergency button will do things 
            }
            <button className="emergency">Emergency</button>
            <div className="flex-container">
                <button className="unlocked">
                    <LockOff width="24" height="24"/>Section 1
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 2
                </button>
                <button className="locked">Section 3</button>
                <button className="locked">Section 4</button>
                <button className="locked">Section 5</button>
                <button className="locked">Section 6</button>
                <button className="locked">Section 7</button>
                <button className="locked">Section 8</button>

            </div>
        </div>
    )
}

export{Home};