export function Criminal(criminalObject) {
     return `
    <div class="col-sm-4 card">
        <h3 class="card-title">${criminalObject.name}</h3>
        <div class="card-body">
            <p>Age: ${criminalObject.age}</p>
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <button class="btn btn-primary" id="associates--${criminalObject.id}" data-toggle="modal" data-target="myModal">Known Associates</button>
        </div>
    </div>`
}