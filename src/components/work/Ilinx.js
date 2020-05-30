import React from "react"
import '../../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Ilinx = () => (
  <div className="w3-container">
    <h5 className="w3-opacity"><b>Full Stack Developer Intern / Ilinx Gaming (startup)</b></h5>
    <h6 className="w3-text-teal">
      <FontAwesomeIcon icon={faCalendar} pull={"left"} />
      June 2019 - Sept 2019
    </h6>
    <ul>
      <li>Designed the landing page and improve existing pages using HTML/CSS and jQuery</li>
      <li>Used Django to improve web development and create easy reusable code</li>
      <li>Used Flask to develop User login and validation system.</li>
    </ul>
  </div>
)

export default Ilinx