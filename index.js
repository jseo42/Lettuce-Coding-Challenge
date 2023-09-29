document.addEventListener("DOMContentLoaded", () => {
  let currentDate = new Date().toISOString().slice(0, 10);
  const date = document.getElementById('date')
  date.value = currentDate;;
});
const resFormContainer = document.getElementById('form-container-res');
const customerFormContainer = document.getElementById('form-container-customer');
const reservation = document.getElementById('reservationDetails');
const customer = document.getElementById('customerDetails');
const success = document.getElementById('successMessage');
const closeBtn = document.getElementById('closeButton')


reservation.addEventListener('submit', (e) => {
  e.preventDefault();
  if (reservation.checkValidity()) {
    resFormContainer.classList.add('hidden');
    customerFormContainer.classList.remove('hidden');
  } else {
    alert('Please fill all required fields');
  }
});
customer.addEventListener('submit', (e) => {
  e.preventDefault();
  if (customer.checkValidity()) {
    customerFormContainer.classList.add('hidden')
    success.classList.remove('hidden');
  } else {
    alert('Please fill all required fields');
  }
});
closeBtn.addEventListener('click', () => {
  success.classList.add('hidden');
  resFormContainer.classList.remove('hidden');
  customer.reset();
});

function toggleNav() {
  const fullscreenNav = document.getElementById('fullscreenNav');
  const hamburgerIcon = document.getElementById('hamburger');
  hamburgerIcon.classList.toggle("active");
  fullscreenNav.style.display = fullscreenNav.style.display === "block" ? "none" : "block";
}


