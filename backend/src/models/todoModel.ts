import pool from '../config/db.js';

export const TodoModel = {
    getByUserId: async (userId: number) => {
        const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ?', [userId]);
        return rows;
    },

    getById: async (id: number, userId: number) => {
        const [rows]: any = await pool.query(
            'SELECT * FROM todos WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        return rows[0]; // Kembalikan 1 data, atau undefined jika tidak ditemukan
    },

    create: async (userId: number, task: string) => {
        const [result]: any = await pool.query(
            'INSERT INTO todos (user_id, task) VALUES (?, ?)',
            [userId, task]
        );
        return result.insertId;
    },

    // Update task atau status is_completed (partial update)
    update: async (id: number, task: string | undefined, isCompleted: boolean | undefined, userId: number) => {
        const fields: string[] = [];
        const values: any[] = [];

        if (task !== undefined) {
            fields.push('task = ?');
            values.push(task);
        }
        if (isCompleted !== undefined) {
            fields.push('is_completed = ?');
            values.push(isCompleted);
        }

        values.push(id, userId);

        const [result]: any = await pool.query(
            `UPDATE todos SET ${fields.join(', ')} WHERE id = ? AND user_id = ?`,
            values
        );
        return result.affectedRows;
    },

    // Hapus todo berdasarkan id dan userId
    delete: async (id: number, userId: number) => {
        const [result]: any = await pool.query(
            'DELETE FROM todos WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        return result.affectedRows;
    }
};
