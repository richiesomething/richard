import React from "react"

const TrojanTodo = () => (
  <div className="w3-container">
    <h5 style={{color:"teal"}}><b>Trojan Todo</b></h5>
    <h6 className="w3-text-teal">Description:</h6>
    <p>
      Trojan Todo is an easy to use iOS app, that aims to allow the user to keep track of their class standing. The user
      can create classes
      and assign each class exam's and assignment's with their appropriate grade weight. After completion the user can
      input the grade received
      and the app will keep track of the users current weighted grade for each class. The user can also add other
      `todo's` to allow them to
      keep track of necessary tasks.
    </p>
    <h6 className="w3-text-teal">Languages, Frameworks, API's:</h6>
    <p>
      The front end design was written in swift while the backend was written in Java. The backend was used to validate
      login and signup
      forms as well as storing the data. To store the data we set up a database using MySQL which the servlets accessed
      with support of JDBC drivers.
      The database consisted of multiple tables linked with foreign keys to keep track of the users assignments and
      todo's.
    </p>
  </div>
)

export default TrojanTodo