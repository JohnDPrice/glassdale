export function Criminal(criminalObject) {
    return `
    <section class="criminal-card">
    <h3>${criminalObject.name}</h3>
        <p>Age: ${criminalObject.age}</p
        <p>Crime: ${criminalObject.conviction}</p>
        <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>`
}