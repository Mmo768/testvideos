for(let i = 0 ; i < $(".persomalized .card").length ; i++){
    $(".persomalized .card").eq(i).mouseenter(function () { 
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").classList.remove("d-none");
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").muted = "true";
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").play();
    });
}

for(let i = 0 ; i < $(".persomalized .card").length ; i++){
    $(".persomalized .card").eq(i).mouseleave(function () { 
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").classList.add("d-none");
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").muted = "true";
        document.querySelectorAll(".persomalized .card")[i].querySelector("video").pause();
        });
}
