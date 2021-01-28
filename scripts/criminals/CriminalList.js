import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"

let criminalContainer = document.querySelector(".criminal-list")

export const CriminalList = (convictionSelected) => {
    getCriminals().then(() => {
        let criminalsToPrint = useCriminals();

        // If we get input from the convicitons filter, filter our criminals so that we only see ones with the conviction
        if(convictionSelected){
            criminalsToPrint = criminalsToPrint.filter(currentCriminalInLoop => {
                return currentCriminalInLoop.conviction === convictionSelected
            })
        }
        
        let criminalListHTMLString = ""
        for (const currentCriminalInLoop of criminalsToPrint) {
            criminalListHTMLString += Criminal(currentCriminalInLoop)
        }
        
        criminalContainer.innerHTML = `<h2>Criminals</h2>${criminalListHTMLString}`
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    return CriminalList()
})
