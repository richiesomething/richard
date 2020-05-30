import React from "react"
import '../../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Army = () => (
  <div className="w3-container">
    <h5 className="w3-opacity"><b>Gun Team Leader / 2nd Battalion 75th Ranger Regiment, US Army</b></h5>
    <h6 className="w3-text-teal">
      <FontAwesomeIcon icon={faCalendar} pull={"left"} />
      May 2019 - Aug 2019
    </h6>
    <ul>
      <li>Conducted day and night operations with the world's premier light infantry unit</li>
      <li>Maintained accountability of equipment in excess of $2,000,000 without loss</li>
      <li>Was responsible for the training and development of 2-5 Rangers at a time</li>
      <li>Deployed to Afghanistan (2013) in support of Operation Enduring Freedom</li>
      <li>Honors: Global War on Terror Medal, Afghan Campaign Medal, Ranger School, Ranger Assessment and Selection,
        Airborne</li>
    </ul>
  </div>
)

export default Army