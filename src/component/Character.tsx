import style from "./Character.module.css";

type Props = {
  name: string;
  image: string;
  status: string;
};

export const Character = ({ image, name, status }: Props) => {
  return (
    <li className={style.character_block}>
      <span>{name}</span>
      <span>Status:{status}</span>
      <img src={image} alt="" />
    </li>
  );
};
