import { useState } from "react";
import { useGetAllCharactersQuery } from "../../services/rickAndMortyApi";
import style from "./AllCharactersPage.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../component/button";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCharactersQuery(page);

  return (
    <div className={style.allCharactersPage}>
      <h2>All characters</h2>
      <ul>
        {data?.results.map((el) => (
          <li key={el.id}>
            <Link to={`/character/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <Button onClick={() => setPage((p) => p - 1)}>prev</Button>
        <Button onClick={() => setPage((p) => p + 1)}>next</Button>
      </div>
    </div>
  );
};
