import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, data, text}) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {data}</ListHeaderCell>
        </ListHeader>
      </thead>
      {
        data === "USD" ? <tbody >
        {rows.filter(i => i["&id"].includes(text) ).map((row) => (

          <ListRow key={row.key} >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.OrderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
          </ListRow>
        ))}
      </tbody> : data === "EUR" ? <tbody>
        {rows.filter(i => i["&id"].includes(text) ).map((row) => (

          <ListRow key={row.key}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.OrderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.EUR}</ListRowCell>
          </ListRow>
        ))}
      </tbody>: data === "GBP" ? <tbody>
        {rows.filter(i => i["&id"].includes(text) ).map((row) => (

          <ListRow key={row.key}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.OrderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.GBP}</ListRowCell>
          </ListRow>
        ))}
      </tbody> : <tbody>
        {rows.filter(i => i["&id"].includes(text) ).map((row) => (

          <ListRow key={row.key}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.OrderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.JPY}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
      }
      
    </table>
  );
};

export default List;
