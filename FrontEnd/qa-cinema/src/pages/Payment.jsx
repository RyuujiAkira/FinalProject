import { useEffect } from "react";

const Payment = () => {

    useEffect(function () {

        const buttonSettings = {

            // Set up the transaction\
            createOrder: function (data, actions) {

                return actions.order.create({

                    purchase_units: [{

                        amount: {

                            value: '9.99'
                        }
                    }]
                });
            },
            // Finalize the transaction\
            onApprove: function (data, actions) {

                return actions.order.capture().then(function (orderData) {

                    // Successful capture! For demo purposes:
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    var transaction = orderData.purchase_units[0].payments.captures[0];
                    alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
                });
            }
        };



        window.paypal.Buttons(buttonSettings).render('#paypal-button-container');

    }, []);

    return (

        <div id="paypal-button-container"></div>
    );
};

export default Payment;