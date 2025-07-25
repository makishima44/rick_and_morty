import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../services/rickAndMortyApi";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetCharacterByIdQuery(Number(id));

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !data) return <p>Ошибка загрузки</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Origin: {data.origin.name}</p>
      <p>Location: {data.location.name}</p>
    </div>
  );
};
