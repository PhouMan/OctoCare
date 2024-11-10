import './home.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LockOff } from './images/LockOff.svg'
import { ReactComponent as LockOn } from './images/LockOn.svg'
import { ReactComponent as Octo } from './images/AltmanMascot1.svg'
import { ReactComponent as Settings } from './images/SettingsSparkle.svg'
import { ReactComponent as Disclaimer } from './images/Disclaimer.svg'

function Home(){
    return (
        <div className="home-body">
            <div>
                <div className="landing-header">  
                    <Octo width="150" height="120"/> 
                    OctoCare
                </div>
            </div>
            {//emergency button will do things 
            }
            <Link to='/emergency'>
             <button className="emergency">Emergency</button>
            </Link>
            <div className="flex-container">
                <button className="unlocked">
                    <LockOff width="24" height="24"/>Section 1
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 2
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 3
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 4
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 5
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 6
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 7
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section 8
                </button>
                <div className="footer">
                    <Disclaimer width="26" height="26"/>
                    Disclaimer: this DOES NOT count as a certification
                </div>
            </div>
            
        </div>
    )
}

export{Home};