import React from "react"
import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode } from '@fortawesome/free-solid-svg-icons'
import SalsEats from "./projects/SalsEats"
import TrojanTodo from './projects/TrojanTodo'
import MazeSolver from "./projects/MazeSolver"

const Projects = () => (
  <div className={'w3-container w3-card w3-white w3-margin-bottom'}>
    <h2 className={'w3-text-grey w3-padding-16'}>
      <FontAwesomeIcon icon={faCode} pull={"left"} style={{color:"teal"}} />

      Projects
    </h2>
    <SalsEats/>
    <hr/>
    <TrojanTodo/>
    <hr/>
    <MazeSolver/>
  </div>
)

export default Projects