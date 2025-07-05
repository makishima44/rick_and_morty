import { useState } from "react";
import { useGetAllCharactersQuery } from "../services/rickAndMortyApi";
import style from "./AllCharactersPage.module.css";
import { Character } from "../component/character";

export const AllCharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCharactersQuery(page);

  return (
    <div className={style.allCharactersPage}>
      <h2>All characters</h2>
      <ul>
        {data?.results.map((el) => {
          return <Character name={el.name} image={el.image} status={el.status} />;
        })}
      </ul>

      <div>
        <button onClick={() => setPage((p) => p - 1)}>prev</button>
        <button onClick={() => setPage((p) => p + 1)}>next</button>
      </div>
    </div>
  );
};
