import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"

let criminalContainer = document.querySelector(".criminal-list")

export const CriminalList = () => {
    getCriminals().then(() => {
        let allTheCriminals = useCriminals();

        let criminalListHTMLString = ""
        for (const currentCriminalInLoop of allTheCriminals) {
            criminalListHTMLString += Criminal(currentCriminalInLoop)
        }
        
        criminalContainer.innerHTML = `<h2>Criminals</h2>${criminalListHTMLString}`
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    return CriminalList()
})
