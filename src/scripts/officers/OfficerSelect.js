/*
 *   OfficersSelect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
import { useOfficers, getOfficers } from "./OfficerProvider.js"
import {OfficerList} from "./OfficerList.js"
import {CriminalList} from "../criminals/CriminalList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officers")

export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers().then(() => {
    const officersArray = useOfficers()
    render(officersArray)
    })
}

const render = (officersCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map((currentOfficerInLoop) => {
                    const officerName = currentOfficerInLoop.name
                    return `<option id="officerSelect">${officerName}</option>`
                })
            }
        </select>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {
    

    if(eventObject.target.id === "officerSelect"){
        console.log("This is the officer that was selected: ", eventObject.target.value)

        CriminalList(eventObject.target.value)
    }
})