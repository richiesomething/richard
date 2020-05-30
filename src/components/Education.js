import React from "react"
import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Education = () => (
  <div className={'w3-container w3-card w3-white'}>
    <h2 className={'w3-text-grey w3-padding-16'} >
      <FontAwesomeIcon icon={faCertificate} pull={"left"} style={{color:"teal"}} />
      Education
    </h2>

    <div className="w3-container">
      <h5 className="w3-opacity">
        <b>University of Southern California</b>
      </h5>
      <p>
        <FontAwesomeIcon icon={faCalendar} pull={"left"} style={{color:"teal"}} />
        2018-2021
      </p>
      <p>Bachelors in Computer Science</p>
    </div>
    <hr/>
    <div className="w3-container">
      <h5 className="w3-opacity">
        <b>Ventura College</b>
      </h5>
      <p>
        <FontAwesomeIcon icon={faCalendar} pull={"left"} style={{color:"teal"}} />
        2015-2018
      </p>
      <p>Associates in Mathematics</p>
    </div>
    <hr/>
  </div>

)

export default Education