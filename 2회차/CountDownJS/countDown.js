// DOM에서 요소 가져오기
const dayText = document.getElementById("days");
const hourText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const leftTimeText = document.getElementById("leftTime");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const submit = document.getElementById("submit");
let inputDate = new Date();
let currentDate = new Date();
let timer;

// 제출 버튼에 대한 이벤트 리스너
submit.addEventListener("click", function () {
  // 날짜와 시간의 입력 값을 가져옴
  const date = dateInput.value;
  const time = timeInput.value;

  // 입력된 날짜와 시간으로 inputDate를 설정함
  inputDate = new Date(`${date} ${time}`).getTime();

  // 이전 타이머를 초기화하고 카운트다운을 업데이트하는 새로운 타이머 시작
  clearInterval(timer);
  timer = setInterval(updateCountDown, 1000);
});

// 카운트다운을 업데이트하는 함수
function updateCountDown() {
  // 현재 날짜와 시간 가져오기
  currentDate = new Date().getTime();

  // 입력된 날짜와 시간까지 남은 밀리초 계산
  const mSecondsLeft = inputDate - currentDate;

  // 남은 일, 시간, 분, 초 계산
  dayText.innerHTML = zero(Math.floor(mSecondsLeft / (1000 * 60 * 60 * 24)));
  hourText.innerHTML = zero(Math.floor((mSecondsLeft / (1000 * 60 * 60)) % 24));
  minutesText.innerHTML = zero(Math.floor((mSecondsLeft / (1000 * 60)) % 60));
  secondsText.innerHTML = zero(Math.floor((mSecondsLeft / 1000) % 60));

  // 남은 시간을 나타내는 leftTimeText 업데이트
  leftTimeText.innerHTML = `카운트다운 남은 시간은 ${dayText.innerHTML}일 ${hourText.innerHTML}시간 ${minutesText.innerHTML}분 ${secondsText.innerHTML}초 남았습니다.`;
}

// 한 자리 숫자에 앞에 0 추가하는 함수
const zero = (n) => (n < 10 ? "0" : "") + n;

// 날짜 입력 필드의 최소값 설정하는 함수
function setMinValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(zero(now.getMonth() + 1));
  const day = String(zero(now.getDate()));

  // 최소값을 YYYY-MM-DD 형식으로 반환
  return `${year}-${month}-${day}`;
}

// 날짜 입력 필드의 최소값 설정
dateInput.min = setMinValue();
