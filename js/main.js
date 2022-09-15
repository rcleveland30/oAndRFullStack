const logIn = document.querySelector('.login-form'),
logInButton = document.getElementById('submit-log-in'),
loginModal = document.getElementById('loginModal'), //modal element
modalButton = document.getElementById('modalButton'), // open modal
closeButton = document.getElementsByClassName('closeButton')[0], //close modal
contentDisplay = document.querySelector('.page-contain'),
searchBtn = document.getElementById('search-btn');

function buildListItem(content) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="games/${content.slug}">${content.name}</a>
    `;
    return li;
}

// Landing page information
const gameList = async() => {
    if (window.location.pathname === "/home") {
        const gamesList = document.querySelector('#games-list');
        const apiData = await fetch('https://api.rawg.io/api/games?key=95016841632347e98a246750ba9e3d58')
        const jsonData = await apiData.json()
        const games = jsonData.results
    
        for (let game of games) {
            const listItem = buildListItem(game)
            gamesList.append(listItem)
        }
    }
}
gameList()

// //modal click for open
// modalButton.addEventListener('click', openModal)

// //modal click for close
// closeButton.addEventListener('click', closeModal)

// //outside click
// window.addEventListener('click', clickOutside)

// // open modal function
// function openModal(){
//     loginModal.style.display = 'block'
// }
// // close modal function
// function closeModal(){
//     loginModal.style.display = 'none'
// }

// function clickOutside(e){
//     if(e.target == loginModal){
//         loginModal.style.display = 'none'
//     }
// }

const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        const stringified = stringifyFormData(data)
        sendHttpData(stringified)
};

async function sendHttpData (body) {
    const gameId = document.getElementById('review').getAttribute('data-gameId')
    const response = await fetch(`/review/${gameId}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body
    })
    const data = await response.json()
    console.log(data)
}

//     logIn.addEventListener('submit', handleSubmit);

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 4);
}

//Review Submission
if (window.location.pathname.indexOf('games/') > -1) {
    const reviewForm = document.getElementById('form')
    reviewForm.addEventListener('submit', handleSubmit)
}

// //Search button
// searchBtn.addEventListener ('click', (e) => {
//     searchRes = e.target.value
// })



searchBtn.addEventListener ('click', (e) => {
    
})
const getGameList = async() => {

    const apiKey = "3b9ce959ca2541dab435e4ccd2611f64"
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}`
    
    const apiData = await fetch(apiUrl)
    const jsonData = await apiData.json()
    const gameList = jsonData.results

}
