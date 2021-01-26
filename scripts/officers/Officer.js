export function Officer(officerObject) {
    return `
    <div class="col-sm-4 card">
        <h2 class="card-title">${officerObject.name}</h2>
    <div class="card-body">    
        <p>ID: ${officerObject.id}</p>
    </div>
    </div>`
}