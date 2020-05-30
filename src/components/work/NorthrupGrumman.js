import React from "react"
import '../../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const NorthrupGrumman = () => (
  <div className="w3-container">
    <h5 className="w3-opacity"><b>Electrical Engineer Intern / Northrup Grumman</b></h5>
    <h6 className="w3-text-teal">
      <FontAwesomeIcon icon={faCalendar} pull={"left"} />
      May 2019 - Aug 2019,
      May 2020 - Current
    </h6>
    <ul>
      <li>Worked on an Electrical Engineering team to develop prototypes related to National Security</li>
      <li>Developed test procedures and reports to improve and optimize prototypes as well as prove of concepts for
        critical tasks</li>
      <li> Used Excel, Power Point, and Visio to create schematics of the entire prototype layout as well as identify
        supply needs and costs</li>
    </ul>
  </div>
)

export default NorthrupGrumman