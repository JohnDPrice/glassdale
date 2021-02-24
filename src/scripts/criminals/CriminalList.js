import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"
import { getFacilities, useFacilities } from "../facilities/FacilitiesProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

let criminalContainer = document.querySelector(".criminal-list")

export const CriminalList = (convictionFilter, officerFilter) => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                let criminals = useCriminals()

                if(convictionFilter){
                    criminals = criminals.filter(currentCriminal => {
                        return currentCriminal.conviction === convictionFilter
                    })
                } else if(officerFilter){
                    criminals = criminals.filter(currentCriminal => {
                        return currentCriminal.arrestingOfficer === officerFilter
                    })
                }

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
    }
    
    const render = (criminalsToRender, allFacilities, allRelationships) => {
        // Step 1 - Iterate all criminals
        criminalContainer.innerHTML = criminalsToRender
          .map((criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(
              (cf) => cf.criminalId === criminalObject.id
            );
      
            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map((cf) => {
              const matchingFacilityObject = allFacilities.find(
                (facility) => facility.id === cf.facilityId
              );
              return matchingFacilityObject;
            });
      
            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities);
          })
          .join("");
      };



document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})
