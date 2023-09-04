import { Schema, ArraySchema, type } from "@colyseus/schema";
import { Province } from "./Province";

export class Player extends Schema {
  @type("string") playerId: string;
  @type("string") name: string;
  @type("boolean") connected: boolean = true;
  @type("boolean") readyToStart: boolean = false;
  @type([Province]) provinces = new ArraySchema<Province>();
  @type("number") playerNumber = -1;

  constructor(playerId: string, playerNumber: number) {
    super();
    this.playerId = playerId;
    this.playerNumber = playerNumber;
    this.name = playerId;
  }
}
