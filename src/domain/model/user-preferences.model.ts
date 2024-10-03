import { GeoLocation } from "./geolocation.model";
import { Pokemon } from "./pokemon.model";
import { User } from "./user.model";

export type UserPreferences = {
  id?: string;
  user: User;
  geolocation: GeoLocation;
  pokemonList: Pokemon[];
};
