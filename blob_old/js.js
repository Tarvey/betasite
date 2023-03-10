const blob = document.getElementById("blob");
document.body.onpointermove = event => {
    const blob = document.getElementById("blob");

    const { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 0, fill: "forwards"});
}