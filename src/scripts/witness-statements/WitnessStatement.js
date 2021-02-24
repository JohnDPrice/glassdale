export function WitnessStatement(witnessStatementObject) {
    return `
    <div class="col-sm-4 card">
        <h2 class="card-title">Name: ${witnessStatementObject.name}</h2>
    <div class="card-body">    
        <p>Statements: ${witnessStatementObject.statements}</p>
    </div>
    </div>`
}