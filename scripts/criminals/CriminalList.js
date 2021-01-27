import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"

let criminalContainer = document.querySelector(".criminal-list")

export const CriminalList = (convictionSelected) => {
    getCriminals().then(() => {
        let allTheCriminals = useCriminals();

        let criminalListHTMLString = ""

        // If we get input from the convicitons filter, filter our criminals so that we only see ones with the conviction
            let criminals = allTheCriminals.filter(currentCriminalInLoop => {
                if (currentCriminalInLoop.conviction === convictionSelected) {
                    return true
                }  
                    return false  
            })
        

        for (const currentCriminalInLoop of criminals) {
            criminalListHTMLString += Criminal(currentCriminalInLoop)
        }
        
        criminalContainer.innerHTML = `<h2>Criminals</h2>${criminalListHTMLString}`
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    return CriminalList()
})
