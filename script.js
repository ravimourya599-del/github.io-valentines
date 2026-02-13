function checkPassword() {
    const correctDate = "14/02/2023";  
    const entered = document.getElementById("password").value;

    if (entered === correctDate) {
        window.location.href = "wish.html";
    } else {
        document.getElementById("error").innerText = 
        "Wrong date 😢 Try again, my love.";
    }
}
