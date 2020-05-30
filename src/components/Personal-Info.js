import React from "react"
import '../styles/styles.css'
import me from '../images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase, faHome, faEnvelope, faPhone, faCode, faAsterisk} from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = () => (
  <div className={'w3-white w3-text-grey w3-card-4'}>
    <div className={'w3-display-container'}>
      <img src={me} alt="me" id={'me'}/>
    </div>
    <div className={'w3-container'}>
      <h2>Richard Hernandez</h2>
      <p>
        <FontAwesomeIcon icon={faBriefcase} pull={"left"} />
        Computer Science, USC 2021
      </p>
      <p>
        <FontAwesomeIcon icon={faHome} pull={"left"} />
        Los Angeles, CA
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} pull={"left"} />
        Hern784@usc.edu
        <a href='mailto:hern784@usc.edu?&subject="From Website"'> Email!</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} pull={"left"} />
        (805) 766-0355
      </p>
      <hr/>

      <p className={'w3-large w3-text-theme'}>
        <FontAwesomeIcon icon={faCode} pull={"left"} style={{color:"teal"}} />
        <b>
          Languages
        </b>
      </p>
      <p>Java</p>
      <p>C++</p>
      <p>Javascript</p>
      <p>SQL</p>
      <p>Python</p>
      <hr/>

      <p>
        <FontAwesomeIcon icon={faAsterisk} pull={"left"} style={{color:"teal"}} />
        <b>
          Skills/Experience
        </b>
      </p>
      <p>React/node.js</p>
      <p>HTML/CSS/jQuery</p>
      <p>Database(SQL, NoSQL)</p>
      <p>iOS Development</p>
      <p>Game Development</p>
    </div>
  </div>
)

export default PersonalInfo