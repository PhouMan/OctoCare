import './emergency.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from './images/Down Arrow Sm.svg';
import { ReactComponent as Phone } from './images/Phone Ringing.svg';
import { ReactComponent as Exclamation } from './images/exclaim.svg';
import { ReactComponent as Clock } from './images/Clock.svg';
import { ReactComponent as Settings } from './images/Settings Sparkle.svg';

function Emergency(){
	
	
    return (
		<div className="container">
			<div className="rectangle">
				<button >
					<Arrow width="24" height="24"/>
					<div className="all-text">Emergency</div>
				</button>
				<button className="button-gear">
					<Settings width="24" height="24"/>
				</button>
			</div>
			<div className="rcorner1">
				<div className="all-text">EMERGENCY PHONE<br /><br />In case of emergency, press the phone to call Emergency Services</div>
				<button className="button-phone">
					<Phone width="100" height="100"/>
				</button>
			</div>
			<div className="rcorner2">
				<div className="band">
					<button className="button-clock">
					<Clock width="100" height="100"/>
					</button>
					<div className="all-text">CPR TIMER START</div>
				</div>
			</div>
			<div className="rcorner3">
				<div className="all-text">QUICK TIPS!</div>
				<button className="button-ex">
				<Exclamation width="100" height="100"/>
				</button>
			</div>
		</div>
    )
}

export{Emergency};