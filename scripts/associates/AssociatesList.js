// import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
// import {Associate} from "./Associate.js"

// let associateContainer = document.querySelector(".associate-alibis-list")

// export const AssociateList = () => {
//     getCriminals().then(() => {
//         let allTheAssociates = useCriminals();

//         let associateListHTMLString = ""
//         for (const currentAssociateInLoop of allTheAssociates) {
//             associateListHTMLString += Associate(currentAssociateInLoop)
//         }
//         associateContainer.innerHTML = `<h2>Associates<h2>${associateListHTMLString}`
//     })
// }

// document.querySelector("#associate-alibi-link").addEventListener("click", () => {
//     return AssociateList()
// })