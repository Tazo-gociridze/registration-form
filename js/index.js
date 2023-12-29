
const hideShowPassword = document.querySelectorAll('.hideAndShow-password')
const allImg = document.querySelectorAll('img')

allImg.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})


function hiddenHideIcon(e, clickedPlace, parent, passwordInput) {
    if (clickedPlace.classList.contains('hide-icon')) {
        const showIcon = parent.querySelector('.show-icon')
        const passwordField = passwordInput.querySelector('.form-input')
        
        passwordField.setAttribute('type', 'text')
        
        showIcon.classList.add('active')
        showIcon.classList.remove('disactive')

        e.target.classList.add('disactive')
        e.target.classList.remove('active')

        passwordField.focus()
    }
}

function hiddenShowIcon(e, clickedPlace, parent, passwordInput) {
    if (clickedPlace.classList.contains('show-icon')) {
        const hideIcon = parent.querySelector('.hide-icon')
        const passwordField = passwordInput.querySelector('.form-input')

        passwordField.setAttribute('type', 'password')

        hideIcon.classList.add('active')
        hideIcon.classList.remove('disactive')

        e.target.classList.add('disactive')
        e.target.classList.remove('active')

        passwordField.focus()
    }
}

function changeInputType(e){
    const clickedPlace = e.target
    const parent = clickedPlace.closest('.hideAndShow-password')
    const passwordInput = parent.closest('.password-input')

    hiddenHideIcon(e, clickedPlace, parent, passwordInput)
    hiddenShowIcon(e, clickedPlace, parent, passwordInput)
}

hideShowPassword.forEach((item) => {
    item.addEventListener('click', (e) =>{changeInputType(e)})
})