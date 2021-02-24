export function Facility(facilityObject) {
    return `
    <div class="col-sm-4 card">
        <h3 class="card-title">${facilityObject.facilityName}</h3>
    <div class="card-body">
        <p>Security Level: ${facilityObject.securityLevel}</p>
        <p>Capacity: ${facilityObject.capacity}</p>
        <p>ID: ${facilityObject.id}</p>   
    </div>
    </div>`
}
