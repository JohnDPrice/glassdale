/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"
import {CriminalList} from "/scripts/criminals/CriminalList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
    const convictionsArray = useConvictions()
    render(convictionsArray)
    })
}

const render = (convictionsCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((currentConvictionInLoop) => {
                    const crimeName = currentConvictionInLoop.name
                    return `<option id="crimeSelect">${crimeName}</option>`
                })
            }
        </select>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {
    

    if(eventObject.target.id === "crimeSelect"){
        console.log("This is the crime that was selected: ", eventObject.target.value)

        CriminalList(eventObject.target.value)
    }
})