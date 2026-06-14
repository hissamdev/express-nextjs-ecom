import { pool } from "../db/index.js";

const getUsers = async (req, res) => {
    try {
        await Promise.all(
            products.map((product) => {
                pool.query(`
                        INSERT INTO products ()
                    `);
            }),
        );

        res.status(200).json({
            success: true,
            message: "Created users table",
            data: {
                table: "dummyUser",
            },
        });
    } catch (e) {
        console.error(e);
    }
};

export default { getUsers };
