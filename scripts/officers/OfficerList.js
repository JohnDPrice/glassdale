import { getOfficers, useOfficers } from './OfficerProvider.js'
import {Officer} from "./Officer.js"

let officerContainer = document.querySelector(".officer-list")

export const OfficerList = (officerSelected) => {
    getOfficers().then(() => {
        let allTheOfficers = useOfficers();

        let officerListHTMLString = ""
        for (const currentOfficerInLoop of allTheOfficers) {
            officerListHTMLString += Officer(currentOfficerInLoop)
        }
        
        officerContainer.innerHTML = `<h2>Officers</h2>${officerListHTMLString}`
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    return OfficerList()
})