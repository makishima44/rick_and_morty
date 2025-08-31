import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import { Button } from "../button";
import { Dropdown } from "../dropdown";

import s from "./FiltersSearchMenu.module.css";

type FiltersProps = {
  currentStatus: string | null;
  currentSpecies: string | null;
  currentGender: string | null;

  onStatusChange: (status: string) => void;
  onSpeciesChange: (status: string) => void;
  onGenderChange: (status: string) => void;
};

export const FiltersSearchMenu = ({ currentStatus, currentSpecies, currentGender, onStatusChange, onSpeciesChange, onGenderChange }: FiltersProps) => {
  const { data } = useGetAllCharactersQuery({ page: 1, status: null, species: null, gender: null });

  const statusOptions = [...new Set(data?.results.map((c) => c.status))];
  const speciesOptions = [...new Set(data?.results.map((c) => c.species))];
  const genderOptions = [...new Set(data?.results.map((c) => c.gender))];

  const clearFilters = () => {
    localStorage.removeItem("statusFilter");
    localStorage.removeItem("speciesFilter");
    localStorage.removeItem("genderFilter");

    onStatusChange("");
    onSpeciesChange("");
    onGenderChange("");
  };

  return (
    <div className={s.filtersBlock}>
      <Dropdown options={statusOptions} value={currentStatus} onSelect={onStatusChange} placeholder='select status' />
      <Dropdown options={speciesOptions} value={currentSpecies} onSelect={onSpeciesChange} placeholder='select species' />
      <Dropdown options={genderOptions} value={currentGender} onSelect={onGenderChange} placeholder='select gender' />

      <div className={s.buttonBackground}>
        <Button onClick={clearFilters}>clear filters</Button>
      </div>
    </div>
  );
};
