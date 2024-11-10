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
            <Link to="/section1">
                <button className="unlocked">
                    <LockOff width="24" height="24"/>Section I
                </button>
            </Link>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section II
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section III
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section IV
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section V
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section VI
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section VII
                </button>
                <button className="locked">
                    <LockOn width="24" height="24"/>Section VIII
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