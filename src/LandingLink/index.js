import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <script src="https://kit.fontawesome.com/f31b73d6c9.js" crossorigin="anonymous"></script>
//icon={["fab", "github"]}
export default function LandingLink({ logo }) {
    return (<div className='Landing-small-circle'>
    <FontAwesomeIcon icon={["fab", logo]} className="Landing-icon" size="2x"/>
    </div>)
}