var isStatus = document.querySelector(".Para1");
var Added = document.querySelector(".btn2");
check = 0;

Added.addEventListener("click", () => {
    if(check == 0){
        isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    Added.innerHTML = "Unfriend";
    check = 1;
    
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        Added.innerHTML = "Add Friend";
         check = 0;
}
});

