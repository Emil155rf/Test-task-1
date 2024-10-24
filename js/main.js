// кнопки для попапа
const openLogin = document.querySelector('.new-project')
const closeLogin = document.querySelector('.close-Btn')
const login = document.querySelector('.login')
const overlay = document.querySelector('.overlay')

// кнопка кружка
const toggleButton = document.querySelector('.toggle-btn')

// кнопки для клиент id 
const loginInputMain1 = document.getElementById('loginInputMain1')
const loginInputMain2 = document.getElementById('loginInputMain2')

// кнопка для загрузки 
const openProject = document.querySelector('.btn-1')
const loginBtn = document.querySelector('.login-btn')
const project = document.querySelector('.project')
const closeProject = document.querySelector('.pr-close-Btn')
const loader = document.getElementById('loader')
const overlay2 = document.querySelector('.overlay-2')

// кнопки для final 
const openFinal = document.querySelector('.save-button')
const final = document.querySelector('.final')
const projectBtn = document.querySelector('.project-btn')
const closeFinal = document.querySelector('.fn-close-Btn')
const overlay3 = document.querySelector('.overlay-3')




// Открытие попапа
openLogin.addEventListener('click', () => {
    login.style.display = 'block'
    overlay.style.display = 'block'
})

closeLogin.addEventListener('click', () => {
    login.style.display = 'none'
    overlay.style.display = 'none'
})



// project 
openProject.addEventListener('click', () => {
    loader.style.display = 'block'
    loginBtn.style.display = 'none'


    setTimeout(() => {
        login.style.display = 'none'
        overlay.style.display = 'none'
        project.style.display = 'block'
        overlay2.style.display = 'block'

        loader.style.display = 'none'
    }, 1000)
})

closeProject.addEventListener('click', () => {
    project.style.display = 'none'
    overlay2.style.display = 'none'
    loginBtn.style.display = 'flex'


})



// анимация кружка и открытие клиент id
let showSecondLogin = false

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    showSecondLogin = !showSecondLogin
    loginInputMain1.classList.toggle('active')
    loginInputMain2.classList.toggle('active')
})



// форма валидации 
const inputAll = document.querySelector('.project-input-main')
const myForm = document.getElementById('myForm')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let span = document.querySelector('.span-number')
let span2 = document.querySelector('.span-number-2')


let sub = document.querySelector('.save-button')

let test1 = false
let test2 = false


sub.onclick = function (e) {
    e.preventDefault()
    if (inp1.value.length <= 1) {
        notValid(span, 'Необходимо подключить проект')
        inp1.style.borderColor = 'red'
    } else {
        Valid(span, '')
        inp1.style.borderColor = '#E5E5EA'
        test1 = true
        console.log(test1)

    } if (inp2.value.length <= 1) {
        notValid(span2, 'Необходимо указать название проекта')
        inp2.style.borderColor = 'red'
    } else {
        Valid(span2, '')
        inp2.style.borderColor = '#E5E5EA'
        test2 = true
        console.log(test2)
    }


}

function validate(val1, val2) {
    return val1.test(val2)
}


function notValid(el, mess) {
    el.innerHTML = mess
}
function Valid(el, mess) {
    el.innerHTML = mess
}


// добавление нового option 
const projectSelect = document.querySelector('.sel1')
const addOptionButton = document.getElementById('add-option-button')
const newOptionInput = document.getElementById('new-option-input')
const newOptionNameInput = document.getElementById('new-option-name')
const confirmNewOptionButton = document.getElementById('confirm-new-option')

addOptionButton.addEventListener('click', () => {
    event.preventDefault()
    newOptionInput.style.display = 'block'
})

confirmNewOptionButton.addEventListener('click', () => {
    event.preventDefault()
    const newOptionName = newOptionNameInput.value.trim()

    if (newOptionName !== "") {
        const newOption = document.createElement('option')
        newOption.value = newOptionName
        newOption.text = newOptionName
        projectSelect.add(newOption)

        newOptionNameInput.value = ""
        newOptionInput.style.display = 'none'
    }
})


// final 
openFinal.addEventListener('click', () => {
    if (test1 === true && test2 === true) {
        projectBtn.style.display = 'none'
        project.style.display = 'none'
        overlay2.style.display = 'none'
        final.style.display = 'block'
        overlay3.style.display = 'block'

    }

})