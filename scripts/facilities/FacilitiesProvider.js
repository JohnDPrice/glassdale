let facilities = []

 export const useFacilities = () => {
     return facilities.slice()
 }

 export const getFacilities = () => {
     // Request the data
     return fetch("https://criminals.glassdale.us/facilities")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedFacilities => {
                console.table(parsedFacilities)
                facilities = parsedFacilities
            }
        )
 }