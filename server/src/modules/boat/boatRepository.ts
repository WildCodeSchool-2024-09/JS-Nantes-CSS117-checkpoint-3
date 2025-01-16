import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Boat = {
  id: number;
  name: string;
  coord_x: number;
  coord_y: number;
};

class BoatRepository {
  async readAll(where?: { name: string }) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const params = [];
    let query =
      "SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure FROM boat JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y";
    if (where) {
      query += " WHERE name = ?";
      params.push(where.name);
    }
    const [rows] = await databaseClient.query<Rows>(query, params);

    // Return the array of tiles
    return rows as Boat[];
  }

  async update(boatToUpdate: Partial<Boat>) {
    const query = "update boat set coord_x = ?, coord_y = ? where id = ?";
    const [result] = await databaseClient.query<Result>(query, [
      boatToUpdate.coord_x,
      boatToUpdate.coord_y,
      boatToUpdate.id,
    ]);
    return result.affectedRows;
  }
}

export default new BoatRepository();
