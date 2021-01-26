import { getWitnessStatements, useWitnessStatements } from './WitnessStatementProvider.js'
import {WitnessStatement} from "./WitnessStatement.js"

let witnessStatementContainer = document.querySelector(".witness-statement-list")

export const WitnessStatementList = () => {
    getWitnessStatements().then(() => {
        let allTheStatements = useWitnessStatements();

        let statementListHTMLString = ""
        for (const currentStatementInLoop of allTheStatements) {
            statementListHTMLString += WitnessStatement(currentStatementInLoop)
        }
        
        witnessStatementContainer.innerHTML = `<h2>Witness Statements</h2>${statementListHTMLString}`
    })
}

document.querySelector("#witness-statements-nav-link").addEventListener("click", () => {
    return WitnessStatementList()
})