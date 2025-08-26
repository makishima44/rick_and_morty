import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import { Dropdown } from "../dropdown/Dropdown";

type FiltersProps = {
  onStatusChange: (status: string) => void;
};

export const Filters = ({ onStatusChange }: FiltersProps) => {
  const { data } = useGetAllCharactersQuery({ page: 1, status: null });

  const statusOptions = [...new Set(data?.results.map((c) => c.status))];

  return (
    <div>
      <Dropdown options={statusOptions} onSelect={onStatusChange} placeholder='select status' />
    </div>
  );
};
