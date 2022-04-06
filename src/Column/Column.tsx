import { AddCardButton } from './AddCardButton';
import './Column.css';

export const Column: React.FunctionComponent<ColumnProps> = props => {
  return (
    <div className="column">
      <h3>{props.headerName}</h3>

      <AddCardButton />
    </div>
  );
}

export type ColumnProps = {
  headerName: string
}