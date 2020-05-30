import React from "react"
import '../../styles/styles.css'

const SalsEats = () => (
  <div className={'w3-container'}>
    <h4 style={{color:"teal"}}><b>Sal's Eats</b></h4>
    <h6 className="w3-text-teal">Description:</h6>
    <p>
      Sal's Eats in a web application used for finding your favorite restaurants close by. It allows you to search for a
      type of food or
      for a specific restaurant of your choice. You can also sort by closest, highest rating and more. You can use it as
      a guest or create
      an account for keeping track of your favorite places.
    </p>
    <h6 className="w3-text-teal">Languages, Frameworks, API's:</h6>
    <p>
      The frontend design was written in HTML/CSS and jQuery was added to handle events. The backend consists of
      servlets written in Java
      and are called using AJAX. The backend takes care of validating login or signup forms as well as calling the Yelp
      API. It also sorts the
      response dynamically on the frontend. Also used is the Google Maps API for setting your search location and the
      Google Sign In API
      for easy signup and login.
    </p>
  </div>
)

export default SalsEats