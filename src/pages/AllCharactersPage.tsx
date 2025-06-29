import { useState } from "react";
import { useGetAllCharactersQuery } from "../services/rickAndMortyApi";
import style from "./AllCharactersPage.module.css";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCharactersQuery(page);

  return (
    <div className={style.allCharactersPage}>
      <h2>All characters</h2>
      <ul>
        {data?.results.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>

      <div>
        <button onClick={() => setPage((p) => p - 1)}>prev</button>
        <button onClick={() => setPage((p) => p + 1)}>next</button>
      </div>
    </div>
  );
};
