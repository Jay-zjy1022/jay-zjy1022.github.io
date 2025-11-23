// 平滑滚动

const btn = document.getElementById("backToTop");
btn.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 1.2,
    ease: "power3.inOut",
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    duration: 1.6, // 惯性越大 → 越丝滑
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: true,
  });
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
});
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.create({
    trigger: ".main",
    start: "top 0",
    end: "bottom 0",
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const progress = self.progress;
      const triggerHeight = self.trigger.offsetHeight;
      const scrollDistance = triggerHeight * progress;
      const moveY = scrollDistance * 0.4;
      gsap.set(".main", { y: moveY });
    },
  });
});
// // 固定中心
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.create({
    trigger: ".intro1",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: false,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;
      if (progress >= 0.2 && progress <= 0.8) {
        gsap.set(".image-container", { scale: (progress - 0.2) / 0.6 });
        gsap.set(".content1", { opacity: 1 - (progress - 0.2) / 0.6 });
        gsap.set(".shi", { opacity: (progress - 0.2) / 0.6 });
      } else if (progress <= 0.2) {
        gsap.set(".image-container", { scale: 0 });
        gsap.set(".shi", { opacity: 0 });
      } else {
        gsap.set(".shi", { opacity: 1 });
        gsap.set(".image-container", { scale: 1 });
      }
    },
  });
});
const gujinElement = document.querySelector(".gujin");
if (gujinElement) {
  // 默认显示"古"
  // console.log(1);
  gujinElement.textContent = "今";

  // 添加点击事件监听器，实现点击切换
  gujinElement.addEventListener("click", function () {
    const gu = document.querySelector(".gu");
    const jin = document.querySelector(".jin");
    if (gujinElement.textContent === "古") {
      gujinElement.textContent = "今";
      gu.style.opacity = "0";
      jin.style.opacity = "1";
    } else {
      gujinElement.textContent = "古";
      gu.style.opacity = "1";
      jin.style.opacity = "0";
    }
  });
}
// };
//横向展示

const scrollbox = {
  wrapper: document.querySelector(".wrapper"),
  cardsbox: document.querySelector(".cardsbox"),
  distance: 0,
  if_leave: false,
  init() {
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
    this.create_scrolltrigger();
  },
  create_scrolltrigger() {
    ScrollTrigger.create({
      trigger: this.wrapper,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        this.cardsbox.style.transform = `translateX(-${
          self.progress * this.distance
        }px)`;
      },
      onLeave: () => {
        this.if_leave = true;
      },
      onEnterBack: () => {
        this.if_leave = false;
      },
    });
  },
  resize() {
    this.distance = this.cardsbox.offsetWidth - innerWidth;
    console.log(this.cardsbox.offsetWidth);
    this.wrapper.style.height = `${this.distance}px`;
    console.log(2);
    if (this.if_leave)
      this.cardsbox.style.transform = `translateX(-${this.distance}px)`;
  },
};
scrollbox.init();
//固定中心2

