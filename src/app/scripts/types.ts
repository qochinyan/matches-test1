export type Match = {
  homeTeam: Team;
  homeScore: number;
  awayTeam: Team;
  awayScore: number;
  status: statusButtonEnum;
  time: string;
  title: string;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Player = {
  username: string;
  kills: number;
};

// status button of the match
export enum statusButtonEnum {
  ongoing = "Ongoing",
  finished = "Finished",
  Scheduled = "Scheduled",
}
