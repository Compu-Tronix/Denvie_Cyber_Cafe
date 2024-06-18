// forms html
// assignment form
const assignmentForm = `

<div class="service_form">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris. Dictum at tempor commodo ullamcorper. Congue eu consequat ac felis. Purus sit amet luctus venenatis lectus magna. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Quisque egestas diam in arcu cursus euismod quis viverra. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. At volutpat diam ut venenatis tellus in. Pretium nibh ipsum consequat nisl vel pretium lectus quam.
</p>
  <ul>
    <li>step1</li>
    <li>step2</li>
    <li>step3</li>
  </ul>
  <form class="js_form">
    
    <input type="text" placeholder="input"name="" class="input">
    <input type="text" placeholder="input"name="" class="input">
    <input type="text" placeholder="input"name="" class="input">
    
    <input type="submit" value="Submit Order">
    
  </form>
</div>

`

// replace more_info_container functions
//assignment
function assignment_form() {
    document.getElementById("more_info_container").innerHTML = assignmentForm
  }

//registration form
const registration_form = `

                
                <form action="/register" method="POST" class="popup-form">
                    
                    <button id="close_form" class="close_form_btn">
                      X
                    </button>   
                    <input type="text" placeholder="name" name="username" required class="input">
                    <input type="email" placeholder="email" name="email" required class="input">
                    <input type="password" placeholder="password" name="password" required class="input">
                    <input type="password" placeholder="confirm password" name="confirm_password" class="input">
                    <div class="form_buttons_container">
    
                        <input type="submit" value="register" class="form_btn">

                        <button class="form_btn" onclick="login(document.getElementById('user_log_form'))">
                          login
                        </button>

                    </div>
                    
                </form>

`
const login_form = `

                
                <form action="/login" method="POST" class="popup-form">
                    <button id="close_form" class="close_form_btn">
                      X
                    </button>
                    <input type="text" placeholder="name" name="username" required class="input">
                    <input type="password" placeholder="password" name="password" required class="input">

                    <div class="form_buttons_container">
    
                        <input type="submit" value="login" class="form_btn">
                        
                        <button class="form_btn" onclick="register(document.getElementById('user_log_form'))">
                          register
                        </button>
   
                    </div>
                    
                    
                </form>

`

//login, and registration forms function
//registration form function
function register() {
  document.getElementById("user_log_form").innerHTML = registration_form
}

//login form function
function login() {
  document.getElementById("user_log_form").innerHTML = login_form
}