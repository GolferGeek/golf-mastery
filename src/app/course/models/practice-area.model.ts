export enum PracticeAreaType {
  Range = 1,
  PuttingGreen = 2,
  SandTrap = 3,
  Par3Course = 4
}

export interface PracticeArea {
  id: string;
  name: string;
  type: PracticeAreaType;
  imageUrl: string;
}
