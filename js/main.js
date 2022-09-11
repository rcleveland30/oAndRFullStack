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

// Landing page information
const gameName = document.querySelector('.game-name')
const gameLogo = document.querySelector('.game-logo')

const gameList = async() => {
    const apiData = await fetch('https://api.rawg.io/api/games?key=95016841632347e98a246750ba9e3d58')
    const jsonData = await apiData.json()
    const games = jsonData.results

    // for (let game of games) {
        const title = games.name;
        const cover = games.background_image;
        console.log(title)
    // }
}