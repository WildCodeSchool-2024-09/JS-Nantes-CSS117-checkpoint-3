import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Boat = {
  id: number;
  name: string;
  coord_x: number;
  coord_y: number;
};

class BoatRepository {
  async readAll(where: { name?: string } = {}) {
    if (where.name) {
      const [rows] = await databaseClient.query<Rows>(
        "select * from boat join tile on boat.id = tile.id WHERE name = ?",
        [where.name],
      );
      return rows as Boat[];
    }

    const [rows] = await databaseClient.query<Rows>(
      "select * from boat join tile on boat.id = tile.id",
    );
    return rows as Boat[];
  }

  async update(boatToUpdate: Partial<Boat>) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE boat SET name = ?, coord_x = ?, coord_y = ? WHERE id = ?",
      [
        boatToUpdate.name,
        boatToUpdate.coord_x,
        boatToUpdate.coord_y,
        boatToUpdate.id,
      ],
    );

    return result.affectedRows;
  }
}

export default new BoatRepository();
