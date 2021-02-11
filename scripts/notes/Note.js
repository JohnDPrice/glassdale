// Function that builds and returns an HTML component representing a single note

export const Note = (note, criminal) => {
    return `
        <div class="note col-sm-3 card">
            <div class="note__text">${ note.text }</div>
            <div class="note__suspect">Suspect: ${ criminal.name }</div>
            <div class="note__date">Date: ${ note.date }</div>
        </div>
    `
}