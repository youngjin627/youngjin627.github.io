// Header에 페이지를 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');

const headerHeight = header. getBoundingClientRect().height;
// 위에 줄 자세한 과정
// const headerRect = header.getBoundingClientRect();
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