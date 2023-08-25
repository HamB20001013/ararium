window.addEventListener("load", function () {
  // 마크 불러오기
  let mark1 = document.querySelector(".deepseafish-mark1");
  let mark2 = document.querySelector(".deepseafish-mark2");
  let mark3 = document.querySelector(".deepseafish-mark3");

  let markArr = [mark1, mark2, mark3];

  // 컨텐츠 불러오기
  let content1 = document.querySelector("#deepseafish1");
  let content2 = document.querySelector("#deepseafish2");
  let content3 = document.querySelector("#deepseafish3");

  let contentArr = [content1, content2, content3];

  // 취소버튼 불러오기
  let closeBtn1 = document.querySelector(".deepseafish-content-close1");
  let closeBtn2 = document.querySelector(".deepseafish-content-close2");
  let closeBtn3 = document.querySelector(".deepseafish-content-close3");

  let closeBtnArr = [closeBtn1, closeBtn2, closeBtn3];

  // 내용안의 사진
  let img1 = document.querySelector(".deepseafish-img1");
  let img2 = document.querySelector(".deepseafish-img2");
  let img3 = document.querySelector(".deepseafish-img3");
  let imgBtArr = [img1, img2, img3];

  // 사진을 눌렀을 때 나올 큰 사진
  let bigImg1 = document.querySelector(".deepseafish-img-big1");
  let bigImg2 = document.querySelector(".deepseafish-img-big2");
  let bigImg3 = document.querySelector(".deepseafish-img-big3");

  let bigImgArr = [bigImg1, bigImg2, bigImg3];

  // 큰 사진 취소버튼 불러오기
  let closeBtnBig1 = document.querySelector(".deepseafish-content-close1-1");
  let closeBtnBig2 = document.querySelector(".deepseafish-content-close2-1");
  let closeBtnBig3 = document.querySelector(".deepseafish-content-close3-1");
  let closeBtnBigArr = [closeBtnBig1, closeBtnBig2, closeBtnBig3];

  // 모달창 제어하기 (true / false)
  let popActive = true;
  window.addEventListener("resize", function () {
    const w = window.innerWidth;
    // console.log(w);

    if (w <= 830) {
      // 큰이미지 클릭 막기
      popActive = false;
      // 큰이미지를 모두 보이지않게 처리
      bigImgArr.forEach((item) => {
        item.classList.remove("deepseafish-img-big-show");
      });
    } else {
      // 큰이미지 클릭 가능
      popActive = true;
    }
  });

  // 마크를 눌렀을 때 컨텐츠 보이게 하기
  markArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      contentArr[index].classList.add("deepseafish-img-big-show");
    });
  });

  // 취소버튼 눌렀을 때 컨텐츠 사라지게 하기
  closeBtnArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      contentArr[index].classList.remove("deepseafish-img-big-show");
    });
  });

  // 내용 안의 사진을 눌렀을 때 큰 사진이 나오게 하기
  imgBtArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 830 픽셀보다 커야 작동함.
      if (popActive) {
        bigImgArr[index].classList.add("deepseafish-img-big-show");
      }
    });
  });

  // 취소버튼 눌렀을 때 큰 사진 사라지게 하기
  closeBtnBigArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      bigImgArr[index].classList.remove("deepseafish-img-big-show");
    });
  });
});
