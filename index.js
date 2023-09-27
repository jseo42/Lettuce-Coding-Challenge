document.addEventListener("DOMContentLoaded", () => {
  let currentDate = new Date().toISOString().slice(0, 10);
  const date = document.getElementById('date')
  date.value = currentDate;;
  

  const form = document.getElementById('reservationForm')
  form.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(e);
  })
});


