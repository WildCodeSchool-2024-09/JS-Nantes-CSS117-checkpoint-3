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
      "select * from boat order by coord_y, coord_x",
    );

    // Return the array of tiles
    return rows as Boat[];
  }

  async update(boatToUpdate: Partial<Boat>) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from boat order by coord_y, coord_x",
    );

    // your code here
    return 0;
  }

  async create(boatToUpdate: Partial<Boat>) {
    // your code here
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE boat SET coord_x= ?, coord_y= ? WHERE id= ?",
      [boatToUpdate.coord_x, boatToUpdate.coord_y, boatToUpdate.id],
    );
  }
  //   async update(boatToUpdate: Partial<Boat>) {
  //     const [result] = await databaseClient.query<Result>(
  //       "UPDATE boat SET coord_x= ?, coord_y= ? WHERE id= ?",
  //       [boatToUpdate.coord_x, boatToUpdate.coord_y, boatToUpdate.id],
  //     );
}

export default new BoatRepository();
