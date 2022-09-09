const logIn = document.querySelector('.login-form')
const logInButton = document.getElementById('submit-log-in')
const loginModal = document.getElementById('loginModal') //modal element
const modalButton = document.getElementById('modalButton') // open modal
const closeButton = document.getElementsByClassName('closeButton')[0] //close modal


//modal click for open
modalButton.addEventListener('click', openModal)

//modal click for close
closeButton.addEventListener('click', closeModal)

//outside click
window.addEventListener('click', clickOutside)

// open modal function
function openModal(){
    loginModal.style.display = 'block'
}
// close modal function
function closeModal(){
    loginModal.style.display = 'none'
}

function clickOutside(e){
    if(e.target == loginModal){
        loginModal.style.display = 'none'
    }
}


// const handleSubmit = e => {
//     console.log('he')
//         e.preventDefault()
//         const data = new FormData(e.target)
//         const stringified = stringifyFormData(data)
//         console.log(stringified)
//         const userInput = JSON.parse(stringified)

// };

//     logIn.addEventListener('submit', handleSubmit);

// function stringifyFormData(fd) {
//     const data = {}
//     for (let key of fd.keys()) {
//         if (data[key]) {
//             data[key] = fd.getAll(key)
//         } else {
//             data[key] = fd.get(key)
//         }
//     }
//     return JSON.stringify(data, null, 4)
// }

