document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll(".album img");
    albums.forEach(album => {
        album.addEventListener("mouseover", () => {
            album.style.transform = "scale(1.1)";
        });
        album.addEventListener("mouseout", () => {
            album.style.transform = "scale(1)";
        });
    });
});
