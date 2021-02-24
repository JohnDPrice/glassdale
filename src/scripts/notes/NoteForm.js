import {saveNote} from "./NoteDataProvider.js"
import {NoteList} from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

export const CriminalSelect = () => {
    getCriminals().then(() => {
        const criminalsArray = useCriminals()
        render(criminalsArray)
    })
}

const render = (criminal) => {
    contentTarget.innerHTML = `
        <div class="mb-3 row notes-form">
            <input type="text" class="form-control col" placeholder="Add a Note" id="note-text" />
            <input type="date" class="form-control col" id="note-date" />
            <select id="noteForm--criminal" class="criminalSelect">
                <option value="0">Please select a criminal</option>
                ${
                    criminal.map((currentCriminalInLoop) => {
                        const criminalName = currentCriminalInLoop.name
                        const criminalID = currentCriminalInLoop.id
                        return `<option value="${criminalID}">${criminalName}</option>`
                    })
                }
            </select>
            <div class="note-form-buttons">
            <button id="saveNote" class="btn btn-primary col-sm-2 ">Save Note</button>
            <button id="showNotes" class="btn btn-secondary col-sm-2">Show Notes</button>
            </div>
        </div>`
}

export const NoteForm = () => {
    getCriminals().then(() => {
        const criminalsArray = useCriminals()
        render(criminalsArray)
    })
}

// Handle browser-generated click event in component
const eventHub = document.querySelector(".noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log("You click the save note button")
        // Make a new object representation of a note
        const newNote = {
            text: document.querySelector("#note-text").value,
            date: document.querySelector("#note-date").value,
            criminalByID: document.querySelector("#noteForm--criminal").value,
        }
        console.log("This is a new note", newNote)
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList)
    }
})