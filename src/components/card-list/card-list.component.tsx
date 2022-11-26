import { Monster } from "../../App";

import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListsProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListsProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
