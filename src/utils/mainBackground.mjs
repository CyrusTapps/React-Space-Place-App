export function createStars() {
  const body = document.querySelector("body");
  const numberOfStars = 200;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    body.appendChild(star);
  }
}

createStars();
