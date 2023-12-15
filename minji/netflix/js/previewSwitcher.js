const movies = [
  {
    title: "서울의 봄",
    content:
      "1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 서울로 불러들인다.",
    image: "./images/preview_img1.jpg",
  },
  {
    title: "라라랜드",
    content:
      "꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.",
    image: "./images/preview_img2.jpg",
  },
  {
    title: "오징어 게임",
    content:
      "456억 원의 상금이 걸린 의문의 서바이벌에 참가한 사람들이 최후의 승자가 되기 위해 목숨을 걸고 극한의 게임에 도전하는 이야기를 담은 넷플릭스 시리즈",
    image: "./images/preview_img3.jpg",
  },
  {
    title: "dp",
    content:
      "군무 이탈 체포조(D.P.) 준호와 호열이 여전히 변한 게 없는 현실과 부조리에 끊임없이 부딪치며 벌어지는 이야기를 담은 넷플릭스 시리즈",
    image: "./images/preview_img4.jpg",
  },
  {
    title: "더글로리",
    content:
      "유년 시절 폭력으로 영혼까지 부서진 한 여자가 온 생을 걸어 치밀하게 준비한 처절한 복수와 그 소용돌이에 빠져드는 이들의 이야기를 그린 넷플릭스 시리즈",
    image: "./images/preview_img5.jpg",
  },
];

const preview = document.querySelector(".section-preview");
const previewContent = document.querySelector(".content-preview");
const previewTitle = document.querySelector(".title-preview");
let curI = 0;

previewContent.innerHTML = movies[curI].content;
previewTitle.innerHTML = movies[curI].title;
preview.style.backgroundImage = `url("${movies[curI].image}")`;

const timerId = setInterval(() => {
  preview.style.opacity = 0;

  setTimeout(() => {
    curI = (curI + 1) % (movies.length - 1);
    previewContent.innerHTML = movies[curI].content;
    previewTitle.innerHTML = movies[curI].title;
    preview.style.backgroundImage = `url("${movies[curI].image}")`;

    preview.style.opacity = 1;
  }, 1000);
}, 4000);
