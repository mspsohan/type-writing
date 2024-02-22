const text = document.querySelector('.sec-text');
const textLoad = () => {
   setTimeout(()=>{
      text.textContent = "Developer";
   }, 100);
   setTimeout(()=>{
      text.textContent = "Freelancer";
   }, 4000);
   setTimeout(()=>{
      text.textContent = "Youtuber";
   }, 8000);
}
textLoad();
setTimeout(textLoad, 12000);




















































// const dynamicText = document.querySelector('h1 span')
      // const words = ["Developer", "Digital Marketer", "Youtuber", "Graphics Desiner"]
      // let wordIndex = 0;
      // let charIndex = 0;
      // let isDeleting = false;
      // const typeEffects = () => {
      //    const currentWord = words[wordIndex]
      //    const currentChar = currentWord.substring(0, charIndex);
      //    dynamicText.textContent = currentChar;
      //    console.log(currentWord, currentChar);
      //    if (!isDeleting && charIndex < currentWord.length) {
      //       charIndex++
      //       setTimeout(typeEffects, 200);
      //    }else if (isDeleting && charIndex > 0) {
      //       // If condition is true, remove the previous character
      //       charIndex--;
      //       setTimeout(typeEffects, 100);
      //   }
      // }
      // typeEffects()