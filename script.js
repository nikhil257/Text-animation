function breakText() {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;

  var splittedText = h1text.split("");
  var halfvalue = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach((elem, idx) => {
    if (idx < halfvalue) {
      clutter += `<span class = "a">${elem}</span>`;
    } else {
      clutter += `<span class = "b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.15,
  color: "green"
});

gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: -0.15,
  color: "blue"
});
