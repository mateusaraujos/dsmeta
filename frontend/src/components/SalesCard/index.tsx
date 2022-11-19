import NotificationButton from "../NotificationButton";

import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Sales</h2>

      <div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
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
