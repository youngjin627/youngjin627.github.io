// Header에 페이지를 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');

const headerHeight = header.offsetHeight;
// 위에 줄 자세한 과정
// const headerRect = header.offsetHeight;
// console.log(headerRect);
// const headerHeight = headerRect.height;

document.addEventListener('scroll', /*function*/ () => {    // 이름이 없는 함수는 function 생략 가능 ( =>를 추가해 에로우 함수 사용 )
    // 스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링
    console.log(window.scrollY);
    if (window.scrollY >headerHeight) {
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY >homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫음
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});