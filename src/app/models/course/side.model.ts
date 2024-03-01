import { HoleModel } from "./hole.model";

export interface SideModel {
  name: string;
  totalYards: number;
  holes: HoleModel[];
}
