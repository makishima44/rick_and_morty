import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../services/rickAndMortyApi";
import s from "./CharacterPage.module.css";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetCharacterByIdQuery(Number(id));

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !data) return <p>Ошибка загрузки</p>;

  return (
    <div className={s.characterPage}>
      <div className={s.card}>
        <h2>{data.name}</h2>
        <img src={data.image} alt={data.name} />
        <p>
          <span>Status:</span> {data.status}
        </p>
        <p>
          <span>Species:</span> {data.species}
        </p>
        <p>
          <span>Gender:</span> {data.gender}
        </p>
        <p>
          <span>Origin:</span> {data.origin.name}
        </p>
        <p>
          <span>Location:</span> {data.location.name}
        </p>
      </div>
    </div>
  );
};
