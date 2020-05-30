import React from "react"
import '../styles/styles.css'
import PersonalInfo from "./Personal-Info"
import Education from "./Education"

const left = () => (
  <div className={'w3-white w3-text-grey w3-card-4'}>
    <PersonalInfo/>
    <br/>
    <Education/>
  </div>
)

export default left