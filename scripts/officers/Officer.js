export function Officer(officerObject) {
    return `
    <div class="col-sm-4 card">
        <h2 class="card-title">${officerObject.name}</h2>
    <div class="card-body">    
        <p>ID: ${officerObject.id}</p>
    </div>
    </div>`
}

{/* <div class="col-sm-4 card criminal-card">
        <h3 class="card-title">${criminalObject.name}</h3>
        <div class="card-body">
            <p>Age: ${criminalObject.age}</p>
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    </div> */}