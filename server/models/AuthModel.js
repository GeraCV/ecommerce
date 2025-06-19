import Database from "../config/db.js"

export class AuthModel {
    static async logIn ({email}) {
        return Database.query(
            `
                SELECT
                    id,
                    name,
                    last_name,
                    second_last_name,
                    password
                FROM
                    ecommerce.user
                WHERE
                    email = ?;
            `
            , [email]
        )
    }
}