let notes = []

export const useNotes = () => {
    return notes.slice()
}

// Fetches Notes Array from local API
export const getNotes = () => {
    return fetch('http://localhost:7077/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

// Adds new note to Notes Array on local API 
export const saveNote = note => {
    return fetch('http://localhost:7077/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    // .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:7077/notes/${noteId}`, {
        method: "DELETE"
    })
}