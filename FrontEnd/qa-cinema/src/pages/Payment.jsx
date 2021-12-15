import { useEffect } from "react";
import "../resources/css/payment.css";
const Payment = () => {
  useEffect(function () {
    const buttonSettings = {
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "9.99",
              },
            },
          ],
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          var transaction = orderData.purchase_units[0].payments.captures[0];
          alert(
            "Transaction " +
              transaction.status +
              ": " +
              transaction.id +
              "\n\nSee console for all available details"
          );
        });
      },
    };

    window.paypal.Buttons(buttonSettings).render("#paypal-button-container");
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default Payment;
