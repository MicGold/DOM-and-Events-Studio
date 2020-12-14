// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeoff_button = document.getElementById("takeoff");
    let land_button = document.getElementById("landing");
    let abort_button = document.getElementById("missionAbort");
    let up_button = document.getElementById("up");
    let down_button = document.getElementById("down");
    let right_button = document.getElementById("right");
    let left_button = document.getElementById("left");
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let height = Number(shuttleHeight.innerHTML);
    let rocket = document.getElementById("rocket");
    let directionBtns = Array.from(document.getElementsByClassName('directionBtns'));


    takeoff_button.addEventListener("click", function(){
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm){
            flightStatus.innerText = "Shuttle in flight";
            console.log(flightStatus.innerText);
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerText = height += 10000;
            console.log(shuttleHeight.innerText);
        }
    });
    land_button.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerText = "The shuttle has landed";
        console.log(flightStatus.innerText);
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        console.log(shuttleHeight.innerHTML);
    });
    abort_button.addEventListener("click", function(){
        let abort = window.confirm("Confirm that you want to abort the mission");
        if (abort){
          flightStatus.innerText = "Mission aborted";
          console.log(flightStatus.innerText);
          shuttleBackground.style.backgroundColor = "green";
          shuttleHeight.innerHTML = 0;
          console.log(shuttleHeight.innerHTML);
        }
    });
    directionBtns.forEach((directionBtn) => {
        directionBtn.addEventListener('click', function(event){
            let currentTransform = rocket.style.transform;
            if(directionBtn.dataset.xmovement){
                let moveX = Number(directionBtn.dataset.xmovement);
                if(!currentTransform){
                    rocket.style.transform = `translateX(10px)`;
                };
                let currentX = Number(
                    currentTransform
                        .replace('translateX(', '')
                        .replace('px)', ''));
                console.log(currentX);
                currentX += moveX;
                rocket.style.transform = `translateX(${currentX}px)`;
            }
            if(directionBtn.dataset.ymovement){
                let moveY = Number(directionBtn.dataset.ymovement);
                if(!currentTransform){
                    rocket.style.transform = `translateY(10px)`;
                };
                let currentY = Number(
                    currentTransform
                        .replace('translateY(', '')
                        .replace('px)', ''));
                console.log(currentY);
                currentY += 10;
                rocket.style.transform = `translateY(${currentY}px)`;
            }
            shuttleHeight.innerText = height += 10000;
            console.log(shuttleHeight.innerText);
        });
    });
    
});