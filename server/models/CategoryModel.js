import Database from "../config/db.js"

export class CategoryModel {

    static async getAllCategories () {
        return await Database.query(
            `
                SELECT
                    id,
                    name
                FROM
                    category;

            `
        )
    }
}