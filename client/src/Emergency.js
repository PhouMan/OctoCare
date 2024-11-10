import './emergency.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from './images/Down Arrow Sm.svg'

function Emergency(){
    return (
		<div className="container">
			<div className="rectangle">
				<p>HEHE</p>
				<button className="arrow">
                    <Arrow width="24" height="24"/>
                </button>
			</div>
			<div className="rcorner1">
				<p>EMERGENCY PHONE</p>
			</div>
			<div className="rcorner2">
				<p>CPR START</p>
			</div>
			<div className="rcorner3">
				<p>QUICK TIPS!</p>
			</div>
		</div>
    )
}

export{Emergency};