const modal = document.createElement('div')
const closeModalBtn = document.createElement('span')
closeModal.innerText = '&times'
modalButton = document.getElementById('modalButton')

const renderModal = () => {
    const body = document.querySelector('body')
    modal.id = "signUpModal"
    modal.classname = "signUpModal"
    modal.innerHTML = `
        <!-- close button -->
            <div class="y-wrap">
                <div class="signup-form">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <h2 class="text-center">Sign Up</h2> 
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="firstName" required="required">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="lastName" required="required">
                        </div>      
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" required="required">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="login-submit">Log in</button>
                        </div>      
                    </form>
                </div>
            </div>
    `;
    modal.prepend(closeModalBtn)
    body.append(modal)
}

const removeModal = () => {
    modal.remove()
}

closeModalBtn.addEventListener('click', removeModal)
modalButton.addEventListener('click',renderModal)