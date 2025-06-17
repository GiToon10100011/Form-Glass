/* 1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
-> querySelector()
-> addEventListener()

2. 클릭을 했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
-> classList
-> add() || remove()
-> button => 기본속성 제거 preventDefault()

2-1. 가상클래스 = filledA & filledB */

// const femaleBtn = document.querySelector("#femalebtn");
// id로 가져오는게 메모리효율성이 좋음 (엄청 큰 프로젝트 규모 기준)
const femaleBtn = document.getElementById("femaleBtn");
const maleBtn = document.getElementById("maleBtn");

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});

const signupBtn = document.querySelector("#signup_button")

signupBtn.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  const year = document.querySelector("#year").value;
  const month = document.querySelector("#month").value;
  const day = document.querySelector("#day").value;
  const username = document.querySelector("#user").value;
  const password = document.querySelector("#PW").value;
  const auth = document.querySelector("#auth").checked;
  const privacy = document.querySelector("#private").checked;
  
  // 단락회로 평가 ->  어떠한 값이 참인지 거짓인지 확인

  let isVaild = true;
  if (year === "none" || month === "none" || day === "none"){
    document.querySelector("#error_birth").innerText = "Please select your Birth of Date";
    isVaild = false;
  } else{
    document.querySelector("#error_birth").innerText = "";
  }
  
  if (username === ""){
    document.querySelector("#error_user").innerText = "Please enter your Username";
    isVaild = false;
  } else{
    document.querySelector("#error_user").innerText = "";
  }
  
  if (password.length < 8){
    document.querySelector("#error_pw").innerText = "Please enter your password";
    isVaild = false;
  } else{
    document.querySelector("#error_pw").innerText = "";
  }

  if(auth === false || privacy === false){
    document.querySelector("#error_terms").innerText = "Please agree to the following terms";
    isVaild = false;
  } else{
    document.querySelector("#error_terms").innerText = ""
  };

  if(isVaild === true){
    alert("Your registration has been completed.");
  }

});