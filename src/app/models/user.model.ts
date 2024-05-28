import { ClubCombinationModel } from "./club-combination.model";
import { ClubModel } from "./club.model";
import { CourseModel } from "./course/course.model";


export interface UserModel {
  id: string;
  email: string;
  userName: string;
  gender: string;
  state: string;
  picture: string;
  handicap: number;
  favoriteCourses: CourseModel[];
  clubs: ClubModel[];
  clubCombinations: ClubCombinationModel[];
  isAdministrator: boolean;
}
