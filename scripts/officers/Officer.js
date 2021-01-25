export function Officer(officerObject) {
    return `
    <section class="officer-card">
    <h2>${officerObject.name}</h2>
        <p>ID: ${officerObject.id}</p>
    </section>`
}