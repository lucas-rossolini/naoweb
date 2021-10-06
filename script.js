  const scrollOffset = 100;
  // const scrollOffset2 = 100;

  const logoPart1 = document.querySelector("#logo-part1");
  const logoPart2 = document.querySelector("#logo-part2");
  const scrollElement = document.querySelector("#scroll-element");
  const scrollElement2 = document.querySelector("#scroll-element2");
  const burgerTop = document.querySelector("#burger-top");
  const burgerMiddle = document.querySelector("#burger-middle");
  const burgerBottom = document.querySelector("#burger-bottom");
  const logoHeader = document.querySelector(".logo-header");
  const header = document.querySelector(".header");

  // First part of the scroll

  // This function checks my element distance's from top of the window.
  function elementInView(el, offset = 0){
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  // If elementInView return true, the element entered my inview area so I add classes for transitions.
  function displayScrollElement(){
    logoPart1.classList.add('align')
    logoPart2.classList.add('scrolled');
    burgerTop.classList.add('white');
    burgerMiddle.classList.add('white');
    burgerBottom.classList.add('white');
  }

// If my element exits my inview area I removed the classes.
  function hideScrollElement() {
    logoPart1.classList.remove('align');
    logoPart2.classList.remove('scrolled');
    burgerTop.classList.remove('white');
    burgerMiddle.classList.remove('white');
    burgerBottom.classList.remove('white');
  }

  function handleScrollAnimation() {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement(scrollElement);
    } else {
      hideScrollElement(scrollElement);
    }
  }

  // Second part of the scroll

  // This function checks my element distance's from top of the window.
  function elementInView2(el, offset = 0){
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  // If elementInView return true, the element entered my inview area so I add classes for transitions.
  function displayScrollElement2(){
    logoPart1.classList.add('align2')
    logoPart2.classList.add('scrolled2');
    burgerTop.classList.remove('white');
    burgerMiddle.classList.remove('white');
    burgerBottom.classList.remove('white');
    logoHeader.classList.add("logo-header-scrolled");
    header.classList.add("header-fixe")

  }
// If my element exits my inview area I removed the classes.
  function hideScrollElement2() {
    logoPart1.classList.remove('align2');
    logoPart2.classList.remove('scrolled2');
    burgerTop.classList.add('white');
    burgerMiddle.classList.add('white');
    burgerBottom.classList.add('white');
    logoHeader.classList.remove("logo-header-scrolled");
    header.classList.remove("header-fixe")
  }

  function handleScrollAnimation2() {
    if (elementInView2(scrollElement2, scrollOffset)) {
        displayScrollElement2(scrollElement2);
    } else {
      hideScrollElement2(scrollElement2);
    }
  }

  window.addEventListener('scroll', function(){
    handleScrollAnimation();
    handleScrollAnimation2();
  })