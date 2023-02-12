import PropTypes from 'prop-types';
import { Row, TableData } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </Row>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
