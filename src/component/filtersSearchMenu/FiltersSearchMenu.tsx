import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import { Dropdown } from "../dropdown";

import s from "./FiltersSearchMenu.module.css";

type FiltersProps = {
  onStatusChange: (status: string) => void;
  onSpeciesChange: (status: string) => void;
  onGenderChange: (status: string) => void;
};

export const FiltersSearchMenu = ({ onStatusChange, onSpeciesChange, onGenderChange }: FiltersProps) => {
  const { data } = useGetAllCharactersQuery({ page: 1, status: null, species: null, gender: null });

  const statusOptions = [...new Set(data?.results.map((c) => c.status))];
  const speciesOptions = [...new Set(data?.results.map((c) => c.species))];
  const genderOptions = [...new Set(data?.results.map((c) => c.gender))];

  return (
    <div className={s.filtersBlock}>
      <Dropdown options={statusOptions} onSelect={onStatusChange} placeholder='select status' />
      <Dropdown options={speciesOptions} onSelect={onSpeciesChange} placeholder='select species' />
      <Dropdown options={genderOptions} onSelect={onGenderChange} placeholder='select gender' />
    </div>
  );
};
