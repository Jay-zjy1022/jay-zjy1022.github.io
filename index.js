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
// 地图交互
document.getElementById("mapAnhui").addEventListener("click", function () {
  window.location.href = "/province/安徽/intro.html";
});
document.getElementById("mapBeijing").addEventListener("click", function () {
  window.location.href = "/province/北京/intro.html";
});
document.getElementById("mapChongqing").addEventListener("click", function () {
  window.location.href = "/province/重庆/intro.html";
});
document.getElementById("mapFujian").addEventListener("click", function () {
  window.location.href = "/province/福建/intro.html";
});
document.getElementById("mapGansu").addEventListener("click", function () {
  window.location.href = "/province/甘肃/intro.html";
});
document.getElementById("mapGuangdong").addEventListener("click", function () {
  window.location.href = "/province/广东/intro.html";
});
document.getElementById("mapGuangxi").addEventListener("click", function () {
  window.location.href = "/province/广西/intro.html";
});
document.getElementById("mapGuizhou").addEventListener("click", function () {
  window.location.href = "/province/贵州/intro.html";
});
document.getElementById("mapHainan").addEventListener("click", function () {
  window.location.href = "/province/海南/intro.html";
});
document.getElementById("mapHebei").addEventListener("click", function () {
  window.location.href = "/province/河北/intro.html";
});
document.getElementById("mapHenan").addEventListener("click", function () {
  window.location.href = "/province/河南/intro.html";
});
document
  .getElementById("mapHeilongjiang")
  .addEventListener("click", function () {
    window.location.href = "/province/黑龙江/intro.html";
  });
