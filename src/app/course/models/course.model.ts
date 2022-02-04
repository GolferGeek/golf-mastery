import { PracticeArea } from "./practice-area.model";
import { Tees } from "./tees.model";

export interface Course {
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  notes: string;
  practiceAreas?: PracticeArea[];
  tees?: Tees[]
}
