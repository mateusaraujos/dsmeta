// Importando imagem do ícone para poder usá-la.
import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

// Colocar os dados que o componente NotificationButton vai receber.
type Props = {
  saleId: number;
};

// Função para enviar notificação para o celular ao clicar no botão.
function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((responde) => {
    toast.info("SMS enviado com sucesso!"); 
  });
}

function NotificationButton({ saleId }: Props) {
  // Quando o botão for clicado, vai rodar a função handleClick(saleId);
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notify" />
    </div>
  );
}

export default NotificationButton;
