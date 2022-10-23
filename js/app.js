//a태그에 hover시
$(".gnbList")
  .on("mouseenter", function () {
    $(this).animate({ height: 260 });
    $(".snb").animate({ height: 200 });
  })
  .on("mouseleave", function () {
    $(this).animate({ height: 60 });
    $(".snb").animate({ height: 0 });
  });

/* 클릭하면 해당하는 번호의 이미지로이동 */
let btns = document.querySelectorAll('.btnWrap > button');
let silders = document.querySelectorAll('.silderList > li');
let silderList = document.querySelector('.silderList');
console.log(btns,silders)

let moveSlider = (e) =>{
    let silderNum = e.currentTarget.innerText
    silderList.style.transform = `translateX( calc( -100% / 3 * ( ${silderNum - 1} ) ) )`;
} 
    
for(let i = 0 ; i < silders.length ; i ++){
    btns[i].addEventListener('click',(e)=>{
        moveSlider(e);
    })
}