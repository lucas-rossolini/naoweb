  const scrollOffset = 450;

  const logoPart1 = document.querySelector("#logo-part1");
  const logoPart2 = document.querySelector("#logo-part2");
  const scrollElement = document.querySelector("#scroll-element");

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

  }
// If my element exits my inview area I removed the classes.
  function hideScrollElement() {
    logoPart1.classList.remove('align');
    logoPart2.classList.remove('scrolled');
  }

  function handleScrollAnimation() {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement(scrollElement);
    } else {
      hideScrollElement(scrollElement);
    }
  }

  window.addEventListener('scroll', function(){
    handleScrollAnimation();
  })