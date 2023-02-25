const radio = document.getElementById('radio')
const notification = document.querySelectorAll('.notification')
const notificationLog = document.querySelector('.notifications-quantity')
const circle = document.querySelectorAll('.circle')

radio.addEventListener('click', function () {
    for (let i = 0; i < notification.length; i++) {
        if (radio.checked) {
            notification[i].classList.remove('new')
            notificationLog.classList.add('read')
            circle[i].classList.add('read')
        }
    }
})