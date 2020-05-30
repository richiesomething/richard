import React from "react"

const MazeSolver = () => (
  <div className="w3-container">
    <h5 style={{color:"teal"}}><b>Robotic Maze Solver</b></h5>
    <h6 className="w3-text-teal">Description:</h6>
    <p>
      The goal of this project was to have a robot find the most efficient path through a maze. The robot was given the
      goal coordinates
      but it was not given its own location or the layout of the maze. Thus it first had to use several techniques to
      self localize,
      then plan the best route to take given its current location and the goal state
    </p>
    <h6 className="w3-text-teal">Languages, Algorithms:</h6>
    <p>
      The robot and all algorithms were programmed using Python. We first tested the algorithms virtually using VREP
      then on an iRumba robot.
      The first task was to self localize. To do so we used a Particle Filtering Algorithm. We generated 1000 random
      particles on the maze which
      represented possible locations for the robot. Then as the robot moved particles not likely to be close to the
      actual position were removed
      and regenerated until the robot was localized. It then generated a rapidly exploring random tree to find the best
      route to the goal.
    </p>
  </div>
)

export default MazeSolver