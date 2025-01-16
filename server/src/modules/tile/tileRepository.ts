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
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM tile");

    return rows as Tile[];
  }

  async readByCoordinates(coordX: number, coordY: number) {
    const [result] = await databaseClient.query<Rows>(
      "SELECT coord_x, coord_y FROM tile WHERE coord_x BETWEEN 0 AND 11 AND coord_y BETWEEN 0 AND 5",
      [coordX, coordY],
    );

    return result;
  }

  async getRandomIsland() {
    const [rows] = await databaseClient.query<Rows>(
      "select id from tile where type='island' order by rand() limit 1",
    );

    return rows[0] as Tile;
  }

  async hideTreasure(island: Tile) {
    const [result] = await databaseClient.query<Result>(
      `update tile set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [island.id],
    );

    return result.affectedRows;
  }
}

export default new TileRepository();
