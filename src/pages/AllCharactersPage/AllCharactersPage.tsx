import { useEffect, useState } from "react";
import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import s from "./AllCharactersPage.module.css";
import { Link } from "react-router-dom";
import { Pagination } from "../../component/pagination/Pagination";
import { FiltersSearchMenu } from "../../component/filtersSearchMenu";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string | null>(() => localStorage.getItem("statusFilter"));
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(() => localStorage.getItem("speciesFilter"));
  const [genderFilter, setGenderFilter] = useState<string | null>(() => localStorage.getItem("genderFilter"));

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

  useEffect(() => {
    if (statusFilter) localStorage.setItem("statusFilter", statusFilter);
    else localStorage.removeItem("statusFilter");
    if (speciesFilter) localStorage.setItem("speciesFilter", speciesFilter);
    else localStorage.removeItem("speciesFilter");
    if (genderFilter) localStorage.setItem("genderFilter", genderFilter);
    else localStorage.removeItem("genderFilter");
  }, [statusFilter, speciesFilter, genderFilter]);

  return (
    <div className={s.allCharactersPage}>
      <div className={s.filters}>
        <FiltersSearchMenu
          currentStatus={statusFilter}
          currentSpecies={speciesFilter}
          currentGender={genderFilter}
          onStatusChange={handleStatusChange}
          onSpeciesChange={handleSpeciesChange}
          onGenderChange={handleGenderChange}
        />
      </div>

      <h2 className={s.title}>All characters</h2>
      <ul className={s.list}>
        {data?.results.map((el) => (
          <li className={s.item} key={el.id}>
            <Link to={`/character/${el.id}`}>
              <div className={s.card}>
                <p className={s.name}>{el.name}</p>
                <img className={s.img} src={el.image} alt='character' />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {data && <Pagination currentPage={page} totalPages={data.info.pages} setPageChange={setPage} />}
    </div>
  );
};
