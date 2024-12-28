document.addEventListener('DOMContentLoaded', () => {
    const paymentSelect = document.getElementById('payment');
    const cardInfo = document.getElementById('card-info');
    const upiInfo = document.getElementById('upi-info');
    const form = document.getElementById('purchaseForm');
    const transactionPopup = document.getElementById('transactionPopup');
    const thankYouPopup = document.getElementById('thankYouPopup');

    paymentSelect.addEventListener('change', (e) => {
        cardInfo.style.display = 'none';
        upiInfo.style.display = 'none';

        if (e.target.value === 'credit-card') {
            cardInfo.style.display = 'block';
        } else if (e.target.value === 'phone-pay' || e.target.value === 'google-pay') {
            upiInfo.style.display = 'block';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        transactionPopup.style.display = 'flex';

        setTimeout(() => {
            transactionPopup.style.display = 'none';
            thankYouPopup.style.display = 'flex';

            setTimeout(() => {
                thankYouPopup.style.display = 'none';
                form.reset();
                cardInfo.style.display = 'none';
                upiInfo.style.display = 'none';
            }, 2000);
        }, 2000);
    });
});

function goToHomePage() {
    window.location.href = 'fitness.html';
}
