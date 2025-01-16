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
    const [rows] = await databaseClient.query<Rows>(
      "select * from boat order by coord_y, coord_x",
    );

    return rows as Boat[];
  }

  async update(boatToUpdate: Partial<Boat>) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE boat SET name = ?, coord_x = ?, coord_y = ? WHERE id = ?",
      [
        boatToUpdate.name,
        boatToUpdate.coord_x,
        boatToUpdate.coord_y,
        boatToUpdate.id,
      ],
    );
    return row.affectedRows;
  }
}

export default new BoatRepository();
