import { getNotes, useNotes } from "./NoteDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { Note } from "./Note.js";

// // Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".note-list")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".notes-container")

eventHub.addEventListener("click", eventObject => {
    if(eventObject.target.id === "showNotes"){
        console.log("You clicked the show notes button")
        NoteList()
    }
})


// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export function NoteList() {
    getNotes().then(() => {
            const allTheNotes = useNotes()

            getCriminals().then(() => {
            const allTheCriminals = useCriminals()

            const arrayOfNotesHTMLRepresentations = allTheNotes.map(note => {
                const criminal = allTheCriminals.find(criminal => criminal.id == note.criminalByID)

                const html = Note(note, criminal)

                return html
            })

            const stringOfAllRepresentations = arrayOfNotesHTMLRepresentations.join("")

            contentTarget.innerHTML = `<h2>Notes</h2>${stringOfAllRepresentations}`

            })
        })
}