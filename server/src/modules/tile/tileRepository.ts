import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Tile = {
  id: number;
  type: string;
  coord_x: number;
  coord_y: number;
  has_treasure: boolean;
};

class TileRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all tiles from the "tile" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from tile order by coord_y, coord_x",
    );

    // Return the array of tiles
    return rows as Tile[];
  }
}
export default new TileRepository();
