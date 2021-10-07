const wrapper = document.querySelector(".element");
const wrapper2 = document.querySelector(".element2");

const className = "in-view";

const logoPart1 = document.querySelector("#logo-part1");
const logoPart2 = document.querySelector("#logo-part2");

wrapper.classList.remove(className);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logoPart1.classList.add("align");
        logoPart2.classList.add("scrolled")
        return;
      }
      logoPart1.classList.remove("align");
      logoPart2.classList.remove("scrolled")
    });
  },
  {
    threshold: 0.1,
  }
);
const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoPart1.classList.add("align2");
          logoPart2.classList.add("scrolled2")
          return;
        }
        logoPart1.classList.remove("align2");
        logoPart2.classList.remove("scrolled2")
      });
    },
    {
      threshold: 0.1,
    }
  );
observer.observe(wrapper);
observer2.observe(wrapper2);
