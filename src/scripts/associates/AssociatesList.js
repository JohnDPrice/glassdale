import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"



export const AssociateList = (id) => {
        getCriminals().then(() => {

const alibiEventHub = document.querySelector(".alibi-event-listener")

alibiEventHub.addEventListener("click", (idObject) => {

    if(idObject.target.id.includes("associates--")){
        const idOfCriminalClicked = idObject.target.id.split("--").pop()
        const allTheCriminals = useCriminals()

        const matchingCriminals = allTheCriminals.find((singleCriminalInLoop) => {
            return singleCriminalInLoop.id === +idOfCriminalClicked
        })

        for (let i = 0; i < matchingCriminals.known_associates.length; i++) {
            document.querySelector(".associate-alibis-list").innerHTML += `
            <div class="known-associate col-md-12 card">
                <h4 class="card-title">Known Associate</h4>
                <p class="card-text">Name: ${matchingCriminals.known_associates[i].name}</p>
                <p class="card-text">Alibi: ${matchingCriminals.known_associates[i].alibi}</p>
            </div>`
        } 
    }
})
})
}

