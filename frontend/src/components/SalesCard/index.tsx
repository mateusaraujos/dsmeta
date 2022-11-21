import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  // Pegar a data de 1 ano atrás.
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  // Estado para a data mínima.
  const [minDate, setMinDate] = useState(min);
  // Estado para a data máxima.
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]); // Tipagem

  // Fazer uma requisição no Back-end que está rodando no Heroku.
  useEffect(() => {
    const minimumDate = minDate.toISOString().slice(0, 10); // 0 ao 10 yyyy-MM-dd
    const maximumDate = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${minimumDate}&maxDate=${maximumDate}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [minDate, maxDate]); // useEffect roda de novo sempre que minDate ou maxDate mudar.

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Sales</h2>

      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            className="dsmeta-form-control"
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            className="dsmeta-form-control"
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="web992">ID</th>
              <th className="web576">Date</th>
              <th>Seller</th>
              <th className="web992">Visits</th>
              <th className="web992">Sales</th>
              <th>Total</th>
              <th>Notify</th>
            </tr>
          </thead>

          <tbody>
            {
              // Percorre a lista de Sales e permite fazer operações em cada sale. lista.map()
              sales.map((sale) => {
                return (
                  // Sempre tem que colocar um key em cada elemento.
                  <tr key={sale.id}>
                    <td className="web992">#{sale.id}</td>
                    <td className="web576">
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>{sale.sellerName}</td>
                    <td className="web992">{sale.visited}</td>
                    <td className="web992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="dsmeta-btn-container">
                        <NotificationButton saleId={sale.id} />
                      </div>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
