import sampic from './sampic.jpg';
import './App.css';
import LandingLink from '../LandingLink'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

/* Plan for landing page
- Make my static components
  - Make my background --DONE--
  - Make my fade circle and photo --DONE--
  - Make my circle buttons --DONEish--
  - Make my text headers
  - Make popup component
- Position components
  - fade circle on right
  - circle buttons with making id's 1-5 and variable to change which one is used
  - text headers on left
- Make components dynamic
  - make circle buttons change to stronger colour when mouseover
  - put links in circle buttons
  - 
*/

function App() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <div className='Landing-large-circle'>
        <img src={sampic} className="Landing-large-picture" alt="Samuel Wylie, smiling in a green raincoat" />
        </div>
        <LandingLink logo="linkedin"></LandingLink>
        <LandingLink logo="github"></LandingLink>
        <p>
          Samuel Wylie - Student of Code
        </p>
        
      </header>
    </div>
  )
}


export default App;
