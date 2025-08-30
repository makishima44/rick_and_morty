import { useState } from "react";
import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import s from "./AllCharactersPage.module.css";
import { Link } from "react-router-dom";
import { Pagination } from "../../component/pagination/Pagination";
import { Filters } from "../../component/header/Filters";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  const { data } = useGetAllCharactersQuery({ page, status: statusFilter, species: speciesFilter, gender: genderFilter });

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    setPage(1);
  };

  const handleSpeciesChange = (species: string) => {
    setSpeciesFilter(species);
    setPage(1);
  };

  const handleGenderChange = (gender: string) => {
    setGenderFilter(gender);
    setPage(1);
  };
  return (
    <div className={s.allCharactersPage}>
      <Filters onStatusChange={handleStatusChange} onSpeciesChange={handleSpeciesChange} onGenderChange={handleGenderChange} />
      <h2 className={s.title}>All characters</h2>
      <ul className={s.list}>
        {data?.results.map((el) => (
          <li key={el.id}>
            <Link to={`/character/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>

      {data && <Pagination currentPage={page} totalPages={data.info.pages} setPageChange={setPage} />}
    </div>
  );
};
