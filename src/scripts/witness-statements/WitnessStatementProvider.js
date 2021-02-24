let witnessStatements = []

 export const useWitnessStatements = () => {
     return witnessStatements.slice()
 }

 export const getWitnessStatements = () => {
     // Request the data
     return fetch("https://criminals.glassdale.us/witnesses")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedWitnessStatements => {
                console.table(parsedWitnessStatements)
                witnessStatements = parsedWitnessStatements
            }
        )
 }