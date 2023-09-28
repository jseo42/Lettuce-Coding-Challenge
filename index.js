document.addEventListener("DOMContentLoaded", () => {
  let currentDate = new Date().toISOString().slice(0, 10);
  const date = document.getElementById('date')
  date.value = currentDate;;
});

const reservation = document.getElementById('reservationDetails');
const customer = document.getElementById('customerDetails');
const success = document.getElementById('successMessage');
const closeBtn = document.getElementById('closeButton')


reservation.addEventListener('submit', (e) => {
  e.preventDefault();
  if (reservation.checkValidity()) {
    reservation.classList.add('hidden');
    customer.classList.remove('hidden');
  } else {
    alert('Please fill all required fields');
  }
});
customer.addEventListener('submit', (e) => {
  e.preventDefault();
  if (customer.checkValidity()) {
    customer.classList.add('hidden')
    success.classList.remove('hidden');
  } else {
    alert('Please fill all required fields');
  }
});
closeBtn.addEventListener('click', () => {
  success.classList.add('hidden');
  reservation.classList.remove('hidden');
  customer.reset();
});

function toggleNav() {
  const fullscreenNav = document.getElementById('fullscreenNav');
  const hamburgerIcon = document.getElementById('hamburger');
  hamburgerIcon.classList.toggle("active");
  fullscreenNav.style.display = fullscreenNav.style.display === "block" ? "none" : "block";
}


