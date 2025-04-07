import Zigzag from "./zigzag"
import Support from "./support"
import Stats from "./stats"
import Features from "./features"
import Signuplogin from "./signuplogin"
import circle3styles from './circle3.module.css';
import Pricing from "./pricing"

export default function circle3({ setIsLoggedIn }) {
    return (
        <div className={circle3styles['circle-3']}>
            <Zigzag />
            <Support />
            <Stats />
            <Features />
            <Signuplogin setIsLoggedIn={setIsLoggedIn}/>
            <Pricing />
        </div>
    );
}