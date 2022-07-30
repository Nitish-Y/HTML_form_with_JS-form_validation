const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorElement = document.getElementById('error')


form.addEventListener('submit', e => {
   let messages = []
    if (fname.value == '' || fname.value == null) {
            messages.push("First Name is required")
        }
    
        if (lname.value == '' || lname.value == null) {
            messages.push("Last Name is required")
        }

        if (email.value == '') {
            messages.push("Email is required")
        }

        if (password.value === '') {
            messages.push("Password is required")
        }
    
        else if (password.value.length < 6 || password.value.length > 12) {
            messages.push("Password must be 6-12 characters long")
        }
        
        e.preventDefault();
        errorElement.innerText = messages
        if (errorElement.innerText === '') {
            alert("Your form has been submitted successfully.")
        }
    
})