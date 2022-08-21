tippy("h1", {
  content: "My tooltip!",
});

tippy(".tooltips div", {
  content: "bla bla",
  delay: [50, 50],
  animateFill: true,
  //   theme: "light",
});

const rightClickableArea = document.querySelector(".next-row");

const instance = tippy(rightClickableArea, {
  content: "Congrats, you can right click. Good for you.",
  placement: "right-start",
  trigger: "manual",
  interactive: true,
  arrow: false,
  offset: [0, 0],
});

rightClickableArea.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  instance.setProps({
    getReferenceClientRect: () => ({
      width: 0,
      height: 0,
      top: event.clientY,
      bottom: event.clientY,
      left: event.clientX,
      right: event.clientX,
    }),
  });

  instance.show();
});
