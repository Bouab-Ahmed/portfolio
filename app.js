(function () {
  [...document.querySelectorAll('.control')].forEach((button) => {
    button.addEventListener('click', function () {
      document.querySelector('.active-btn').classList.remove('active-btn');
      this.classList.add('active-btn');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(button.dataset.id).classList.add('active');
    });
  });
  document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
})();
const submitForm = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  window.location.href =
    'mailto:bouab.ahmed757@gmail.com?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message
    );
};

document.getElementById('contactForm').addEventListener('submit', submitForm);