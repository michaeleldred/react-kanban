import './Column.css';

export const Column: React.FunctionComponent<ColumnProps> = props => {
  return (
    <div className="column">
      <h3>{props.headerName}</h3>
      <button className="card">+</button>
    </div>
  );
}

export type ColumnProps = {
  headerName: string
}