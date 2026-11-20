// Pledge form demonstration: no data is sent or saved.
// The unique form ID allows this script to skip other pages safely.
const pledgeForm = document.getElementById('pledge-form');

if (pledgeForm) {
  pledgeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Keep the visitor on this page.
    const selected = pledgeForm.querySelectorAll('input[name="pledge"]:checked');
    const message = document.getElementById('pledge-message');
    if (selected.length === 0) {
      message.textContent = 'Please select at least one action before submitting.';
    } else {
      message.textContent = 'Thank you for choosing an action to help protect our planet!';
    }
  });
}
