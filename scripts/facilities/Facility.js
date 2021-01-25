export function Facility(facilityObject) {
    return `
    <section class="facility-card">
       <h3>${facilityObject.facilityName}</h3>
       <p>Security Level: ${facilityObject.securityLevel}</p>
       <p>Capacity: ${facilityObject.capacity}</p>
       <p>ID: ${facilityObject.id}</p>   
    </section>`
}
