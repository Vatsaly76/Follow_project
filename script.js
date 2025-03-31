let info = document.querySelector('h5');
let btn = document.querySelector('#add');

btn.addEventListener('click', function () {
    if (btn.innerText === "Follow") {
        // When following
        info.innerHTML = "You Started following Jacqueline 💖 ";
        // info.style.color = '#1DA1F2';
        // info.style.color = '#8A2BE2';
        info.style.color = '#FF8C00';
        btn.innerText = "Unfollow"; 
        btn.style.background = "#dadada"; // Change button color for unfollow
        btn.style.color = "#454545";
    } else {
        // When unfollowing
        info.innerHTML = "Jacqueline is not in your Friend list 🔒 ";
        info.style.color = '#64666a';
        btn.innerText = "Follow";
        btn.style.background = "#007bff"; // Change back to default color
        btn.style.color = "#ffffff";
    }
});

