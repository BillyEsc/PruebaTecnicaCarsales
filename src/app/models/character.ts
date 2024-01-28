import { LocationReference } from "./location-reference";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationReference;
  location: LocationReference;
  image: string;
  episode: string[];
  created: string;
}

