
export interface ScoreCard {
  teeSet: Tees[]
}

export interface Tees {
  color: string;
  distance: number;
  par: number;
  mensRating: number;
  womensRating: number;
  mensSlope: number;
  womensSlope: number;
  notes: string;
}
