let convictions = []

 export const useConvictions = () => {
     return convictions.slice()
 }

 export const getConvictions = () => {
     // Request the data
     return fetch("https://criminals.glassdale.us/crimes")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
 }