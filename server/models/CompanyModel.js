import Database from "../config/db.js"

export class CompanyModel {

    static async getAllCompanies () {
        return await Database.query(
            `
                SELECT
                    id,
                    name
                FROM
                    company;

            `
        )
    }
}