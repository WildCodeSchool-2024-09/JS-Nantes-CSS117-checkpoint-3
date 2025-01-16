import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface game {
  id: number;
  name: string;
  tile: string;
}

class gameRepository {
  async readAll(where = {}) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from boat order by coord_y, coord_x",
    );

    return rows as game[];
  }
}

export default new gameRepository();
