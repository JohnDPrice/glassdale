export function Criminal(criminalObject, facilities) {
     return `
    <div class="criminal col-sm-4 card text-center">
        <h3 class="card-title">${criminalObject.name}</h3>
        <div class="card-body">
            <p>Age: ${criminalObject.age}</p>
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Arrested By: ${criminalObject.arrestingOfficer}</p>
            <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <div class="">
                <h3>Facilities</h3>
                <ul class="facilities-list">
                    ${facilities
                      .map((f) => `<li class="facilities-list-item">${f.facilityName}</li>`)
                      .join("")}
                </ul>
            </div>
            <button class="btn btn-primary" id="associates--${criminalObject.id}" data-toggle="modal" data-target="myModal">Known Associates</button>
        </div>
    </div>`
}