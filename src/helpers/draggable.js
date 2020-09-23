let startCoords;
let dragEnabled = true;
function toggleDrag() {
    dragEnabled = !dragEnabled;
    return dragEnabled;
}
function draggable(el) {
    function handleDrag(e) {
        if (dragEnabled) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            el.style.transform = `translate(${clientX - startCoords.x}px, ${
                clientY - startCoords.y
            }px)`;
        }
    }
    el.addEventListener("mousedown", (e) => {
        if (dragEnabled && e.currentTarget === e.target) {
            startCoords = { x: e.offsetX, y: e.offsetY };
            el.addEventListener("mousemove", handleDrag);
        }
    });

    el.addEventListener("touchstart", (e) => {
        if (dragEnabled) {
            var rect = e.target.getBoundingClientRect();
            var x = e.touches[0].clientX - rect.left;
            var y = e.touches[0].clientY - rect.top;
            startCoords = { x, y };
            el.addEventListener("touchmove", handleDrag);
        }
    });
    el.addEventListener("mouseup", (e) => {
        el.removeEventListener("mousemove", handleDrag);
    });
    el.addEventListener("touchend", (e) => {
        el.removeEventListener("mousemove", handleDrag);
    });
    el.addEventListener("mouseleave", (e) => {
        el.removeEventListener("mousemove", handleDrag);
    });
}

draggable.toggleDrag = toggleDrag;

module.exports = draggable;