document.getElementById("mapHubei").addEventListener("click", function () {
  window.location.href = "/province/湖北/intro.html";
});
document.getElementById("mapHunan").addEventListener("click", function () {
  window.location.href = "/province/湖南/intro.html";
});
document.getElementById("mapJilin").addEventListener("click", function () {
  window.location.href = "/province/吉林/intro.html";
});
document.getElementById("mapJiangsu").addEventListener("click", function () {
  window.location.href = "/province/江苏/intro.html";
});
document.getElementById("mapJiangxi").addEventListener("click", function () {
  window.location.href = "/province/江西/intro.html";
});
document.getElementById("mapLiaoning").addEventListener("click", function () {
  window.location.href = "/province/辽宁/intro.html";
});
document.getElementById("mapNeimenggu").addEventListener("click", function () {
  window.location.href = "/province/内蒙古/intro.html";
});
document.getElementById("mapNingxia").addEventListener("click", function () {
  window.location.href = "/province/宁夏/intro.html";
});
document.getElementById("mapQinghai").addEventListener("click", function () {
  window.location.href = "/province/青海/intro.html";
});
document.getElementById("mapShandong").addEventListener("click", function () {
  window.location.href = "/province/山东/intro.html";
});
document.getElementById("mapShanxi").addEventListener("click", function () {
  window.location.href = "/province/山西/intro.html";
});
document.getElementById("mapShaanxi").addEventListener("click", function () {
  window.location.href = "/province/陕西/intro.html";
});
document.getElementById("mapShanghai").addEventListener("click", function () {
  window.location.href = "/province/上海/intro.html";
});
document.getElementById("mapSichuan").addEventListener("click", function () {
  window.location.href = "/province/四川/intro.html";
});
document.getElementById("mapTaiwan").addEventListener("click", function () {
  window.location.href = "/province/台湾/intro.html";
});
document.getElementById("mapTianjin").addEventListener("click", function () {
  window.location.href = "/province/天津/intro.html";
});
document.getElementById("mapXizang").addEventListener("click", function () {
  window.location.href = "/province/西藏/intro.html";
});
document.getElementById("mapXijiang").addEventListener("click", function () {
  window.location.href = "/province/新疆/intro.html";
});
document.getElementById("mapYunnan").addEventListener("click", function () {
  window.location.href = "/province/云南/intro.html";
});
document.getElementById("mapZhejiang").addEventListener("click", function () {
  window.location.href = "/province/浙江/intro.html";
});
//封面缩小
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.create({
    trigger: ".main", // 监听整个页面滚动（或指定   父容器）
    start: "top 0", // 滚动开始时（页面顶部对齐视口顶部）
    end: "bottom 0", // 滚动结束时（页面底部对齐视口底部）
    scrub: true, // 逐帧绑定：滚动多少，动画执行多少（无延迟）
    markers: false, // 调试标记，上线关闭

    // 每帧执行的回调：实时获取滚动进度，映射到容器属性
    onUpdate: (self) => {
      const progress = self.progress; // 滚动进度：0（初始）→ 1（滚动到底）
      const triggerHeight = self.trigger.offsetHeight;
      const scrollDistance = triggerHeight * progress; // 滚动距离 = 容器高度 * 进度
      const moveY = scrollDistance * 0.4;
      // console.log(self.scrollY);
      gsap.set(".main", { y: moveY });
      // const scale = gsap.utils.mapRange(0, 1, 1, 0.6, progress);
      // gsap.set(".main", { scale: scale });

      // // 3. 逐帧变圆角：进度 0→1 时，borderRadius 0→30px（可自定义）
      // const borderRadius = gsap.utils.mapRange(0, 1, 0, 30, progress);
      // gsap.set(".main", { borderRadius: `${borderRadius}px` });
    },
  });
});
//视频缩小
document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.create({
    trigger: ".video-container", // 监听整个页面滚动（或指定父容器）
    start: "top bottom", // 滚动开始时（页面顶部对齐视口底部）
    end: "bottom 0", // 滚动结束时（页面底部对齐视口底部）
    scrub: true, // 逐帧绑定：滚动多少，动画执行多少（无延迟）
    markers: false, // 调试标记，上线关闭

    // 每帧执行的回调：实时获取滚动进度，映射到容器属性
    onUpdate: (self) => {
      const progress = self.progress; // 滚动进度：0（初始）→ 1（滚动到底）
      const triggerHeight = self.trigger.offsetHeight;
      const scrollDistance = triggerHeight * progress; // 滚动距离 = 容器高度 * 进度
      const moveY = scrollDistance * 1;
      // console.log(self.scrollY);
      // gsap.set(".video", { y: moveY });
      // gsap.set(".video-container", { y: moveY });
      const scale = gsap.utils.mapRange(0, 1, 1, 0.6, progress);
      gsap.set(".video", { scale: scale });

      // 3. 逐帧变圆角：进度 0→1 时，borderRadius 0→30px（可自定义）
      const borderRadius = gsap.utils.mapRange(0, 1, 0, 30, progress);
      gsap.set(".video", { borderRadius: `${borderRadius}px` });
    },
  });
});
// 第一面，滚动固定
const sf = {
  contenter: document.querySelector(".screen1"),
  target: document.querySelector(".content1"),
  target2: document.querySelector(".screen1-bg"),
  observer: null,
  distance_scroll: 0,
  distance_trigger: 0,
  distance_edge: 0,
  resize() {
    this.distance_trigger = this.contenter.offsetTop;
    this.distance_edge = this.contenter.offsetHeight - innerHeight;
  },
  observe() {
    this.observer = new IntersectionObserver((eles) => {
      if (eles[0].isIntersecting) {
        this.reset();
        this.create_lister();
      } else this.remove_lister();
    });
    this.observer.observe(this.contenter);
  },
  create_lister() {
    if (!this.binded_scroll) this.binded_scroll = this.scroll.bind(this);
    window.addEventListener("scroll", this.binded_scroll);
  },
  remove_lister() {
    window.removeEventListener("scroll", this.binded_scroll);
  },
  reset() {
    if (scrollY < this.distance_trigger) this.distance_scroll = 0;
    else this.distance_scroll = this.distance_edge;
  },
  scroll() {
    const fadeElements = document.querySelectorAll(".screen1-text");
    if (scrollY < this.distance_trigger) {
      this.target.style = null;
      fadeElements.forEach((element) => {
        element.style.filter = "blur(5px)";
        element.style.transform = "translateY(80%)";
        element.style.transform = "translateX(-30%)";
        // transform: translateY(0);
        // transform: translatex(50%);
        element.style.opacity = "0";
      });
      this.target2.style = null;
      return this.reset();
    }
    this.distance_scroll = scrollY - this.distance_trigger;
    this.distance_scroll = Math.max(0, this.distance_scroll);
    this.distance_scroll = Math.min(this.distance_edge, this.distance_scroll);
    // console.log(this.distance_scroll);
    // console.log(this.distance_edge);
    if (this.distance_scroll == this.distance_edge) {
      this.target.style.position = "absolute";
      this.target.style.transform = `translateY(${this.distance_scroll}px)`;
      fadeElements.forEach((element) => {
        element.style.filter = "blur(5px)";
        element.style.transform = "translateY(80%)";
        element.style.transform = "translateX(-30%)";
        element.style.opacity = "0";
      });
      this.target2.style.position = "absolute";
      this.target2.style.transform = `translateY(${this.distance_scroll}px)`;
      // console.log(1);
    } else {
      // if (this.distance_scroll * 3.2 >= this.distance_edge) {
      //   this.target.style.position = "fixed";
      //   this.target.style.transform = "translateY(0px)";
      //   if (this.distance_scroll * 1.6 <= this.distance_edge) {
      //     fadeElements.forEach((element) => {
      //       element.style.filter = "blur(5px)";
      //       element.style.transform = "translateY(80%)";
      //       element.style.transform = "translateX(-30%)";
      //       element.style.opacity = "0";
      //     });
      //   } else {
      //     // console.log(1);
      //     fadeElements.forEach((element) => {
      //       element.textContent = "一屏观天下，万景入画来";
      //       element.style.filter = "blur(0)";
      //       element.style.transform = "translateY(0%)";
      //       element.style.transform = "translateX(0%)";
      //       element.style.opacity = "1";
      //     });
      //   }
      // } else {
      this.target.style.position = "fixed";
      this.target.style.transform = "translateY(0px)";
      fadeElements.forEach((element) => {
        // element.textContent = "方寸屏间 万里山河";
        element.style.filter = "blur(0)";
        element.style.transform = "translateY(0%)";
        element.style.transform = "translateX(0%)";
        element.style.opacity = "1";
      });
      // }
      this.target2.style.position = "fixed";
      this.target2.style.transform = "translateY(0px)";
    }
  },
  remove() {
    this.observer.unobserve(this.contenter);
    this.observer = null;
    this.contenter = null;
    this.target = null;
    this.target2 = null;
  },
};
sf.resize();
sf.observe();
window.addEventListener("resize", sf.resize.bind(sf));
//图片渐入
const images = gsap.utils.toArray(".center-image");
images.forEach((img) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 70%", // 图片到达屏幕中间时触发
      toggleActions: "play none none none", // 播放一次，不反向
    },
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
  });
});
//三张卡片
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const stickyHeader = document.querySelector(".sticky-header h1");
  let isGapAnimationCompleted = false;
  let isFilpAnimationCompleted = false;
  let mm;
  let myTrigger;
  function initAnimations() {
    mm?.revert(); // 清理旧的 matchMedia
    myTrigger?.kill(); // 清理旧的 ScrollTrigger
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    mm = gsap.matchMedia();
    mm.add("(max-width:999px)", () => {
      document
        .querySelectorAll(".card, .card-container, .sticky-header h1")
        .forEach((el) => (el.style = ""));
      return {};
    });
    mm.add("(min-width:1000px)", () => {
      myTrigger = ScrollTrigger.create({
        trigger: ".sticky",
        start: "top top",
        end: `+=${window.innerHeight * 4}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= 0.1 && progress <= 0.25) {
            const headerProgress = gsap.utils.mapRange(
              0.1,
              0.25,
              0,
              1,
              progress
            );
            const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
            const opacityValue = gsap.utils.mapRange(
              0,
              1,
              0,
              1,
              headerProgress
            );
            gsap.set(stickyHeader, {
              y: yValue,
              opacity: opacityValue,
            });
          } else if (progress < 0.1) {
            gsap.set(stickyHeader, {
              y: 40,
              opacity: 0,
            });
          } else if (progress > 0.25) {
            gsap.set(stickyHeader, {
              y: 0,
              opacity: 1,
            });
          }
          if (progress <= 0.25) {
            const widthPercentage = gsap.utils.mapRange(
              0,
              0.25,
              75,
              60,
              progress
            );
            gsap.set(cardContainer, { width: `${widthPercentage}%` });
          } else {
            gsap.set(cardContainer, { width: "60%" });
          }
          if (progress >= 0.35 && !isGapAnimationCompleted) {
            gsap.to(cardContainer, {
              gap: "20px",
              duration: 0.5,
              ease: "power3.out",
            });
            gsap.to(["#card-1", "#card-2", "#card-3"], {
              borderRadius: "20px",
              duration: 0.5,
              ease: "power3.out",
            });
            isGapAnimationCompleted = true;
          } else if (progress < 0.35 && isGapAnimationCompleted) {
            gsap.to(cardContainer, {
              gap: "0px",
              duration: 0.5,
              ease: "power3.out",
            });
            gsap.to("#card-1", {
              borderRadius: "20px 0 0 20px",
              duration: 0.5,
              ease: "power3.out",
            });
            gsap.to("#card-2", {
              borderRadius: "0px",
              duration: 0.5,
              ease: "power3.out",
            });
            gsap.to("#card-3", {
              borderRadius: "0 20px 20px 0",
              duration: 0.5,
              ease: "power3.out",
            });
            isGapAnimationCompleted = false;
          }
          if (progress >= 0.7 && !isFilpAnimationCompleted) {
            gsap.to(".card", {
              rotationY: 180,
              duration: 0.75,
              ease: "power3.inOut",
              stagger: 0.1,
            });
            gsap.to(["#card-1", "#card-3"], {
              y: 30,
              rotationZ: (i) => [-15, 15][i],
              duration: 0.75,
              ease: "power3.inOut",
            });
            isFilpAnimationCompleted = true;
          } else if (progress < 0.7 && isFilpAnimationCompleted) {
            gsap.to(".card", {
              rotationY: 0,
              duration: 0.75,
              ease: "power3.inOut",
              stagger: -0.1,
            });
            gsap.to(["#card-1", "#card-3"], {
              y: 0,
              rotationZ: 0,
              duration: 0.75,
              ease: "power3.inOut",
            });
            isFilpAnimationCompleted = false;
          }
        },
      });
    });
  }
  initAnimations();
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initAnimations();
    }, 250);
  });
});
//横向滚动
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
    this.trigger?.kill();
    // ScrollTrigger.refresh();
    const stickyHeight = window.innerHeight * 4;
    console.log(stickyHeight);
    console.log(22);
    ScrollTrigger.create({
      id: "horizontalScroll",
      trigger: this.wrapper,
      // start: "top top",
      start: `top+=${window.innerHeight * 4} top`,
      // end: "bottom bottom",
      end: `+=${this.distance}`,
      // markers: true,
      onUpdate: (self) => {
        this.cardsbox.style.transform = `translateX(-${
          self.progress * this.distance
        }px)`;
      },
      onEnter: () => pinMenu(true),
      onLeaveBack: () => pinMenu(false),
      onLeave: () => {
        this.if_leave = true;
        pinMenu(false);
      },
      onEnterBack: () => {
        this.if_leave = false;
        pinMenu(true);
      },
    });
  },
  resize() {
    this.distance = this.cardsbox.offsetWidth - innerWidth;
    this.wrapper.style.height = `${this.distance}px`;
    this.wrapper.style.height = `${this.distance + window.innerHeight}px`;
    console.log(1);
    console.log(this.wrapper.style.height);
    if (this.if_leave)
      this.cardsbox.style.transform = `translateX(-${this.distance}px)`;
  },
};
const menu = document.querySelector(".side-menu");
function pinMenu(fixed) {
  if (fixed) {
    gsap.set(menu, { position: "fixed", top: "50%", left: "40px" });
  } else {
    gsap.set(menu, { position: "absolute" });
  }
}
scrollbox.init();
//横向介绍
gsap.from(".row-text", {
  scrollTrigger: {
    trigger: ".row-text",
    start: `top+=${window.innerHeight * 4} 70%`,
    // start: "top 80%", // 元素进入视口80%高度时开始
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 300,
  x: -50,
  duration: 2,
  ease: "power3.out",
});
//侧边栏

// const btn = document.getElementById("backToTop");
// btn.addEventListener("click", () => {
//   gsap.to(window, {
//     scrollTo: { y: 0 },
//     duration: 1.2,
//     ease: "power3.inOut",
//   });
// });
const sideMenu = document.querySelector(".side-menu");
const menuItems = sideMenu.querySelectorAll("li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    const scrollTriggerInstance = ScrollTrigger.getById("horizontalScroll");

    if (!scrollTriggerInstance) return;

    const totalScroll = scrollTriggerInstance.end - scrollTriggerInstance.start;
    const targetProgress = index / (menuItems.length - 1);
    const targetScroll =
      scrollTriggerInstance.start + targetProgress * totalScroll;

    // 用 GSAP 平滑滚动（Lenis 已在用，则可以直接操作 window.scrollTo）
    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 1.2,
      ease: "power3.inOut",
    });
  });
});
