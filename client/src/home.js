import './home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="home-body">
            <div className="landing-header"></div>
            {//emergency button will do things 
            }
            <div className="emergency">Emergency</div>
            <div className="flex-container">
                <div className="unlocked">Section 1</div>
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