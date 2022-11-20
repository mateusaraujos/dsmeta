import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Sales</h2>

      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker 
            className="dsmeta-form-control"
            selected={new Date()}
            onChange={(date: Date) => {}}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker 
            className="dsmeta-form-control"
            selected={new Date()}
            onChange={(date: Date) => {}}
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
            <tr>
              <td className="web992">#123</td>
              <td className="web576">08/04/2022</td>
              <td>Mateus</td>
              <td className="web992">15</td>
              <td className="web992">11</td>
              <td>R$ 55444.00</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="web992">#123</td>
              <td className="web576">08/04/2022</td>
              <td>Mateus</td>
              <td className="web992">15</td>
              <td className="web992">11</td>
              <td>R$ 55444.00</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="web992">#123</td>
              <td className="web576">08/04/2022</td>
              <td>Mateus</td>
              <td className="web992">15</td>
              <td className="web992">11</td>
              <td>R$ 55444.00</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;