  const scrollOffset = 450;

  const logoPart1 = document.querySelector("#logo-part1");
  const logoPart2 = document.querySelector("#logo-part2");
  const scrollElement = document.querySelector("#scroll-element");

  const elementInView = function(el, offset = 0){
    const elementTop = el.getBoundingClientRect().top;
    console.log(elementTop)
    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  const displayScrollElement = function(){
    logoPart1.classList.add('align')
    logoPart2.classList.add('scrolled');

  }

  const hideScrollElement = function() {
    logoPart1.classList.remove('align');
    logoPart2.classList.remove('scrolled');
  }

  const handleScrollAnimation = function() {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement(scrollElement);
    } else {
      hideScrollElement(scrollElement);
    }
  }

  window.addEventListener('scroll', function(){
    handleScrollAnimation();
  })