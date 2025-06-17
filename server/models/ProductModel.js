import Database from "../config/db.js"

export class ProductModel {

    static async getAllProductsByUser ({user_id}) {
        return await Database.query(
            `
                SELECT
                	product.id,
                    product.name AS product_name,
                    FORMAT(product.price, 2) AS price,
                    user.name AS user_name,
                    DATE_FORMAT(product.created_at, '%Y-%m-%d %H:%i:%s') AS created_at
                FROM
                    product
                        LEFT JOIN
                    user ON product.user_id = user.id
                WHERE
                    user_id = ?;

            `
            , [user_id]
        )
    }

    static async getProductById ({user_id, product_id}) {
        return await Database.query(
            `
                SELECT
                	product.id,
                    product.name AS product_name,
                    FORMAT(product.price, 2) AS price,
                    user.name AS user_name,
                    DATE_FORMAT(product.created_at, '%Y-%m-%d %H:%i:%s') AS created_at
                FROM
                    product
                        LEFT JOIN
                    user ON product.user_id = user.id
                WHERE
                    user_id = ? AND product.id = ?;

            `
            , [user_id, product_id]
        )
    }

    static async getDetailProductById ({user_id, product_id}) {
        return await Database.query(
            `
                SELECT
                	product.id,
                    product.description,
                    company.name AS company_name,
                    category.name AS category_name
                FROM
                    product
                        LEFT JOIN
                    company ON product.company_id = company.id
                        LEFT JOIN
                    category ON product.category_id = category.id
                WHERE
                    user_id = ? AND product.id = ?;
            `
            , [user_id, product_id]
        )
    }

    static async createProduct ({name, description, price, user_id, company_id, category_id}) {
        return await Database.query(
            `
                INSERT INTO
                    product (name, description, price, user_id, company_id, category_id)
                VALUES
                    (?, ?, ?, ?, ?, ?);
            `
            , [name, description, price, user_id, company_id, category_id]
        )
    }

    static async updateProduct ({name, description, price, company_id, category_id, product_id, user_id}) {
        return await Database.query(
            `
                UPDATE
                    product
                SET
                    name = ?,
                    description = ?,
                    price = ?,
                    company_id = ?,
                    category_id = ?
                WHERE
                    id = ? AND user_id = ?;
            `
            , [name, description, price, company_id, category_id, product_id, user_id]
        )
    }

    static async deleteProduct ({product_id, user_id}) {
        return await Database.query(
            `
                DELETE FROM
                    product
                WHERE
                    id = ? AND user_id = ?;
            `
            , [product_id, user_id]
        )
    }
}