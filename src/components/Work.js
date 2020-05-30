import React from "react"
import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import NorthrupGrumman from "./work/NorthrupGrumman"
import Ilinx from "./work/Ilinx"
import Army from "./work/Army"

const Work = () => (
  <div className={"w3-container w3-card w3-white w3-margin-bottom"}>
    <h2 className={'w3-text-grey w3-padding-16'}>
      <FontAwesomeIcon icon={ faBriefcase } pull={"left"} />
      Work Experience
    </h2>
    <Ilinx />
    <hr/>
    <NorthrupGrumman/>
    <hr/>
    <Army/>
  </div>
)

export default Work