import { LocationType } from "./Location.type";
import { PokemonItemType } from "./PokemonItem.type";
import { UserInformationtype } from "./UserInformation.type";

export type UserPreferencesType = {
  pokemonList: PokemonItemType[];
  userInformation: UserInformationtype;
  location: LocationType;
};
