function validate() {
    let PassedEmail = document.querySelector('#email');
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    PassedEmail.addEventListener('change', (e) => {
        if (reg.test(PassedEmail.value)) {
            e.target.removeAttribute('class');
            return;
        }
        e.target.className = 'error';
    })
}
