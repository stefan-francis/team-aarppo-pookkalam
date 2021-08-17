const outerRects1 = document.querySelectorAll("div.circle1 > span");
outerRects1.forEach((r, idx) => (r.style.transform = `rotate(${idx * 10}deg)`));

const outerRects2 = document.querySelectorAll("div.circle2 > span");
outerRects2.forEach(
  (r, idx) => (r.style.transform = `rotate(${idx * 10 + 5}deg)`)
);

const outerRects3 = document.querySelectorAll("div.circle3 > span");
outerRects3.forEach(
  (r, idx) => (r.style.transform = `rotate(${idx * 10 + 10}deg)`)
);

const outerRects4 = document.querySelectorAll("div.circle4 > span");
outerRects4.forEach(
  (r, idx) => (r.style.transform = `rotate(${idx * 10 + 15}deg)`)
);

const outerRects5 = document.querySelectorAll("div.circle5 > span");
outerRects5.forEach(
  (r, idx) => (r.style.transform = `translate(-50%, -50%) rotate(${idx * 30 + 10}deg)`)
);

const outerRects6 = document.querySelectorAll("div.circle6 > span");
outerRects6.forEach(
  (r, idx) => (r.style.transform = `translate(-50%, -50%) rotate(${idx * 30 + 10}deg)`)
);

const outerRects7 = document.querySelectorAll("div.circle7 > span");
outerRects7.forEach(
  (r, idx) => (r.style.transform = `translate(-50%, -50%) rotate(${idx * 30 + 10}deg)`)
);
