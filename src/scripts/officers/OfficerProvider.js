let officers = []

 export const useOfficers = () => {
     return officers.slice()
 }

 export const getOfficers = () => {
     // Request the data
     return fetch("https://criminals.glassdale.us/officers")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedOfficers => {
                officers = parsedOfficers
            }
        )
 }