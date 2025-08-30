import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import { Dropdown } from "../dropdown/Dropdown";
import s from "./Filtets.module.css";

type FiltersProps = {
  onStatusChange: (status: string) => void;
  onSpeciesChange: (status: string) => void;
  onGenderChange: (status: string) => void;
};

export const Filters = ({ onStatusChange, onSpeciesChange, onGenderChange }: FiltersProps) => {
  const { data } = useGetAllCharactersQuery({ page: 1, status: null, species: null, gender: null });

  const statusOptions = [...new Set(data?.results.map((c) => c.status))];
  const speciesOptions = [...new Set(data?.results.map((c) => c.species))];
  const genderOptions = [...new Set(data?.results.map((c) => c.gender))];
  console.log(speciesOptions);

  return (
    <div className={s.filtersBlock}>
      <Dropdown options={statusOptions} onSelect={onStatusChange} placeholder='select status' />
      <Dropdown options={speciesOptions} onSelect={onSpeciesChange} placeholder='select status' />
      <Dropdown options={genderOptions} onSelect={onGenderChange} placeholder='select status' />
    </div>
  );
};
