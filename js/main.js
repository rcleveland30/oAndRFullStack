const logIn = document.querySelector('.login-form'),
logInButton = document.getElementById('submit-log-in'),
loginModal = document.getElementById('loginModal'), //modal element
modalButton = document.getElementById('modalButton'), // open modal
closeButton = document.getElementsByClassName('closeButton')[0], //close modal
contentDisplay = document.querySelector('.page-contain'),
gamesList = document.querySelector('#games-list'),
searchBtn = document.queryCommandIndeterm('.search.btn'),
subRev = document.querySelector('#submit-review')

function buildListItem(content) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="games/${content.slug}">${content.name}</a>
    `;
    return li;
}

// Landing page information
const gameList = async() => {
    const apiData = await fetch('https://api.rawg.io/api/games?key=95016841632347e98a246750ba9e3d58')
    const jsonData = await apiData.json()
    const games = jsonData.results

    for (let game of games) {
        const listItem = buildListItem(game)
        gamesList.append(listItem)
    }
}
gameList()

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

// searchBtn.addEventListener ('click', (e) => {
//     function getInputValue(){
//         // Selecting the input element and get its value 
//         var inputVal = document.getElementById("submit-review").value;
        
//         // Displaying the value
//         alert(inputVal);
// })
