
document.querySelector("#divbtn_1").addEventListener("click", () => {  toggleImage("#divbtn_1","#divtable_1");});

document.querySelector("#divbtn_1").addEventListener("click", () => {  toggleImage("#divbtn_1","#img_1");});
 
//  document.querySelector("#divbtn_2").addEventListener("click", () => { console.log("企業訂購") });
 
//  document.querySelector("#divbtn_3").addEventListener("click", () => { console.log("網購定單") });
 
//  document.querySelector("#divbtn_4").addEventListener("click", () => { console.log("團購") });


 

function toggleImage(buttonId, imageId) {
  const button = document.querySelector(buttonId);
  const image = document.querySelector(imageId);

  if (!button || !image) {
    console.warn('找不到指定的元素');
    return;
  }

  // 切換圖片顯示
  if (image.style.display === 'block') {
    image.style.display = 'none';
  } else {
    image.style.display = 'block';
  }
}










