import { useState } from "react";
import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import s from "./AllCharactersPage.module.css";
import { Link } from "react-router-dom";

import { Pagination } from "../../component/pagination/Pagination";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCharactersQuery(page);

  return (
    <div className={s.allCharactersPage}>
      <h2 className={s.title}>All characters</h2>
      <ul className={s.list}>
        {data?.results.map((el) => (
          <li key={el.id}>
            <Link to={`/character/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>

      {data && <Pagination currentPage={page} totalCount={data.info.count} setPageChange={setPage} />}
    </div>
  );
};