// 竖向浏览
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      title:
        "雪峰如圣殿，矗立于碧蓝天穹之下，金秋的林木燃起一片温柔的火。湖水澄澈如镜，将神山的倒影深藏心底，天地对峙，光影无声。这是灵魂的净土，亦是时间凝结成诗的地方。",
      image: "/image/四川/稻城亚丁1.jpg",
    },
    {
      title: "峨眉山金顶·云海翻涌，日光从天际倾泻而下，金殿如梦似幻。",
      image: "/image/四川/峨眉山.jpg",
    },
    {
      title:
        "九寨沟·秋叶映湖 琉璃般的湖面，托起秋日的燃烧。橙红的枝叶低垂，倒映入湛蓝的水心，水底的枯木清晰可见，仿佛另一个世界的脉络。",
      image: "/image/四川/九寨沟.jpg",
    },
    {
      title:
        "九寨沟·澄明得几近透明的湖水，静静铺开在山谷之间。沉睡的树干横陈水底，绿藻织就梦的纹理。这不是凡尘的湖泊，而是一面映照灵魂的镜。",
      image: "/image/四川/九寨沟1.jpg",
    },
    {
      title: "九寨沟·青蓝相叠的湖面宛如宝石，光与影在水中交融。",
      image: "/image/四川/九寨沟3.jpg",
    },
    {
      title:
        "九寨沟·晴空万里，湖面广阔如海，群峰倒映，碧水深不见底。一道彩虹横贯山腰，仿佛天地间的信笺。",
      image: "/image/四川/九寨沟4.jpg",
    },
  ];
  const pinDistance = window.innerHeight * slides.length;
  const progressBar = document.querySelector(".slider-progress");
  const sliderImages = document.querySelector(".slider-images");
  // console.log(1);
  const sliderTitle = document.querySelector(".slider-title");
  const sliderIndices = document.querySelector(".slider-indices");
  let activeSlide = 0;
  // let currentSplit = null;
  function createIndices() {
    sliderIndices.innerHTML = "";
    slides.forEach((_, index) => {
      const indexNum = (index + 1).toString().padStart(2, "0");
      const indicatorElement = document.createElement("p");
      indicatorElement.dataset.index = index;
      indicatorElement.innerHTML = `<span class="marker"></span><span class="index">${indexNum}</span>`;
      sliderIndices.appendChild(indicatorElement);
      if (index === 0) {
        gsap.set(indicatorElement.querySelector(".index"), {
          opacity: 1,
        });
        gsap.set(indicatorElement.querySelector(".marker"), {
          scaleX: 1,
        });
      } else {
        gsap.set(indicatorElement.querySelector(".index"), {
          opacity: 0.35,
        });
        gsap.set(indicatorElement.querySelector(".marker"), {
          scaleX: 0,
        });
      }
    });
  }
  function animateNewSlide(index) {
    const newSliderImage = document.createElement("img");
    newSliderImage.src = slides[index].image;
    newSliderImage.alt = `Slide ${index + 1}`;
    gsap.set(newSliderImage, {
      opacity: 0,
      scale: 1.1,
    });
    sliderImages.appendChild(newSliderImage);
    gsap.to(newSliderImage, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(newSliderImage, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
    const allImages = sliderImages.querySelectorAll("img");
    if (allImages.length > 3) {
      const removeCount = allImages.length - 3;
      for (let i = 0; i < removeCount; i++) {
        sliderImages.removeChild(allImages[i]);
      }
    }
    animateNewTitle(index);
    animateIndicators(index);
  }
  function animateIndicators(index) {
    const indicators = sliderIndices.querySelectorAll("p");
    indicators.forEach((indicator, i) => {
      const markerElement = indicator.querySelector(".marker");
      const indexElement = indicator.querySelector(".index");
      if (i === index) {
        gsap.to(indexElement, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(markerElement, {
          scaleX: 1,
          duration: 0.3,
          ease: "power.out",
        });
      } else {
        gsap.to(indexElement, {
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(markerElement, {
          scaleX: 0,
          duration: 0.3,
          ease: "power.out",
        });
      }
    });
  }

  function splitTextToChars(element) {
    const text = element.textContent;
    element.textContent = "";
    text.split("").forEach((char) => {
      const charDiv = document.createElement("div");
      charDiv.classList.add("char");
      const span = document.createElement("span");
      if (char === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }
      charDiv.appendChild(span);
      element.appendChild(charDiv);
    });
  }
  function animateNewTitle(index) {
    const titleText = slides[index].title;
    sliderTitle.innerHTML = `<h1>${titleText}</h1>`;
    const h1 = sliderTitle.querySelector("h1");

    // 使用你自定义的函数拆字
    splitTextToChars(h1);

    // 拿到所有字符
    const chars = h1.querySelectorAll(".char");

    // 初始化状态
    gsap.set(chars, { yPercent: 100, opacity: 0 });

    // 动画浮现
    gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.05,
      ease: "power2.out",
    });
  }
  // animateNewTitle(0);
  // animateNewSlide(0);
  createIndices();
  ScrollTrigger.create({
    trigger: ".slider",
    start: "top top",
    end: `+=${pinDistance}px`,
    scale1: 1,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      gsap.set(progressBar, {
        scaleY: self.progress,
      });
      const currentSlide = Math.floor(self.progress * slides.length);
      if (activeSlide != currentSlide && currentSlide < slides.length) {
        activeSlide = currentSlide;
        animateNewSlide(activeSlide);
      }
    },
  });
});
