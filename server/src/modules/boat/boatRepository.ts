import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Boat = {
  id: number;
  name: string;
  coord_x: number;
  coord_y: number;
};

class BoatRepository {
  async readAll(where = {}) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from boat order by coord_y, coord_x, name, id",
    );

    // Return the array of tiles
    return rows as Boat[];
  }

  async update(boats: Partial<Boat>) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE BOAT SET name = ?, coord_y = ?, coord_x = ? WHERE id = ?",
      [boats.name, boats.coord_y, boats.coord_x, boats.id],
    );
    return row.affectedRows;
  }
}

export default new BoatRepository();
