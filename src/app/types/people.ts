export interface IPerson {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: KnownFor[];
}

interface KnownFor {
  backdrop_path: string;
  id: number;
  name?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: Date;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: Date;
  video?: boolean;
}
