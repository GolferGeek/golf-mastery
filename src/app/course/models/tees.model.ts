import { Hole } from "./hole.model";

export interface Side {
  id: string;
  name: string;
  holes: Hole[];
}

export interface Tees {
  id: string;
  courseId: string;
  color: string;
  distance: number;
  par: number;
  notes: string;
  sides: Side[];
}
