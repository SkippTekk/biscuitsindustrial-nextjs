/* JSON cannot parse BigInt, therefore this will allow for BigINT
    to be parsed as a string, instead of an int
*/

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = () => {
  return String(this);
};

interface ShipData {
  typeID: number;
  groupID: number;
  typeName: string;
  mass: number | undefined;
  volume: number;
  capacity: number;
  raceID: number;
  basePrice: BigInt | undefined;
  marketGroupID: number;
  categoryID: number;
  groupName: string;
  parentGroupID: number;
  marketGroupName: string;
  faction: string;
}

type Ship = {
  typeID: number;
  groupID: number;
  typeName: string;
  description: string | undefined;
  mass: number;
  volume: number;
  capacity: number;
  portionSize: number;
  raceID: number;
  basePrice: string;
  published: number;
  marketGroupID: number;
  iconID: number | null;
  soundID: number;
  graphicID: number;
};

type Material = {
  materialTypeID: number;
  quantity: number;
  typeName: string;
  activityID: number;
};

interface ShipBuildMaterial {
  ship: Ship[];
  material: Material[];
}

type BuildOptions = {
  bpoME: string;
  location: string;
  citadel: string;
  citRigs: string;
};
