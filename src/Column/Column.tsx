import { useState } from 'react';
import { AddCardButton } from './AddCardButton';
import './Column.css';
import { Card } from "../Card/Card"

export const Column: React.FunctionComponent<ColumnProps> = props => {

  const [titles, setTitles] = useState<Array<String>>([])
  
  const addCard = (response: any) => {
    var title: String = response.title;
    setTitles(titles.concat(title));
  }
  return (
    <div className="column">
      <h3>{props.headerName}</h3>
      {titles.map(function(title, i){
        return <Card title={title} key={i} />;
      })}
      <AddCardButton onSubmit={addCard}/>
    </div>
  );
}

export type ColumnProps = {
  headerName: string
}