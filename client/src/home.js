import './home.css';
import { Link } from 'react-router-dom';
import { LockOff } from './images/LockOff.svg'

function Home(){
    return (
        <div className="home-body">
            <div className="landing-header"></div>
            {//emergency button will do things 
            }
            <button className="emergency">Emergency</button>
            <div className="flex-container">
            
                <div className="unlocked">Section 1
                    <img src={LockOff} width="100" height="100"></img>
                </div>
                <div className="locked">Section 2</div>
                <div className="locked">Section 3</div>
                <div className="locked">Section 4</div>
                <div className="locked">Section 5</div>
                <div className="locked">Section 6</div>
                <div className="locked">Section 7</div>
                <div className="locked">Section 8</div>

            </div>
        </div>
    )
}

export{Home};