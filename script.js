function checkLogin() {
    // Replace these values with your actual username and password
    var providedUsername = "2201030600001";
    var providedPassword = "Aindrik@123";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === providedUsername && password === providedPassword) {
        // Redirect to a different page (replace 'dashboard.html' with your actual page)
        window.location.href = 'sou.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
