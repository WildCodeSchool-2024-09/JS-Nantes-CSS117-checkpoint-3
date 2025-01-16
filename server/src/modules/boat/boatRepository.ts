import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Boat = {
  id: number;
  name: string;
  coord_x: number;
  coord_y: number;
};

class BoatRepository {
  async readAll(where: { name?: string } = {} as Boat) {
    if (where.name) {
      const [rows] = await databaseClient.query<Rows>(
        "SELECT boat.*, tile.type, tile.has_treasure FROM boat INNER JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y where name=?;",
        [where.name],
      );
      return rows as Boat[];
    }
    const [rows] = await databaseClient.query<Rows>(
      "SELECT boat.*, tile.type, tile.has_treasure FROM boat INNER JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y;",
    );

    return rows as Boat[];
  }

  async update(boatToUpdate: Partial<Boat>) {
    const { name, coord_x, coord_y, id } = boatToUpdate;
    const [row] = await databaseClient.query<Result>(
      "UPDATE boat SET name=?, coord_x=?, coord_y=? where id=?",
      [name, coord_x, coord_y, id],
    );
    return row.affectedRows;
  }
}

export default new BoatRepository();
