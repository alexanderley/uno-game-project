var draggableDiv = document.querySelector(".draggable-div");

console.log(draggableDiv);


let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  pos = {
    // The current scroll
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};
