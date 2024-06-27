document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.querySelector('.follow-btn');
    const donateBtn = document.querySelector('.donate-btn');

    followBtn.addEventListener('click', () => {
        alert('You are now following V Marin!');
    });

    donateBtn.addEventListener('click', () => {
        alert('Thank you for your donation!');
    });
});
