import React from 'react'

const Register = () => {
  return (
<>
<div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required/>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            
            <button type="submit">Submit</button>
            
       </form>
        <div id="message"></div>
    </div>
    <script src="script.js"></script>
    </>
  )
}

export default Register