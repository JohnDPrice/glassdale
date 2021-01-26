import {CriminalList} from "./criminals/CriminalList.js"
import {OfficerList} from "./officers/OfficerList.js"
import {FacilityList} from "./facilities/FacilitiesList.js"
import {WitnessStatementList} from "./witness-statements/WitnessStatementList.js"



const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
  })
  

  darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })

  

