import { SideModel } from './side.model';
import { TeeboxModel } from './teebox.model';

export interface CourseModel {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  teeBoxes: TeeboxModel[];
  sides: SideModel[];
}
