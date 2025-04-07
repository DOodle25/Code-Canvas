import Navbar from "./navbar"
import MainContent from "./mainContent"
import circle1styles from "./circle1.module.css"
export default function Circle1({setIsLoggedIn}) {
    return (
        <div className={circle1styles['circle-1']}>
            <Navbar />
            <MainContent setIsLoggedIn={setIsLoggedIn}/>
        </div>
    );
}