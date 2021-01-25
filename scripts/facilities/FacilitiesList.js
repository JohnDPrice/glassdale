import { getFacilities, useFacilities } from './FacilitiesProvider.js'
import {Facility} from "./Facility.js"

let facilityContainer = document.querySelector(".facility-list")

export const FacilityList = () => {
    getFacilities().then(() => {
        let allTheFacilities = useFacilities();

        let facilityListHTMLString = ""
        for (const currentFacilityInLoop of allTheFacilities) {
            facilityListHTMLString += Facility(currentFacilityInLoop)
        }
        
        facilityContainer.innerHTML = `${facilityListHTMLString}`
    })
}