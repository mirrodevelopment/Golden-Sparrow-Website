/* ==========================================================================
   GOLDEN SPARROW APPLICATION CONTROLLER
   GSAP Animations, VisionOS Interactions, Dynamic Showcase, Particle Canvas
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Initialize Lenis Smooth Scroll
  // 2. Initialize Lenis Smooth Scroll (Disabled for buttery-smooth native scrolling speed)
  /*
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple cubic ease
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false
    });

    lenis.on('scroll', () => {
      if (window.ScrollTrigger) {
        ScrollTrigger.update();
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  */



  // 2.1 Navbar Hide/Show on Scroll Direction
  let lastScrollY = window.scrollY;
  const headerWrapper = document.querySelector(".header-wrapper");
  const scrollThreshold = 8; // min scroll change to trigger to prevent micro-stutter

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Always show near the top of the page
    if (currentScrollY <= 80) {
      if (headerWrapper) {
        headerWrapper.classList.remove("header-hidden");
      }
      lastScrollY = currentScrollY;
      return;
    }

    // Avoid triggering on tiny scroll adjustments
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return;
    }

    if (currentScrollY > lastScrollY) {
      // Scroll Down - hide navbar
      if (headerWrapper) {
        headerWrapper.classList.add("header-hidden");
      }
    } else {
      // Scroll Up - show navbar
      if (headerWrapper) {
        headerWrapper.classList.remove("header-hidden");
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // 3. Ambient Custom Cursor Glow and Background shift (Disabled per User Request)

  // 3.1 Initialize Apple VisionOS Floating Dust Particles Canvas
  const canvas = document.getElementById("ambient-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 60;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.15 + 0.05,
        baseAlpha: Math.random() * 0.15 + 0.05,
        speedModifier: Math.random() * 0.5 + 0.5
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx * p.speedModifier;
        p.y += p.vy * p.speedModifier;

        // Wrap particles around borders
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulse alpha gently over time for organic drift look
        p.alpha = p.baseAlpha + Math.sin(Date.now() * 0.001 * p.speedModifier) * 0.03;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 230, 196, ${Math.max(0.01, p.alpha)})`; // Warm ivory glow
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // 4. Destinations Database matching Reference Image
  const destinations = [
    {
      title: "Kyoto, Japan",
      image: "images/kyoto.png",
      quote: "A place where history and cherry blossoms meet.",
      previewTitle: "Amalfi Coast, Italy",
      previewDesc: "Classic views, timeless Mediterranean shores.",
      previewImage: "images/amalfi.png",
      pag: "2 / 3",
      thumbs: [
        "images/kyoto.png",
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=400&q=80"
      ],
      colors: {
        glow1: "rgba(184, 218, 240, 0.4)",
        glow2: "rgba(220, 214, 247, 0.45)",
        glow3: "rgba(247, 230, 196, 0.25)"
      }
    },
    {
      title: "Amalfi Coast, Italy",
      image: "images/amalfi.png",
      quote: "Colorful houses tumbling down cliffs into azure waters.",
      previewTitle: "Patagonia Peaks",
      previewDesc: "Granite giants carving blue glacier lakes.",
      previewImage: "images/patagonia.png",
      pag: "3 / 3",
      thumbs: [
        "images/amalfi.png",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80"
      ],
      colors: {
        glow1: "rgba(220, 214, 247, 0.45)",
        glow2: "rgba(247, 220, 200, 0.35)",
        glow3: "rgba(184, 218, 240, 0.3)"
      }
    },
    {
      title: "Patagonia Peaks",
      image: "images/patagonia.png",
      quote: "Granite giants carving glaciers under indigo skies.",
      previewTitle: "Kyoto, Japan",
      previewDesc: "A place where history and cherry blossoms meet.",
      previewImage: "images/kyoto.png",
      pag: "1 / 3",
      thumbs: [
        "images/patagonia.png",
        "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
      ],
      colors: {
        glow1: "rgba(179, 229, 252, 0.4)",
        glow2: "rgba(178, 235, 242, 0.35)",
        glow3: "rgba(209, 196, 233, 0.4)"
      }
    }
  ];

  // New Cinematic Fullscreen Horizontal Gallery Slider
  function initHeroGallerySlider() {
    const track = document.getElementById("hero-gallery-track");
    const cards = document.querySelectorAll(".hero-gallery-card");
    const viewport = document.getElementById("hero-gallery-viewport");
    if (!track || cards.length === 0) return;

    const bgLayers = document.querySelectorAll(".hero-bg-layer");
    const pagCurr = document.getElementById("hero-pag-curr");
    const pagFill = document.getElementById("hero-pag-fill");

    // Stats elements
    const statDist = document.getElementById("hero-stat-dist");
    const statElev = document.getElementById("hero-stat-elev");
    const statDuration = document.getElementById("hero-stat-duration");

    // Story overlay elements
    const storyOverlay = document.getElementById("hero-story-overlay");
    const storyCloseBtn = document.getElementById("btn-hero-story-close");
    const storyTitle = document.getElementById("hero-story-title");
    const storyDesc = document.getElementById("hero-story-desc");

    // Timeline paths inside story mode
    const storyRoutePath = document.getElementById("hero-story-route-path");
    const storyElevPath = document.getElementById("hero-story-elev-path");
    const storyTimePath = document.getElementById("hero-story-time-path");
    const storyTimeDot = document.getElementById("hero-story-time-dot");
    const storySeasonRing = document.getElementById("hero-story-season-ring");

    // Search input synchronizer
    const searchInput = document.getElementById("search-dest");

    // Dynamic stats data for the 5 destinations
    const galleryData = [
      {
        title: "Kyoto, Japan",
        name: "Kyoto",
        desc: "Walk through silent bamboo paths and vermillion torii gates. Experience private tea ceremonies with geishas, zen rock gardens, and historic wooden shrines.",
        dist: "12.8 KM",
        elev: "45 M",
        duration: "3 DAYS",
        durationDays: 3,
        seasonMonths: 3,
        bgIndex: 0
      },
      {
        title: "Amalfi Coast, Italy",
        name: "Amalfi Coast",
        desc: "Bask in the timeless Mediterranean sun. Walk the Path of the Gods, swim in sapphire waters, and explore colorful cliffside villages cascading down to the sea.",
        dist: "18.2 KM",
        elev: "350 M",
        duration: "5 DAYS",
        durationDays: 5,
        seasonMonths: 6,
        bgIndex: 1
      },
      {
        title: "Patagonia peaks, Chile",
        name: "Patagonia Peaks",
        desc: "Venture to the edge of the world. Witness colossal glacier blocks carving turquoise lakes, navigate wind-swept towers of granite, and discover the pure wilderness of South America.",
        dist: "32.0 KM",
        elev: "1,250 M",
        duration: "7 DAYS",
        durationDays: 7,
        seasonMonths: 5,
        bgIndex: 2
      },
      {
        title: "Bali Oasis, Indonesia",
        name: "Bali Oasis",
        desc: "Find quiet temples, turquoise waters, and absolute spiritual rejuvenation. Walk through misty jungles and discover local crafts in the heart of Ubud.",
        dist: "8.5 KM",
        elev: "120 M",
        duration: "5 DAYS",
        durationDays: 5,
        seasonMonths: 6,
        bgIndex: 3
      },
      {
        title: "Swiss Alps, Switzerland",
        name: "Swiss Alps",
        desc: "Soak in clean alpine air amidst majestic snow-capped peaks. Explore pristine crystal lakes, ride historical cogwheel trains, and experience the luxury of high-altitude life.",
        dist: "24.0 KM",
        elev: "1,620 M",
        duration: "6 DAYS",
        durationDays: 6,
        seasonMonths: 5,
        bgIndex: 4
      }
    ];

    let currentIndex = 0;
    let isTransitioning = false;
    let isStoryOpen = false;

    // A. Animate particles canvas
    const pCanvas = document.getElementById("hero-particles-canvas");
    if (pCanvas) {
      const pCtx = pCanvas.getContext("2d");
      let pList = [];
      const pCount = 30;

      function resizeHeroCanvas() {
        pCanvas.width = pCanvas.parentElement.clientWidth || window.innerWidth;
        pCanvas.height = pCanvas.parentElement.clientHeight || window.innerHeight;
      }
      window.addEventListener("resize", resizeHeroCanvas);
      resizeHeroCanvas();

      for (let i = 0; i < pCount; i++) {
        pList.push({
          x: Math.random() * pCanvas.width,
          y: Math.random() * pCanvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -Math.random() * 0.2 - 0.05,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.3 + 0.1
        });
      }

      function drawHeroParticles() {
        pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
        pList.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < 0) {
            p.y = pCanvas.height;
            p.x = Math.random() * pCanvas.width;
          }
          if (p.x < 0 || p.x > pCanvas.width) {
            p.x = Math.random() * pCanvas.width;
          }
          pCtx.beginPath();
          pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          pCtx.fillStyle = `rgba(229, 192, 96, ${p.alpha})`;
          pCtx.fill();
        });
        requestAnimationFrame(drawHeroParticles);
      }
      drawHeroParticles();
    }

    // B. Main transition function for gallery cards
    function transitionGallery(targetIndex, animate = true) {
      if (isTransitioning || isStoryOpen) return;
      isTransitioning = true;

      // Wrap-around logic
      const total = cards.length;
      currentIndex = (targetIndex + total) % total;

      // Active state updates
      cards.forEach((card, idx) => {
        card.classList.toggle("active", idx === currentIndex);
      });

      // Background cross-fade
      bgLayers.forEach((layer, idx) => {
        if (idx === currentIndex) {
          layer.classList.add("active");
        } else {
          layer.classList.remove("active");
        }
      });

      // Synchronize stats & search text
      const currentData = galleryData[currentIndex];
      if (statDist) statDist.textContent = currentData.dist;
      if (statElev) statElev.textContent = currentData.elev;
      if (statDuration) statDuration.textContent = currentData.duration;
      if (searchInput) searchInput.value = currentData.title;

      // Synchronize bottom pagination text & bar
      if (pagCurr) pagCurr.textContent = `0${currentIndex + 1}`;
      if (pagFill) {
        pagFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
      }

      // Stagger dots if they exist
      const mobileDots = document.querySelectorAll(".hero-mobile-dot");
      mobileDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });

      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        // Desktop gallery transform positioning
        cards.forEach((card, idx) => {
          let diff = idx - currentIndex;
          if (diff < -1) diff += total;
          if (diff > 3) diff -= total;

          let xVal = 1100;
          let scaleVal = 0.7;
          let opacityVal = 0;
          let zIndexVal = 4;
          let blurVal = 4;

          if (diff === -1) {
            xVal = -50;
            scaleVal = 0.8;
            opacityVal = 0.75;
            zIndexVal = 5;
            blurVal = 1.5;
          } else if (diff === 0) {
            xVal = 250;
            scaleVal = 1.25;
            opacityVal = 1;
            zIndexVal = 10;
            blurVal = 0;
          } else if (diff === 1) {
            xVal = 580;
            scaleVal = 0.9;
            opacityVal = 0.85;
            zIndexVal = 8;
            blurVal = 0;
          } else if (diff === 2) {
            xVal = 840;
            scaleVal = 0.8;
            opacityVal = 0.75;
            zIndexVal = 6;
            blurVal = 2;
          }

          if (animate) {
            track.classList.add("is-transitioning");
            gsap.to(card, {
              x: xVal,
              scale: scaleVal,
              opacity: opacityVal,
              zIndex: zIndexVal,
              filter: `blur(${blurVal}px)`,
              duration: 0.85,
              ease: "power3.out",
              onComplete: () => {
                track.classList.remove("is-transitioning");
              }
            });
          } else {
            gsap.set(card, {
              x: xVal,
              scale: scaleVal,
              opacity: opacityVal,
              zIndex: zIndexVal,
              filter: `blur(${blurVal}px)`
            });
          }
        });
      }

      // Finish transition cooldown
      setTimeout(() => {
        isTransitioning = false;
      }, animate ? 850 : 50);
    }

    // C. Click on cards triggers story overlay morph zoom
    function enterHeroStory(index) {
      if (isStoryOpen || isTransitioning) return;
      isStoryOpen = true;

      const currentData = galleryData[index];

      // Populate story texts
      if (storyTitle) storyTitle.textContent = currentData.title;
      if (storyDesc) storyDesc.textContent = currentData.desc;

      // Update story timeline stat numbers
      const statsTimelines = storyOverlay.querySelectorAll(".story-timeline-item");
      if (statsTimelines.length >= 4) {
        statsTimelines[0].querySelector(".timeline-val").textContent = currentData.dist;
        statsTimelines[1].querySelector(".timeline-val").textContent = currentData.elev;
        statsTimelines[2].querySelector(".timeline-val").textContent = currentData.duration;
      }

      // Set bg image of story overlay
      const storyBg = storyOverlay.querySelector(".story-bg-image");
      if (storyBg) {
        const bgLayer = bgLayers[index];
        const bgUrl = bgLayer ? bgLayer.style.backgroundImage : "";
        storyBg.style.backgroundImage = bgUrl;
      }

      // Morph GSAP timeline
      const tl = gsap.timeline({
        onStart: () => {
          storyOverlay.classList.add("active");
        }
      });

      // 1. Fade out header and other gallery assets
      tl.to([".hero-editorial-header", ".hero-gallery-viewport", ".hero-gallery-bottom-bar"], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.inOut"
      });

      // 2. Animate story details in
      tl.to(storyOverlay, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "<");

      // 3. Draw SVGs inside story mode
      tl.add(() => {
        animateStoryInfographics(currentData);
      }, "-=0.2");
    }

    function exitHeroStory() {
      if (!isStoryOpen) return;

      const tl = gsap.timeline({
        onComplete: () => {
          storyOverlay.classList.remove("active");
          isStoryOpen = false;
        }
      });

      // 1. Fade out story elements
      tl.to(storyOverlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });

      // 2. Fade gallery back in
      tl.to([".hero-editorial-header", ".hero-gallery-viewport", ".hero-gallery-bottom-bar"], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "<0.1");
    }

    function animateStoryInfographics(data) {
      // 1. Draw route line path
      if (storyRoutePath) {
        gsap.killTweensOf(storyRoutePath);
        const len = storyRoutePath.getTotalLength();
        storyRoutePath.style.strokeDasharray = len;
        gsap.fromTo(storyRoutePath,
          { strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }
        );
      }

      // 2. Draw elevation path
      if (storyElevPath) {
        gsap.killTweensOf(storyElevPath);
        const len = storyElevPath.getTotalLength();
        storyElevPath.style.strokeDasharray = len;
        gsap.fromTo(storyElevPath,
          { strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }
        );
      }

      // 3. Draw calendar time path and dot
      if (storyTimePath && storyTimeDot) {
        gsap.killTweensOf([storyTimePath, storyTimeDot]);
        const days = data.durationDays || 5;
        const targetX = 5 + (90 * (days / 10)); // map 1-10 onto line
        storyTimePath.setAttribute("d", `M5,20 L${targetX},20`);
        const len = storyTimePath.getTotalLength();
        storyTimePath.style.strokeDasharray = len;

        gsap.fromTo(storyTimePath,
          { strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }
        );
        gsap.fromTo(storyTimeDot,
          { attr: { cx: 5 } },
          { attr: { cx: targetX }, duration: 1.2, ease: "power2.out" }
        );
      }

      // 4. Season ring
      if (storySeasonRing) {
        gsap.killTweensOf(storySeasonRing);
        const months = data.seasonMonths || 6;
        const targetOffset = 94 * (1 - months / 12);
        gsap.fromTo(storySeasonRing,
          { strokeDashoffset: 94 },
          { strokeDashoffset: targetOffset, duration: 1.2, ease: "power2.out" }
        );
      }
    }

    // D. Mouse wheel scroll interception
    let wheelCooldown = false;
    viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (wheelCooldown || isStoryOpen) return;
      wheelCooldown = true;
      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      transitionGallery(nextIndex);
      setTimeout(() => {
        wheelCooldown = false;
      }, 950);
    }, { passive: false });

    // E. Mobile touch swipes & snap scroll
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Build dots indicator dynamically
      const dotsContainer = document.getElementById("hero-mobile-dots");
      if (dotsContainer) {
        dotsContainer.innerHTML = "";
        cards.forEach((_, idx) => {
          const dot = document.createElement("span");
          dot.className = `hero-mobile-dot ${idx === currentIndex ? 'active' : ''}`;
          dot.addEventListener("click", () => {
            if (isStoryOpen) return;
            const activeCard = cards[idx];
            if (activeCard && viewport) {
              const scrollTarget = activeCard.offsetLeft - (viewport.clientWidth / 2) + (activeCard.clientWidth / 2);
              viewport.scrollTo({ left: scrollTarget, behavior: "smooth" });
            }
          });
          dotsContainer.appendChild(dot);
        });
      }

      // Monitor viewport scroll snap to update active highlights on mobile
      let scrollTimeout;
      viewport.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
          let closestIndex = currentIndex;
          let minDistance = Infinity;

          cards.forEach((card, idx) => {
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const dist = Math.abs(cardCenter - viewportCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIndex = idx;
            }
          });

          if (closestIndex !== currentIndex) {
            currentIndex = closestIndex;
            // Highlight active snap cards
            cards.forEach((c, idx) => {
              c.classList.toggle("active-snap", idx === currentIndex);
              c.classList.toggle("active", idx === currentIndex);
            });
            // Update dots
            const dots = document.querySelectorAll(".hero-mobile-dot");
            dots.forEach((dot, idx) => {
              dot.classList.toggle("active", idx === currentIndex);
            });

            // Swap backgrounds
            bgLayers.forEach((layer, idx) => {
              layer.classList.toggle("active", idx === currentIndex);
            });
          }
        }, 100);
      });
    }

    // F. Setup actions and click handlers
    cards.forEach((card, idx) => {
      card.addEventListener("click", () => {
        if (idx !== currentIndex) {
          if (!isMobile) {
            transitionGallery(idx);
          }
        } else {
          enterHeroStory(idx);
        }
      });
    });

    if (storyCloseBtn) {
      storyCloseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        exitHeroStory();
      });
    }

    // G. Initial run
    transitionGallery(0, false);
  }

  // Initialize the new Cinematic Fullscreen Horizontal Gallery
  initHeroGallerySlider();

  // 5. Showcase Viewport Hover Parallax (Disabled per User Request)


  // 6. Experience Explorer Engine & Data Model
  const experiences = [
    // Adventure (8)
    {
      id: "adv-1",
      title: "Trekking in Patagonia",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      desc: "Embark on an epic traverse through granite spires, blue glaciers, and pristine forests.",
      duration: 9,
      difficulty: "Challenging",
      price: 185000,
      season: "Autumn",
      tag: "Trekking",
      popularity: 98
    },
    {
      id: "adv-2",
      title: "Ice Climbing in Iceland",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=80",
      desc: "Ascend frozen waterfalls and explore mystical crystal ice caves under the arctic sky.",
      duration: 5,
      difficulty: "Challenging",
      price: 210000,
      season: "Winter",
      tag: "Ice Climbing",
      popularity: 88
    },
    {
      id: "adv-3",
      title: "Queenstown Extreme Rafting",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Navigate wild white-water rapids and skydive from 15,000 feet above Southern Alps.",
      duration: 3,
      difficulty: "Moderate",
      price: 85000,
      season: "Summer",
      tag: "Rafting & Skydiving",
      popularity: 92
    },
    {
      id: "adv-4",
      title: "Dolomites High Route Trek",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Hike the legendary Alta Via 1 trail, staying in traditional high-altitude alpine refuges.",
      duration: 8,
      difficulty: "Challenging",
      price: 145000,
      season: "Summer",
      tag: "Alpine Hiking",
      popularity: 91
    },
    {
      id: "adv-5",
      title: "Moab Desert Mountain Biking",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
      desc: "Ride the world-famous slickrock trails amidst red sandstone arches and steep canyons.",
      duration: 4,
      difficulty: "Moderate",
      price: 62000,
      season: "Spring",
      tag: "Mountain Biking",
      popularity: 85
    },
    {
      id: "adv-6",
      title: "Kayaking Greenland Fjords",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
      desc: "Paddle between massive floating icebergs and camp under the midnight sun on remote shores.",
      duration: 10,
      difficulty: "Challenging",
      price: 290000,
      season: "Summer",
      tag: "Sea Kayaking",
      popularity: 89
    },
    {
      id: "adv-7",
      title: "Annapurna Circuit Expedition",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      desc: "Cross Thorong La Pass at 5,416m and witness panoramic views of majestic Himalayan giants.",
      duration: 12,
      difficulty: "Challenging",
      price: 120000,
      season: "Spring",
      tag: "Trekking",
      popularity: 96
    },
    {
      id: "adv-8",
      title: "Costa Rica Canopy & Ziplining",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      desc: "Fly through lush cloud forest canopy and walk hanging bridges surrounded by exotic fauna.",
      duration: 5,
      difficulty: "Easy",
      price: 75000,
      season: "Spring",
      tag: "Eco-Adventure",
      popularity: 84
    },

    // Culture (8)
    {
      id: "cul-1",
      title: "Kyoto Temples & Tea Ceremony",
      category: "culture",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      desc: "Walk bamboo groves, visit golden pavilions, and learn Zen philosophy through private tea sessions.",
      duration: 4,
      difficulty: "Easy",
      price: 95000,
      season: "Spring",
      tag: "Zen Heritage",
      popularity: 97
    },
    {
      id: "cul-2",
      title: "Taj Mahal Sunrise Tour",
      category: "culture",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      desc: "Witness the iconic monument of love bathed in morning gold, followed by Agra artisan visits.",
      duration: 2,
      difficulty: "Easy",
      price: 35000,
      season: "Winter",
      tag: "Mughal History",
      popularity: 99
    },
    {
      id: "cul-3",
      title: "Rome Gladiators & Ruins",
      category: "culture",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      desc: "Gain private access to the Colosseum underground chambers and walk the historic Roman Forum.",
      duration: 5,
      difficulty: "Easy",
      price: 115000,
      season: "Spring",
      tag: "Roman Antiquity",
      popularity: 93
    },
    {
      id: "cul-4",
      title: "Machu Picchu Incan Trail",
      category: "culture",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
      desc: "Trek high Andean passes to arrive at the mystical Sun Gate of the lost Incan Citadel.",
      duration: 6,
      difficulty: "Moderate",
      price: 165000,
      season: "Autumn",
      tag: "Inca Heritage",
      popularity: 95
    },
    {
      id: "cul-5",
      title: "Petra Nabataean Expedition",
      category: "culture",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
      desc: "Explore the ancient rose-red city carved directly into rock cliffs, guided by local Bedouins.",
      duration: 4,
      difficulty: "Moderate",
      price: 130000,
      season: "Autumn",
      tag: "Ancient Wonders",
      popularity: 90
    },
    {
      id: "cul-6",
      title: "Angkor Wat Dawn Photo Tour",
      category: "culture",
      image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?auto=format&fit=crop&w=800&q=80",
      desc: "Capture the sun rising behind stone towers and seek hidden temples engulfed by tree roots.",
      duration: 3,
      difficulty: "Easy",
      price: 55000,
      season: "Winter",
      tag: "Khmer Heritage",
      popularity: 87
    },
    {
      id: "cul-7",
      title: "Egypt Nile River Cruise",
      category: "culture",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
      desc: "Sail a luxury dahabiya boat to Valley of the Kings, Karnak Temple, and Giza Pyramids.",
      duration: 8,
      difficulty: "Easy",
      price: 195000,
      season: "Winter",
      tag: "Pharaohs History",
      popularity: 94
    },
    {
      id: "cul-8",
      title: "Oaxaca Day of the Dead",
      category: "culture",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
      desc: "Immerse in vibrant candlelight vigils, sand tapestries, and traditional sugar skull markets.",
      duration: 5,
      difficulty: "Easy",
      price: 110000,
      season: "Autumn",
      tag: "Cultural Festival",
      popularity: 92
    },

    // Coastal (8)
    {
      id: "cst-1",
      title: "Amalfi Coast Yacht Sailing",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      desc: "Cruise past pastel houses and cliffside orchards, anchored in turquoise coves of Capri.",
      duration: 7,
      difficulty: "Easy",
      price: 240000,
      season: "Summer",
      tag: "Yacht Sailing",
      popularity: 98
    },
    {
      id: "cst-2",
      title: "Santorini Cliffside Yacht",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      desc: "Sail inside the volcanic caldera at sunset and swim in natural thermal hot springs.",
      duration: 4,
      difficulty: "Easy",
      price: 215000,
      season: "Summer",
      tag: "Sunset Cruise",
      popularity: 96
    },
    {
      id: "cst-3",
      title: "Great Barrier Reef Scuba",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      desc: "Dive the world's largest coral system, seeking sea turtles, reef sharks, and giant clams.",
      duration: 5,
      difficulty: "Moderate",
      price: 180000,
      season: "Autumn",
      tag: "Scuba Diving",
      popularity: 90
    },
    {
      id: "cst-4",
      title: "French Riviera Boat Tour",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      desc: "Indulge in private speedboats, beach clubs in Saint-Tropez, and shorelines of Monaco.",
      duration: 3,
      difficulty: "Easy",
      price: 275000,
      season: "Summer",
      tag: "Luxury Boating",
      popularity: 93
    },
    {
      id: "cst-5",
      title: "Maldives Overwater Villa",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
      desc: "Relax over translucent water, dining under the stars on your private villa deck.",
      duration: 6,
      difficulty: "Easy",
      price: 320000,
      season: "Winter",
      tag: "Private Island",
      popularity: 97
    },
    {
      id: "cst-6",
      title: "Norway Lofoten Islands",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80",
      desc: "Explore dramatic fjords, red fishing cabins, and beaches under the northern lights.",
      duration: 5,
      difficulty: "Moderate",
      price: 155000,
      season: "Spring",
      tag: "Fjord Exploration",
      popularity: 89
    },
    {
      id: "cst-7",
      title: "Bora Bora Lagoon Safari",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Snorkel in neon-blue waters, hand-feed friendly stingrays, and enjoy a private islet BBQ.",
      duration: 5,
      difficulty: "Easy",
      price: 295000,
      season: "Summer",
      tag: "Reef Safari",
      popularity: 94
    },
    {
      id: "cst-8",
      title: "Big Sur Scenic Coast Drive",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80",
      desc: "Drive coastal highways flanked by towering redwoods and rugged Pacific ocean cliffs.",
      duration: 4,
      difficulty: "Easy",
      price: 88000,
      season: "Spring",
      tag: "Coastal Roadtrip",
      popularity: 86
    },

    // Food (8)
    {
      id: "fod-1",
      title: "Tuscan Cooking Masterclass",
      category: "food",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
      desc: "Learn to roll pasta, source truffles, and pair fine Chianti wines at a historic villa.",
      duration: 5,
      difficulty: "Easy",
      price: 140000,
      season: "Autumn",
      tag: "Culinary School",
      popularity: 96
    },
    {
      id: "fod-2",
      title: "Tokyo Michelin Street Food",
      category: "food",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      desc: "Navigate back alleys for pristine sushi, melt-in-mouth wagyu, and elite ramen stalls.",
      duration: 3,
      difficulty: "Easy",
      price: 85000,
      season: "Spring",
      tag: "Gastronomy Tour",
      popularity: 98
    },
    {
      id: "fod-3",
      title: "Paris Pastry & Baking Secrets",
      category: "food",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      desc: "Craft airy croissants and colorful macarons alongside a master French patissier.",
      duration: 3,
      difficulty: "Easy",
      price: 98000,
      season: "Spring",
      tag: "Baking Class",
      popularity: 91
    },
    {
      id: "fod-4",
      title: "San Sebastian Pintxos Route",
      category: "food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      desc: "Go bar-hopping in Basque Country, tasting exquisite bite-sized culinary art with cider.",
      duration: 4,
      difficulty: "Easy",
      price: 125000,
      season: "Summer",
      tag: "Tapas Tasting",
      popularity: 93
    },
    {
      id: "fod-5",
      title: "Bangkok Canal Cooking Class",
      category: "food",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      desc: "Explore floating markets for fresh herbs and cook fiery curries on an organic canal farm.",
      duration: 3,
      difficulty: "Easy",
      price: 45000,
      season: "Winter",
      tag: "Thai Culinary",
      popularity: 88
    },
    {
      id: "fod-6",
      title: "Mendoza Malbec Harvest",
      category: "food",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      desc: "Participate in grape stomping, vineyard picnics, and premium cellars wine tastings.",
      duration: 5,
      difficulty: "Easy",
      price: 135000,
      season: "Autumn",
      tag: "Wine Harvest",
      popularity: 89
    },
    {
      id: "fod-7",
      title: "Hokkaido Seafood Feast",
      category: "food",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      desc: "Dine on king crab, sea urchin rice bowls, and warm up in local sake bars in the snow.",
      duration: 4,
      difficulty: "Easy",
      price: 110000,
      season: "Winter",
      tag: "Seafood Culinary",
      popularity: 90
    },
    {
      id: "fod-8",
      title: "Oaxaca Ancestral Mole Class",
      category: "food",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      desc: "Grind cacao and dried chilis on stone metates to master the complex 30-ingredient mole sauces.",
      duration: 4,
      difficulty: "Easy",
      price: 72000,
      season: "Winter",
      tag: "Mexican Heritage",
      popularity: 85
    },

    // Luxury (8)
    {
      id: "lux-1",
      title: "Simplon-Orient-Express",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80",
      desc: "Relive golden age rail travel in art deco cabins from Venice to Paris, with lobster dinners.",
      duration: 2,
      difficulty: "Easy",
      price: 385000,
      season: "Spring",
      tag: "Vintage Rail",
      popularity: 97
    },
    {
      id: "lux-2",
      title: "Private Jet Seychelles",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
      desc: "Charter a private jet to a secluded island sanctuary featuring an elite beachfront mansion.",
      duration: 7,
      difficulty: "Easy",
      price: 850000,
      season: "Spring",
      tag: "Private Getaway",
      popularity: 99
    },
    {
      id: "lux-3",
      title: "Versailles Royal Suite Escape",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=80",
      desc: "Sleep within the Palace gates, enjoying after-hours private tours of the Hall of Mirrors.",
      duration: 3,
      difficulty: "Easy",
      price: 420000,
      season: "Summer",
      tag: "Royal Heritage",
      popularity: 95
    },
    {
      id: "lux-4",
      title: "Swiss Alps Chalet & Spa",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
      desc: "Arrive by private helicopter to a timber chalet with indoor pools and personal ski guides.",
      duration: 5,
      difficulty: "Easy",
      price: 510000,
      season: "Winter",
      tag: "Alpine Luxury",
      popularity: 98
    },
    {
      id: "lux-5",
      title: "Superyacht Monaco GP Charter",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
      desc: "Watch the legendary Grand Prix from a 60m yacht moored trackside, with gourmet chefs.",
      duration: 4,
      difficulty: "Easy",
      price: 980000,
      season: "Summer",
      tag: "GP Yacht Charter",
      popularity: 99
    },
    {
      id: "lux-6",
      title: "Kyoto Imperial Ryokan Spa",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80",
      desc: "Relax in healing thermal onsen baths at an exclusive heritage estate with personal butler care.",
      duration: 3,
      difficulty: "Easy",
      price: 260000,
      season: "Autumn",
      tag: "Onsen Wellness",
      popularity: 93
    },
    {
      id: "lux-7",
      title: "Serengeti Balloon Safari",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Glide silently above the wildebeest migration, descending to a champagne bush banquet.",
      duration: 4,
      difficulty: "Easy",
      price: 340000,
      season: "Summer",
      tag: "Air Safari",
      popularity: 94
    },
    {
      id: "lux-8",
      title: "Bora Bora Beach Mansion",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
      desc: "A massive overwater estate featuring a private glass-bottom pool and private chef team.",
      duration: 7,
      difficulty: "Easy",
      price: 720000,
      season: "Winter",
      tag: "Ultra Beachfront",
      popularity: 96
    },

    // Wildlife (8)
    {
      id: "wld-1",
      title: "Serengeti Big Five Safari",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      desc: "Embark on open 4x4 tracks to witness lions, leopards, rhinos, elephants, and buffaloes.",
      duration: 6,
      difficulty: "Easy",
      price: 265000,
      season: "Summer",
      tag: "Big Five Safari",
      popularity: 98
    },
    {
      id: "wld-2",
      title: "Galapagos Yacht Expedition",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      desc: "Encounter fearless giant tortoises, marine iguanas, and blue-footed boobies with naturalists.",
      duration: 8,
      difficulty: "Moderate",
      price: 350000,
      season: "Spring",
      tag: "Island Cruise",
      popularity: 95
    },
    {
      id: "wld-3",
      title: "Rwanda Gorilla Trekking",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
      desc: "Hike dense volcanic rainforests to spend a silent, magical hour with silverback gorillas.",
      duration: 4,
      difficulty: "Challenging",
      price: 410000,
      season: "Summer",
      tag: "Gorilla Trekking",
      popularity: 97
    },
    {
      id: "wld-4",
      title: "Antarctica Emperor Penguins",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=80",
      desc: "Voyage through iceberg seas to stand amongst thousands of majestic Emperor penguins.",
      duration: 11,
      difficulty: "Challenging",
      price: 890000,
      season: "Winter",
      tag: "Polar Wildlife",
      popularity: 96
    },
    {
      id: "wld-5",
      title: "Alaska Grizzly Bear Safari",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      desc: "Fly to coastal Katmai rivers and photograph giant grizzlies catching leaping salmon.",
      duration: 6,
      difficulty: "Moderate",
      price: 230000,
      season: "Autumn",
      tag: "Bear Photography",
      popularity: 91
    },
    {
      id: "wld-6",
      title: "Madagascar Baobabs & Lemurs",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
      desc: "Find rare ring-tailed lemurs and explore ancient baobab avenues and stone tsingy forests.",
      duration: 7,
      difficulty: "Moderate",
      price: 175000,
      season: "Autumn",
      tag: "Endemic Eco-Tour",
      popularity: 88
    },
    {
      id: "wld-7",
      title: "India Bengal Tiger Safari",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?auto=format&fit=crop&w=800&q=80",
      desc: "Track royal Bengal tigers in Ranthambore ruins during morning and evening game drives.",
      duration: 5,
      difficulty: "Easy",
      price: 115000,
      season: "Spring",
      tag: "Tiger Safari",
      popularity: 94
    },
    {
      id: "wld-8",
      title: "Cloud Forest Birdwatching",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      desc: "Spot radiant quetzals, tiny hummingbirds, and colorful toucans in tropical high canopy.",
      duration: 5,
      difficulty: "Easy",
      price: 82000,
      season: "Spring",
      tag: "Bird Watching",
      popularity: 85
    }
  ];

  const categoryHeaders = {
    adventure: {
      name: "Adventure Trips",
      desc: "For thrill seekers and nature lovers alike."
    },
    culture: {
      name: "Cultural Journeys",
      desc: "Immerse yourself in history, art, and tradition."
    },
    coastal: {
      name: "Coastal Escapes",
      desc: "Sun-soaked shores and blue horizon yacht cruises."
    },
    food: {
      name: "Culinary Expeditions",
      desc: "Savor authentic flavors and local cooking masterclasses."
    },
    luxury: {
      name: "Elite Retreats",
      desc: "Unparalleled comfort, private jets, and royal estates."
    },
    wildlife: {
      name: "Wild Encounters",
      desc: "Journey into the wild and witness nature's majesty."
    }
  };

  // State Management
  let activeCategory = "adventure";
  let pageLimit = 8;
  let sortPreference = "popular";
  let selectedFilters = {
    difficulty: [],
    duration: [],
    season: []
  };
  let bookmarkedExperiences = JSON.parse(localStorage.getItem("bookmarked_experiences") || "[]");

  // DOM elements for Explorer
  const gridContainer = document.getElementById("experiences-grid");
  const resultsCountText = document.getElementById("results-count");
  const loadMoreBtn = document.getElementById("btn-load-more");
  const loadMoreTextSpan = document.getElementById("load-more-text");
  const resetFiltersBtn = document.getElementById("btn-reset-filters");
  const sortSelect = document.getElementById("sort-experiences");
  const activeCatName = document.getElementById("active-cat-name");
  const activeCatDesc = document.getElementById("active-cat-desc");
  const filterSidebar = document.getElementById("filter-sidebar");
  const filterToggleBtn = document.getElementById("btn-filter-toggle");

  // Category Accent Class Mapper
  const categoryAccents = {
    adventure: "accent-adventure",
    culture: "accent-culture",
    coastal: "accent-coastal",
    food: "accent-food",
    luxury: "accent-luxury",
    wildlife: "accent-wildlife"
  };

  // Rendering Function
  function renderExplorerGrid() {
    if (!gridContainer) return;

    // 1. Filter data based on activeCategory
    let filtered = experiences.filter(item => item.category === activeCategory);

    // 2. Filter data based on Difficulty checkboxes
    if (selectedFilters.difficulty.length > 0) {
      filtered = filtered.filter(item => selectedFilters.difficulty.includes(item.difficulty));
    }

    // 3. Filter data based on Duration checkboxes
    if (selectedFilters.duration.length > 0) {
      filtered = filtered.filter(item => {
        return selectedFilters.duration.some(range => {
          if (range === "short") return item.duration <= 5;
          if (range === "medium") return item.duration >= 6 && item.duration <= 10;
          if (range === "long") return item.duration > 10;
          return false;
        });
      });
    }

    // 4. Filter data based on Season checkboxes
    if (selectedFilters.season.length > 0) {
      filtered = filtered.filter(item => {
        return selectedFilters.season.some(seasonVal => {
          if (seasonVal === "Summer") return item.season === "Summer";
          if (seasonVal === "Winter") return item.season === "Winter";
          if (seasonVal === "Spring/Autumn") return item.season === "Spring" || item.season === "Autumn";
          return false;
        });
      });
    }

    // 5. Sort data
    if (sortPreference === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPreference === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // popular
      filtered.sort((a, b) => b.popularity - a.popularity);
    }

    // 6. Update results count
    resultsCountText.textContent = `${filtered.length} ${filtered.length === 1 ? 'experience' : 'experiences'} found`;

    // 7. Handle pagination (Load More)
    const displayedItems = filtered.slice(0, pageLimit);

    if (filtered.length <= pageLimit) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "flex";
      // Dynamic button label
      const categoryName = categoryHeaders[activeCategory].name.toLowerCase();
      loadMoreTextSpan.textContent = `Load more ${categoryName}`;
    }

    // 8. Render grid content
    if (displayedItems.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-light); font-weight: 500;">
          <i data-lucide="info" style="width: 2rem; height: 2rem; margin: 0 auto 0.8rem; display: block; color: var(--text-light); opacity: 0.6;"></i>
          No experiences match your active filters. Try adjusting your sidebar checklist.
        </div>
      `;
    } else {
      gridContainer.innerHTML = displayedItems.map(item => {
        const isBookmarked = bookmarkedExperiences.includes(item.id);
        const formattedPrice = item.price.toLocaleString("en-IN");
        return `
          <div class="story-card ${categoryAccents[item.category] || 'accent-adventure'}" data-id="${item.id}">
            <div class="story-card-image-wrapper">
              <button class="story-bookmark-btn ${isBookmarked ? 'active' : ''}" aria-label="Bookmark experience">
                <i data-lucide="bookmark"></i>
              </button>
              <div class="story-card-image" style="background-image: url('${item.image}')"></div>
            </div>
            <div class="story-card-content">
              <div class="story-card-header">
                <span class="story-card-badge">${item.tag}</span>
                <span class="story-card-price">₹${formattedPrice}</span>
              </div>
              <h3 class="story-card-title">${item.title}</h3>
              <p class="story-card-desc">${item.desc}</p>
              <div class="story-card-footer">
                <div class="story-card-meta">
                  <span><i data-lucide="clock"></i>${item.duration} Days</span>
                </div>
                <button class="story-explore-btn" aria-label="Explore experience">
                  <i data-lucide="arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // 9. Re-render icons for dynamic HTML
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // 10. Bind Event Listeners on newly rendered elements (Bookmarks and Exploration)
    bindCardEvents();
  }

  // Helper to map experience content to destination slugs or fallback path
  function getRedirectPathForExperience(title, desc) {
    const text = (title + " " + desc).toLowerCase();
    
    if (text.includes("iceland")) return "/destination/iceland";
    if (text.includes("switzerland") || text.includes("swiss")) return "/destination/switzerland";
    if (text.includes("kyoto")) return "/destination/kyoto";
    if (text.includes("tokyo") || text.includes("hokkaido") || text.includes("japan")) return "/destination/japan";
    if (text.includes("italy") || text.includes("rome") || text.includes("amalfi") || text.includes("tuscan") || text.includes("dolomites") || text.includes("venice") || text.includes("florence")) return "/destination/italy";
    if (text.includes("maldives")) return "/destination/maldives";
    if (text.includes("cappadocia") || text.includes("turkey")) {
      if (text.includes("cappadocia")) return "/destination/cappadocia";
      return "/destination/turkey";
    }
    if (text.includes("santorini") || text.includes("greece")) return "/destination/santorini";
    if (text.includes("france") || text.includes("paris") || text.includes("versailles") || text.includes("french")) return "/destination/france";
    if (text.includes("egypt") || text.includes("nile") || text.includes("cairo")) return "/destination/egypt";
    if (text.includes("bali") || text.includes("indonesia")) return "/destination/indonesia";
    
    return "/packages";
  }

  // Bind card actions (bookmarks and explore redirects)
  function bindCardEvents() {
    const cards = gridContainer.querySelectorAll(".story-card");
    cards.forEach(card => {
      const bMarkBtn = card.querySelector(".story-bookmark-btn");
      const exploreBtn = card.querySelector(".story-explore-btn");
      const id = card.dataset.id;

      if (bMarkBtn) {
        bMarkBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();

          if (bookmarkedExperiences.includes(id)) {
            bookmarkedExperiences = bookmarkedExperiences.filter(item => item !== id);
            bMarkBtn.classList.remove("active");
          } else {
            bookmarkedExperiences.push(id);
            bMarkBtn.classList.add("active");
          }
          localStorage.setItem("bookmarked_experiences", JSON.stringify(bookmarkedExperiences));
        });
      }

      if (exploreBtn) {
        exploreBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();

          const item = experiences.find(exp => exp.id === id);
          if (item) {
            const redirectPath = getRedirectPathForExperience(item.title, item.desc);
            window.history.pushState(null, "", redirectPath);
            checkRoute();
          }
        });
      }
    });
  }

  // Morph Animation Function
  function triggerMorphUpdate() {
    // Fade out and blur grid before render
    gsap.to(gridContainer, {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        // Re-draw DOM contents
        renderExplorerGrid();

        // Animate back in smoothly
        gsap.to(gridContainer, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power3.out"
        });

        // Stagger story cards up
        const cards = gridContainer.querySelectorAll(".story-card");
        if (cards.length > 0) {
          gsap.fromTo(cards,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
          );
        }
      }
    });
  }

  // Collect active filters values from checked checkboxes
  function updateCheckboxFilters() {
    selectedFilters.difficulty = Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(cb => cb.value);
    selectedFilters.duration = Array.from(document.querySelectorAll('input[name="duration"]:checked')).map(cb => cb.value);
    selectedFilters.season = Array.from(document.querySelectorAll('input[name="season"]:checked')).map(cb => cb.value);

    pageLimit = 8; // Reset limit
    triggerMorphUpdate();
  }

  // Bind Controls and Category buttons
  const catPillButtons = document.querySelectorAll(".category-pill");
  catPillButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;

      // Swap active pill state
      catPillButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Set category state
      activeCategory = btn.dataset.category;

      // Update sidebar active header metadata
      const details = categoryHeaders[activeCategory];
      if (details) {
        activeCatName.textContent = details.name;
        activeCatDesc.textContent = details.desc;
      }

      pageLimit = 8; // Reset limit
      triggerMorphUpdate();
    });
  });

  // Bind Sidebar Collapsible Filter Groups
  const filterGroupHeaders = document.querySelectorAll(".filter-group-header");
  filterGroupHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const group = header.parentElement;
      group.classList.toggle("open");
    });
  });

  // Bind Checkbox events
  const filterCheckboxes = document.querySelectorAll('.explorer-sidebar input[type="checkbox"]');
  filterCheckboxes.forEach(cb => {
    cb.addEventListener("change", updateCheckboxFilters);
  });

  // Bind Sort selector event
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortPreference = e.target.value;
      triggerMorphUpdate();
    });
  }

  // Bind Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      filterCheckboxes.forEach(cb => {
        cb.checked = false;
      });
      selectedFilters = {
        difficulty: [],
        duration: [],
        season: []
      };
      pageLimit = 8;
      triggerMorphUpdate();
    });
  }

  // Bind Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      pageLimit += 8;
      // Stagger in only the new items
      const currentCardsCount = gridContainer.querySelectorAll(".story-card").length;
      renderExplorerGrid();
      const allCards = gridContainer.querySelectorAll(".story-card");
      const newCards = Array.from(allCards).slice(currentCardsCount);
      if (newCards.length > 0) {
        gsap.fromTo(newCards,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
        );
      }
    });
  }

  // Bind Sidebar toggle collapse
  if (filterToggleBtn && filterSidebar) {
    filterToggleBtn.addEventListener("click", () => {
      filterSidebar.classList.toggle("collapsed");
      // Add collapsed class also to toggler to highlight active state
      filterToggleBtn.classList.toggle("active");
    });
  }

  // Initial Paint
  renderExplorerGrid();  // ==========================================================================
  // 6.5 Exclusive Offers Magazine Grid Engine (Premium Redesign)
  // ==========================================================================

  const offersPills = document.querySelectorAll(".offers-pill");
  const offersCards = document.querySelectorAll("#offers .offer-card");

  // Category Tab Filtering Animation using GSAP
  offersPills.forEach(pill => {
    pill.addEventListener("click", () => {
      if (pill.classList.contains("active")) return;

      offersPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const targetCategory = pill.getAttribute("data-category");

      // Animate card layout updates smoothly
      offersCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const matches = (targetCategory === "all" || cardCategory === targetCategory);

        if (matches) {
          // If hidden, preset start values for clean fade/slide-up
          if (window.getComputedStyle(card).display === "none") {
            const displayType = card.classList.contains("card-editorial-split") ? "grid" : "flex";
            gsap.set(card, { display: displayType, opacity: 0, scale: 0.85, y: 15 });
          }
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto"
          });
        } else {
          // Non-matching cards fade out and shrink, then display: none
          gsap.to(card, {
            opacity: 0,
            scale: 0.85,
            y: 15,
            duration: 0.4,
            ease: "power2.inOut",
            overwrite: "auto",
            onComplete: () => {
              card.style.display = "none";
            }
          });
        }
      });
    });
  });

  // Card Hover Parallax & Shift Micro-Animations
  offersCards.forEach(card => {
    const bgImage = card.querySelector(".offer-card-bg");
    const arrow = card.querySelector(".btn-card-arrow");
    const splitRight = card.querySelector(".card-split-right");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -6,
        scale: 1.02,
        boxShadow: "0 20px 45px rgba(185, 138, 69, 0.08)",
        borderColor: "rgba(185, 138, 69, 0.25)",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto"
      });
      if (bgImage) {
        gsap.to(bgImage, {
          scale: 1.05,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
      if (splitRight) {
        gsap.to(splitRight, {
          scale: 1.04,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
      if (arrow) {
        gsap.to(arrow, {
          rotate: -45,
          scale: 1.05,
          backgroundColor: "#ffffff",
          color: "#B98A45",
          boxShadow: "0 6px 14px rgba(185, 138, 69, 0.2)",
          duration: 0.4,
          overwrite: "auto"
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 12px 30px rgba(30, 26, 21, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.85)",
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto"
      });
      if (bgImage) {
        gsap.to(bgImage, {
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      }
      if (splitRight) {
        gsap.to(splitRight, {
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      }
      if (arrow) {
        gsap.to(arrow, {
          rotate: 0,
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          color: "var(--text-dark)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
          duration: 0.5,
          overwrite: "auto"
        });
      }
    });
  });

  // Secondary Dotted Airplane Path glide animation
  try {
    const decoPath = document.getElementById("offers-deco-path");
    const decoPlane = document.getElementById("offers-deco-plane");

    if (decoPath && decoPlane) {
      const pathLength = decoPath.getTotalLength() || 0;
      let planeProgress = 0;
      const planeSpeed = 0.0015;

      function animateDecoPlane() {
        if (!decoPath || !decoPlane) return;
        planeProgress += planeSpeed;
        if (planeProgress > 1.0) {
          planeProgress = 0;
        }

        const point = decoPath.getPointAtLength(planeProgress * pathLength) || { x: 0, y: 0 };
        const nextPoint = decoPath.getPointAtLength(Math.min(planeProgress + 0.004, 1.0) * pathLength) || point;
        const angleDeg = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

        decoPlane.setAttribute("transform", `translate(${point.x}, ${point.y}) rotate(${angleDeg})`);
        requestAnimationFrame(animateDecoPlane);
      }
      requestAnimationFrame(animateDecoPlane);
    }
  } catch (err) {
    console.warn("SVG offers plane path animation was bypassed or failed:", err);
  }

  // ScrollTrigger entry transitions for the offers grid section elements
  try {
    if (window.ScrollTrigger && window.gsap) {
      gsap.from(".offers-editorial-panel > *", {
        scrollTrigger: {
          trigger: ".section-offers",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      gsap.from(".offers-pills-row, .offers-row-cards-top, .card-editorial-split, .card-floating-deal, .card-premium-member", {
        scrollTrigger: {
          trigger: ".section-offers",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: "power3.out"
      });
    }
  } catch (e) {
    console.warn("ScrollTrigger load for offers failed:", e);
  }

  // Global Refresh for dynamic layout changes
  window.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });

  // ==========================================================================
  // NEST BALANCE INTERACTIVE ENGINE
  // ==========================================================================
  // NEW IMMERSIVE NEST BALANCE ENGINE
  const nestSliderInput = document.getElementById("nest-slider-input");
  const nestSliderValDisplay = document.getElementById("nest-slider-val-display");
  const durPills = document.querySelectorAll(".dur-pill");
  const stepIndicators = document.querySelectorAll(".nest-step-indicator");
  const unlockedDestName = document.getElementById("unlocked-dest-name");
  const unlockedDestDesc = document.getElementById("unlocked-dest-desc");
  const unlockedTotalBalance = document.getElementById("unlocked-total-balance");

  // New Wizard Content Panel Elements
  const tabPanels = document.querySelectorAll(".nest-tab-content");
  const nextBtns = document.querySelectorAll(".btn-next-step");
  const resetBtn = document.querySelector(".btn-reset-steps");

  // Growth Stats Elements
  const growthSavings = document.getElementById("growth-savings-total");
  const growthBonus = document.getElementById("growth-bonus-total");

  // Travel Panel Stats Elements
  const travelFinalBalance = document.getElementById("travel-final-balance");
  const travelUnlockedName = document.getElementById("travel-unlocked-name");

  // Right-side Wizard overlays
  const rightOverlayCards = document.querySelectorAll(".showcase-overlay-card");

  let selectedMonths = 3;
  let activeStep = 1;
  let activeDestIdx = 0;
  let nextSlideDirection = "left";

  const destinationsData = [
    {
      minLimit: 0,
      name: "Weekend Stay in Alibaug",
      desc: "Relax by the tranquil beaches and coconut groves just outside Mumbai.",
      imageIdx: 0,
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
      slug: "amalfi",
      icon: "compass"
    },
    {
      minLimit: 15000,
      name: "Heritage Stay in Jaipur",
      desc: "Live like royalty in restored palace suites with grand courtyards.",
      imageIdx: 1,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
      slug: "japan",
      icon: "hotel"
    },
    {
      minLimit: 35000,
      name: "Eco-Resort in Bali",
      desc: "Wake up overlooking cascading rice paddies and volcanic jungles.",
      imageIdx: 2,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      slug: "bali",
      icon: "trees"
    },
    {
      minLimit: 65000,
      name: "Water Villa in Maldives",
      desc: "Step directly into crystal-clear turquoise lagoons from your villa.",
      imageIdx: 3,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
      slug: "maldives",
      icon: "ship"
    },
    {
      minLimit: 120000,
      name: "Ski Lodge in Switzerland",
      desc: "Soak in hot tubs with panoramic views of the snowy Matterhorn peaks.",
      imageIdx: 4,
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
      slug: "switzerland",
      icon: "snowflake"
    },
    {
      minLimit: 250000,
      name: "Yacht Cruise in Greece",
      desc: "Sail between white-washed Aegean islands under gold sunsets.",
      imageIdx: 5,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      slug: "greece",
      icon: "palmtree"
    },
    {
      minLimit: 180000,
      name: "Glass Igloo in Finland",
      desc: "Sleep under the dancing Northern Lights in a heated glass dome.",
      imageIdx: 6,
      image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80",
      slug: "finland",
      icon: "sparkles"
    },
    {
      minLimit: 320000,
      name: "Desert Oasis in Dubai",
      desc: "Stay in ultra-luxury Bedouin tents nestled within rolling golden dunes.",
      imageIdx: 7,
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      slug: "dubai",
      icon: "tent"
    }
  ];

  function updateImmersiveNest() {
    if (!nestSliderInput) return;

    const dailyContribution = parseInt(nestSliderInput.value);
    if (nestSliderValDisplay) {
      nestSliderValDisplay.textContent = `₹${dailyContribution} / day`;
    }

    const savings = dailyContribution * 30 * selectedMonths;
    const total = savings;

    // Update global overlay balance
    if (unlockedTotalBalance) {
      unlockedTotalBalance.textContent = `₹${total.toLocaleString("en-IN")}`;
    }

    // Update Travel Tab stats
    if (travelFinalBalance) travelFinalBalance.textContent = `₹${total.toLocaleString("en-IN")}`;

    // Update visualizer split bar metrics dynamically
    const visUserSave = document.getElementById("visualizer-user-save");
    const visBarUser = document.getElementById("visualizer-bar-user");

    if (visUserSave) visUserSave.textContent = `₹${(dailyContribution * 30).toLocaleString("en-IN")}`;

    if (visBarUser) {
      gsap.to(visBarUser, { width: `100%`, duration: 0.45, ease: "power2.out" });
    }

    // Update Tab 2 Projection stats
    const projDurationVal = document.getElementById("proj-duration-val");
    const projNestBalanceVal = document.getElementById("proj-nest-balance-val");

    if (projDurationVal) projDurationVal.textContent = `${selectedMonths} Months`;
    if (projNestBalanceVal) projNestBalanceVal.textContent = `₹${total.toLocaleString("en-IN")}`;

    // Update right side card stats
    const rightDaily = document.getElementById("right-card-1-daily");
    const rightMonthly = document.getElementById("right-card-1-monthly");
    const rightDuration = document.getElementById("right-card-2-duration");
    const rightTarget = document.getElementById("right-card-2-target");

    if (rightDaily) rightDaily.textContent = `₹${dailyContribution.toLocaleString("en-IN")}`;
    if (rightMonthly) rightMonthly.textContent = `₹${(dailyContribution * 30).toLocaleString("en-IN")}`;
    if (rightDuration) rightDuration.textContent = `${selectedMonths} Months`;
    if (rightTarget) rightTarget.textContent = `₹${total.toLocaleString("en-IN")}`;

    // Find unlocked destinations
    const unlockedDests = destinationsData.filter(d => total >= d.minLimit);
    // Sort descending by minLimit so the highest tier is on top
    unlockedDests.sort((a, b) => b.minLimit - a.minLimit);

    let bestMatch = unlockedDests[0] || destinationsData[0];
    activeDestIdx = bestMatch.imageIdx;

    if (travelUnlockedName) travelUnlockedName.textContent = bestMatch.name;

    // Render unlocked card deck
    const deckContainer = document.getElementById("unlocked-card-deck");
    if (deckContainer) {
      deckContainer.innerHTML = "";

      unlockedDests.forEach((dest, index) => {
        const card = document.createElement("div");
        card.className = `unlocked-stacked-card position-${index}`;
        card.setAttribute("data-slug", dest.slug);

        card.innerHTML = `
          <div class="card-stack-header">
            <div class="card-category-icon">
              <i data-lucide="${dest.icon || 'compass'}"></i>
            </div>
            <button class="card-travel-btn" data-slug="${dest.slug}">
              <i data-lucide="arrow-up-right"></i>
            </button>
          </div>
          <h3 class="card-stack-title">${dest.name}</h3>
          <div class="card-image-wrapper">
            <img src="${dest.image}" alt="${dest.name}">
            <span class="card-badge">₹${dest.minLimit.toLocaleString("en-IN")}+ Unlocked</span>
          </div>
          <p class="card-stack-desc">${dest.desc}</p>
        `;

        // Touch/Mouse swiping drag interaction variables
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let dragDistance = 0;

        const startDrag = (clientX, clientY) => {
          if (!card.classList.contains("position-0")) return;
          isDragging = true;
          startX = clientX;
          startY = clientY;
          dragDistance = 0;
          card.style.transition = "none";
          card.style.cursor = "grabbing";
        };

        const moveDrag = (clientX, clientY) => {
          if (!isDragging) return;
          const deltaX = clientX - startX;
          const deltaY = clientY - startY;
          dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const rotation = deltaX * 0.06;

          gsap.set(card, {
            x: deltaX,
            y: deltaY,
            rotation: rotation,
            overwrite: "auto"
          });
        };

        const endDrag = (clientX, clientY) => {
          if (!isDragging) return;
          isDragging = false;
          card.style.cursor = "";

          const deltaX = clientX - startX;
          const swipeThreshold = 80;

          if (Math.abs(deltaX) > swipeThreshold) {
            const direction = deltaX > 0 ? "right" : "left";
            rotateDeck(direction);
          } else {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        // Window listeners to handle mouse moves outside the card boundaries cleanly
        const handleMouseMove = (e) => {
          moveDrag(e.clientX, e.clientY);
        };
        const handleMouseUp = (e) => {
          endDrag(e.clientX, e.clientY);
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseup", handleMouseUp);
        };

        const handleTouchMove = (e) => {
          if (!isDragging) return;
          if (e.cancelable) e.preventDefault();
          const touch = e.touches[0];
          moveDrag(touch.clientX, touch.clientY);
        };
        const handleTouchEnd = (e) => {
          const touch = e.changedTouches[0];
          endDrag(touch.clientX, touch.clientY);
          window.removeEventListener("touchmove", handleTouchMove);
          window.removeEventListener("touchend", handleTouchEnd);
        };

        card.addEventListener("mousedown", (e) => {
          if (e.target.closest(".card-travel-btn")) return;
          e.preventDefault();
          startDrag(e.clientX, e.clientY);
          window.addEventListener("mousemove", handleMouseMove);
          window.addEventListener("mouseup", handleMouseUp);
        });

        card.addEventListener("dragstart", (e) => {
          e.preventDefault();
        });

        card.addEventListener("touchstart", (e) => {
          if (e.target.closest(".card-travel-btn")) return;
          const touch = e.touches[0];
          startDrag(touch.clientX, touch.clientY);
          window.addEventListener("touchmove", handleTouchMove, { passive: false });
          window.addEventListener("touchend", handleTouchEnd, { passive: true });
        }, { passive: true });

        card.addEventListener("click", (e) => {
          if (e.target.closest(".card-travel-btn")) return;
          // If the user actually dragged the card rather than clicking, ignore the click event
          if (dragDistance > 10) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          rotateDeck();
        });

        const travelBtn = card.querySelector(".card-travel-btn");
        if (travelBtn) {
          travelBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const slug = travelBtn.getAttribute("data-slug");
            window.history.pushState(null, "", `/destination/${slug}`);
            checkRoute();
          });
        }

        deckContainer.appendChild(card);
      });

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    function rotateDeck(direction = null) {
      const cards = deckContainer.querySelectorAll(".unlocked-stacked-card");
      if (cards.length <= 1) return;

      const topCard = deckContainer.querySelector(".unlocked-stacked-card.position-0");
      if (!topCard) return;

      const dir = direction || nextSlideDirection;
      const targetX = dir === "left" ? -300 : 300;
      const targetRot = dir === "left" ? -15 : 15;

      // Update nextSlideDirection for subsequent auto/click rotations
      if (!direction) {
        nextSlideDirection = nextSlideDirection === "left" ? "right" : "left";
      }

      gsap.to(topCard, {
        x: targetX,
        y: -30,
        rotation: targetRot,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          deckContainer.appendChild(topCard);

          const updatedCards = deckContainer.querySelectorAll(".unlocked-stacked-card");
          updatedCards.forEach((c, idx) => {
            for (let i = 0; i < updatedCards.length + 2; i++) {
              c.classList.remove(`position-${i}`);
            }
            c.classList.add(`position-${idx}`);

            if (idx === updatedCards.length - 1) {
              gsap.fromTo(c,
                { x: -50, y: 50, rotation: -10, opacity: 0 },
                { x: 0, y: 45, rotation: 0, opacity: 0.4, duration: 0.45, ease: "power2.out" }
              );
            } else {
              let targetX = 0, targetY = 0, targetRot = 0, targetScale = 1, targetOpacity = 1;
              if (idx === 0) {
                targetX = 0; targetY = 0; targetRot = 0; targetScale = 1; targetOpacity = 1;
              } else if (idx === 1) {
                targetX = 10; targetY = 15; targetRot = 3; targetScale = 0.95; targetOpacity = 0.9;
              } else if (idx === 2) {
                targetX = -15; targetY = 25; targetRot = -4; targetScale = 0.9; targetOpacity = 0.75;
              } else if (idx === 3) {
                targetX = 20; targetY = 35; targetRot = 5; targetScale = 0.85; targetOpacity = 0.6;
              } else if (idx === 4) {
                targetX = 0; targetY = 45; targetRot = 0; targetScale = 0.8; targetOpacity = 0.4;
              } else if (idx === 5) {
                targetX = -10; targetY = 50; targetRot = -3; targetScale = 0.75; targetOpacity = 0.25;
              } else if (idx === 6) {
                targetX = 15; targetY = 55; targetRot = 4; targetScale = 0.7; targetOpacity = 0.15;
              } else {
                targetX = 0; targetY = 60; targetRot = 0; targetScale = 0.65; targetOpacity = 0.05;
              }

              gsap.to(c, {
                x: targetX,
                y: targetY,
                rotation: targetRot,
                scale: targetScale,
                opacity: targetOpacity,
                duration: 0.5,
                ease: "power2.out"
              });
            }
          });

          // Sync left side unlocked destination text with the new top card title
          const newTopCard = updatedCards[0];
          if (newTopCard) {
            const newTitleElement = newTopCard.querySelector(".card-stack-title");
            if (newTitleElement && travelUnlockedName) {
              const rawTitle = newTitleElement.textContent;
              const formattedTitle = rawTitle.split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .join(' ');

              gsap.fromTo(travelUnlockedName, { opacity: 0.35 }, { opacity: 1, duration: 0.3, ease: "power1.out" });
              travelUnlockedName.textContent = formattedTitle;
            }
          }
        }
      });
    }

    // Update showcase images active status
    const showcaseImgs = document.querySelectorAll(".showcase-img");
    showcaseImgs.forEach((img) => {
      let isTarget = false;
      if (activeStep === 1 && img.id === "showcase-img-1") isTarget = true;
      else if (activeStep === 2 && img.id === "showcase-img-3") isTarget = true;
      else if (activeStep === 3 && img.id === `showcase-img-dest-${bestMatch.imageIdx}`) isTarget = true;

      if (isTarget) {
        img.classList.add("active");
        gsap.to(img, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" });
      } else {
        img.classList.remove("active");
        gsap.to(img, { opacity: 0, scale: 1.04, duration: 0.6, ease: "power2.out" });
      }
    });
  }

  // Transitions to a specific wizard step with clean GSAP crossfade
  function switchWizardStep(stepNum) {
    const targetPanel = document.getElementById(`nest-panel-${stepNum}`);
    if (!targetPanel || stepNum === activeStep) return;

    const currentPanel = document.getElementById(`nest-panel-${activeStep}`);

    // Update active indicators
    stepIndicators.forEach((indicator) => {
      const step = parseInt(indicator.getAttribute("data-step"));
      indicator.classList.toggle("active", step === stepNum);
    });

    activeStep = stepNum;

    // Smooth transition for left columns content panel
    if (currentPanel) {
      gsap.to(currentPanel, {
        opacity: 0,
        y: 6,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          currentPanel.classList.remove("active");
          currentPanel.style.display = "none";

          targetPanel.style.display = "flex";
          gsap.fromTo(targetPanel,
            { opacity: 0, y: -6 },
            {
              opacity: 1, y: 0, duration: 0.35, ease: "power2.out", onStart: () => {
                targetPanel.classList.add("active");
              }
            }
          );
        }
      });
    } else {
      // Fallback
      tabPanels.forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
      });
      targetPanel.style.display = "flex";
      targetPanel.classList.add("active");
      gsap.set(targetPanel, { opacity: 1, y: 0 });
    }

    // Update right overlay cards active status with a subtle slide fade
    rightOverlayCards.forEach((card) => {
      const isTarget = card.id === `right-card-${stepNum}`;
      if (isTarget) {
        card.style.display = "flex";
        card.classList.add("active");
        gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      } else {
        card.classList.remove("active");
        card.style.display = "none";
      }
    });

    // Toggle Step 3 stacked card deck and backdrop filter blur
    const stackContainer = document.getElementById("unlocked-stack-container");
    const showcaseCard = document.querySelector(".nest-showcase-card");
    if (stackContainer) {
      if (stepNum === 3) {
        stackContainer.style.display = "flex";
        gsap.fromTo(stackContainer, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        if (showcaseCard) showcaseCard.classList.add("step-3-active");
      } else {
        stackContainer.style.display = "none";
        if (showcaseCard) showcaseCard.classList.remove("step-3-active");
      }
    }

    // Update right background showcase images active status
    const showcaseImgs = document.querySelectorAll(".showcase-img");
    showcaseImgs.forEach((img) => {
      let isTarget = false;
      if (stepNum === 1 && img.id === "showcase-img-1") isTarget = true;
      else if (stepNum === 2 && img.id === "showcase-img-3") isTarget = true;
      else if (stepNum === 3 && img.id === `showcase-img-dest-${activeDestIdx}`) isTarget = true;

      if (isTarget) {
        img.classList.add("active");
        gsap.to(img, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" });
      } else {
        img.classList.remove("active");
        gsap.to(img, { opacity: 0, scale: 1.04, duration: 0.6, ease: "power2.out" });
      }
    });
  }

  // Bind click listeners on step indicator buttons
  stepIndicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const step = parseInt(indicator.getAttribute("data-step"));
      switchWizardStep(step);
    });
  });

  // Bind click listeners on panel Next buttons
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextStep = parseInt(btn.getAttribute("data-next"));
      switchWizardStep(nextStep);
    });
  });

  // Reset button logic
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      // Reset values
      if (nestSliderInput) nestSliderInput.value = 300;
      selectedMonths = 3;
      durPills.forEach((pill, idx) => {
        pill.classList.toggle("active", idx === 0);
      });

      updateImmersiveNest();
      switchWizardStep(1);
    });
  }

  if (nestSliderInput) {
    nestSliderInput.addEventListener("input", updateImmersiveNest);
  }

  durPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      durPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedMonths = parseInt(pill.getAttribute("data-months"));
      updateImmersiveNest();
    });
  });

  // Dynamic booking / exploration click wiring for unlocked experiences
  const overlayBookBtn = document.querySelector(".btn-overlay-book");
  if (overlayBookBtn) {
    overlayBookBtn.addEventListener("click", () => {
      const name = travelUnlockedName ? travelUnlockedName.textContent : "";
      let slug = "japan";
      if (name.includes("Bali")) slug = "bali";
      else if (name.includes("Maldives")) slug = "maldives";
      else if (name.includes("Switzerland")) slug = "switzerland";
      else if (name.includes("Greece")) slug = "greece";
      else if (name.includes("Jaipur")) slug = "japan";
      else if (name.includes("Alibaug")) slug = "amalfi";

      window.history.pushState(null, "", `/destination/${slug}`);
      checkRoute();
    });
  }

  // Run initial state setup
  updateImmersiveNest();

  // 6. GSAP ScrollTrigger Entrance Revelations
  try {
    if (window.ScrollTrigger && window.gsap) {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

      // Journey Timeline Scroll Animations
      const timelineWrapper = document.querySelector(".journey-timeline-wrapper");
      if (timelineWrapper) {
        const solidPath = document.getElementById("solid-flight-path");
        const sparrow = document.getElementById("flying-sparrow");
        const stages = document.querySelectorAll(".timeline-stage");

        let pathLength = 0;
        try {
          pathLength = solidPath ? solidPath.getTotalLength() : 900;
        } catch (err) {
          pathLength = 900;
        }

        if (solidPath) {
          gsap.set(solidPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineWrapper,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1.2,
            toggleActions: "play none none reverse"
          }
        });

        if (solidPath) {
          tl.to(solidPath, {
            strokeDashoffset: 0,
            duration: 3,
            ease: "none"
          });
        }

        if (sparrow && solidPath) {
          tl.to(sparrow, {
            motionPath: {
              path: "#solid-flight-path",
              align: "#solid-flight-path",
              autoRotate: true,
              alignOrigin: [0.5, 0.5]
            },
            duration: 3,
            ease: "none"
          }, "<");
        }

        stages.forEach((stage, index) => {
          tl.to(stage, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, `<${(index * 0.5) + 0.1}`);
        });
      }

      // Booking Widget Tab Switching
      const bookingTabs = document.querySelectorAll(".booking-tab");
      const searchBtnText = document.querySelector(".btn-search-flights span");

      bookingTabs.forEach(tab => {
        tab.addEventListener("click", () => {
          bookingTabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");

          const cat = tab.dataset.tab;
          if (searchBtnText) {
            if (cat === "flights") {
              searchBtnText.textContent = "Search Flights";
            } else if (cat === "stays") {
              searchBtnText.textContent = "Search Stays";
            } else if (cat === "experiences") {
              searchBtnText.textContent = "Search Experiences";
            } else if (cat === "packages" || cat === "holidays") {
              searchBtnText.textContent = "Search Holiday Packages";
            }
          }
        });
      });

      // Mobile Booking Widget Expand/Collapse and Sync Logic
      const bookingWidget = document.querySelector(".hero-booking-widget");
      const collapsedCard = document.querySelector(".booking-collapsed-card");
      const mobileCollapseBtn = document.querySelector(".booking-mobile-collapse");

      if (bookingWidget && collapsedCard) {
        collapsedCard.addEventListener("click", (e) => {
          e.stopPropagation();
          bookingWidget.classList.add("expanded");
          if (window.lucide) {
            window.lucide.createIcons();
          }
        });
      }

      if (bookingWidget && mobileCollapseBtn) {
        mobileCollapseBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          bookingWidget.classList.remove("expanded");
        });
      }

      // Collapse when clicking outside the widget on mobile
      document.addEventListener("click", (e) => {
        if (window.innerWidth <= 768 && bookingWidget && bookingWidget.classList.contains("expanded")) {
          const popularDestinations = document.querySelector(".mobile-popular-destinations");
          if (!bookingWidget.contains(e.target) && (!popularDestinations || !popularDestinations.contains(e.target))) {
            bookingWidget.classList.remove("expanded");
          }
        }
      });

      // Synchronize input fields back to collapsed card representation
      const fromInput = document.querySelector('.hero-booking-widget .booking-field input[placeholder="Origin"]');
      const toInput = document.querySelector('.hero-booking-widget .booking-field input[placeholder="Where to?"]');
      const departInput = document.querySelector('.hero-booking-widget .booking-field input[placeholder="Depart Date"]');
      const travelersSelect = document.querySelector('.hero-booking-widget .booking-field select');

      function updateCollapsedBookingCard() {
        const collapsedRoute = document.querySelector(".collapsed-route");
        const collapsedInfo = document.querySelector(".collapsed-info");

        if (collapsedRoute && fromInput && toInput) {
          const fromVal = fromInput.value.split(" ")[0] || "Delhi";
          const toVal = toInput.value.split(" ")[0] || "Where to?";
          collapsedRoute.innerHTML = `${fromVal} &rarr; ${toVal}`;
        }

        if (collapsedInfo && departInput && travelersSelect) {
          const dateVal = departInput.value.split(",")[0] || "Date";
          const travVal = travelersSelect.value || "1 Adult";
          collapsedInfo.innerHTML = `${dateVal} &bull; ${travVal}`;
        }
      }

      if (fromInput) fromInput.addEventListener("input", updateCollapsedBookingCard);
      if (toInput) toInput.addEventListener("input", updateCollapsedBookingCard);
      if (departInput) departInput.addEventListener("input", updateCollapsedBookingCard);
      if (travelersSelect) travelersSelect.addEventListener("change", updateCollapsedBookingCard);

      // Popular Destinations Mobile Chips click logic
      const chips = document.querySelectorAll(".mobile-popular-destinations .chip");
      if (chips && toInput) {
        chips.forEach(chip => {
          chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");

            const destinationName = chip.textContent.trim();
            let code = "";
            if (destinationName === "Bali") code = "Bali (DPS)";
            else if (destinationName === "Iceland") code = "Reykjavik (KEF)";
            else if (destinationName === "Switzerland") code = "Zurich (ZRH)";
            else if (destinationName === "Japan") code = "Tokyo (HND)";
            else if (destinationName === "Norway") code = "Oslo (OSL)";
            else if (destinationName === "Maldives") code = "Male (MLE)";
            else code = destinationName;

            toInput.value = code;
            updateCollapsedBookingCard();
          });
        });
      }

      // Trip Type segmented switch behaviour
      const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]');
      const returnField = document.querySelector('.hero-booking-widget .booking-field:nth-child(4)'); // Depart/Return are 3rd/4th fields
      if (tripTypeRadios && returnField) {
        tripTypeRadios.forEach(radio => {
          radio.addEventListener("change", () => {
            if (radio.value === "one-way") {
              returnField.style.opacity = "0.4";
              returnField.style.pointerEvents = "none";
              const returnInput = returnField.querySelector("input");
              if (returnInput) returnInput.disabled = true;
            } else {
              returnField.style.opacity = "1";
              returnField.style.pointerEvents = "auto";
              const returnInput = returnField.querySelector("input");
              if (returnInput) returnInput.disabled = false;
            }
          });
        });

        // Run initial check
        const activeRadio = document.querySelector('input[name="trip-type"]:checked');
        if (activeRadio && activeRadio.value === "one-way") {
          returnField.style.opacity = "0.4";
          returnField.style.pointerEvents = "none";
          const returnInput = returnField.querySelector("input");
          if (returnInput) returnInput.disabled = true;
        }
      }

      // Left Editorial reveal (including the button, clearing properties on complete)
      gsap.from("#nest-balance .nest-left > *:not(.nest-airplane-sweep)", {
        scrollTrigger: {
          trigger: "#nest-balance",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity"
      });

      // Center title and trust badge reveal
      gsap.from("#nest-balance .nest-center .overtitle-tag, #nest-balance .nest-trust-badge", {
        scrollTrigger: {
          trigger: "#nest-balance",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Dotted timeline path scale draw
      gsap.from(".nest-timeline-line-svg", {
        scrollTrigger: {
          trigger: "#nest-balance",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      });

      // Timeline cards staggered entry scale + slide
      gsap.from("#nest-balance .nest-card", {
        scrollTrigger: {
          trigger: "#nest-balance",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1.0,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      // Right visual circle zoom in fade
      gsap.from("#nest-balance .nest-right", {
        scrollTrigger: {
          trigger: "#nest-balance",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }
  } catch (e) {
    console.warn("ScrollTrigger load for Nest Balance failed:", e);
  }

  // 7. Apple-style Magnetic Buttons Effect

  const magneticBtns = document.querySelectorAll(".magnetic-btn");
  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const mX = e.clientX - rect.left - rect.width / 2;
      const mY = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: mX * 0.35,
        y: mY * 0.35,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)"
      });
    });
  });

  // 8. Landing Animations (Page Entrance)
  gsap.from(".main-header", {
    y: -30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.from(".hero-left > *", {
    x: -50,
    opacity: 0,
    duration: 1.0,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.4
  });

  gsap.from(".hero-right", {
    scale: 0.95,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    delay: 0.5
  });

  // ==============================================
  // SECTION: TRENDING DESTINATIONS INTERACTION SYSTEM
  // ==============================================
  try {
    const viewport = document.getElementById("trending-carousel-viewport");
    const track = document.getElementById("trending-carousel-track");
    const cards = document.querySelectorAll(".trending-card-wrapper");
    const total = cards.length;
    let currentIndex = 0;
    let isScrollCooldown = false;

    // Mobile scroll indicator helper functions
    function createMobileIndicator() {
      if (window.innerWidth > 768) {
        const existing = viewport ? viewport.querySelector(".mobile-scroll-indicator") : null;
        if (existing) existing.remove();
        return;
      }
      let indicator = viewport ? viewport.querySelector(".mobile-scroll-indicator") : null;
      if (!indicator && viewport) {
        indicator = document.createElement("div");
        indicator.className = "mobile-scroll-indicator";
        indicator.innerHTML = `
          <span class="mobile-indicator-text">1 / ${total}</span>
          <div class="mobile-indicator-track">
            <div class="mobile-indicator-bar"></div>
          </div>
        `;
        viewport.appendChild(indicator);
      }
    }

    function updateMobileIndicator() {
      if (window.innerWidth > 768) return;
      createMobileIndicator();
      const text = viewport ? viewport.querySelector(".mobile-indicator-text") : null;
      const bar = viewport ? viewport.querySelector(".mobile-indicator-bar") : null;
      if (text) {
        text.textContent = `${currentIndex + 1} / ${total}`;
      }
      if (bar) {
        const percentage = ((currentIndex + 1) / total) * 100;
        bar.style.height = `${percentage}%`;
      }
    }

    function transitionCarousel(targetIdx, animate = true) {
      if (targetIdx < 0 || targetIdx >= total || !viewport || !track) return;
      currentIndex = targetIdx;

      const isMobile = window.innerWidth <= 768;
      const animDuration = animate ? 0.7 : 0;
      
      if (isMobile) {
        // Reset track position on mobile to prevent interference
        gsap.set(track, { y: 0, clearProps: "transform" });

        // Create scroll indicator if not exists
        createMobileIndicator();

        // 3D Stacking Carousel for Mobile
        cards.forEach((card, idx) => {
          const overlay = card.querySelector(".trending-card-country-overlay");
          const innerCard = card.querySelector(".trending-card");
          const innerImg = card.querySelector(".trending-card-img");

          card.classList.remove("active", "peeking", "far-away");

          if (idx < currentIndex) {
            // Swiped above/away
            gsap.to(card, {
              y: -540,
              scale: 0.85,
              opacity: 0,
              zIndex: 15,
              filter: "blur(4px)",
              duration: animDuration,
              ease: "power2.out",
              overwrite: "auto"
            });
            if (overlay) {
              gsap.to(overlay, {
                x: -100,
                opacity: 0,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
            if (innerImg) {
              gsap.to(innerImg, {
                y: -30,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          } else if (idx === currentIndex) {
            // Active card
            card.classList.add("active");
            gsap.to(card, {
              y: 0,
              scale: 1,
              opacity: 1,
              zIndex: 10,
              filter: "blur(0px)",
              duration: animDuration,
              ease: "power2.out",
              overwrite: "auto"
            });
            if (overlay) {
              gsap.to(overlay, {
                x: 0,
                opacity: 1,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
            if (innerImg) {
              gsap.to(innerImg, {
                y: 0,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }

            // Animate card interior content on activation
            const metaEl = card.querySelector('.trending-card-meta');
            const titleEl = card.querySelector('.trending-card-title');
            const tagEl = card.querySelector('.trending-card-tagline');
            const btnEl = card.querySelector('.trending-card-btn');
            const imgEl = card.querySelector('.trending-card-img');

            if (animate) {
              if (metaEl) {
                gsap.fromTo(metaEl,
                  { y: 18, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" }
                );
              }
              if (titleEl) {
                gsap.fromTo(titleEl, 
                  { y: 18, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" }
                );
              }
              if (tagEl) {
                gsap.fromTo(tagEl,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.6, delay: 0.1, ease: "power2.out", overwrite: "auto" }
                );
              }
              if (btnEl) {
                gsap.fromTo(btnEl,
                  { scale: 0.94, opacity: 0 },
                  { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" }
                );
              }
              if (imgEl) {
                gsap.fromTo(imgEl,
                  { scale: 1.08 },
                  { scale: 1, duration: 0.8, ease: "power2.out", overwrite: "auto" }
                );
              }
            } else {
              if (metaEl) gsap.set(metaEl, { y: 0, opacity: 1 });
              if (titleEl) gsap.set(titleEl, { y: 0, opacity: 1 });
              if (tagEl) gsap.set(tagEl, { opacity: 1 });
              if (btnEl) gsap.set(btnEl, { scale: 1, opacity: 1 });
              if (imgEl) gsap.set(imgEl, { scale: 1 });
            }
          } else if (idx === currentIndex + 1) {
            // Second card (peeking)
            card.classList.add("peeking");
            gsap.to(card, {
              y: -70,
              scale: 0.94,
              opacity: 0.75,
              zIndex: 9,
              filter: "blur(1px)",
              duration: animDuration,
              ease: "power2.out",
              overwrite: "auto"
            });
            if (overlay) {
              gsap.to(overlay, {
                x: 50,
                opacity: 0,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
            if (innerImg) {
              gsap.to(innerImg, {
                y: 15,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          } else if (idx === currentIndex + 2) {
            // Third card (peeking)
            card.classList.add("peeking");
            gsap.to(card, {
              y: -120,
              scale: 0.90,
              opacity: 0.45,
              zIndex: 8,
              filter: "blur(3px)",
              duration: animDuration,
              ease: "power2.out",
              overwrite: "auto"
            });
            if (overlay) {
              gsap.to(overlay, {
                x: 100,
                opacity: 0,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
            if (innerImg) {
              gsap.to(innerImg, {
                y: 30,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          } else {
            // Far cards below stack
            card.classList.add("far-away");
            gsap.to(card, {
              y: -170,
              scale: 0.86,
              opacity: 0,
              zIndex: 5,
              filter: "blur(5px)",
              duration: animDuration,
              ease: "power2.out",
              overwrite: "auto"
            });
            if (overlay) {
              gsap.to(overlay, {
                x: 150,
                opacity: 0,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
            if (innerImg) {
              gsap.to(innerImg, {
                y: 45,
                duration: animDuration,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          }
        });

        updateMobileIndicator();
      } else {
        // Desktop Vertical Cube Roll (Original Behavior)
        const existing = viewport ? viewport.querySelector(".mobile-scroll-indicator") : null;
        if (existing) existing.remove();

        // Clear inline properties on wrappers used for mobile absolute stack
        cards.forEach(card => {
          gsap.set(card, { clearProps: "transform,opacity,filter,zIndex" });
          const overlay = card.querySelector(".trending-card-country-overlay");
          if (overlay) gsap.set(overlay, { clearProps: "transform,opacity,x,y" });
          const innerImg = card.querySelector(".trending-card-img");
          if (innerImg) gsap.set(innerImg, { clearProps: "transform,opacity,y" });
        });

        const cardHeight = 480;
        const gap = 40;
        const viewportHeight = 720;

        const translateY = (viewportHeight / 2) - ((cardHeight + gap) * currentIndex + cardHeight / 2);
        
        gsap.to(track, {
          y: translateY,
          duration: animDuration,
          ease: "power3.out",
          overwrite: "auto"
        });

        cards.forEach((card, idx) => {
          card.classList.remove("active", "peeking", "peeking-above", "peeking-below", "far-above", "far-below");
          if (idx === currentIndex) {
            card.classList.add("active");
          } else if (idx === currentIndex - 1) {
            card.classList.add("peeking", "peeking-above");
          } else if (idx === currentIndex + 1) {
            card.classList.add("peeking", "peeking-below");
          } else if (idx < currentIndex) {
            card.classList.add("far-above");
          } else if (idx > currentIndex) {
            card.classList.add("far-below");
          }
        });
      }
    }

    if (viewport && track && cards.length > 0) {
      // Mouse wheel vertical scrolling within the viewport
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();

        if (isScrollCooldown) return;

        const delta = e.deltaY;
        if (Math.abs(delta) > 5) {
          isScrollCooldown = true;
          if (delta > 0) {
            if (currentIndex < total - 1) {
              currentIndex++;
              transitionCarousel(currentIndex);
            }
          } else {
            if (currentIndex > 0) {
              currentIndex--;
              transitionCarousel(currentIndex);
            }
          }

          setTimeout(() => {
            isScrollCooldown = false;
          }, 800); // 800ms cooldown for smooth luxury paging
        }
      }, { passive: false });

      // Mobile Touch Swiping (Up / Down)
      let touchStartY = 0;
      let touchStartX = 0;
      let touchEndY = 0;
      const swipeThreshold = 40;

      viewport.addEventListener("touchstart", (e) => {
        const touch = e.touches && e.touches.length ? e.touches[0] : e.changedTouches[0];
        touchStartY = touch.screenY;
        touchStartX = touch.screenX;
      }, { passive: true });

      viewport.addEventListener("touchmove", (e) => {
        if (window.innerWidth > 768) return;

        // Prevent native scrolling only if the touch started on a card
        const onCard = e.target.closest(".trending-card") || e.target.closest(".trending-card-wrapper");
        if (!onCard) return;

        const touch = e.touches && e.touches.length ? e.touches[0] : e.changedTouches[0];
        const currentY = touch.screenY;
        const currentX = touch.screenX;
        const diffY = touchStartY - currentY;
        const diffX = touchStartX - currentX;

        // If it's primarily a vertical swipe
        if (Math.abs(diffY) > Math.abs(diffX)) {
          // Allow page scrolling at boundaries
          const isAtTopLimit = currentIndex === 0 && diffY < 0;
          const isAtBottomLimit = currentIndex === total - 1 && diffY > 0;

          if (!isAtTopLimit && !isAtBottomLimit) {
            if (e.cancelable) {
              e.preventDefault();
            }
          }
        }
      }, { passive: false });

      viewport.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].screenY;
        const diffY = touchStartY - touchEndY;
        if (Math.abs(diffY) > swipeThreshold) {
          if (diffY > 0) {
            if (currentIndex < total - 1) {
              currentIndex++;
              transitionCarousel(currentIndex);
            }
          } else {
            if (currentIndex > 0) {
              currentIndex--;
              transitionCarousel(currentIndex);
            }
          }
        }
      }, { passive: true });

      // Hold-to-zoom active card and clicks/taps
      cards.forEach((card) => {
        // iOS press-and-hold zoom feel
        card.addEventListener("touchstart", (e) => {
          if (!card.classList.contains("active") || window.innerWidth > 768) return;
          gsap.to(card, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
          });
        }, { passive: true });

        card.addEventListener("touchend", (e) => {
          if (!card.classList.contains("active") || window.innerWidth > 768) return;
          gsap.to(card, {
            scale: 1.0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
          });
        }, { passive: true });

        card.addEventListener("mousedown", (e) => {
          if (!card.classList.contains("active") || window.innerWidth > 768) return;
          gsap.to(card, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
          });
        });

        card.addEventListener("mouseup", (e) => {
          if (!card.classList.contains("active") || window.innerWidth > 768) return;
          gsap.to(card, {
            scale: 1.0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
          });
        });

        // Click handler
        card.addEventListener("click", (e) => {
          if (e.target.closest(".wishlist-heart-btn") || e.target.closest(".trending-card-btn")) return;
          
          const idx = parseInt(card.getAttribute("data-index"));
          if (idx === currentIndex) {
            // Tap active card -> Navigate directly to destination
            if (window.innerWidth <= 768) {
              const titleEl = card.querySelector('.trending-card-title');
              if (titleEl) {
                const title = titleEl.textContent.trim().toLowerCase();
                // Haptic feedback trigger
                if (navigator.vibrate) {
                  navigator.vibrate(10);
                }
                navigateToDestination(title);
              }
            }
          } else {
            e.preventDefault();
            transitionCarousel(idx);
          }
        });
      });

      // Recalculations on resize
      window.addEventListener("resize", () => {
        transitionCarousel(currentIndex, false);
      });

      // Initial alignment
      transitionCarousel(0, false);
    }
  } catch (err) {
    console.error("Trending vertical carousel failed to initialize:", err);
  }

  // C. Wishlist Heart Button Caching & Interactivity
  try {
    const wishlistBtns = document.querySelectorAll(".wishlist-heart-btn");
    const savedWishlist = JSON.parse(localStorage.getItem("gs_wishlist") || "[]");

    wishlistBtns.forEach((btn) => {
      const destId = btn.getAttribute("data-dest-id");

      if (destId && savedWishlist.includes(destId)) {
        btn.classList.add("active");
        const icon = btn.querySelector("i");
        if (icon) {
          icon.setAttribute("fill", "#E65C39");
          icon.setAttribute("stroke", "#E65C39");
        }
      }

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const destId = btn.getAttribute("data-dest-id");
        if (!destId) return;

        const index = savedWishlist.indexOf(destId);
        const icon = btn.querySelector("i");

        if (index > -1) {
          savedWishlist.splice(index, 1);
          btn.classList.remove("active");
          if (icon) {
            icon.removeAttribute("fill");
            icon.setAttribute("stroke", "currentColor");
          }
          gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
        } else {
          savedWishlist.push(destId);
          btn.classList.add("active");
          if (icon) {
            icon.setAttribute("fill", "#E65C39");
            icon.setAttribute("stroke", "#E65C39");
          }
          gsap.fromTo(btn, { scale: 1.25 }, { scale: 1, duration: 0.35, ease: "back.out(1.7)" });
        }

        localStorage.setItem("gs_wishlist", JSON.stringify(savedWishlist));
      });
    });
  } catch (err) {
    console.warn("Wishlist caching engine failed:", err);
  }

  // D. ScrollTrigger Entrance Animation for Trending Destinations & Discovery Cards
  try {
    if (window.ScrollTrigger && window.gsap) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".trending-header > *", {
        scrollTrigger: {
          trigger: ".section-trending-destinations",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      gsap.from(".trending-carousel-viewport", {
        scrollTrigger: {
          trigger: ".trending-carousel-viewport",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });


    }
  } catch (err) {
    console.warn("Trending section entrance animations bypassed or failed:", err);
  }

  // GSAP ScrollTrigger for Experiences Section (Defensive Try/Catch)
  try {
    if (window.ScrollTrigger && window.gsap) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".experiences-header > *", {
        scrollTrigger: {
          trigger: ".section-experiences",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      gsap.from(".experiences-explorer-layout", {
        scrollTrigger: {
          trigger: ".experiences-explorer-layout",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out"
      });
    }
  } catch (e) {
    console.warn("ScrollTrigger load failed or was blocked:", e);
  }




  // ==========================================================================
  // F. GS-HERO — Cinematic Destination Universe v3
  // Static background · Straight horizontal cards · Track centering transitions
  // ==========================================================================
  (function initGSHero() {
    'use strict';

    const section = document.querySelector('.gs-hero');
    if (!section) return;

    const track = section.querySelector('.gs-card-track');
    const stage = section.querySelector('.gs-card-stage');
    const cards = Array.from(section.querySelectorAll('.gs-card'));
    if (!track || !stage || cards.length === 0) return;

    // ── Destination data (matches DOM order) ─────────────────────────────
    const DESTS = [
      { name: 'Iceland', country: 'Iceland', num: '01' },
      { name: 'Switzerland', country: 'Switzerland', num: '02' }, // ← starts active
      { name: 'Cappadocia', country: 'Turkey', num: '03' },
      { name: 'Kyoto', country: 'Japan', num: '04' },
      { name: 'Amalfi Coast', country: 'Italy', num: '05' },
      { name: 'Bali', country: 'Indonesia', num: '06' }
    ];

    const N = DESTS.length;
    let activeIdx = 1; // Switzerland starts active
    let isAnimating = false;
    let isPortalActive = false; // State for portal zoom mode
    let portalTL = null; // Store reference to the single timeline for perfect exit reversal

    const pagCurr = section.querySelector('#gs-pag-curr');
    const pagFill = section.querySelector('#gs-pag-fill');
    const btnPrev = section.querySelector('#gs-prev');
    const btnNext = section.querySelector('#gs-next');
    const btnClosePortal = section.querySelector('#gs-portal-close');
    const btnPortalPrev = section.querySelector('#gs-portal-nav-prev');
    const btnPortalNext = section.querySelector('#gs-portal-nav-next');

    // ── Update bottom bar UI ──────────────────────────────────────────────
    function updateUI(idx) {
      const d = DESTS[idx];
      if (pagCurr) pagCurr.textContent = d.num;
      if (pagFill) pagFill.style.width = `calc(100% * ${idx + 1} / ${N})`;
    }

    // ── Transition to card index ──────────────────────────────────────────
    function transitionTo(newIdx, animate = true) {
      if (isPortalActive) return;
      newIdx = ((newIdx % N) + N) % N;
      if (newIdx === activeIdx && track.style.transform && !animate) return;
      if (isAnimating && animate) return;

      if (animate) {
        isAnimating = true;
      }

      activeIdx = newIdx;

      // Centering calculations
      const stageWidth = stage.clientWidth;
      const activeCard = cards[activeIdx];
      const cardWidth = activeCard.clientWidth;
      const cardLeft = activeCard.offsetLeft;

      const targetX = (stageWidth / 2) - (cardWidth / 2) - cardLeft;

      // Animate or set track position
      if (animate) {
        gsap.to(track, {
          x: targetX,
          duration: 0.85,
          ease: 'power3.out',
          onComplete: () => {
            isAnimating = false;
          }
        });
      } else {
        gsap.set(track, { x: targetX });
      }

      // Animate card visual states (active vs side)
      cards.forEach((card, idx) => {
        const isActive = idx === activeIdx;
        card.classList.toggle('gs-card--active', isActive);
        card.classList.toggle('gs-card--side', !isActive);

        const glow = card.querySelector('.gs-card-glow');
        if (glow) {
          if (animate) {
            gsap.to(glow, { opacity: isActive ? 1 : 0, duration: 0.5 });
          } else {
            glow.style.opacity = isActive ? '1' : '0';
          }
        }

        if (animate) {
          gsap.to(card, {
            scale: isActive ? 1.0 : 0.88,
            opacity: isActive ? 1.0 : 0.5,
            duration: 0.85,
            ease: 'power3.out'
          });
        } else {
          gsap.set(card, {
            scale: isActive ? 1.0 : 0.88,
            opacity: isActive ? 1.0 : 0.5
          });
        }
      });

      updateUI(activeIdx);
    }

    // ── Destination Data for Portal Mode ──────────────────────────────────
    const PORTAL_DATA = [
      {
        country: 'ICELAND',
        title: 'Arctic Adventure',
        desc: 'Explore the edge of the world. Walk on black sand beaches, navigate blue glacier caves, and watch the northern lights dance across a silent sky.',
        route: '24.5 KM',
        elev: '450 M',
        duration: '6 DAYS'
      },
      {
        country: 'SWITZERLAND',
        title: 'Alpine Serenity',
        desc: 'Experience the absolute peace of high-altitude life. Crisp mountain air, pristine turquoise lakes, and historic train routes winding through majestic snow peaks.',
        route: '18.2 KM',
        elev: '1,250 M',
        duration: '5 DAYS'
      },
      {
        country: 'TURKEY',
        title: 'Balloon Dreams',
        desc: 'Drift silently over ancient fairy chimneys as hundreds of hot air balloons fill the golden sunrise sky of Cappadocia.',
        route: '8.5 KM',
        elev: '320 M',
        duration: '3 DAYS'
      },
      {
        country: 'JAPAN',
        title: 'Ancient Kyoto',
        desc: 'Walk through orange torii gates and silent bamboo forests. Witness tea ceremonies, stone gardens, and pagodas emerging from misty valleys.',
        route: '12.8 KM',
        elev: '45 M',
        duration: '4 DAYS'
      },
      {
        country: 'ITALY',
        title: 'Amalfi Coast',
        desc: 'Bask in timeless Mediterranean elegance. Colorful historic villas cascading down vertical cliffs directly into azure sea waters.',
        route: '10.5 KM',
        elev: '280 M',
        duration: '4 DAYS'
      },
      {
        country: 'INDONESIA',
        title: 'Island of Gods',
        desc: 'Rejuvenate your spirit in Bali. Misty jungle temples, tiered emerald rice paddies, and deeply rooted local cultural ceremonies.',
        route: '14.0 KM',
        elev: '180 M',
        duration: '5 DAYS'
      }
    ];

    // ── Portal Transition Logic ───────────────────────────────────────────
    // ── Destination Custom Themes ──────────────────────────────────────────
    const DESTINATION_THEMES = [
      { // 0: Iceland
        bgImage: '/images/iceland-portal.png',
        bgCol: '#06130e',
        bgPos: 'center 80%',
        clouds: 'radial-gradient(circle at center, rgba(160, 200, 220, 0.8) 0%, rgba(160, 200, 220, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(0, 255, 180, 0.35) 0%, rgba(0, 255, 180, 0) 70%)',
        lightTransform: 'translate(-50%, -45%) scale(1.4)',
        atmosTop: 'linear-gradient(to bottom, rgba(8, 25, 45, 0.8) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(5, 10, 20, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 30%, rgba(5, 15, 30, 0.6) 100%)'
      },
      { // 1: Switzerland
        bgImage: '/images/switzerland-portal.png',
        bgCol: '#050f1b',
        clouds: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(255, 240, 180, 0.45) 0%, rgba(255, 240, 180, 0) 70%)',
        lightTransform: 'translate(-30%, -60%) scale(1.3)',
        atmosTop: 'linear-gradient(to bottom, rgba(15, 35, 65, 0.7) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(10, 15, 25, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 35%, rgba(10, 15, 30, 0.5) 100%)'
      },
      { // 2: Cappadocia
        bgImage: '/images/cappadocia-portal.png',
        bgCol: '#1a0d07',
        clouds: 'radial-gradient(circle at center, rgba(247, 215, 190, 0.8) 0%, rgba(247, 215, 190, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(255, 170, 130, 0.45) 0%, rgba(255, 170, 130, 0) 70%)',
        lightTransform: 'translate(-40%, -50%) scale(1.5)',
        atmosTop: 'linear-gradient(to bottom, rgba(50, 25, 40, 0.75) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(15, 8, 12, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 28%, rgba(35, 15, 25, 0.55) 100%)'
      },
      { // 3: Kyoto
        bgImage: '/images/kyoto-portal.png',
        bgCol: '#12050d',
        bgPos: 'center 60%',
        clouds: 'radial-gradient(circle at center, rgba(220, 175, 195, 0.8) 0%, rgba(220, 175, 195, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(255, 110, 140, 0.4) 0%, rgba(255, 110, 140, 0) 70%)',
        lightTransform: 'translate(-50%, -40%) scale(1.6)',
        atmosTop: 'linear-gradient(to bottom, rgba(45, 15, 40, 0.8) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(12, 4, 10, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 25%, rgba(30, 10, 25, 0.6) 100%)'
      },
      { // 4: Amalfi Coast
        bgImage: '/images/amalfi-portal.png',
        bgCol: '#05111d',
        clouds: 'radial-gradient(circle at center, rgba(255, 245, 220, 0.75) 0%, rgba(255, 245, 220, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(255, 220, 140, 0.45) 0%, rgba(255, 220, 140, 0) 70%)',
        lightTransform: 'translate(-25%, -55%) scale(1.3)',
        atmosTop: 'linear-gradient(to bottom, rgba(12, 40, 75, 0.7) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(4, 10, 20, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 35%, rgba(8, 15, 35, 0.55) 100%)'
      },
      { // 5: Bali
        bgImage: '/images/bali-portal.png',
        bgCol: '#041009',
        bgPos: 'center 80%',
        clouds: 'radial-gradient(circle at center, rgba(200, 230, 215, 0.75) 0%, rgba(200, 230, 215, 0) 70%)',
        light: 'radial-gradient(circle at center, rgba(170, 255, 180, 0.35) 0%, rgba(170, 255, 180, 0) 70%)',
        lightTransform: 'translate(-60%, -45%) scale(1.5)',
        atmosTop: 'linear-gradient(to bottom, rgba(8, 35, 25, 0.75) 0%, transparent 100%)',
        atmosBottom: 'linear-gradient(to top, rgba(3, 8, 6, 0.9) 0%, transparent 100%)',
        vignette: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 30%, rgba(4, 20, 15, 0.6) 100%)'
      }
    ];

    // ── Portal Transition Logic ───────────────────────────────────────────
    function enterPortal() {
      if (isPortalActive || isAnimating) return;
      isPortalActive = true;
      isAnimating = true;

      const activeCard = cards[activeIdx];
      const activeImg = activeCard.querySelector('.gs-card-img');
      if (!activeImg) {
        isAnimating = false;
        isPortalActive = false;
        return;
      }

      // Ensure stage is visible during portal mode
      section.classList.add('gs-portal-mode');

      // Populate destination details data
      const dData = PORTAL_DATA[activeIdx];
      const theme = DESTINATION_THEMES[activeIdx];
      const destContent = section.querySelector('.gs-dest-content');
      if (destContent) {
        destContent.querySelector('.gs-dest-country-label').textContent = dData.country;
        destContent.querySelector('.gs-dest-title-label').textContent = dData.title;
        destContent.querySelector('.gs-dest-desc-label').textContent = dData.desc;
        const statPills = destContent.querySelectorAll('.gs-dest-stat-pill strong');
        if (statPills.length >= 3) {
          statPills[0].textContent = dData.route;
          statPills[1].textContent = dData.elev;
          statPills[2].textContent = dData.duration;
        }
      }

      // Populate previous and next navigation preview cards
      const prevIdx = (activeIdx - 1 + N) % N;
      const nextIdx = (activeIdx + 1) % N;
      const cardFilenames = [
        '/images/iceland_card.png',
        '/images/switzerland_card.png',
        '/images/cappadocia_card.png',
        '/images/kyoto_card.png',
        '/images/amalfi_card.png',
        '/images/bali_card.png'
      ];

      if (btnPortalPrev) {
        btnPortalPrev.querySelector('.gs-portal-nav-card-bg').style.backgroundImage = `url('${cardFilenames[prevIdx]}')`;
        btnPortalPrev.querySelector('.gs-portal-nav-card-name').textContent = PORTAL_DATA[prevIdx].country;
      }
      if (btnPortalNext) {
        btnPortalNext.querySelector('.gs-portal-nav-card-bg').style.backgroundImage = `url('${cardFilenames[nextIdx]}')`;
        btnPortalNext.querySelector('.gs-portal-nav-card-name').textContent = PORTAL_DATA[nextIdx].country;
      }

      // Prepare target background overlay layers
      const mtBase = section.querySelector('.gs-bg-mountain');
      const mtDest = section.querySelector('.gs-bg-mountain-dest');
      const cloudsLayer = section.querySelector('.gs-bg-clouds');
      const lightLayer = section.querySelector('.gs-bg-light');
      const atmosTop = section.querySelector('.gs-bg-atmos-top');
      const atmosBottom = section.querySelector('.gs-bg-atmos-bottom');
      const atmosVignette = section.querySelector('.gs-bg-atmos-vignette');
      const staticVignette = section.querySelector('.gs-bg-vignette');
      const staticGradeL = section.querySelector('.gs-bg-grade-l');
      const staticGradeT = section.querySelector('.gs-bg-grade-t');

      let cardBg = '';
      const themeBgPos = (theme && theme.bgPos) ? theme.bgPos : 'center center';
      if (theme && theme.bgImage) {
        const filename = theme.bgImage.split('/').pop();
        cardBg = `url('images/${filename}')`;
      }
      if (mtDest && cardBg) {
        mtDest.style.backgroundImage = cardBg;
        gsap.set(mtDest, { backgroundPosition: themeBgPos });
      }
      if (cloudsLayer) {
        cloudsLayer.style.background = theme.clouds;
      }
      if (lightLayer) {
        lightLayer.style.background = theme.light;
        gsap.set(lightLayer, { transform: theme.lightTransform });
      }
      if (atmosTop) {
        atmosTop.style.background = theme.atmosTop;
      }
      if (atmosBottom) {
        atmosBottom.style.background = theme.atmosBottom;
      }
      if (atmosVignette) {
        atmosVignette.style.background = theme.vignette;
      }

      // Create a single unified timeline to allow perfect visual reversal
      portalTL = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
        onReverseComplete: () => {
          // Restore clean carousel state on exit completion
          gsap.set(activeCard, {
            clearProps: 'all'
          });
          gsap.set(activeImg, {
            clearProps: 'opacity,filter,transform,scale'
          });
          gsap.set(cards, {
            clearProps: 'opacity,filter,pointerEvents'
          });
          // Reset custom background overlays
          if (mtDest) {
            mtDest.style.backgroundImage = '';
            gsap.set(mtDest, { opacity: 0, filter: 'none', clearProps: 'transform,scale' });
          }
          if (mtBase) {
            mtBase.style.backgroundImage = "url('images/hero-bg.png')";
            gsap.set(mtBase, { filter: 'none', clearProps: 'transform,scale,background-position' });
          }
          if (btnPortalPrev) {
            gsap.set(btnPortalPrev, { clearProps: 'all' });
          }
          if (btnPortalNext) {
            gsap.set(btnPortalNext, { clearProps: 'all' });
          }
          if (cloudsLayer) {
            cloudsLayer.style.background = '';
            gsap.set(cloudsLayer, { opacity: 0, transform: 'scale(1)', filter: 'blur(40px)' });
          }
          if (lightLayer) {
            lightLayer.style.background = '';
            gsap.set(lightLayer, { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' });
          }
          if (atmosTop) {
            atmosTop.style.background = '';
            gsap.set(atmosTop, { opacity: 0 });
          }
          if (atmosBottom) {
            atmosBottom.style.background = '';
            gsap.set(atmosBottom, { opacity: 0 });
          }
          if (atmosVignette) {
            atmosVignette.style.background = '';
            gsap.set(atmosVignette, { opacity: 0 });
          }
          if (staticVignette) {
            gsap.set(staticVignette, { clearProps: 'opacity' });
          }
          if (staticGradeL) {
            gsap.set(staticGradeL, { clearProps: 'opacity' });
          }
          if (staticGradeT) {
            gsap.set(staticGradeT, { clearProps: 'opacity' });
          }
          gsap.set(section, { backgroundColor: '#060810' });
          if (destContent) {
            gsap.set(destContent, { clearProps: 'all' });
            gsap.set(destContent.querySelectorAll('.gs-dest-country-label, .gs-dest-title-label, .gs-dest-desc-label, .gs-dest-stats-row, .gs-dest-book-btn'), { clearProps: 'all' });
          }
          if (btnClosePortal) {
            gsap.set(btnClosePortal, { clearProps: 'all' });
          }

          section.classList.remove('gs-portal-mode');
          isPortalActive = false;
          isAnimating = false;

          // Re-center active layout
          transitionTo(activeIdx, false);
        }
      });

      // ── STEP 1: Click Active Card & Fade Out Carousel ──
      const otherCards = cards.filter((_, idx) => idx !== activeIdx);
      portalTL.to(otherCards, {
        opacity: 0,
        filter: 'blur(20px)',
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0);

      // Smoothly zoom, blur, and fade out the active card so it dissolves into the background
      portalTL.to(activeCard, {
        scale: 1.25,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0);

      portalTL.to(['.gs-editorial', '.gs-nav', '.gs-bottom', '.gs-brand'], {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut'
      }, 0);

      portalTL.set(activeCard, { pointerEvents: 'none' }, 0.8);

      // ── STEP 3: Mountain Layer Changes (with clean cross-fade within 1s) ──
      portalTL.fromTo(mtDest, {
        opacity: 0,
        scale: 1.06,
        transformOrigin: 'center 35%'
      }, {
        opacity: 1,
        scale: 1.0,
        duration: 0.9,
        ease: 'power2.out'
      }, 0.05);

      if (mtBase) {
        portalTL.fromTo(mtBase, {
          opacity: 1,
          scale: 1.0,
          transformOrigin: 'center 35%'
        }, {
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: 'power2.out'
        }, 0.05);
      }

      portalTL.set(mtBase, { backgroundImage: cardBg, opacity: 1, scale: 1.0, backgroundPosition: themeBgPos }, 0.95);
      portalTL.set(mtDest, { opacity: 0, scale: 1.0, backgroundPosition: themeBgPos }, 0.95);

      // Animate section background color matching the theme
      portalTL.to(section, {
        backgroundColor: theme.bgCol,
        duration: 0.9,
        ease: 'power2.out'
      }, 0.05);

      // Fade out static black vignette/overlays
      if (staticVignette) {
        portalTL.fromTo(staticVignette, { opacity: 1 }, { opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.05);
      }
      if (staticGradeL) {
        portalTL.fromTo(staticGradeL, { opacity: 1 }, { opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.05);
      }
      if (staticGradeT) {
        portalTL.fromTo(staticGradeT, { opacity: 1 }, { opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.05);
      }

      // Fade in themed colorful vignette
      if (atmosVignette) {
        portalTL.fromTo(atmosVignette, { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power2.out' }, 0.05);
      }

      // ── STEP 4: Color Transition Glow (floods the screen with the theme color, then fades out) ──
      if (lightLayer) {
        portalTL.fromTo(lightLayer, {
          opacity: 0,
          scale: 0.6
        }, {
          opacity: 0.9,
          scale: 1.15,
          duration: 0.45,
          ease: 'power2.out'
        }, 0.05);

        portalTL.to(lightLayer, {
          opacity: 0,
          scale: 1.3,
          duration: 0.45,
          ease: 'power2.in'
        }, 0.5);
      }

      if (atmosTop && atmosBottom) {
        portalTL.fromTo([atmosTop, atmosBottom], {
          opacity: 0
        }, {
          opacity: 0.8,
          duration: 0.45,
          ease: 'power2.out'
        }, 0.05);

        portalTL.to([atmosTop, atmosBottom], {
          opacity: 0,
          duration: 0.45,
          ease: 'power2.in'
        }, 0.5);
      }

      // ── STEP 7: Destination becomes active ──
      if (destContent) {
        const contentElements = [
          destContent.querySelector('.gs-dest-country-label'),
          destContent.querySelector('.gs-dest-title-label'),
          destContent.querySelector('.gs-dest-desc-label'),
          destContent.querySelector('.gs-dest-stats-row'),
          destContent.querySelector('.gs-dest-book-btn')
        ].filter(Boolean);

        portalTL.set(destContent, { opacity: 1, visibility: 'visible', pointerEvents: 'auto' }, 0.95);
        portalTL.fromTo(contentElements, {
          opacity: 0,
          y: 25
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power3.out'
        }, 0.95);
      }

      if (btnClosePortal) {
        portalTL.fromTo(btnClosePortal, {
          opacity: 0,
          visibility: 'hidden'
        }, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.4
        }, 1.1);
      }

      if (btnPortalPrev && btnPortalNext) {
        portalTL.fromTo([btnPortalPrev, btnPortalNext], {
          opacity: 0,
          scale: 0.8,
          visibility: 'hidden'
        }, {
          opacity: 1,
          scale: 1.0,
          visibility: 'visible',
          duration: 0.4
        }, 1.1);
      }
    }

    function exitPortal() {
      if (!isPortalActive || isAnimating) return;
      isAnimating = true;

      if (portalTL) {
        portalTL.reverse();
      }
    }

    function switchPortalDestination(newIdx) {
      if (isAnimating) return;
      isAnimating = true;

      const prevIdx = (newIdx - 1 + N) % N;
      const nextIdx = (newIdx + 1) % N;

      const prevData = PORTAL_DATA[prevIdx];
      const nextData = PORTAL_DATA[nextIdx];
      const currentData = PORTAL_DATA[newIdx];
      const currentTheme = DESTINATION_THEMES[newIdx];

      const mtBase = section.querySelector('.gs-bg-mountain');
      const mtDest = section.querySelector('.gs-bg-mountain-dest');
      const lightLayer = section.querySelector('.gs-bg-light');
      const atmosTop = section.querySelector('.gs-bg-atmos-top');
      const atmosBottom = section.querySelector('.gs-bg-atmos-bottom');

      if (lightLayer) {
        lightLayer.style.background = currentTheme.light;
        gsap.set(lightLayer, { transform: currentTheme.lightTransform, opacity: 0, scale: 0.6 });
      }
      if (atmosTop) {
        atmosTop.style.background = currentTheme.atmosTop;
        gsap.set(atmosTop, { opacity: 0 });
      }
      if (atmosBottom) {
        atmosBottom.style.background = currentTheme.atmosBottom;
        gsap.set(atmosBottom, { opacity: 0 });
      }

      let cardBg = '';
      if (currentTheme && currentTheme.bgImage) {
        const filename = currentTheme.bgImage.split('/').pop();
        cardBg = `url('images/${filename}')`;
      }

      activeIdx = newIdx;

      const switchTL = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        }
      });

      const destContent = section.querySelector('.gs-dest-content');
      const contentElements = destContent ? [
        destContent.querySelector('.gs-dest-country-label'),
        destContent.querySelector('.gs-dest-title-label'),
        destContent.querySelector('.gs-dest-desc-label'),
        destContent.querySelector('.gs-dest-stats-row'),
        destContent.querySelector('.gs-dest-book-btn')
      ].filter(Boolean) : [];

      const themeBgPos = (currentTheme && currentTheme.bgPos) ? currentTheme.bgPos : 'center center';
      if (mtDest && cardBg) {
        mtDest.style.backgroundImage = cardBg;
        gsap.set(mtDest, { opacity: 0, scale: 1.06, backgroundPosition: themeBgPos });
      }

      switchTL.to(contentElements, { opacity: 0, y: -15, duration: 0.3, stagger: 0.05, ease: 'power2.in' });
      const exitNavBtns = [btnPortalPrev, btnPortalNext].filter(Boolean);
      if (exitNavBtns.length > 0) {
        switchTL.to(exitNavBtns, { opacity: 0, scale: 0.9, duration: 0.3, ease: 'power2.in' }, 0);
      }

      if (mtDest) {
        switchTL.to(mtDest, { opacity: 1, scale: 1.0, duration: 0.7, ease: 'power2.out' }, 0.2);
      }
      if (mtBase) {
        switchTL.to(mtBase, { opacity: 0, scale: 0.96, duration: 0.7, ease: 'power2.out' }, 0.2);
      }

      const atmosVignette = section.querySelector('.gs-bg-atmos-vignette');
      if (atmosVignette) {
        atmosVignette.style.background = currentTheme.vignette;
        gsap.set(atmosVignette, { opacity: 0 });
        switchTL.to(atmosVignette, { opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.2);
      }

      switchTL.to(section, {
        backgroundColor: currentTheme.bgCol,
        duration: 0.7,
        ease: 'power2.out'
      }, 0.2);

      if (lightLayer) {
        switchTL.to(lightLayer, {
          opacity: 0.9,
          scale: 1.15,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        switchTL.to(lightLayer, {
          opacity: 0,
          scale: 1.3,
          duration: 0.35,
          ease: 'power2.in'
        }, 0.35);
      }

      if (atmosTop && atmosBottom) {
        switchTL.to([atmosTop, atmosBottom], {
          opacity: 0.8,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        switchTL.to([atmosTop, atmosBottom], {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.in'
        }, 0.35);
      }

      switchTL.add(() => {
        if (destContent) {
          destContent.querySelector('.gs-dest-country-label').textContent = currentData.country;
          destContent.querySelector('.gs-dest-title-label').textContent = currentData.title;
          destContent.querySelector('.gs-dest-desc-label').textContent = currentData.desc;
          const statPills = destContent.querySelectorAll('.gs-dest-stat-pill strong');
          if (statPills.length >= 3) {
            statPills[0].textContent = currentData.route;
            statPills[1].textContent = currentData.elev;
            statPills[2].textContent = currentData.duration;
          }
        }

        const cardFilenames = [
          '/images/iceland_card.png',
          '/images/switzerland_card.png',
          '/images/cappadocia_card.png',
          '/images/kyoto_card.png',
          '/images/amalfi_card.png',
          '/images/bali_card.png'
        ];

        if (btnPortalPrev) {
          btnPortalPrev.querySelector('.gs-portal-nav-card-bg').style.backgroundImage = `url('${cardFilenames[prevIdx]}')`;
          btnPortalPrev.querySelector('.gs-portal-nav-card-name').textContent = prevData.country;
        }
        if (btnPortalNext) {
          btnPortalNext.querySelector('.gs-portal-nav-card-bg').style.backgroundImage = `url('${cardFilenames[nextIdx]}')`;
          btnPortalNext.querySelector('.gs-portal-nav-card-name').textContent = nextData.country;
        }

        if (mtBase && cardBg) {
          mtBase.style.backgroundImage = cardBg;
          gsap.set(mtBase, { opacity: 1, scale: 1.0, backgroundPosition: themeBgPos });
        }
        if (mtDest) {
          gsap.set(mtDest, { opacity: 0 });
        }

        isPortalActive = false;
        transitionTo(newIdx, false);
        isPortalActive = true;
      });

      switchTL.fromTo(contentElements, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' });
      const enterNavBtns = [btnPortalPrev, btnPortalNext].filter(Boolean);
      if (enterNavBtns.length > 0) {
        switchTL.fromTo(enterNavBtns, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1.0, duration: 0.4, ease: 'power2.out' }, "-=0.3");
      }
    }

    if (btnPortalPrev) {
      btnPortalPrev.addEventListener('click', (e) => {
        e.preventDefault();
        const prevIdx = (activeIdx - 1 + N) % N;
        switchPortalDestination(prevIdx);
      });
    }
    if (btnPortalNext) {
      btnPortalNext.addEventListener('click', (e) => {
        e.preventDefault();
        const nextIdx = (activeIdx + 1) % N;
        switchPortalDestination(nextIdx);
      });
    }

    // ── Input: Prev/Next buttons ──────────────────────────────────────────
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        if (isPortalActive) return;
        transitionTo(activeIdx - 1);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        if (isPortalActive) return;
        transitionTo(activeIdx + 1);
      });
    }
    if (btnClosePortal) {
      btnClosePortal.addEventListener('click', (e) => {
        e.preventDefault();
        exitPortal();
      });
    }

    // ── Input: scroll wheel ───────────────────────────────────────────────
    let lastWheelTime = 0;
    section.addEventListener('wheel', e => {
      if (isPortalActive) return;

      // Check if scroll is on cards
      const onCards = e.target.closest('.gs-card-stage');
      if (!onCards) {
        return;
      }

      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 1000) return;
      lastWheelTime = now;
      transitionTo(e.deltaY > 0 ? activeIdx + 1 : activeIdx - 1);
    }, { passive: false });

    // ── Input: touch swipe ────────────────────────────────────────────────
    let touchX0 = 0;
    section.addEventListener('touchstart', e => {
      if (isPortalActive) return;
      touchX0 = e.touches[0].clientX;
    }, { passive: true });
    section.addEventListener('touchend', e => {
      if (isPortalActive) return;
      const d = touchX0 - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) transitionTo(d > 0 ? activeIdx + 1 : activeIdx - 1);
    }, { passive: true });

    // ── Input: mouse drag ─────────────────────────────────────────────────
    let dragX0 = 0, dragging = false;
    section.addEventListener('mousedown', e => {
      if (isPortalActive) return;
      dragging = true;
      dragX0 = e.clientX;
    });
    window.addEventListener('mouseup', e => {
      if (isPortalActive) return;
      if (!dragging) return;
      dragging = false;
      const d = dragX0 - e.clientX;
      if (Math.abs(d) > 80) transitionTo(d > 0 ? activeIdx + 1 : activeIdx - 1);
    });

    // ── Input: card click ─────────────────────────────────────────────────
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (isPortalActive) return;
        const idx = parseInt(card.dataset.index);
        if (idx !== activeIdx) {
          transitionTo(idx);
        } else {
          enterPortal();
        }
      });
      card.addEventListener('keydown', e => {
        if (isPortalActive) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.dataset.index);
          if (idx !== activeIdx) {
            transitionTo(idx);
          } else {
            enterPortal();
          }
        }
      });
    });

    // ── Keyboard left/right arrow ─────────────────────────────────────────
    window.addEventListener('keydown', e => {
      if (isPortalActive) return;
      if (!section.matches(':hover') && document.activeElement.closest('.gs-hero') === null) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); transitionTo(activeIdx + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); transitionTo(activeIdx - 1); }
    });

    // ── Handle Window Resize ──────────────────────────────────────────────
    window.addEventListener('resize', () => {
      if (isPortalActive) return;
      transitionTo(activeIdx, false);
    });

    // ── Initialize ────────────────────────────────────────────────────────
    setTimeout(() => {
      transitionTo(activeIdx, false);
    }, 50);

    // ── Entrance animation ────────────────────────────────────────────────
    const entranceTL = gsap.timeline({ delay: 0.15 });
    entranceTL
      .from('.gs-eyebrow', { opacity: 0, x: -30, duration: 1.0, ease: 'power3.out' }, 0.1)
      .from('.gs-headline', { opacity: 0, y: 50, duration: 1.3, ease: 'power3.out' }, 0.25)
      .from('.gs-sub', { opacity: 0, y: 20, duration: 0.9, ease: 'power3.out' }, 0.55)
      .from('.gs-film-btn', { opacity: 0, y: 14, duration: 0.8, ease: 'power3.out' }, 0.72)
      .from('.gs-bottom', { opacity: 0, y: 16, duration: 0.8, ease: 'power3.out' }, 0.85);

    // Cards: stagger entrance from below
    gsap.from(cards, {
      opacity: 0,
      y: 80,
      scale: 0.85,
      stagger: { amount: 0.4, from: 2 },
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.3
    });

  })(); // end initGSHero


  // ==========================================================================
  // DYNAMIC DESTINATION DETAIL VIEW SYSTEM (SPA ROUTER & RENDERER)
  // ==========================================================================

  let savedScrollY = 0;
  let isHomeVisible = true;

  // Delegate click handlers to catch Explore Destination and Sibling card actions
  document.addEventListener('click', (e) => {
    // Packages navigation link or packages view links click check
    const packagesLink = e.target.closest('#nav-link-packages, #packages-nav-packages, #destinations-nav-packages, #wishlist-nav-packages, #btn-experiences-to-packages, #btn-customize-journey');
    if (packagesLink) {
      e.preventDefault();
      window.history.pushState(null, "", "/packages");
      checkRoute();
      return;
    }
    const packagesHomeLink = e.target.closest('#packages-nav-home, #destinations-nav-home, #wishlist-nav-home');
    if (packagesHomeLink) {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      checkRoute();
      return;
    }
    // Destinations navigation link click check
    const destLink = e.target.closest('#nav-link-destinations, #packages-nav-destinations, #destinations-nav-destinations, #wishlist-nav-destinations');
    if (destLink) {
      e.preventDefault();
      window.history.pushState(null, "", "/destinations");
      checkRoute();
      return;
    }

    const packagesViewAllDestLink = e.target.closest('#btn-packages-view-destinations');
    if (packagesViewAllDestLink) {
      e.preventDefault();
      window.history.pushState(null, "", "/destinations");
      checkRoute();
      return;
    }

    // 1. Check trending card explore button
    const trendingBtn = e.target.closest('.trending-card-btn');
    if (trendingBtn) {
      e.preventDefault();
      const card = trendingBtn.closest('.trending-card-wrapper');
      if (card) {
        const title = card.querySelector('.trending-card-title').textContent.trim().toLowerCase();
        navigateToDestination(title);
      }
      return;
    }

    // 2. Check hero gallery explore button
    const heroBtn = e.target.closest('.gallery-card-cta-btn');
    if (heroBtn) {
      e.preventDefault();
      const card = heroBtn.closest('.hero-gallery-card');
      if (card) {
        const locationEl = card.querySelector('.gallery-card-location');
        if (locationEl) {
          const text = locationEl.textContent.trim().toLowerCase();
          const parts = text.split(',');
          const slugCandidate = parts[parts.length - 1].trim(); // e.g. "japan", "italy"
          navigateToDestination(slugCandidate);
        }
      }
      return;
    }

    // 3. Sibling recommendations at the bottom
    const relatedCard = e.target.closest('.detail-rel-card');
    if (relatedCard) {
      e.preventDefault();
      const slug = relatedCard.dataset.slug;
      if (slug) {
        navigateToDestination(slug);
      }
      return;
    }

    // 4. Back button
    const backBtn = e.target.closest('#btn-detail-back');
    if (backBtn) {
      e.preventDefault();
      navigateBack();
      return;
    }

    // 4.3 Itinerary "View Details" click check
    const luxuryDayBtn = e.target.closest('.luxury-day-btn');
    if (luxuryDayBtn) {
      e.preventDefault();
      const destView = document.getElementById('destination-view');
      const loadedSlug = destView?.dataset.loadedSlug || 'japan';
      const dayCard = luxuryDayBtn.closest('.luxury-day-card');
      const dayIndex = dayCard ? parseInt(dayCard.getAttribute('data-day-index') || '0', 10) : 0;

      if (window.FestivalView) {
        window.FestivalView.show(loadedSlug, 'place', dayIndex % 4);
      }
      return;
    }

      // 4.5 Home navigation link or Brand Logo clicks
      const homeLink = e.target.closest('#nav-link-home');
      const brandLogo = e.target.closest('.brand-group') || e.target.closest('.menu-brand-group');
      if (homeLink || brandLogo) {
        e.preventDefault();
        navigateBack();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      // 5. Sub-navigation links
      const subnavLink = e.target.closest('.subnav-link');
      if (subnavLink) {
        e.preventDefault();
        const targetId = subnavLink.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const headerOffset = 180;
          const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        return;
      }
    });

  function navigateToDestination(slug) {
    // Add dubai custom fallback data directly at runtime if not defined in destinations
    if (slug === 'dubai' && !window.destinations['dubai']) {
      window.destinations['dubai'] = {
        slug: 'dubai',
        name: 'Dubai',
        country: 'UAE',
        subtitle: 'City of Dreams',
        color: '#E59E30',
        secondaryColor: '#3A2E1D',
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
        season: 'Oct - Apr',
        shortStory: 'A soaring desert oasis of record-breaking architecture, luxury golden souks, and premium dune retreats.',
        description: 'Dubai is a visionary wonderland where traditional Arabian heritage blends with architectural milestones like the Burj Khalifa. Gaze over skylines from luxury observatories, dine under Michelin star settings, and navigate red desert dunes on private guided tours.',
        quote: 'Dubai proves that modern imagination can shape the desert sand into gold and towering glass.',
        quoteAuthor: 'Sarah Al-Mansoori',
        historyText: 'Originally a small fishing and pearl-diving village, Dubai transformed rapidly after the mid-20th century. Its history combines Bedouin traditions with modern trading visions that established it as a premier financial and luxury travel hub.',
        stats: [
          { label: 'Best Time', value: 'Nov - Mar', icon: 'calendar' },
          { label: 'Weather', value: '22C - 32C', icon: 'cloud-sun' },
          { label: 'Duration', value: '4 - 6 Days', icon: 'clock' },
          { label: 'Language', value: 'Arabic / English', icon: 'languages' },
          { label: 'Currency', value: 'AED Dirham', icon: 'banknote' },
          { label: 'Safety', value: 'Excellent (Rank 4)', icon: 'shield-check' },
          { label: 'Traveler Rating', value: '4.94 / 5.0', icon: 'star' },
          { label: 'Popular Season', value: 'Winter Shopping', icon: 'compass' }
        ],
        whyVisit: [
          { title: 'Visionary Skylines', desc: 'Stand on top of the world inside the towering 828-meter tall Burj Khalifa.', icon: 'award' },
          { title: 'Desert Glamping', desc: 'Sleep under stars in luxury air-conditioned tents amidst towering orange dunes.', icon: 'sparkles' },
          { title: 'Gourmet Dining', desc: 'Savor fusion cuisines by world-renowned chefs in overlooking glass terraces.', icon: 'utensils' },
          { title: 'Exclusive Souks', desc: 'Explore historic alleys filled with pure gold, aromatic spices, and luxury silks.', icon: 'heart' }
        ],
        experiences: [
          { title: 'Adventure', desc: 'Sandboarding and skydiving over the Palm Jumeirah.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
          { title: 'Luxury Stays', desc: 'Iconic stays inside seven-star resorts with personal beach access.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
          { title: 'Food', desc: 'Gold-infused cappuccinos, traditional dates, and international culinary menus.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
          { title: 'Sailing', desc: 'Charter private yachts across the Dubai Marina.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', icon: 'compass' }
        ],
        highlights: [
          { title: 'Burj Khalifa Tower', desc: 'The world\'s tallest architectural marvel looking over the Arabian Gulf.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
          { title: 'Palm Jumeirah Island', desc: 'Man-made palm tree island featuring elite beach clubs and villas.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
          { title: 'Al Fahidi Fort', desc: 'Historic stone fortress and museum documenting traditional pearl-diving era.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
          { title: 'The Dubai Mall Fountain', desc: 'Breathtaking choreographed water dances set to classical and modern music.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' }
        ],
        packages: [
          { name: 'Skyline & Sand Voyage', duration: '5 Days / 4 Nights', price: 'Rs. 2,25,000', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80' },
          { name: 'Desert Dune Safari Luxury', duration: '6 Days / 5 Nights', price: 'Rs. 2,65,000', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80' },
          { name: 'Elite Marina Cruise', duration: '4 Days / 3 Nights', price: 'Rs. 1,95,000', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80' }
        ],
        gallery: [
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
        ],
        timeline: [
          { day: 'Day 1', title: 'Arrival & Sky View Dinner', desc: 'Arrive in Dubai. Check in to a premium Marina-facing luxury suite. Dine at an open terrace looking over the fountains.' },
          { day: 'Day 2', title: 'Burj Khalifa & Marina Cruise', desc: 'Stand on the 148th floor observatory. Board a private sunset luxury yacht.' },
          { day: 'Day 3', title: 'Historic Bastakiya & Gold Souks', desc: 'Walk historic wind-tower alleys. Ride traditional wooden abras and shop the Gold Souk.' },
          { day: 'Day 4', title: 'Red Desert Dunes Glamping', desc: 'Travel into the conservation desert. Skim dunes on active sand-rovers, followed by a fire-dance feast.' },
          { day: 'Day 5', title: 'Luxury Spa & Return', desc: 'Partake in gold-clay skin massage, buy souvenirs, and head to DXB airport for departure.' }
        ],
        mapPoints: [
          { name: 'Burj Khalifa', type: 'Landmark', x: '45%', y: '40%' },
          { name: 'Marina Yacht Dock', type: 'Relax', x: '25%', y: '68%' },
          { name: 'Palm Jumeirah', type: 'Relax', x: '20%', y: '60%' },
          { name: 'Al Maha Desert', type: 'Nature', x: '72%', y: '55%' }
        ],
        reviews: [
          { name: 'Arjun Khanna', rating: 5, text: 'Burj Khalifa view at sunset was amazing. The desert safari was completely flawless.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
          { name: 'Lily Henderson', rating: 5, text: 'Excellent dining recommendations. A truly majestic luxury experience.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
        ]
      };
    }

    history.pushState({ slug }, '', `/destination/${slug}`);
    showDestinationView(slug);
  }

  function navigateBack() {
    history.pushState(null, '', '/');
    showHomeView();
  }

  function checkRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    let slug = null;

    const pathMatch = path.match(/\/destination\/([a-zA-Z0-9_-]+)/);
    if (pathMatch) {
      slug = pathMatch[1].toLowerCase();
    } else if (hash.startsWith('#/destination/')) {
      slug = hash.replace('#/destination/', '').toLowerCase();
    }

    const isNest = path === "/nest" || hash === "#/nest" || hash.startsWith('#/nest');
    const isDestinations = path === "/destinations" || hash === "#/destinations" || hash === "#destinations" || hash.startsWith('#/destinations') || hash.startsWith('#destinations');
    const isPackages = path === "/packages" || hash === "#/packages" || hash === "#packages" || hash.startsWith('#/packages');
    const isWishlist = path === "/wishlist" || hash === "#/wishlist" || hash === "#wishlist";

    // Close festival overlay if active
    const fvOverlay = document.getElementById('festival-overlay');
    if (fvOverlay) {
      fvOverlay.classList.remove('fv-active');
    }

    if (isNest) {
      showNestDashboardView();
    } else if (isDestinations) {
      showAllDestinationsView();
    } else if (isPackages) {
      showPackagesView();
    } else if (isWishlist) {
      showWishlistView();
    } else if (slug) {
      showDestinationView(slug);
    } else {
      showHomeView();
    }
  }

  function showNestDashboardView() {
    if (isHomeVisible) {
      savedScrollY = window.scrollY;
      isHomeVisible = false;
    }

    // Hide home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'none';

    // Hide detail view
    const destView = document.getElementById('destination-view');
    if (destView) {
      destView.style.display = 'none';
      const subnavWrapper = document.getElementById('detail-subnav-wrapper');
      if (subnavWrapper) subnavWrapper.style.display = 'none';
    }

    // Hide destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) destinationsView.style.display = 'none';

    // Hide packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) packagesView.style.display = 'none';

    // Hide global header wrapper
    const mainHeader = document.querySelector('.header-wrapper');
    if (mainHeader) mainHeader.style.display = 'none';

    // Show dashboard
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) {
      nestDashboard.style.display = 'block';
      gsap.fromTo(nestDashboard, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }

    // Trigger redesigned premium dashboard components
    if (typeof refreshDashboardData === 'function') {
      refreshDashboardData();
    }
    if (typeof initRedesignedDashboardListeners === 'function') {
      initRedesignedDashboardListeners();
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  function showDestinationView(slug) {
    updateNavbarHighlight('destinations');
    if (isHomeVisible) {
      savedScrollY = window.scrollY;
      isHomeVisible = false;
    }

    // Hide dashboard view
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) nestDashboard.style.display = 'none';

    // Hide destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) destinationsView.style.display = 'none';

    // Hide packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) packagesView.style.display = 'none';

    const dataStore = window.destinations || {};
    let data = dataStore[slug.toLowerCase()];
    if (!data) {
      const matchKey = Object.keys(dataStore).find(k => k.toLowerCase() === slug.toLowerCase());
      data = matchKey ? dataStore[matchKey] : dataStore['japan'];
    }

    // Hide home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'none';

    // Hide global header wrapper
    const mainHeader = document.querySelector('.header-wrapper');
    if (mainHeader) mainHeader.style.display = 'none';

    // Show detail view
    const destView = document.getElementById('destination-view');
    if (destView) {
      destView.style.display = 'block';
      destView.style.setProperty('--detail-accent', data.color || '#A97C37');
      const subnavWrapper = document.getElementById('detail-subnav-wrapper');
      if (subnavWrapper) subnavWrapper.style.display = 'block';
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Dynamic Render
    renderTemplate(data);

    // Staggered Entrance Animations
    animateDetailEntrance();
  }

  function updateNavbarHighlight(activeTab) {
    document.querySelectorAll('.nav-links').forEach(nav => {
      nav.querySelectorAll('.nav-link').forEach(link => {
        const id = link.getAttribute('id') || '';
        const href = link.getAttribute('href') || '';

        let matches = false;
        if (activeTab === 'home') {
          matches = id === 'nav-link-home' || id === 'packages-nav-home' || id === 'destinations-nav-home' || id === 'wishlist-nav-home' || href === '/' || href === '/#home';
        } else if (activeTab === 'destinations') {
          matches = id === 'nav-link-destinations' || id === 'packages-nav-destinations' || id === 'destinations-nav-destinations' || id === 'wishlist-nav-destinations' || href === '/destinations';
        } else if (activeTab === 'packages') {
          matches = id === 'nav-link-packages' || id === 'packages-nav-packages' || id === 'destinations-nav-packages' || id === 'wishlist-nav-packages' || href === '/packages';
        }

        if (matches) {
          link.classList.add('active');
          if (id.includes('-nav-')) {
            link.style.color = 'var(--accent-gold)';
          } else {
            link.style.color = '';
          }
        } else {
          link.classList.remove('active');
          if (id.includes('-nav-')) {
            link.style.color = 'var(--text-muted)';
          } else {
            link.style.color = '';
          }
        }
      });
    });
  }

  function showHomeView() {
    updateNavbarHighlight('home');
    isHomeVisible = true;

    // Hide dashboard view
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) nestDashboard.style.display = 'none';

    // Hide detail view
    const destView = document.getElementById('destination-view');
    if (destView) destView.style.display = 'none';
    const subnavWrapper = document.getElementById('detail-subnav-wrapper');
    if (subnavWrapper) subnavWrapper.style.display = 'none';

    // Hide destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) destinationsView.style.display = 'none';

    // Hide packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) packagesView.style.display = 'none';

    // Show home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'block';

    // Show global header wrapper
    const mainHeader = document.querySelector('.header-wrapper');
    if (mainHeader) mainHeader.style.display = 'block';

    // Re-trigger scroll trigger refreshes to prevent layout alignment stutters
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }

    // Restore scroll position
    window.scrollTo(0, savedScrollY);
  }

  function getWishlistDestinations() {
    try {
      const stored = localStorage.getItem('gs_wishlist_destinations');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleWishlistDestination(slug) {
    let list = getWishlistDestinations();
    if (list.includes(slug)) {
      list = list.filter(s => s !== slug);
    } else {
      list.push(slug);
    }
    localStorage.setItem('gs_wishlist_destinations', JSON.stringify(list));
    return list;
  }

  function getWishlistPackages() {
    try {
      const stored = localStorage.getItem('gs_wishlist_packages');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleWishlistPackage(pkgId) {
    let list = getWishlistPackages();
    if (list.includes(pkgId)) {
      list = list.filter(id => id !== pkgId);
    } else {
      list.push(pkgId);
    }
    localStorage.setItem('gs_wishlist_packages', JSON.stringify(list));
    return list;
  }

  function showWishlistView() {
    updateNavbarHighlight('wishlist');
    if (isHomeVisible) {
      savedScrollY = window.scrollY;
      isHomeVisible = false;
    }

    // Hide home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'none';

    // Hide detail view
    const destView = document.getElementById('destination-view');
    if (destView) {
      destView.style.display = 'none';
      const subnavWrapper = document.getElementById('detail-subnav-wrapper');
      if (subnavWrapper) subnavWrapper.style.display = 'none';
    }

    // Hide dashboard view
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) nestDashboard.style.display = 'none';

    // Hide packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) packagesView.style.display = 'none';

    // Hide destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) destinationsView.style.display = 'none';

    // Hide global header wrapper
    const mainHeader = document.querySelector('.header-wrapper');
    if (mainHeader) mainHeader.style.display = 'none';

    // Show wishlist view
    const wishlistView = document.getElementById('wishlist-view');
    if (wishlistView) {
      wishlistView.style.display = 'block';
      gsap.fromTo(wishlistView, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Initial render of wishlist sections
    renderWishlistDestinationsSection();
    renderWishlistPackagesSection();
  }

  function renderWishlistDestinationsSection() {
    const grid = document.getElementById("wishlist-destinations-grid");
    if (!grid) return;

    const wishlist = getWishlistDestinations();
    const dataStore = window.destinations || {};

    // Filter to only wishlisted keys
    const filtered = wishlist.map(slug => dataStore[slug]).filter(dest => !!dest);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1.5rem; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(20px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 10px 30px rgba(30, 26, 21, 0.05); margin: 0 auto; width: 100%; box-sizing: border-box;">
          <i data-lucide="heart-off" style="width: 32px; height: 32px; color: var(--accent-gold); margin-bottom: 0.8rem; stroke-width: 1.5;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.2rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.4rem;">No Destinations Saved</h3>
          <p style="font-family: var(--font-sans); font-size: 0.82rem; color: var(--text-muted); max-width: 300px; margin: 0 auto 1.2rem;">Tap the heart icon on destination cards to build your list.</p>
          <button class="btn-dest-explore" id="btn-wishlist-dest-discover" style="margin: 0 auto; width: fit-content; padding: 0.6rem 1.5rem; font-size: 0.8rem;">
            <span>Discover Destinations</span>
            <i data-lucide="compass" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;"></i>
          </button>
        </div>
      `;
      const btnDiscover = document.getElementById('btn-wishlist-dest-discover');
      if (btnDiscover) {
        btnDiscover.addEventListener('click', () => {
          window.history.pushState(null, "", "/destinations");
          checkRoute();
        });
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const vibeMap = {
      japan: 'culture',
      iceland: 'adventure',
      switzerland: 'adventure',
      turkey: 'culture',
      indonesia: 'relaxation',
      italy: 'relaxation',
      santorini: 'relaxation',
      maldives: 'relaxation',
      france: 'culture',
      egypt: 'culture'
    };

    grid.innerHTML = filtered.map(dest => {
      const tagText = (vibeMap[dest.slug] || 'CULTURE').toUpperCase();
      const countryUpper = dest.country.toUpperCase();
      const durationVal = dest.stats.find(s => s.label === "Duration")?.value || "5-7 Days";

      return `
        <div class="dest-card glass-panel" data-slug="${dest.slug}">
          <div class="dest-card-image" style="background-image: url('${dest.heroImage}');">
            <span class="dest-card-tag">${tagText}</span>
            <button class="btn-wishlist-heart active" data-slug="${dest.slug}" aria-label="Remove from Wishlist" style="position: absolute; top: 1rem; right: 1rem; border: none; background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(10px); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--accent-gold); transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 0; z-index: 10;">
              <i data-lucide="heart" fill="var(--accent-gold)" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
          <div class="dest-card-content">
            <div class="dest-card-header">
              <h2 class="dest-card-title">${dest.name}</h2>
              <span class="dest-card-country">${countryUpper}</span>
            </div>
            <p class="dest-card-story">${dest.shortStory}</p>
            <div class="dest-card-meta">
              <div class="dest-meta-item">
                <i data-lucide="calendar" style="width: 14px; height: 14px; margin-right: 4px;"></i>
                <span>${dest.season}</span>
              </div>
              <div class="dest-meta-item">
                <i data-lucide="clock" style="width: 14px; height: 14px; margin-right: 4px;"></i>
                <span>${durationVal}</span>
              </div>
            </div>
            <button class="btn-dest-explore">
              <span>Explore Universe</span>
              <i data-lucide="compass" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");

    grid.querySelectorAll('.btn-wishlist-heart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const slug = btn.getAttribute('data-slug');
        toggleWishlistDestination(slug);
        renderWishlistDestinationsSection();
      });
    });

    // Attach explore click listeners
    grid.querySelectorAll('.dest-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-slug');
        window.history.pushState(null, "", `/destination/${slug}`);
        checkRoute();
      });
    });

    // GSAP entrance
    const cards = grid.querySelectorAll(".dest-card");
    if (window.gsap && cards.length > 0) {
      gsap.killTweensOf(cards);
      gsap.fromTo(cards,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.08, ease: "power2.out" }
      );
    }
  }

  function renderWishlistPackagesSection() {
    const grid = document.getElementById("wishlist-packages-grid");
    if (!grid) return;

    const wishlist = getWishlistPackages();
    const list = packagesList.filter(pkg => wishlist.includes(pkg.id));

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1.5rem; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(20px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 10px 30px rgba(30, 26, 21, 0.05); margin: 0 auto; width: 100%; box-sizing: border-box;">
          <i data-lucide="heart-off" style="width: 32px; height: 32px; color: var(--accent-gold); margin-bottom: 0.8rem; stroke-width: 1.5;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.2rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.4rem;">No Packages Saved</h3>
          <p style="font-family: var(--font-sans); font-size: 0.82rem; color: var(--text-muted); max-width: 300px; margin: 0 auto 1.2rem;">Tap the heart icon on holiday packages to build your list.</p>
          <button class="btn-dest-explore" id="btn-wishlist-pkg-discover" style="margin: 0 auto; width: fit-content; padding: 0.6rem 1.5rem; font-size: 0.8rem;">
            <span>Discover Packages</span>
            <i data-lucide="compass" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;"></i>
          </button>
        </div>
      `;
      const btnDiscover = document.getElementById('btn-wishlist-pkg-discover');
      if (btnDiscover) {
        btnDiscover.addEventListener('click', () => {
          window.history.pushState(null, "", "/packages");
          checkRoute();
        });
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = list.map(pkg => {
      const badgeHTML = pkg.badge ? `<span class="pkg-tag bestseller" style="position: absolute; top: 0.8rem; left: 0.8rem; background: var(--accent-gold); color: #FFF; font-family: var(--font-sans); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase;">${pkg.badge}</span>` : '';
      const featuresHTML = pkg.features.map(f => `<li style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.35rem;"><i data-lucide="info" style="width: 12px; height: 12px; color: var(--accent-gold); opacity: 0.8;"></i> ${f}</li>`).join("");
      const inclusionsHTML = pkg.inclusions.map(inc => `<li style="font-family: var(--font-sans); font-size: 0.8rem; color: #10AC84; display: flex; align-items: center; gap: 0.35rem; font-weight: 600;"><i data-lucide="check" style="width: 12px; height: 12px; color: #10AC84; stroke-width: 3;"></i> ${inc}</li>`).join("");

      return `
        <div class="package-card glass-panel" style="border-radius: 20px; overflow: hidden; background: #FFF; border: 1px solid rgba(30, 26, 21, 0.08); box-shadow: 0 4px 20px rgba(30, 26, 21, 0.03); transition: all 0.3s ease; display: flex; flex-direction: column; text-align: left; min-height: 560px;">
            <div class="pkg-card-image" style="position: relative; height: 165px; background-size: cover; background-position: center; background-image: url('${pkg.image}');">
                ${badgeHTML}
                <button class="pkg-wishlist-btn wishlist-active" data-pkg-id="${pkg.id}" style="position: absolute; top: 0.8rem; right: 0.8rem; border: none; background: rgba(255,255,255,0.85); backdrop-filter: blur(5px); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #EB5757; transition: all 0.3s ease; z-index: 5;"><i data-lucide="heart" fill="#EB5757" style="width: 13px; height: 13px;"></i></button>
            </div>
            <div class="pkg-card-body" style="padding: 1.3rem 1.3rem 1.6rem 1.3rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="pkg-duration" style="font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.05em;">${pkg.durationText}</div>
                    <span style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); background: rgba(30, 26, 21, 0.04); padding: 2px 7px; border-radius: 4px; font-weight: 700;">${pkg.hotelStars}★ Luxury</span>
                </div>
                <h3 class="pkg-title" style="font-family: var(--font-serif); font-size: 1.32rem; font-weight: 700; color: var(--text-dark); margin: 0; line-height: 1.25; min-height: 3.2rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${pkg.title}</h3>
                <div class="pkg-location" style="font-family: var(--font-sans); font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;"><i data-lucide="map-pin" style="width: 12px; height: 12px; color: var(--accent-gold);"></i> ${pkg.location}</div>
                
                <ul style="list-style: none; padding: 0; margin: 0.4rem 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; border-top: 1px dashed rgba(30, 26, 21, 0.08); padding-top: 0.6rem;">
                    ${featuresHTML}
                </ul>
                
                <ul style="list-style: none; padding: 0; margin: 0.4rem 0 0; display: flex; flex-direction: column; gap: 0.35rem; border-top: 1px dashed rgba(30, 26, 21, 0.08); padding-top: 0.6rem; flex: 1;">
                    ${inclusionsHTML}
                </ul>

                <div class="pkg-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid rgba(30, 26, 21, 0.05); padding-top: 0.9rem; width: 100%;">
                    <div class="pkg-price-col" style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1;">
                        <span class="pkg-price-label" style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">From</span>
                        <span class="pkg-price-val" style="font-family: var(--font-sans); font-size: 1.55rem; font-weight: 800; color: var(--text-dark); margin: 3px 0;">₹${pkg.price.toLocaleString("en-IN")}</span>
                        <span class="pkg-price-unit" style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--text-muted);">/ person</span>
                    </div>
                    <button class="btn-pkg-book-pill" style="border: none; background: rgba(16, 172, 132, 0.08); color: #10AC84; font-family: var(--font-sans); font-size: 0.82rem; font-weight: 700; padding: 10px 20px; border-radius: 99px; cursor: pointer; transition: all 0.3s ease;">
                        Book @ ₹2,000
                    </button>
                </div>
                <button class="btn-pkg-view-details" data-pkg="${pkg.id}" style="border: none; background: rgba(30, 26, 21, 0.03); color: var(--text-dark); font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; padding: 12px 18px; border-radius: 8px; width: 100%; cursor: pointer; transition: all 0.3s ease; margin-top: 0.45rem;">View Details</button>
            </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();

    // Attach toggle click handler
    grid.querySelectorAll('.pkg-wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pkgId = btn.getAttribute('data-pkg-id');
        toggleWishlistPackage(pkgId);
        renderWishlistPackagesSection();
      });
    });

    // Attach view details click handler
    grid.querySelectorAll('.btn-pkg-view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pkgId = btn.getAttribute('data-pkg');
        const pkg = packagesList.find(p => p.id === pkgId);
        if (pkg) {
          const modal = document.getElementById("pkg-details-modal");
          if (modal) {
            // Fill details modal
            const modalHero = document.getElementById("pkg-modal-hero");
            const modalTitle = document.getElementById("pkg-modal-title");
            const modalLocation = document.getElementById("pkg-modal-location");
            const modalStars = document.getElementById("pkg-modal-stars");
            const modalPrice = document.getElementById("pkg-price");

            if (modalHero) modalHero.style.backgroundImage = `linear-gradient(rgba(30, 26, 21, 0.4), rgba(30, 26, 21, 0.85)), url('${pkg.image}')`;
            if (modalTitle) modalTitle.textContent = pkg.title;
            if (modalLocation) modalLocation.innerHTML = `<i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--accent-gold);"></i> ${pkg.location}`;
            if (modalStars) modalStars.textContent = "★".repeat(pkg.stars) + "☆".repeat(5 - pkg.stars);
            if (modalPrice) modalPrice.textContent = `₹${pkg.price.toLocaleString("en-IN")}`;

            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            if (window.lucide) window.lucide.createIcons();
          }
        }
      });
    });
  }

  function showAllDestinationsView() {
    updateNavbarHighlight('destinations');
    if (isHomeVisible) {
      savedScrollY = window.scrollY;
      isHomeVisible = false;
    }

    // Hide home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'none';

    // Hide detail view
    const destView = document.getElementById('destination-view');
    if (destView) {
      destView.style.display = 'none';
      const subnavWrapper = document.getElementById('detail-subnav-wrapper');
      if (subnavWrapper) subnavWrapper.style.display = 'none';
    }

    // Hide dashboard view
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) nestDashboard.style.display = 'none';

    // Hide packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) packagesView.style.display = 'none';

    // Hide global header wrapper
    const mainHeader = document.querySelector('.header-wrapper');
    if (mainHeader) mainHeader.style.display = 'none';

    // Show destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) {
      destinationsView.style.display = 'block';
      gsap.fromTo(destinationsView, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Initial render
    renderAllDestinations();
  }

  function renderAllDestinations() {
    const grid = document.getElementById("destinations-grid");
    if (!grid) return;

    const dataStore = window.destinations || {};
    const uniqueDestKeys = ['japan', 'iceland', 'switzerland', 'turkey', 'indonesia', 'italy', 'santorini', 'maldives', 'france', 'egypt'];

    // Fuzzy search and matchmaker filtering
    const searchInput = document.getElementById("destinations-search-input");
    const searchVal = searchInput ? searchInput.value.toLowerCase() : "";

    const activeVibeBtn = document.querySelector(".matchmaker-options[data-key='vibe'] .mm-opt.active");
    const activeVibe = activeVibeBtn ? activeVibeBtn.getAttribute("data-val") : "all";

    const activeSeasonBtn = document.querySelector(".matchmaker-options[data-key='season'] .mm-opt.active");
    const activeSeason = activeSeasonBtn ? activeSeasonBtn.getAttribute("data-val") : "all";

    // Vibe theme maps
    const vibeMap = {
      japan: 'culture',
      iceland: 'adventure',
      switzerland: 'adventure',
      turkey: 'culture',
      indonesia: 'relaxation',
      italy: 'relaxation',
      santorini: 'relaxation',
      maldives: 'relaxation',
      france: 'culture',
      egypt: 'culture'
    };

    // Season mappings (spring, summer, winter)
    const seasonMap = {
      japan: 'spring',
      iceland: 'winter',
      switzerland: 'winter',
      turkey: 'spring',
      indonesia: 'summer',
      italy: 'summer',
      santorini: 'summer',
      maldives: 'summer',
      france: 'summer',
      egypt: 'winter'
    };

    const filtered = uniqueDestKeys
      .map(key => dataStore[key])
      .filter(dest => {
        if (!dest) return false;

        const matchesSearch = !searchVal ||
          dest.name.toLowerCase().includes(searchVal) ||
          dest.country.toLowerCase().includes(searchVal) ||
          dest.shortStory.toLowerCase().includes(searchVal) ||
          dest.subtitle.toLowerCase().includes(searchVal);

        const matchesVibe = activeVibe === "all" || vibeMap[dest.slug] === activeVibe;
        const matchesSeason = activeSeason === "all" || seasonMap[dest.slug] === activeSeason;

        return matchesSearch && matchesVibe && matchesSeason;
      });

    // Update matches text (with smooth dynamic rolling ticker count and stacked alignment)
    const resultText = document.getElementById("matchmaker-result");
    if (resultText) {
      const countSpan = document.getElementById("matchmaker-count-val");
      const currentVal = countSpan ? parseInt(countSpan.textContent) || 0 : 0;
      const targetVal = filtered.length;

      resultText.innerHTML = `
        <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-light);">Found</span>
        <strong id="matchmaker-count-val" style="font-size: 1.8rem; font-weight: 800; color: var(--accent-gold); line-height: 1.0; margin: 0.1rem 0;">${currentVal}</strong>
        <span style="font-size: 0.72rem; color: var(--text-muted);">matching escapes</span>
      `;

      if (window.gsap) {
        const valObj = { val: currentVal };
        gsap.to(valObj, {
          val: targetVal,
          duration: 0.55,
          ease: "power2.out",
          onUpdate: () => {
            const countValSpan = document.getElementById("matchmaker-count-val");
            if (countValSpan) {
              countValSpan.textContent = Math.round(valObj.val);
            }
          }
        });
      } else {
        const countValSpan = document.getElementById("matchmaker-count-val");
        if (countValSpan) {
          countValSpan.textContent = targetVal;
        }
      }
    }

    grid.innerHTML = filtered.map(dest => {
      const tagText = vibeMap[dest.slug].toUpperCase();
      const countryUpper = dest.country.toUpperCase();
      const durationVal = dest.stats.find(s => s.label === "Duration")?.value || "5-7 Days";

      const isFav = getWishlistDestinations().includes(dest.slug);
      const heartFill = isFav ? "var(--accent-gold)" : "none";
      const activeClass = isFav ? "active" : "";

      return `
        <div class="dest-card glass-panel" data-slug="${dest.slug}">
          <div class="dest-card-image" style="background-image: url('${dest.heroImage}');">
            <span class="dest-card-tag">${tagText}</span>
            <button class="btn-wishlist-heart ${activeClass}" data-slug="${dest.slug}" aria-label="Save to Wishlist" style="position: absolute; top: 1rem; right: 1rem; border: none; background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(10px); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--accent-gold); transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 0; z-index: 10;">
              <i data-lucide="heart" fill="${heartFill}" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
          <div class="dest-card-content">
            <div class="dest-card-header">
              <h2 class="dest-card-title">${dest.name}</h2>
              <span class="dest-card-country">${countryUpper}</span>
            </div>
            <p class="dest-card-story">${dest.shortStory}</p>
            <div class="dest-card-meta">
              <div class="dest-meta-item">
                <i data-lucide="calendar" style="width: 14px; height: 14px; margin-right: 4px;"></i>
                <span>${dest.season}</span>
              </div>
              <div class="dest-meta-item">
                <i data-lucide="clock" style="width: 14px; height: 14px; margin-right: 4px;"></i>
                <span>${durationVal}</span>
              </div>
            </div>
            <button class="btn-dest-explore">
              <span>Explore Universe</span>
              <i data-lucide="compass" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach heart click handlers
    grid.querySelectorAll('.btn-wishlist-heart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const slug = btn.getAttribute('data-slug');
        const list = toggleWishlistDestination(slug);
        const isFav = list.includes(slug);
        btn.classList.toggle('active', isFav);
        const icon = btn.querySelector('i');
        if (icon) {
          if (isFav) {
            icon.setAttribute('fill', 'var(--accent-gold)');
          } else {
            icon.removeAttribute('fill');
          }
        }
      });
    });

    // GSAP Stagger Entrance Animation for destination cards
    const cards = grid.querySelectorAll(".dest-card");
    if (window.gsap && cards.length > 0) {
      gsap.killTweensOf(cards);
      gsap.fromTo(cards,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.08, ease: "power2.out" }
      );
    }
  }

  let isPackagesInitialized = false;
  let earlyBirdTimerInterval = null;

  function showPackagesView() {
    updateNavbarHighlight('packages');
    if (isHomeVisible) {
      savedScrollY = window.scrollY;
      isHomeVisible = false;
    }

    // Hide home view
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'none';

    // Hide detail view
    const destView = document.getElementById('destination-view');
    if (destView) {
      destView.style.display = 'none';
      const subnavWrapper = document.getElementById('detail-subnav-wrapper');
      if (subnavWrapper) subnavWrapper.style.display = 'none';
    }

    // Hide destinations view
    const destinationsView = document.getElementById('all-destinations-view');
    if (destinationsView) destinationsView.style.display = 'none';

    // Hide nest dashboard
    const nestDashboard = document.getElementById('nest-dashboard-view');
    if (nestDashboard) nestDashboard.style.display = 'none';

    // Show packages view
    const packagesView = document.getElementById('packages-view');
    if (packagesView) {
      packagesView.style.display = 'block';
      gsap.fromTo(packagesView, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }

    // Update active nav-link highlighting
    updateNavbarHighlight('packages');

    window.scrollTo(0, 0);

    // Initialize package interactions
    initPackagesPortal();
  }

  // --- LUXURY HOLIDAY PACKAGES DATABASE ---
  const packagesList = [
    {
      id: "pkg-1",
      title: "Breathtaking Pattaya & Bangkok",
      location: "Pattaya • Bangkok, Thailand",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "2N Pattaya • 2N Bangkok",
      category: "indian-group-tours",
      price: 32000,
      hotelStars: 3,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
      badge: "2 More Options Available",
      seasons: ["Spring", "Summer"],
      experiences: ["Culture", "Food", "Nature"],
      companions: ["Solo", "Friends", "Family"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 3,
      nestEligible: true,
      description: "Experience the best of Thailand with this curated getaway. Enjoy the vibrant beach life, night markets, and waterparks of Pattaya, followed by the rich culture, shopping, and temple tours of Bangkok. Includes comfortable accommodations and transfers.",
      features: [
        "3 Star Hotels",
        "Airport Pickup & Drop",
        "3 Activities",
        "Selected Meals"
      ],
      inclusions: [
        "FREE Columbia Pictures Aquaverse",
        "Tour Manager",
        "Inter City Transfer"
      ]
    },
    {
      id: "pkg-2",
      title: "Spectacular Krabi & Phuket Getaway",
      location: "Krabi • Phuket, Thailand",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "2N Krabi • 3N Phuket",
      category: "indian-group-tours",
      price: 48000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller",
      seasons: ["Summer", "Autumn"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Couple", "Friends", "Family"],
      stays: ["Resort", "Villa"],
      transports: ["Flight", "Cruise"],
      stars: 4,
      nestEligible: true,
      description: "Discover the jewel of the Andaman Sea. Relax on the pristine white-sand beaches of Krabi, explore the famous Phi Phi Islands, and experience the thrilling adventure parks of Phuket. Perfect for beach lovers, water sports enthusiasts, and families.",
      features: [
        "4 Star Hotels",
        "Airport Pickup & Drop",
        "5 Activities",
        "Selected Meals"
      ],
      inclusions: [
        "7 Islands Sunset Tour",
        "Phi Phi Island Tour",
        "Free Hanuman World Phuket"
      ]
    },
    {
      id: "pkg-3",
      title: "Santorini Bliss & Aegean Escape",
      location: "Santorini, Greece",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "4N Luxury Caldera View Villa",
      category: "premium",
      price: 89999,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      badge: "Bestseller",
      seasons: ["Spring", "Summer", "Autumn"],
      experiences: ["Luxury", "Culture", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Villa", "Boutique"],
      transports: ["Flight", "Cruise"],
      stars: 5,
      nestEligible: true,
      description: "Immerse yourself in romantic luxury. Stay in an exquisite cave suite with breathtaking caldera views, enjoy a private sunset cruise across the Aegean Sea, and indulge in wine tasting sessions at Santorini's premier cliffside vineyards.",
      features: [
        "5 Star Cave Suites",
        "Private Caldera Cruise",
        "Sunset Wine Tasting",
        "Breakfast Included"
      ],
      inclusions: [
        "VIP Airport Transfers",
        "Private Tour Guide",
        "All Entrance Fees Paid"
      ]
    },
    {
      id: "pkg-4",
      title: "Maldives Luxury Water Villa Escape",
      location: "Maldives",
      durationText: "3N/4D",
      durationDays: 4,
      subDetails: "3N Overwater Villa with Pool",
      category: "premium",
      price: 185000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
      badge: "Top Rated",
      seasons: ["Winter", "Spring"],
      experiences: ["Luxury", "Nature", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Overwater", "Resort"],
      transports: ["Flight", "Helicopter"],
      stars: 5,
      nestEligible: true,
      description: "The ultimate tropical paradise escape. Stay in an iconic overwater villa with direct lagoon access and a private infinity pool. Enjoy speed-boat transfers, snorkeling with exotic marine life, and a romantic sunset dolphin safari over the Indian Ocean.",
      features: [
        "5 Star Water Villa",
        "Speedboat Transfers",
        "Snorkeling Equipment",
        "All-Inclusive Meals"
      ],
      inclusions: [
        "Free Dolphin Safari",
        "Welcome Drinks on Arrival",
        "Spa Treatment Discount"
      ]
    },
    {
      id: "pkg-5",
      title: "Swiss Alpine Majesty Tour",
      location: "Interlaken • Lucerne, Switzerland",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "3N Interlaken • 2N Lucerne",
      category: "guided-tours",
      price: 249999,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
      badge: "Premium Guided",
      seasons: ["Winter", "Autumn"],
      experiences: ["Adventure", "Nature", "Festival"],
      companions: ["Family", "Senior", "Friends"],
      stays: ["Resort", "Cabin"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: false,
      description: "Embark on a scenic journey through the heart of the Swiss Alps. Ride the famous Panoramic Glacier Express, explore the charming mountain villages of Interlaken and Lucerne, and take a thrilling rail excursion to Jungfraujoch - the Top of Europe.",
      features: [
        "4 Star Alpine Resorts",
        "Jungfraujoch Excursion Rail",
        "Panoramic Glacier Express",
        "Guided Old Town Walks"
      ],
      inclusions: [
        "Swiss Travel Pass First Class",
        "Local Certified Guide",
        "Traditional Fondue Dinner"
      ]
    },
    {
      id: "pkg-6",
      title: "Bali Spiritual & Beach Sanctuary",
      location: "Ubud • Seminyak, Indonesia",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "2N Ubud Jungle • 2N Seminyak",
      category: "new-experiences",
      price: 69999,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      badge: "New Experience",
      seasons: ["Spring", "Summer", "Winter"],
      experiences: ["Culture", "Food", "Nature"],
      companions: ["Solo", "Friends", "Couple"],
      stays: ["Villa", "Boutique"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Find your inner peace and tropical bliss in Indonesia. Experience the lush jungles, sacred monkey forests, and floating breakfasts of Ubud, followed by the vibrant sunsets, beaches, and luxury boutique resorts of Seminyak.",
      features: [
        "4 Star Boutique Ryokan",
        "Ubud Sacred Monkey Forest",
        "Tanah Lot Sunset Temple",
        "Floating Pool Breakfast"
      ],
      inclusions: [
        "Private English Speaking Driver",
        "Sim Card & Unlimited Data",
        "Traditional Balinese Massage"
      ]
    },
    {
      id: "pkg-7",
      title: "Safari of the Serengeti",
      location: "Serengeti, Tanzania",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "6N Luxury Tented Safari Camp",
      category: "new-experiences",
      price: 155000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
      badge: "New Experience",
      seasons: ["Autumn", "Spring"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Friends", "Family", "Solo"],
      stays: ["Luxury Camp"],
      transports: ["Flight", "Private Jet"],
      stars: 5,
      nestEligible: true,
      description: "A once-in-a-lifetime wildlife adventure. Stay in a luxury tented camp in the heart of the Serengeti, enjoy daily professional-guided game drives to see the Big Five, and watch the legendary Great Migration across the golden plains.",
      features: [
        "5 Star Luxury Tented Camp",
        "Daily Game Drives",
        "Professional Spotter Guide",
        "All meals and drinks included"
      ],
      inclusions: [
        "VIP Airstrip Pickups",
        "Park Entrance Fees",
        "Hot Air Balloon Safari"
      ]
    },
    {
      id: "pkg-8",
      title: "Majestic Splendors of Kashmir",
      location: "Srinagar • Gulmarg • Pahalgam, India",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Houseboat & Scenic Valley Stay",
      category: "indian-group-tours",
      price: 38500,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1583143874828-de3d288be51a?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller",
      seasons: ["Spring", "Summer", "Winter"],
      experiences: ["Nature", "Culture", "Photography"],
      companions: ["Couple", "Family", "Friends"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Discover the paradise on Earth. Experience a romantic Shikara ride on Dal Lake, stay in a traditional luxury houseboat, explore the meadow of flowers in Gulmarg, and enjoy the scenic valleys of Pahalgam.",
      features: [
        "Houseboat & 4★ Hotel Stays",
        "Daily Buffet Breakfast & Dinner",
        "Shikara Ride & Gondola Passes",
        "Private AC Coach Transfers"
      ],
      inclusions: [
        "Srinagar Mughal Gardens Tour",
        "Gulmarg Gondola Ride Phase 1",
        "Pahalgam Betaab Valley Entry"
      ]
    },
    {
      id: "pkg-9",
      title: "Golden Triangle Cultural Odyssey",
      location: "Delhi • Agra • Jaipur, India",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Heritage Forts & Taj Mahal",
      category: "indian-group-tours",
      price: 29500,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
      badge: "Heritage Special",
      seasons: ["Autumn", "Winter", "Spring"],
      experiences: ["Culture", "Food", "Photography"],
      companions: ["Family", "Friends", "Senior"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Embark on India's most iconic heritage circuit. Witness the eternal beauty of the Taj Mahal in Agra, explore the royal forts of the Pink City Jaipur, and tour the historical landmarks of Delhi.",
      features: [
        "4 Star Heritage Hotels",
        "Airport Pickup & Drop",
        "Guided Monument Entry",
        "All Buffet Meals Included"
      ],
      inclusions: [
        "Taj Mahal Sunrise Tour",
        "Amber Fort Elephant Ride",
        "Delhi Old & New City Tour"
      ]
    },
    {
      id: "pkg-10",
      title: "Classic Italy: Rome, Florence & Venice",
      location: "Rome • Florence • Venice, Italy",
      durationText: "7N/8D",
      durationDays: 8,
      subDetails: "Historic Canals & Art Cities",
      category: "guided-tours",
      price: 175000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      badge: "Premium Guided",
      seasons: ["Spring", "Autumn", "Summer"],
      experiences: ["Culture", "Food", "Luxury"],
      companions: ["Couple", "Solo", "Friends"],
      stays: ["Boutique", "Resort"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Delve into history, art, and romance in Italy. Tour the majestic Colosseum in Rome, admire Renaissance masterpieces in Florence, and glide down the canals of Venice on a private gondola.",
      features: [
        "4 Star Historic Hotels",
        "Inter-City High Speed Rail",
        "Local Culinary Tours",
        "English Speaking Guides"
      ],
      inclusions: [
        "Colosseum & Vatican Fast Pass",
        "Uffizi Gallery Entry",
        "Private Venetian Gondola Ride"
      ]
    },
    {
      id: "pkg-11",
      title: "Imperial Japan: Tokyo, Kyoto & Osaka",
      location: "Tokyo • Kyoto • Osaka, Japan",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "Bullet Trains & Ancient Shrines",
      category: "guided-tours",
      price: 198000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      badge: "Top Rated",
      seasons: ["Spring", "Autumn", "Winter"],
      experiences: ["Culture", "Food", "Nature"],
      companions: ["Family", "Friends", "Couple"],
      stays: ["Boutique", "Resort"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Explore the land of the rising sun. Witness Tokyo's futuristic neon-lit streets, Kyoto's ancient shrines and cherry blossoms, and Osaka's vibrant street food scene and modern castles.",
      features: [
        "4 Star Modern Hotels",
        "Bullet Train (Shinkansen) Passes",
        "English Guided Tours",
        "Breakfast & Selected Dinners"
      ],
      inclusions: [
        "Tokyo TeamLab Planets Ticket",
        "Kyoto Fushimi Inari Shrine Tour",
        "Osaka Castle & Dotonbori Tour"
      ]
    },
    {
      id: "pkg-12",
      title: "French Riviera Luxury Escape",
      location: "Nice • Monaco • Cannes, France",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "VIP Monaco Yachts & Nice Shorelines",
      category: "premium",
      price: 265000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      badge: "Elite Collection",
      seasons: ["Summer", "Spring"],
      experiences: ["Luxury", "Food", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Resort", "Villa"],
      transports: ["Flight", "Private Jet"],
      stars: 5,
      nestEligible: true,
      description: "Bask in the golden sunshine of the Cote d'Azur. Stay in a luxury sea-view suite in Nice, tour the glamourous casinos of Monaco, and cruise along the Cannes shoreline in a private yacht.",
      features: [
        "5 Star Luxury Resorts",
        "Monaco & Cannes Yacht Tour",
        "Fine-Dining Wine Pairings",
        "VIP Chauffeured Services"
      ],
      inclusions: [
        "Monaco Casino Royal Pass",
        "Private Beach Club Access",
        "Nice Old Town Food Tour"
      ]
    },
    {
      id: "pkg-13",
      title: "Overwater Serenity in Bora Bora",
      location: "Bora Bora, French Polynesia",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "Private Yacht & Geothermal Pools",
      category: "premium",
      price: 345000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
      badge: "Island Paradise",
      seasons: ["Summer", "Autumn", "Winter"],
      experiences: ["Luxury", "Nature", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Overwater", "Resort"],
      transports: ["Flight", "Helicopter"],
      stars: 5,
      nestEligible: true,
      description: "Indulge in ultimate seclusion and romance. Stay in a premier overwater bungalow over a turquoise lagoon, snorkel with reef sharks and stingrays, and enjoy fine dining on a private beach.",
      features: [
        "5 Star Overwater Villas",
        "Seaplane Transfers",
        "Snorkeling Safaris",
        "All-Inclusive Premium Dining"
      ],
      inclusions: [
        "Sunset Lagoon Catamaran Cruise",
        "Shark & Ray Snorkel Safari",
        "Champagne Beach Dinner"
      ]
    },
    {
      id: "pkg-14",
      title: "Aurora Borealis Wilderness Lodge",
      location: "Tromsø, Norway",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "Glass Dome Arctic Cabins",
      category: "new-experiences",
      price: 155000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80",
      badge: "New Experience",
      seasons: ["Winter", "Autumn"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Friends", "Couple", "Solo"],
      stays: ["Cabin", "Boutique"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Witness the magical Northern Lights in the Arctic. Stay in a glass dome cabin under the starry sky, embark on a husky sledding safari, and enjoy traditional hot fireside Norwegian stews.",
      features: [
        "Glass Dome Arctic Lodge",
        "Chasing Northern Lights Tour",
        "Dog Sledding Excursion",
        "Fireside Thermal Apparel"
      ],
      inclusions: [
        "Professional Aurora Photography",
        "Husky Sledding Safari Tour",
        "Arctic Fjord Cruise Ticket"
      ]
    },
    {
      id: "pkg-15",
      title: "Wonders of Iceland Road Trip",
      location: "Reykjavik • Golden Circle, Iceland",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "4x4 Golden Circle Waterfall Safari",
      category: "new-experiences",
      price: 185000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
      badge: "Active Adventure",
      seasons: ["Summer", "Spring", "Autumn"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Friends", "Family", "Solo"],
      stays: ["Boutique", "Cabin"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Explore the land of fire and ice. Relax in the geothermal waters of the Blue Lagoon, walk behind roaring waterfalls, stand next to exploding geysers, and witness ancient glaciers.",
      features: [
        "Geothermal Boutique Lodges",
        "Blue Lagoon Comfort Entrance",
        "Super Jeep Glacier Excursion",
        "4x4 SUV Car Rental"
      ],
      inclusions: [
        "Blue Lagoon Mineral Mask Pass",
        "Golden Circle Guided Tour",
        "Glacier Cave Walk Ticket"
      ]
    },
    {
      id: "pkg-16",
      title: "Mystical Kingdom of Bhutan",
      location: "Thimphu • Paro, Bhutan",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Tiger's Nest & Paro Valley",
      category: "indian-group-tours",
      price: 42000,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      badge: "Himalayan Special",
      seasons: ["Spring", "Autumn"],
      experiences: ["Culture", "Nature", "Adventure"],
      companions: ["Couple", "Family", "Friends"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Explore the Land of the Thunder Dragon. Hike to the legendary Tiger's Nest Monastery perched on a cliffside, tour the massive fortresses (Dzongs) of Thimphu, and enjoy breathtaking Himalayan valley views.",
      features: [
        "3★ & 4★ Boutique Hotels",
        "Guided Tiger's Nest Hike",
        "All Buffet Meals Included",
        "Bhutan Visa & Permits Paid"
      ],
      inclusions: [
        "Tiger's Nest Entry & Guide",
        "Thimphu Dzong Tour",
        "Traditional Archery Experience"
      ]
    },
    {
      id: "pkg-17",
      title: "Royal Rajasthan & Desert Safari",
      location: "Jodhpur • Jaisalmer, India",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "Mehrangarh Fort & Desert Camp",
      category: "indian-group-tours",
      price: 31500,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=600&q=80",
      badge: "Desert Heritage",
      seasons: ["Winter", "Autumn"],
      experiences: ["Culture", "Adventure", "Food"],
      companions: ["Family", "Friends", "Couple"],
      stays: ["Luxury Camp", "Boutique"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Immerse yourself in the royalty of Rajasthan. Explore the Blue City of Jodhpur, walk through the sandstone Fort of Jaisalmer, and camp overnight in the golden Sam Sand Dunes with traditional folk music.",
      features: [
        "Luxury Desert Swiss Tents",
        "Mehrangarh Fort Guided Tour",
        "Camel Safari & Dune Bashing",
        "Traditional Rajasthani Dinners"
      ],
      inclusions: [
        "Dune Bashing & Camel Safari",
        "Desert Camp Folk Dance Night",
        "Jodhpur Heritage Fort Entry"
      ]
    },
    {
      id: "pkg-18",
      title: "Scenic Kerala Backwaters & Hills",
      location: "Munnar • Alleppey, India",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Private Backwater Houseboat stay",
      category: "indian-group-tours",
      price: 35000,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller",
      seasons: ["Winter", "Autumn", "Summer"],
      experiences: ["Nature", "Food", "Photography"],
      companions: ["Family", "Couple", "Senior"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Escape to God's Own Country. Wander through the lush tea gardens of Munnar, stay in a private luxury houseboat in Alleppey, and cruise along the tranquil palm-fringed backwaters.",
      features: [
        "Houseboat & 4★ Resorts",
        "Munnar Tea Garden Tours",
        "Backwater Houseboat Cruise",
        "Daily Breakfast & Dinner"
      ],
      inclusions: [
        "Alleppey Houseboat Stay",
        "Munnar Tea Museum Entry",
        "Cochin Airport Transfers"
      ]
    },
    {
      id: "pkg-19",
      title: "Majestic Ladakh Adventure",
      location: "Leh • Nubra • Pangong Lake, India",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "Double-Humped Camels & Passes",
      category: "indian-group-tours",
      price: 49500,
      hotelStars: 4,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      badge: "Adventure Special",
      seasons: ["Summer", "Spring"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Friends", "Solo", "Couple"],
      stays: ["Cabin", "Luxury Camp"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Journey through the land of high passes. Drive across the Khardung La pass (highest motorable road), ride double-humped camels in Nubra Valley, and witness the changing colors of Pangong Lake.",
      features: [
        "Cottage & Deluxe Camp Stays",
        "Inner Line Permits Included",
        "Khardung La Mountain Drive",
        "Oxygen Support in Vehicles"
      ],
      inclusions: [
        "Pangong Lake Camping",
        "Nubra Valley Camel Ride",
        "Leh Palace Entry Tickets"
      ]
    },
    {
      id: "pkg-20",
      title: "Enchanting South Lake & Tea Estates",
      location: "Ooty • Kodaikanal, India",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "Heritage Toy Train & Pine Forests",
      category: "indian-group-tours",
      price: 26000,
      hotelStars: 3,
      hasFlight: false,
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
      badge: "Hill Station Special",
      seasons: ["Summer", "Winter", "Spring"],
      experiences: ["Nature", "Photography"],
      companions: ["Family", "Senior", "Couple"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 3,
      nestEligible: true,
      description: "Discover the twin hill stations of South India. Enjoy boating on Ooty Lake, walk through pine forests in Kodaikanal, and take a heritage toy train ride through the scenic Nilgiri mountain valleys.",
      features: [
        "Heritage 3★ & 4★ Hotels",
        "Ooty Toy Train Ride Ticket",
        "Scenic Lake Boating Passes",
        "All Transfers by Private Car"
      ],
      inclusions: [
        "Nilgiri Toy Train Ticket",
        "Ooty Botanical Garden Entry",
        "Kodaikanal Lake Boating"
      ]
    },
    {
      id: "pkg-21",
      title: "Historic Greece & Island Hoping",
      location: "Athens • Mykonos, Greece",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "White-washed Windmills & Acropolis",
      category: "guided-tours",
      price: 155000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      badge: "Cultural Treasures",
      seasons: ["Spring", "Summer", "Autumn"],
      experiences: ["Culture", "Food", "Photography"],
      companions: ["Couple", "Friends", "Solo"],
      stays: ["Boutique", "Resort"],
      transports: ["Flight", "Cruise"],
      stars: 4,
      nestEligible: true,
      description: "Journey back to antiquity. Explore the ancient Acropolis in Athens with a certified archaeologist, then escape to the cosmopolitan beaches, white-washed windmills, and vibrant nightlife of Mykonos.",
      features: [
        "4★ Historic City Hotels",
        "Archaeologist-Led Tours",
        "Aegean High-Speed Ferry Tickets",
        "Daily Buffet Breakfasts"
      ],
      inclusions: [
        "Athens Acropolis Skip-the-Line",
        "Mykonos Sunset Windmill Tour",
        "Fast-Ferry Sea Transfers"
      ]
    },
    {
      id: "pkg-22",
      title: "Spanish Fiesta: Madrid & Barcelona",
      location: "Madrid • Barcelona, Spain",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "AVE Bullet Trains & Sagrada Familia",
      category: "guided-tours",
      price: 165000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&w=600&q=80",
      badge: "Premium Guided",
      seasons: ["Spring", "Autumn", "Summer"],
      experiences: ["Culture", "Food", "Festival"],
      companions: ["Couple", "Friends", "Family"],
      stays: ["Boutique", "Resort"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Experience the passion of Spain. Admire the Royal Palace in Madrid, travel via high-speed train to Barcelona, and marvel at Antoni Gaudi's breathtaking Sagrada Familia cathedral.",
      features: [
        "4★ Premium Central Hotels",
        "AVE High-Speed Train Tickets",
        "Flamenco Dinner Show Entry",
        "Guided Gaudi Architecture Tour"
      ],
      inclusions: [
        "Sagrada Familia Guided Entry",
        "Royal Palace Madrid Fast Pass",
        "VIP Flamenco Show Ticket"
      ]
    },
    {
      id: "pkg-23",
      title: "Imperial Central Europe Capitals",
      location: "Prague • Vienna • Budapest",
      durationText: "7N/8D",
      durationDays: 8,
      subDetails: "Danube Sunset Yacht & Classical Concert",
      category: "guided-tours",
      price: 185000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=600&q=80",
      badge: "Top Rated",
      seasons: ["Autumn", "Winter", "Spring"],
      experiences: ["Culture", "Luxury", "Festival"],
      companions: ["Couple", "Family", "Senior"],
      stays: ["Boutique", "Resort"],
      transports: ["Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Journey through Europe's imperial past. Discover Prague's fairytale castles, travel to Vienna's grand palaces for a classical concert, and end with a sunset cruise on the Danube in Budapest.",
      features: [
        "4★ Luxury City Hotels",
        "Danube Sunset Sightseeing Cruise",
        "Vienna Palace Concert Ticket",
        "Scenic Private Coach Transfers"
      ],
      inclusions: [
        "Prague Castle Guided Tour",
        "Schoenbrunn Palace Tour Pass",
        "Danube Cruise & Champagne"
      ]
    },
    {
      id: "pkg-24",
      title: "Scenic Landscapes of New Zealand",
      location: "Queenstown • Milford Sound, NZ",
      durationText: "7N/8D",
      durationDays: 8,
      subDetails: "Hobbiton Movies & Alpine Cableways",
      category: "guided-tours",
      price: 265000,
      hotelStars: 4,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
      badge: "Spectacular Nature",
      seasons: ["Spring", "Summer", "Autumn"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Couple", "Solo", "Friends"],
      stays: ["Resort", "Cabin"],
      transports: ["Flight", "Road Trip"],
      stars: 4,
      nestEligible: true,
      description: "Traverse the adventure capital of the world. Experience a cruise in the breathtaking Milford Sound, explore the movie magic of Hobbiton, and enjoy alpine thrills in Queenstown.",
      features: [
        "Premium 4★ Wilderness Lodges",
        "Milford Sound Fjord Cruise",
        "Hobbiton Movie Set Tickets",
        "Alpine Cable Car Ride Passes"
      ],
      inclusions: [
        "Milford Sound Cruise & Lunch",
        "Hobbiton Guided Entry Pass",
        "Queenstown Gondola Ticket"
      ]
    },
    {
      id: "pkg-25",
      title: "Classic Wonders of Egypt",
      location: "Cairo • Luxor • Aswan, Egypt",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "Giza Pyramids & Nile Luxury Cruises",
      category: "guided-tours",
      price: 145000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      badge: "Bucket List Special",
      seasons: ["Winter", "Autumn", "Spring"],
      experiences: ["Culture", "Photography"],
      companions: ["Family", "Couple", "Friends"],
      stays: ["Resort", "Boutique"],
      transports: ["Flight", "Cruise"],
      stars: 5,
      nestEligible: true,
      description: "Unlock the secrets of the Pharaohs. Stand at the foot of the Great Pyramids of Giza, cruise down the Nile on a luxury ship, and explore the tombs in the Valley of the Kings.",
      features: [
        "5★ Nile Cruise & Cairo Hotels",
        "Private Egyptologist Tour Guide",
        "All Monument Entrance Tickets",
        "Domestic Flights Cairo-Aswan"
      ],
      inclusions: [
        "Great Pyramids Guided Tour",
        "Valley of the Kings Access",
        "Luxury 3-Night Nile Cruise"
      ]
    },
    {
      id: "pkg-26",
      title: "Amalfi Coast Cliffside Luxury",
      location: "Positano • Amalfi, Italy",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Capri Grottoes & Mercedes VIP Tours",
      category: "premium",
      price: 295000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80",
      badge: "Elite Collection",
      seasons: ["Summer", "Spring"],
      experiences: ["Luxury", "Food", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Resort", "Villa"],
      transports: ["Flight", "Cruise"],
      stars: 5,
      nestEligible: true,
      description: "Live the high life on the Amalfi Coast. Stay in a five-star hotel clinging to cliffs overlooking the Tyrrhenian Sea, and cruise to Capri on a private wooden speedboat.",
      features: [
        "5★ Sea-View Luxury Suites",
        "Private Capri Speedboat Tour",
        "Michelin-Starred Dining Credit",
        "Private Mercedes Transfers"
      ],
      inclusions: [
        "Private Speedboat Capri Cruise",
        "Capri Blue Grotto Entrance",
        "Michelin Dinner Booking"
      ]
    },
    {
      id: "pkg-27",
      title: "Private Island Escape in Seychelles",
      location: "Mahe • Praslin, Seychelles",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Granite Pools & Giant Tortoise Safaris",
      category: "premium",
      price: 310000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=600&q=80",
      badge: "Island Sanctuary",
      seasons: ["Spring", "Autumn", "Summer"],
      experiences: ["Luxury", "Nature", "Photography"],
      companions: ["Couple", "Solo"],
      stays: ["Villa", "Resort"],
      transports: ["Flight", "Helicopter"],
      stars: 5,
      nestEligible: true,
      description: "Unwind on the world's most beautiful beaches. Stay in a luxury pool villa surrounded by giant granite boulders, explore coconut plantations, and feed giant tortoises.",
      features: [
        "5★ Luxury Pool Villas",
        "Private Helicopter Transfer",
        "Romantic Candlelit Dinners",
        "Giant Tortoise Safari Guide"
      ],
      inclusions: [
        "Helicopter Sea Transfers",
        "Praslin Vallee de Mai Guided",
        "Candlelit Beach Dining"
      ]
    },
    {
      id: "pkg-28",
      title: "Kyoto Private Ryokan Heritage",
      location: "Kyoto, Japan",
      durationText: "4N/5D",
      durationDays: 5,
      subDetails: "Gion Teas & Private Onsen Springs",
      category: "premium",
      price: 280000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      badge: "Historic Luxury",
      seasons: ["Spring", "Autumn"],
      experiences: ["Luxury", "Culture", "Food"],
      companions: ["Couple", "Solo"],
      stays: ["Boutique", "Resort"],
      transports: ["Flight", "Road Trip"],
      stars: 5,
      nestEligible: true,
      description: "Step back in time to imperial Japan. Indulge in luxury ryokan living with private natural hot spring baths (Onsen), and enjoy multi-course Kaiseki dinners in historic Gion.",
      features: [
        "Traditional Luxury Ryokan",
        "Private In-Room Onsen",
        "Geisha Tea Ceremony Access",
        "Multi-Course Kaiseki Dinners"
      ],
      inclusions: [
        "Private Gion Geisha Tea Ceremony",
        "Kaiseki Tasting Experience",
        "VIP Temple Sanctuary Access"
      ]
    },
    {
      id: "pkg-29",
      title: "Galapagos Islands Expedition Cruise",
      location: "Galapagos Islands, Ecuador",
      durationText: "5N/6D",
      durationDays: 6,
      subDetails: "Volcanic Reefs & Explorer Catamarans",
      category: "new-experiences",
      price: 380000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=600&q=80",
      badge: "New Experience",
      seasons: ["Winter", "Spring", "Summer"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Solo", "Friends", "Couple"],
      stays: ["Resort"],
      transports: ["Flight", "Cruise"],
      stars: 5,
      nestEligible: true,
      description: "Set sail on an eco-adventure like no other. Cruise the pristine Galapagos Islands on a luxury explorer catamaran, snorkel with sea lions, and witness unique volcanic wildlife.",
      features: [
        "Luxury Catamaran Stateroom",
        "Certified Naturalist Guides",
        "Daily Shore & Snorkel Safaris",
        "All Gourmet Meals Onboard"
      ],
      inclusions: [
        "Eco-Cruise Catamaran Ticket",
        "Galapagos National Park Fees",
        "Snorkeling & Wetsuit Gear"
      ]
    },
    {
      id: "pkg-30",
      title: "Patagonia Glaciers Wilderness Trek",
      location: "Torres del Paine, Chile",
      durationText: "6N/7D",
      durationDays: 7,
      subDetails: "Grey Glaciers & Geodesic Eco-Domes",
      category: "new-experiences",
      price: 295000,
      hotelStars: 5,
      hasFlight: true,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
      badge: "Active Adventure",
      seasons: ["Summer", "Spring", "Autumn"],
      experiences: ["Adventure", "Nature", "Photography"],
      companions: ["Solo", "Friends", "Couple"],
      stays: ["Cabin", "Luxury Camp"],
      transports: ["Road Trip"],
      stars: 5,
      nestEligible: true,
      description: "Trek at the edge of the world. Stay in luxury geodesic eco-domes facing the granite towers of Patagonia, hike next to massive blue glaciers, and discover pristine wilderness valleys.",
      features: [
        "Geodesic Eco-Dome Stays",
        "Professional Trekking Guides",
        "Glacier Grey Boat Excursion",
        "National Park Permits & Fees"
      ],
      inclusions: [
        "Patagonia Eco-Camp Stay Passes",
        "Glacier Boat Trek Ticket",
        "Torres del Paine Park Pass"
      ]
    }
  ];

  function initPackagesPortal() {
    if (isPackagesInitialized) {
      applyCurrentFilters();
      return;
    }

    // 1. Back button click listener
    const btnBack = document.getElementById("btn-packages-back");
    if (btnBack) {
      btnBack.addEventListener("click", () => {
        window.history.pushState(null, "", "/");
        checkRoute();
      });
    }

    // 2. Ticking Countdown Timer for Early Bird Offer
    let hours = 12;
    let minutes = 4;
    let seconds = 32;
    const cdHours = document.getElementById("cd-hours");
    const cdMins = document.getElementById("cd-mins");
    const cdSecs = document.getElementById("cd-secs");

    if (earlyBirdTimerInterval) clearInterval(earlyBirdTimerInterval);
    earlyBirdTimerInterval = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 24;
          }
        }
      }
      if (cdHours) cdHours.textContent = hours.toString().padStart(2, '0');
      if (cdMins) cdMins.textContent = minutes.toString().padStart(2, '0');
      if (cdSecs) cdSecs.textContent = seconds.toString().padStart(2, '0');
    }, 1000);

    // 3. Category Filter tab list clicks
    const catTabs = document.querySelectorAll(".cat-tab");
    catTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        catTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        applyCurrentFilters();
      });
    });

    // --- Category Scrollbar Slider Bindings ---
    const categoryCarousel = document.querySelector(".packages-categories-carousel");
    const categoryThumb = document.getElementById("pkg-cat-scroll-thumb");
    const btnScrollLeft = document.getElementById("btn-scroll-cat-left");
    const btnScrollRight = document.getElementById("btn-scroll-cat-right");

    if (categoryCarousel && categoryThumb) {
      categoryCarousel.addEventListener("scroll", () => {
        const maxScroll = categoryCarousel.scrollWidth - categoryCarousel.clientWidth;
        if (maxScroll > 0) {
          const scrollPct = (categoryCarousel.scrollLeft / maxScroll) * 100;
          const thumbPct = Math.min(Math.max(scrollPct, 0), 100);
          categoryThumb.style.left = `calc(${thumbPct}% - 6px)`;
        }
      });
      if (btnScrollLeft) {
        btnScrollLeft.addEventListener("click", () => {
          categoryCarousel.scrollBy({ left: -200, behavior: "smooth" });
        });
      }
      if (btnScrollRight) {
        btnScrollRight.addEventListener("click", () => {
          categoryCarousel.scrollBy({ left: 200, behavior: "smooth" });
        });
      }
    }

    // 4. Budget range slider filter update
    const budgetSlider = document.getElementById("pkg-filter-budget");
    const budgetDisplay = document.getElementById("pkg-filter-budget-display");
    if (budgetSlider) {
      budgetSlider.addEventListener("input", () => {
        const val = parseInt(budgetSlider.value);
        if (budgetDisplay) {
          budgetDisplay.textContent = val >= 300000 ? "₹3,00,000+" : `₹${val.toLocaleString("en-IN")}`;
        }
        applyCurrentFilters();
      });
    }

    // 5. Dynamic Concierge Filter Pills clicks
    const filterPills = document.querySelectorAll(".filter-pill-btn");
    filterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const type = pill.getAttribute("data-filter-type");
        const val = pill.getAttribute("data-val");

        if (val === "all") {
          // If "Any" is selected, clear other options in this group
          document.querySelectorAll(`.filter-pill-btn[data-filter-type="${type}"]`).forEach(btn => {
            if (btn.getAttribute("data-val") === "all") btn.classList.add("active");
            else btn.classList.remove("active");
          });
        } else {
          // Specific option clicked
          if (type === "luxury-stars" || type === "season") {
            // Single select for stars & seasons to keep it clean (concierge choice)
            document.querySelectorAll(`.filter-pill-btn[data-filter-type="${type}"]`).forEach(btn => btn.classList.remove("active"));
            pill.classList.add("active");
          } else {
            // Multi-select for experience, companion, stay, transport
            pill.classList.toggle("active");

            // Turn off "all" button
            const allBtn = document.querySelector(`.filter-pill-btn[data-filter-type="${type}"][data-val="all"]`);
            if (allBtn) allBtn.classList.remove("active");

            // If no pills are active, select "all" again
            const activeCount = document.querySelectorAll(`.filter-pill-btn[data-filter-type="${type}"].active`).length;
            if (activeCount === 0 && allBtn) {
              allBtn.classList.add("active");
            }
          }
        }
        applyCurrentFilters();
      });
    });

    // 6. Nest Balance Toggle Switch
    const nestToggle = document.getElementById("pkg-filter-nest-toggle");
    if (nestToggle) {
      nestToggle.addEventListener("change", () => {
        applyCurrentFilters();
      });
    }

    // 7. Sort By Select list selection
    const sortSelect = document.getElementById("pkg-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        applyCurrentFilters();
      });
    }

    // 8. Reset Filters Button
    const resetFiltersBtn = document.getElementById("btn-pkg-filter-reset");
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        if (budgetSlider) {
          budgetSlider.value = 300000;
          if (budgetDisplay) budgetDisplay.textContent = "₹3,00,000+";
        }
        if (nestToggle) nestToggle.checked = false;
        if (sortSelect) sortSelect.value = "popularity";

        // Reset categories
        catTabs.forEach((b, i) => i === 0 ? b.classList.add("active") : b.classList.remove("active"));

        // Reset all filter pills to active "all"
        const filterGroups = ["season", "experience", "companion", "stay", "transport", "luxury-stars"];
        filterGroups.forEach(type => {
          document.querySelectorAll(`.filter-pill-btn[data-filter-type="${type}"]`).forEach(btn => {
            if (btn.getAttribute("data-val") === "all") btn.classList.add("active");
            else btn.classList.remove("active");
          });
        });

        // Reset search inputs
        const startingInput = document.getElementById("pkg-search-starting");
        const goingInput = document.getElementById("pkg-search-going");
        if (startingInput) startingInput.value = "";
        if (goingInput) goingInput.value = "";

        // Reset interactive dates & travellers pickers
        if (datesInput) datesInput.value = "Oct 12 - Oct 20";
        selectedStart = new Date(2026, 9, 12);
        selectedEnd = new Date(2026, 9, 20);

        if (guestsInput) guestsInput.value = "2 Travellers, 1 Room";
        countAdults = 2;
        countChildren = 0;
        countRooms = 1;
        if (lblAdults) lblAdults.textContent = 2;
        if (lblChildren) lblChildren.textContent = 0;
        if (lblRooms) lblRooms.textContent = 1;

        applyCurrentFilters();
        showToast("Concierge filters reset to default.", "info");
      });
    }

    // 9. Search Widget Explore button click
    const btnExploreSearch = document.getElementById("btn-pkg-search-explore");
    if (btnExploreSearch) {
      btnExploreSearch.addEventListener("click", () => {
        applyCurrentFilters();
        showToast("Filtering packages based on search inputs...", "info");
      });
    }

    const startingInput = document.getElementById("pkg-search-starting");
    const goingInput = document.getElementById("pkg-search-going");
    const suggestStarting = document.getElementById("pkg-suggest-starting");
    const suggestGoing = document.getElementById("pkg-suggest-going");

    // Predefined popular Indian departure cities
    const departureCities = [
      "New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
      "Hyderabad", "Srinagar", "Cochin", "Ahmedabad", "Pune", "Jaipur"
    ];

    if (startingInput && suggestStarting) {
      // Trigger suggestions on keyup/input
      startingInput.addEventListener("input", (e) => {
        const val = e.target.value.trim().toLowerCase();
        if (!val) {
          suggestStarting.style.display = "none";
          applyCurrentFilters();
          return;
        }

        const matches = departureCities.filter(city => city.toLowerCase().includes(val));
        if (matches.length === 0) {
          suggestStarting.style.display = "none";
          return;
        }

        suggestStarting.innerHTML = matches.map(city => `
          <div class="suggest-item" data-val="${city}">
            <i data-lucide="navigation" style="width: 13px; height: 13px; color: var(--accent-gold); transform: rotate(45deg);"></i>
            <span>${city}</span>
          </div>
        `).join("");

        suggestStarting.style.display = "block";
        if (window.lucide) window.lucide.createIcons();
        applyCurrentFilters();
      });

      // Handle item selection
      suggestStarting.addEventListener("click", (e) => {
        const item = e.target.closest(".suggest-item");
        if (item) {
          startingInput.value = item.getAttribute("data-val");
          suggestStarting.style.display = "none";
          applyCurrentFilters();
        }
      });
    }

    if (goingInput && suggestGoing) {
      goingInput.addEventListener("input", (e) => {
        const val = e.target.value.trim().toLowerCase();
        if (!val) {
          suggestGoing.style.display = "none";
          applyCurrentFilters();
          return;
        }

        // Gather unique search candidates from packagesList (locations and titles)
        const candidates = [];
        packagesList.forEach(pkg => {
          if (pkg.location && !candidates.includes(pkg.location)) {
            candidates.push(pkg.location);
          }
          if (pkg.title && !candidates.includes(pkg.title)) {
            candidates.push(pkg.title);
          }
        });

        // Filter and limit to top 8 matches
        const matches = candidates.filter(item => item.toLowerCase().includes(val)).slice(0, 8);
        if (matches.length === 0) {
          suggestGoing.style.display = "none";
          return;
        }

        suggestGoing.innerHTML = matches.map(item => {
          const isLoc = packagesList.some(p => p.location === item);
          const icon = isLoc ? "map-pin" : "compass";
          return `
            <div class="suggest-item" data-val="${item}">
              <i data-lucide="${icon}" style="width: 13px; height: 13px; color: var(--accent-gold);"></i>
              <span>${item}</span>
            </div>
          `;
        }).join("");

        suggestGoing.style.display = "block";
        if (window.lucide) window.lucide.createIcons();
        applyCurrentFilters();
      });

      // Handle item selection
      suggestGoing.addEventListener("click", (e) => {
        const item = e.target.closest(".suggest-item");
        if (item) {
          goingInput.value = item.getAttribute("data-val");
          suggestGoing.style.display = "none";
          applyCurrentFilters();
        }
      });
    }

    // Auto-dismiss suggestion dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (suggestStarting && !startingInput.contains(e.target) && !suggestStarting.contains(e.target)) {
        suggestStarting.style.display = "none";
      }
      if (suggestGoing && !goingInput.contains(e.target) && !suggestGoing.contains(e.target)) {
        suggestGoing.style.display = "none";
      }
    });

    // Event delegation for booking / view details buttons on package cards
    const cardsGrid = document.getElementById("packages-cards-grid");
    if (cardsGrid) {
      cardsGrid.addEventListener("click", (e) => {
        const bookBtn = e.target.closest(".btn-pkg-book-pill");
        const viewBtn = e.target.closest(".btn-pkg-view-details");
        const wishlistBtn = e.target.closest(".pkg-wishlist-btn");

        if (bookBtn) {
          const card = bookBtn.closest(".package-card");
          const title = card.querySelector(".pkg-title")?.textContent || "Package";
          showToast(`Initiating booking for ${title} via Nest Balance!`, "success");
        }

        if (viewBtn) {
          const pkgId = viewBtn.getAttribute("data-pkg");
          const pkg = packagesList.find(p => p.id === pkgId);
          if (pkg) {
            const modal = document.getElementById("pkg-details-modal");
            if (modal) {
              const modalHero = document.getElementById("pkg-modal-hero");
              const modalBadge = document.getElementById("pkg-modal-badge");
              const modalDuration = document.getElementById("pkg-modal-duration");
              const modalTitle = document.getElementById("pkg-modal-title");
              const modalLocation = document.getElementById("pkg-modal-location");
              const modalStars = document.getElementById("pkg-modal-stars");
              const modalInclusions = document.getElementById("pkg-modal-inclusions");
              const modalTags = document.getElementById("pkg-modal-tags");
              const modalHotelInfo = document.getElementById("pkg-modal-hotel-info");
              const modalFlightInfo = document.getElementById("pkg-modal-flight-info");
              const modalPrice = document.getElementById("pkg-modal-price");

              // New Elements
              const modalDescription = document.getElementById("pkg-modal-description");
              const modalFullImage = document.getElementById("pkg-modal-full-image");
              const modalSeasons = document.getElementById("pkg-modal-seasons");
              const modalCompanions = document.getElementById("pkg-modal-companions");
              const modalStays = document.getElementById("pkg-modal-stays");
              const modalTransports = document.getElementById("pkg-modal-transports");

              if (modalHero) modalHero.style.backgroundImage = `linear-gradient(rgba(30, 26, 21, 0.4), rgba(30, 26, 21, 0.85)), url('${pkg.image}')`;
              if (modalBadge) {
                if (pkg.badge) {
                  modalBadge.textContent = pkg.badge;
                  modalBadge.style.display = "inline-block";
                } else {
                  modalBadge.style.display = "none";
                }
              }
              if (modalDuration) modalDuration.textContent = pkg.durationText;
              if (modalTitle) modalTitle.textContent = pkg.title;
              if (modalLocation) modalLocation.innerHTML = `<i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--accent-gold);"></i> ${pkg.location}`;
              if (modalStars) modalStars.textContent = "★".repeat(pkg.stars) + "☆".repeat(5 - pkg.stars);

              if (modalFullImage) modalFullImage.src = pkg.image;
              if (modalDescription) modalDescription.textContent = pkg.description || "";
              if (modalSeasons) modalSeasons.textContent = pkg.seasons ? pkg.seasons.join(", ") : "";
              if (modalCompanions) modalCompanions.textContent = pkg.companions ? pkg.companions.join(", ") : "";
              if (modalStays) modalStays.textContent = pkg.stays ? pkg.stays.join(", ") : "";
              if (modalTransports) modalTransports.textContent = pkg.transports ? pkg.transports.join(", ") : "";

              if (modalInclusions) {
                modalInclusions.innerHTML = pkg.inclusions.map(inc => `
                  <li style="font-family: var(--font-sans); font-size: 0.88rem; color: #10AC84; display: flex; align-items: center; gap: 0.4rem; font-weight: 600;">
                    <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: #10AC84;"></i> ${inc}
                  </li>
                `).join("");
              }

              if (modalTags) {
                modalTags.innerHTML = pkg.experiences.map(exp => `
                  <span style="background: rgba(169, 124, 55, 0.08); color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.03em;">${exp}</span>
                `).join("");
              }

              if (modalHotelInfo) {
                modalHotelInfo.textContent = pkg.features[0] + " & " + pkg.features[3];
              }
              if (modalFlightInfo) {
                modalFlightInfo.textContent = pkg.features[1] + " & " + pkg.features[2];
              }

              if (modalPrice) modalPrice.textContent = `₹${pkg.price.toLocaleString("en-IN")}`;

              modal.style.display = "flex";
              document.body.style.overflow = "hidden";
              if (window.lucide) window.lucide.createIcons();
            }
          }
        }

        if (wishlistBtn) {
          const card = wishlistBtn.closest(".package-card");
          const pkgId = wishlistBtn.getAttribute("data-pkg-id");
          if (pkgId) {
            const list = toggleWishlistPackage(pkgId);
            const isFav = list.includes(pkgId);
            wishlistBtn.classList.toggle("wishlist-active", isFav);
            const icon = wishlistBtn.querySelector('i');
            const title = card.querySelector(".pkg-title")?.textContent || "Package";
            if (isFav) {
              wishlistBtn.style.color = "#EB5757";
              if (icon) icon.setAttribute("fill", "#EB5757");
              showToast(`Added ${title} to your wishlist!`, "success");
            } else {
              wishlistBtn.style.color = "var(--text-muted)";
              if (icon) icon.removeAttribute("fill");
              showToast(`Removed ${title} from your wishlist.`, "info");
            }
          }
        }
      });
    }

    // Package Details Modal close & click outside & book handlers
    const modalCloseBtn = document.getElementById("btn-pkg-modal-close");
    const detailsModal = document.getElementById("pkg-details-modal");
    if (modalCloseBtn && detailsModal) {
      modalCloseBtn.addEventListener("click", () => {
        detailsModal.style.display = "none";
        document.body.style.overflow = "";
      });
      detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) {
          detailsModal.style.display = "none";
          document.body.style.overflow = "";
        }
      });
    }

    const modalBookBtn = document.getElementById("btn-pkg-modal-book");
    if (modalBookBtn && detailsModal) {
      modalBookBtn.addEventListener("click", () => {
        const title = document.getElementById("pkg-modal-title")?.textContent || "Package";
        showToast(`Booking for ${title} successfully initiated via Nest Balance!`, "success");
      });
    }

    // Special offer Honeymoon card button click trigger
    const honeymoonBtn = document.getElementById("btn-view-honeymoon-packages");
    if (honeymoonBtn) {
      honeymoonBtn.addEventListener("click", () => {
        const premiumTab = document.querySelector('.cat-tab[data-cat="premium"]');
        if (premiumTab) {
          premiumTab.click();
          const categoryCarousel = document.querySelector(".packages-categories-carousel");
          if (categoryCarousel) {
            categoryCarousel.scrollTo({ left: premiumTab.offsetLeft - 100, behavior: 'smooth' });
          }
        }
      });
    }

    // 10. Custom Calendar and Guest Picker Dropdowns Interactive Logic
    const datesInput = document.getElementById("pkg-search-dates");
    const calDropdown = document.getElementById("pkg-calendar-dropdown");
    const guestsInput = document.getElementById("pkg-search-guests");
    const guestsDropdown = document.getElementById("pkg-guests-dropdown");

    // Calendar state
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let calYear = 2026;
    let calMonth = 9; // October (0-indexed is 9)
    let selectedStart = new Date(2026, 9, 12);
    let selectedEnd = new Date(2026, 9, 20);

    const monthYearLabel = document.getElementById("calendar-month-year");
    const prevMonthBtn = document.getElementById("btn-prev-month");
    const nextMonthBtn = document.getElementById("btn-next-month");
    const daysGrid = document.getElementById("calendar-days-grid");

    function renderCalendar() {
      if (!daysGrid || !monthYearLabel) return;

      monthYearLabel.textContent = `${monthNames[calMonth]} ${calYear}`;

      const firstDayIndex = new Date(calYear, calMonth, 1).getDay();
      const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

      let html = "";

      // Empty cells before first day
      for (let i = 0; i < firstDayIndex; i++) {
        html += '<div class="calendar-day-btn empty"></div>';
      }

      // Days of the month
      for (let d = 1; d <= daysInMonth; d++) {
        const currentDate = new Date(calYear, calMonth, d);
        let classes = "calendar-day-btn";

        if (selectedStart && currentDate.getTime() === selectedStart.getTime()) {
          classes += " selected";
        } else if (selectedEnd && currentDate.getTime() === selectedEnd.getTime()) {
          classes += " selected";
        } else if (selectedStart && selectedEnd && currentDate > selectedStart && currentDate < selectedEnd) {
          classes += " in-range";
        }

        html += `<button type="button" class="${classes}" data-day="${d}">${d}</button>`;
      }

      daysGrid.innerHTML = html;
    }

    if (datesInput && calDropdown) {
      datesInput.addEventListener("click", (e) => {
        e.stopPropagation();
        calDropdown.style.display = calDropdown.style.display === "block" ? "none" : "block";
        if (guestsDropdown) guestsDropdown.style.display = "none";
        renderCalendar();
      });

      if (prevMonthBtn) {
        prevMonthBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          calMonth--;
          if (calMonth < 0) {
            calMonth = 11;
            calYear--;
          }
          renderCalendar();
        });
      }

      if (nextMonthBtn) {
        nextMonthBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          calMonth++;
          if (calMonth > 11) {
            calMonth = 0;
            calYear++;
          }
          renderCalendar();
        });
      }

      if (daysGrid) {
        daysGrid.addEventListener("click", (e) => {
          e.stopPropagation();
          const btn = e.target.closest(".calendar-day-btn:not(.empty)");
          if (!btn) return;

          const day = parseInt(btn.getAttribute("data-day"));
          const clickedDate = new Date(calYear, calMonth, day);

          if (!selectedStart || (selectedStart && selectedEnd)) {
            selectedStart = clickedDate;
            selectedEnd = null;
            renderCalendar();
          } else if (selectedStart && clickedDate > selectedStart) {
            selectedEnd = clickedDate;
            const startStr = `${monthNames[selectedStart.getMonth()]} ${selectedStart.getDate()}`;
            const endStr = `${monthNames[selectedEnd.getMonth()]} ${selectedEnd.getDate()}`;
            datesInput.value = `${startStr} - ${endStr}`;
            calDropdown.style.display = "none";
            applyCurrentFilters();
          } else {
            selectedStart = clickedDate;
            selectedEnd = null;
            renderCalendar();
          }
        });
      }
    }

    // Guest picker state
    let countAdults = 2;
    let countChildren = 0;
    let countRooms = 1;

    const lblAdults = document.getElementById("guest-count-adults");
    const lblChildren = document.getElementById("guest-count-children");
    const lblRooms = document.getElementById("guest-count-rooms");
    const btnGuestsApply = document.getElementById("btn-guests-apply");

    if (guestsInput && guestsDropdown) {
      guestsInput.addEventListener("click", (e) => {
        e.stopPropagation();
        guestsDropdown.style.display = guestsDropdown.style.display === "flex" ? "none" : "flex";
        if (calDropdown) calDropdown.style.display = "none";
      });

      document.querySelectorAll(".btn-guest-decrement").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const type = btn.getAttribute("data-type");
          if (type === "adults" && countAdults > 1) {
            countAdults--;
            if (lblAdults) lblAdults.textContent = countAdults;
          } else if (type === "children" && countChildren > 0) {
            countChildren--;
            if (lblChildren) lblChildren.textContent = countChildren;
          } else if (type === "rooms" && countRooms > 1) {
            countRooms--;
            if (lblRooms) lblRooms.textContent = countRooms;
          }
        });
      });

      document.querySelectorAll(".btn-guest-increment").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const type = btn.getAttribute("data-type");
          if (type === "adults" && countAdults < 10) {
            countAdults++;
            if (lblAdults) lblAdults.textContent = countAdults;
          } else if (type === "children" && countChildren < 10) {
            countChildren++;
            if (lblChildren) lblChildren.textContent = countChildren;
          } else if (type === "rooms" && countRooms < 5) {
            countRooms++;
            if (lblRooms) lblRooms.textContent = countRooms;
          }
        });
      });

      if (btnGuestsApply) {
        btnGuestsApply.addEventListener("click", (e) => {
          e.stopPropagation();
          const totalGuests = countAdults + countChildren;
          const guestStr = totalGuests === 1 ? "1 Traveller" : `${totalGuests} Travellers`;
          const roomStr = countRooms === 1 ? "1 Room" : `${countRooms} Rooms`;
          guestsInput.value = `${guestStr}, ${roomStr}`;
          guestsDropdown.style.display = "none";
          applyCurrentFilters();
        });
      }
    }

    // Close dropdowns on clicking outside
    document.addEventListener("click", (e) => {
      if (calDropdown && calDropdown.style.display === "block") {
        if (!calDropdown.contains(e.target) && e.target !== datesInput) {
          calDropdown.style.display = "none";
        }
      }
      if (guestsDropdown && guestsDropdown.style.display === "flex") {
        if (!guestsDropdown.contains(e.target) && e.target !== guestsInput) {
          guestsDropdown.style.display = "none";
        }
      }
    });

    // Initial load filtering
    applyCurrentFilters();
    isPackagesInitialized = true;
  }

  // --- Dynamic Concierge Filtering Engine ---
  function applyCurrentFilters() {
    const budgetSlider = document.getElementById("pkg-filter-budget");
    const budgetVal = budgetSlider ? parseInt(budgetSlider.value) : 300000;

    const activeCatTab = document.querySelector(".cat-tab.active");
    const currentCat = activeCatTab ? activeCatTab.getAttribute("data-cat") : "all";

    // Extract filter states
    const activeSeasons = Array.from(document.querySelectorAll('.filter-pill-btn[data-filter-type="season"].active'))
      .map(b => b.getAttribute("data-val"))
      .filter(v => v !== "all");

    const activeExps = Array.from(document.querySelectorAll('.filter-pill-btn[data-filter-type="experience"].active'))
      .map(b => b.getAttribute("data-val"))
      .filter(v => v !== "all");

    const activeCompanions = Array.from(document.querySelectorAll('.filter-pill-btn[data-filter-type="companion"].active'))
      .map(b => b.getAttribute("data-val"))
      .filter(v => v !== "all");

    const activeStays = Array.from(document.querySelectorAll('.filter-pill-btn[data-filter-type="stay"].active'))
      .map(b => b.getAttribute("data-val"))
      .filter(v => v !== "all");

    const activeTransports = Array.from(document.querySelectorAll('.filter-pill-btn[data-filter-type="transport"].active'))
      .map(b => b.getAttribute("data-val"))
      .filter(v => v !== "all");

    const activeStarsBtn = document.querySelector('.filter-pill-btn[data-filter-type="luxury-stars"].active');
    const starsVal = activeStarsBtn ? activeStarsBtn.getAttribute("data-val") : "all";

    const nestToggle = document.getElementById("pkg-filter-nest-toggle");
    const nestOnly = nestToggle ? nestToggle.checked : false;

    const sortSelect = document.getElementById("pkg-sort-select");
    const sortBy = sortSelect ? sortSelect.value : "popularity";

    const goingVal = document.getElementById("pkg-search-going")?.value.toLowerCase().trim() || "";

    // 1. Filter packages List
    let filtered = packagesList.filter(pkg => {
      // Going to search
      if (goingVal && !pkg.location.toLowerCase().includes(goingVal) && !pkg.title.toLowerCase().includes(goingVal)) {
        return false;
      }

      // Category
      if (currentCat !== "all" && pkg.category !== currentCat) {
        return false;
      }

      // Price Slider
      if (pkg.price > budgetVal) {
        return false;
      }

      // Seasons
      if (activeSeasons.length > 0) {
        const matchesSeason = pkg.seasons.some(s => activeSeasons.includes(s));
        if (!matchesSeason) return false;
      }

      // Experiences
      if (activeExps.length > 0) {
        const matchesExp = pkg.experiences.some(e => activeExps.includes(e));
        if (!matchesExp) return false;
      }

      // Companions
      if (activeCompanions.length > 0) {
        const matchesComp = pkg.companions.some(c => activeCompanions.includes(c));
        if (!matchesComp) return false;
      }

      // Stays
      if (activeStays.length > 0) {
        const matchesStay = pkg.stays.some(s => activeStays.includes(s));
        if (!matchesStay) return false;
      }

      // Transports
      if (activeTransports.length > 0) {
        const matchesTrans = pkg.transports.some(t => activeTransports.includes(t));
        if (!matchesTrans) return false;
      }

      // Luxury level
      if (starsVal !== "all") {
        if (pkg.stars !== parseInt(starsVal)) return false;
      }

      // Nest Balance Eligible
      if (nestOnly && !pkg.nestEligible) {
        return false;
      }

      return true;
    });

    // 2. Sort results
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "duration") {
      filtered.sort((a, b) => b.durationDays - a.durationDays);
    }

    renderPackages(filtered);
    updateFilterCounts(goingVal);
  }

  // --- Render packages to grid ---
  function renderPackages(list) {
    const grid = document.getElementById("packages-cards-grid");
    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: span 3; text-align: center; padding: 4rem; font-family: var(--font-sans); color: var(--text-muted); width: 100%;">
          <i data-lucide="compass" style="width: 32px; height: 32px; color: var(--accent-gold); margin-bottom: 0.5rem; opacity: 0.6;"></i>
          <p style="font-size: 0.85rem; font-weight: 700; margin: 0;">No matching packages found</p>
          <p style="font-size: 0.72rem; margin: 4px 0 0;">Try relaxing your filter criteria or search keyword.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = list.map(pkg => {
      const badgeHTML = pkg.badge ? `<span class="pkg-tag bestseller" style="position: absolute; top: 0.8rem; left: 0.8rem; background: ${pkg.badge.toLowerCase().includes('premium') || pkg.badge.toLowerCase().includes('seller') ? 'var(--accent-gold)' : '#10AC84'}; color: #FFF; font-family: var(--font-sans); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase;">${pkg.badge}</span>` : '';
      const featuresHTML = pkg.features.map(f => `<li style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.35rem;"><i data-lucide="info" style="width: 12px; height: 12px; color: var(--accent-gold); opacity: 0.8;"></i> ${f}</li>`).join("");
      const inclusionsHTML = pkg.inclusions.map(inc => `<li style="font-family: var(--font-sans); font-size: 0.8rem; color: #10AC84; display: flex; align-items: center; gap: 0.35rem; font-weight: 600;"><i data-lucide="check" style="width: 12px; height: 12px; color: #10AC84; stroke-width: 3;"></i> ${inc}</li>`).join("");

      const isFavPkg = getWishlistPackages().includes(pkg.id);
      const heartColor = isFavPkg ? "#EB5757" : "var(--text-muted)";
      const heartFill = isFavPkg ? "#EB5757" : "none";
      const activeClass = isFavPkg ? "wishlist-active" : "";

      return `
        <div class="package-card glass-panel" style="border-radius: 20px; overflow: hidden; background: #FFF; border: 1px solid rgba(30, 26, 21, 0.08); box-shadow: 0 4px 20px rgba(30, 26, 21, 0.03); transition: all 0.3s ease; display: flex; flex-direction: column; text-align: left; min-height: 560px;">
            <div class="pkg-card-image" style="position: relative; height: 165px; background-size: cover; background-position: center; background-image: url('${pkg.image}');">
                ${badgeHTML}
                <button class="pkg-wishlist-btn ${activeClass}" data-pkg-id="${pkg.id}" style="position: absolute; top: 0.8rem; right: 0.8rem; border: none; background: rgba(255,255,255,0.85); backdrop-filter: blur(5px); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${heartColor}; transition: all 0.3s ease; z-index: 5;"><i data-lucide="heart" fill="${heartFill}" style="width: 13px; height: 13px;"></i></button>
            </div>
            <div class="pkg-card-body" style="padding: 1.3rem 1.3rem 1.6rem 1.3rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="pkg-duration" style="font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.05em;">${pkg.durationText}</div>
                    <span style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); background: rgba(30, 26, 21, 0.04); padding: 2px 7px; border-radius: 4px; font-weight: 700;">${pkg.hotelStars}★ Luxury</span>
                </div>
                <h3 class="pkg-title" style="font-family: var(--font-serif); font-size: 1.32rem; font-weight: 700; color: var(--text-dark); margin: 0; line-height: 1.25; min-height: 3.2rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${pkg.title}</h3>
                <div class="pkg-location" style="font-family: var(--font-sans); font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;"><i data-lucide="map-pin" style="width: 12px; height: 12px; color: var(--accent-gold);"></i> ${pkg.location}</div>
                
                <ul style="list-style: none; padding: 0; margin: 0.4rem 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; border-top: 1px dashed rgba(30, 26, 21, 0.08); padding-top: 0.6rem;">
                    ${featuresHTML}
                </ul>
                
                <ul style="list-style: none; padding: 0; margin: 0.4rem 0 0; display: flex; flex-direction: column; gap: 0.35rem; border-top: 1px dashed rgba(30, 26, 21, 0.08); padding-top: 0.6rem; flex: 1;">
                    ${inclusionsHTML}
                </ul>

                <div class="pkg-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid rgba(30, 26, 21, 0.05); padding-top: 0.9rem; width: 100%;">
                    <div class="pkg-price-col" style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1;">
                        <span class="pkg-price-label" style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">From</span>
                        <span class="pkg-price-val" style="font-family: var(--font-sans); font-size: 1.55rem; font-weight: 800; color: var(--text-dark); margin: 3px 0;">₹${pkg.price.toLocaleString("en-IN")}</span>
                        <span class="pkg-price-unit" style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--text-muted);">/ person</span>
                    </div>
                    <button class="btn-pkg-book-pill" style="border: none; background: rgba(16, 172, 132, 0.08); color: #10AC84; font-family: var(--font-sans); font-size: 0.82rem; font-weight: 700; padding: 10px 20px; border-radius: 99px; cursor: pointer; transition: all 0.3s ease;">
                        Book @ ₹2,000
                    </button>
                </div>
                <button class="btn-pkg-view-details" data-pkg="${pkg.id}" style="border: none; background: rgba(30, 26, 21, 0.03); color: var(--text-dark); font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; padding: 12px 18px; border-radius: 8px; width: 100%; cursor: pointer; transition: all 0.3s ease; margin-top: 0.45rem;">View Details</button>
            </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Real-time Filter Option Counts calculator ---
  function updateFilterCounts(goingVal = "") {
    const searchFiltered = packagesList.filter(pkg => {
      return !goingVal || pkg.location.toLowerCase().includes(goingVal) || pkg.title.toLowerCase().includes(goingVal);
    });

    // Category Counts
    const cAll = searchFiltered.length;
    const cGroup = searchFiltered.filter(p => p.category === "indian-group-tours").length;
    const cGuided = searchFiltered.filter(p => p.category === "guided-tours").length;
    const cPremium = searchFiltered.filter(p => p.category === "premium").length;
    const cNew = searchFiltered.filter(p => p.category === "new-experiences").length;

    const elAll = document.getElementById("count-cat-all");
    const elGroup = document.getElementById("count-cat-group");
    const elGuided = document.getElementById("count-cat-guided");
    const elPremium = document.getElementById("count-cat-premium");
    const elNew = document.getElementById("count-cat-new");

    if (elAll) elAll.textContent = cAll;
    if (elGroup) elGroup.textContent = cGroup;
    if (elGuided) elGuided.textContent = cGuided;
    if (elPremium) elPremium.textContent = cPremium;
    if (elNew) elNew.textContent = cNew;
  }

  function renderTemplate(data) {
    const container = document.getElementById('detail-dynamic-content');
    if (!container) return;

    // Stats Grid
    let statsHTML = '';
    data.stats.forEach(st => {
      statsHTML += `
        <div class="detail-stat-card">
          <i data-lucide="${st.icon || 'star'}"></i>
          <span class="detail-stat-lbl">${st.label}</span>
          <span class="detail-stat-val">${st.value}</span>
        </div>
      `;
    });

    // Why Visit
    let whyHTML = '';
    data.whyVisit.forEach(wy => {
      whyHTML += `
        <div class="detail-why-card">
          <div class="detail-why-icon-box">
            <i data-lucide="${wy.icon || 'sparkles'}"></i>
          </div>
          <h3>${wy.title}</h3>
          <p>${wy.desc}</p>
        </div>
      `;
    });

    // Experiences
    let expHTML = '';
    data.experiences.forEach(ex => {
      expHTML += `
        <div class="detail-exp-card">
          <div class="detail-exp-card-img" style="background-image: url('${ex.image}');"></div>
          <div class="detail-exp-card-fade"></div>
          <div class="detail-exp-card-body">
            <div class="detail-exp-card-icon"><i data-lucide="${ex.icon || 'compass'}"></i></div>
            <h3 class="detail-exp-card-title">${ex.title}</h3>
            <p class="detail-exp-card-desc">${ex.desc}</p>
          </div>
        </div>
      `;
    });

    // Highlights
    let hlHTML = '';
    data.highlights.forEach(hl => {
      hlHTML += `
        <div class="detail-highlight-card">
          <div class="detail-hl-img-wrapper">
            <div class="detail-hl-img" style="background-image: url('${hl.image}');"></div>
          </div>
          <div class="detail-hl-content">
            <h3 class="detail-hl-title">${hl.title}</h3>
            <p class="detail-hl-desc">${hl.desc}</p>
          </div>
        </div>
      `;
    });

    // Curated Packages
    let pkgHTML = '';
    data.packages.forEach(pkg => {
      pkgHTML += `
        <div class="detail-package-card">
          <div class="detail-pkg-img-wrapper">
            <div class="detail-pkg-img" style="background-image: url('${pkg.image}');"></div>
            <div class="detail-pkg-badge">CURATED</div>
          </div>
          <div class="detail-pkg-content">
            <h3 class="detail-pkg-title">${pkg.name}</h3>
            <div class="detail-pkg-meta">
              <span class="detail-pkg-duration">${pkg.duration}</span>
              <span class="detail-pkg-price">${pkg.price}</span>
            </div>
            <button class="btn-detail-pkg-book">
              <span>Book Journey</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    });

    // Masonry Gallery
    let galHTML = '';
    data.gallery.forEach((img, idx) => {
      galHTML += `
        <div class="detail-gallery-item" data-index="${idx}">
          <img src="${img}" alt="${data.name} Visual Gallery ${idx + 1}" loading="lazy">
          <div class="detail-gallery-overlay"></div>
        </div>
      `;
    });

    // Day-by-Day timeline
    let tlHTML = '';
    data.timeline.forEach((item, idx) => {
      tlHTML += `
        <div class="detail-timeline-item" data-index="${idx}">
          <div class="detail-timeline-dot"></div>
          <div class="detail-timeline-day">${item.day}</div>
          <h3 class="detail-timeline-title">${item.title}</h3>
          <p class="detail-timeline-desc">${item.desc}</p>
        </div>
      `;
    });

    // Map Dots & Sidebar Points
    let mapDotsHTML = '';
    let mapListHTML = '';
    data.mapPoints.forEach((pt, idx) => {
      mapDotsHTML += `
        <div class="detail-map-dot" style="left: ${pt.x}; top: ${pt.y};" data-index="${idx}"></div>
        <div class="detail-map-dot-label" style="left: ${pt.x}; top: ${pt.y};">${pt.name}</div>
      `;
      mapListHTML += `
        <li class="detail-map-item">
          <span>${pt.name}</span>
          <span class="landmark-type">${pt.type}</span>
        </li>
      `;
    });

    // Reviews
    let revHTML = '';
    data.reviews.forEach(rv => {
      let stars = '';
      for (let s = 0; s < rv.rating; s++) stars += '★';
      revHTML += `
        <div class="detail-review-card">
          <div class="detail-review-header">
            <img class="detail-review-avatar" src="${rv.image}" alt="${rv.name}">
            <div class="detail-review-meta">
              <h4>${rv.name}</h4>
              <div class="detail-review-stars">${stars}</div>
            </div>
          </div>
          <p class="detail-review-text">"${rv.text}"</p>
        </div>
      `;
    });

    // Sibling Recommendations
    let relHTML = '';
    const dataStore = window.destinations || {};
    const allSlugs = Object.keys(dataStore).filter(k => {

      return k === dataStore[k].slug;
    });
    const siblings = allSlugs.filter(s => s !== data.slug).slice(0, 4);
    siblings.forEach(sib => {

      const sData = dataStore[sib];
      relHTML += `
        <div class="detail-rel-card" data-slug="${sData.slug}">
          <div class="detail-rel-img" style="background-image: url('${sData.heroImage}');"></div>
          <div class="detail-rel-overlay"></div>
          <div class="detail-rel-content">
            <span class="detail-rel-country">${sData.country}</span>
            <h4 class="detail-rel-name">${sData.name}</h4>
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <!-- 1. HERO SECTION -->
      <section class="detail-hero-section">
        <div class="detail-hero-container">
          <!-- Left Column: Editorial Typography -->
          <div class="detail-hero-left">
            <div class="detail-tagline overtitle-tag text-anim" id="detail-subtitle">${data.subtitle}</div>
            <h1 class="detail-title text-anim" id="detail-title">${data.name}</h1>
            <div class="detail-country-badge text-anim" id="detail-country">${data.country}</div>
            <p class="detail-short-story text-anim" id="detail-short-story">
              ${data.shortStory}
            </p>
            <button class="btn-detail-explore-cta magnetic-btn text-anim" id="btn-detail-explore-cta">
              <span>Explore Journey</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
          <!-- Right Column: Immersive Hero Artwork -->
          <div class="detail-hero-right">
            <div class="detail-hero-image-wrapper">
              <div class="detail-hero-image" id="detail-hero-image" style="background-image: url('${data.heroImage}');"></div>
              <div class="detail-hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. INFORMATION CARDS -->
      <section id="detail-overview" class="detail-stats-section container">
        <h2 class="detail-section-title-sub">Essential Indicators</h2>
        <div class="detail-stats-grid" id="detail-stats-grid">
           ${statsHTML}
        </div>
      </section>

      <!-- 3. DESTINATION STORY -->
      <section class="detail-story-section container">
        <div class="detail-story-grid">
          <div class="detail-story-left-col">
            <span class="overtitle-tag">The Narrative</span>
            <h2 class="detail-story-headline">A Tapestry of History & Soul</h2>
            <div class="detail-story-quote-box">
              <p class="detail-story-quote" id="detail-quote">"${data.quote}"</p>
              <span class="detail-story-quote-author" id="detail-quote-author">— ${data.quoteAuthor}</span>
            </div>
          </div>
          <div class="detail-story-right-col">
            <p class="detail-story-paragraph" id="detail-description">
              ${data.description}
            </p>
            <h3 class="detail-history-title">Cultural Heritage</h3>
            <p class="detail-history-text" id="detail-history">
              ${data.historyText}
            </p>
          </div>
        </div>
      </section>

      <!-- 4. WHY VISIT -->
      <section id="detail-why" class="detail-why-section container">
        <div class="detail-why-header text-center">
          <span class="overtitle-tag text-center">Why It's Special</span>
          <h2 class="detail-section-title text-center">Four Reasons to Journey</h2>
        </div>
        <div class="detail-why-grid" id="detail-why-grid">
           ${whyHTML}
        </div>
      </section>

      <!-- 5. EXPERIENCE CATEGORIES -->
      <section id="detail-experiences" class="detail-experiences-section container">
        <div class="detail-exp-header">
          <span class="overtitle-tag">Discover Through</span>
          <h2 class="detail-section-title">Unique Curated Experiences</h2>
        </div>
        <div class="detail-experiences-carousel" id="detail-experiences-carousel">
           ${expHTML}
        </div>
      </section>

      <!-- 6. HANDPICKED HIGHLIGHTS -->
      <section id="detail-highlights" class="detail-highlights-section container">
        <div class="detail-highlights-header">
          <span class="overtitle-tag">Handpicked Highlights</span>
          <h2 class="detail-section-title">Signature Landmarks & Escapes</h2>
        </div>
        <div class="detail-highlights-grid" id="detail-highlights-grid">
           ${hlHTML}
        </div>
      </section>

      <!-- 7. CURATED PACKAGES -->
      <section id="detail-packages" class="detail-packages-section container">
        <div class="detail-packages-header text-center">
          <span class="overtitle-tag">Curated Travel Packages</span>
          <h2 class="detail-section-title">Select Your Signature Itinerary</h2>
        </div>
        <div class="detail-packages-grid" id="detail-packages-grid">
           ${pkgHTML}
        </div>
      </section>

      <!-- 8. GALLERY -->
      <section class="detail-gallery-section container">
        <div class="detail-gallery-header">
          <span class="overtitle-tag">Sensory Visual Journey</span>
          <h2 class="detail-section-title">Captured Moments</h2>
        </div>
        <div class="detail-gallery-masonry" id="detail-gallery-masonry">
           ${galHTML}
        </div>
      </section>

      <!-- 9. TIMELINE -->
      <section id="detail-itinerary" class="detail-timeline-section container">
        <div class="detail-timeline-header text-center">
          <span class="overtitle-tag">Curated Itinerary</span>
          <h2 class="detail-section-title">Day-by-Day Journey</h2>
        </div>
        <div class="detail-timeline-wrapper">
          <div class="detail-timeline-line">
            <div class="detail-timeline-progress" id="detail-timeline-progress"></div>
          </div>
          <div class="detail-timeline-items" id="detail-timeline-items">
             ${tlHTML}
          </div>
        </div>
      </section>

      <!-- 10. MAP SECTION -->
      <section id="detail-map" class="detail-map-section container">
        <div class="detail-map-header text-center">
          <span class="overtitle-tag">Interactive Map Guide</span>
          <h2 class="detail-section-title">Signature Landmarks & Routes</h2>
        </div>
        <div class="detail-map-container">
          <div class="detail-map-graphic">
            <svg class="detail-map-svg" viewBox="0 0 800 450" id="detail-map-svg">
               <path d="M150,300 Q300,150 450,250 T700,200" fill="none" stroke="var(--detail-accent, var(--accent-gold))" stroke-width="2.5" stroke-dasharray="4,4" class="map-route-line"></path>
            </svg>
            <div id="detail-map-dots-container">
               ${mapDotsHTML}
            </div>
          </div>
          <!-- Sidebar for map points -->
          <div class="detail-map-sidebar">
            <h3>Key Destinations</h3>
            <ul class="detail-map-list" id="detail-map-list">
               ${mapListHTML}
            </ul>
          </div>
        </div>
      </section>

      <!-- 11. REVIEWS -->
      <section id="detail-reviews" class="detail-reviews-section container">
        <div class="detail-reviews-header text-center">
          <span class="overtitle-tag">Traveler Stories</span>
          <h2 class="detail-section-title">Unfiltered Impressions</h2>
        </div>
        <div class="detail-reviews-grid" id="detail-reviews-grid">
           ${revHTML}
        </div>
      </section>

      <!-- 12. CTA SECTION -->
      <section class="detail-cta-section" id="detail-cta-bg" style="background-image: url('${data.heroImage}');">
        <div class="detail-cta-overlay"></div>
        <div class="detail-cta-content container text-center">
          <h2 class="detail-cta-title" id="detail-cta-title">Ready to discover ${data.name}?</h2>
          <p class="detail-cta-subtext">Let us design a journey tailored entirely to your desires.</p>
          <button class="btn-detail-cta-book magnetic-btn">
            <span>Book Your Journey</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </section>

      <!-- 13. RELATED FOOTER -->
      <footer class="detail-related-footer container">
        <h3 class="detail-related-title">Explore Sibling Journeys</h3>
        <div class="detail-related-grid" id="detail-related-grid">
           ${relHTML}
        </div>
      </footer>
    `;

    // Re-create icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Dynamic header navigation label
    const subtitleNav = document.getElementById('detail-nav-subtitle');
    if (subtitleNav) {
      subtitleNav.textContent = `${data.name.toUpperCase()} — IMMERSIVE DETAIL`;
    }

    // Set up local Lightbox logic
    setupLightbox(data.gallery);

    // Set up local vertical timeline scroll progress
    setupTimelineProgress();
  }

  function setupLightbox(images) {
    const galleryItems = document.querySelectorAll('.detail-gallery-item');
    const lightbox = document.getElementById('detail-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const btnClose = document.getElementById('btn-lightbox-close');
    const btnPrev = document.getElementById('btn-lightbox-prev');
    const btnNext = document.getElementById('btn-lightbox-next');
    let currentIdx = 0;

    if (!lightbox || !lightboxImg) return;

    function openLightbox(idx) {
      currentIdx = idx;
      lightboxImg.src = images[currentIdx];
      lightbox.style.display = 'flex';
      setTimeout(() => lightbox.classList.add('active'), 10);
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      setTimeout(() => lightbox.style.display = 'none', 300);
    }

    function showNext() {
      currentIdx = (currentIdx + 1) % images.length;
      lightboxImg.src = images[currentIdx];
    }

    function showPrev() {
      currentIdx = (currentIdx - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIdx];
    }

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index);
        openLightbox(idx);
      });
    });

    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (btnNext) btnNext.addEventListener('click', showNext);
    if (btnPrev) btnPrev.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function setupTimelineProgress() {
    const progressLine = document.getElementById('detail-timeline-progress');
    const timelineItems = document.querySelectorAll('.detail-timeline-item');

    if (!progressLine || timelineItems.length === 0) return;

    function updateTimeline() {
      const triggerPoint = window.innerHeight * 0.75;
      let activeCount = 0;

      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          item.classList.add('active');
          activeCount++;
        } else {
          item.classList.remove('active');
        }
      });

      const total = timelineItems.length;
      const progressPercent = total > 1 ? ((activeCount - 1) / (total - 1)) * 100 : 0;
      progressLine.style.height = `${Math.max(0, Math.min(100, progressPercent))}%`;
    }

    window.addEventListener('scroll', updateTimeline);
    updateTimeline();
  }

  function animateDetailEntrance() {
    if (!window.gsap) return;

    const tl = gsap.timeline();

    // Reset styles prior to entrance triggers
    gsap.set('.text-anim', { opacity: 0, y: 30 });
    gsap.set('.detail-hero-image', { scale: 1.15 });

    tl.to('.detail-hero-image', {
      scale: 1.0,
      duration: 1.2,
      ease: 'power4.out'
    });

    tl.to('.text-anim', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out'
    }, '<0.2');

    // Stagger section reveals on scroll
    const sections = [
      '.detail-stats-section',
      '.detail-story-section',
      '.detail-why-section',
      '.detail-experiences-section',
      '.detail-highlights-section',
      '.detail-packages-section',
      '.detail-gallery-section',
      '.detail-timeline-section',
      '.detail-map-section',
      '.detail-reviews-section',
      '.detail-cta-section'
    ];

    sections.forEach(sec => {
      const el = document.querySelector(sec);
      if (!el) return;

      gsap.set(el, { opacity: 0, y: 50 });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  function updateSubnavActiveState() {
    if (isHomeVisible) return;

    const sections = [
      'detail-overview',
      'detail-experiences',
      'detail-highlights',
      'detail-packages',
      'detail-itinerary',
      'detail-map',
      'detail-reviews'
    ];

    const scrollPos = window.scrollY + 220;
    const subnavLinks = document.querySelectorAll('.subnav-link');

    let activeSectionId = null;

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          activeSectionId = sections[i];
          break;
        }
      }
    }

    if (activeSectionId) {
      subnavLinks.forEach(link => {
        if (link.getAttribute('href') === `#${activeSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateSubnavActiveState);

  // Event delegation for Nest Dashboard triggers and Wallet Dropdown
  document.addEventListener("click", (e) => {
    // 1. Redirect click from inside dropdown (Check this first to prevent being consumed by toggle listener)
    const redirectBtn = e.target.closest(".btn-wallet-redirect");
    if (redirectBtn) {
      e.preventDefault();
      e.stopPropagation();

      const dropdown = redirectBtn.closest(".wallet-dropdown");
      if (dropdown) dropdown.classList.remove("show");

      window.history.pushState(null, "", "/nest");
      checkRoute();
      return;
    }

    // 2. Check for dropdown toggle clicks (for main, detail, and festival headers)
    const walletToggle = e.target.closest(".main-header .wallet-pill, .detail-header .wallet-pill, .fv-wallet, .all-destinations-view .wallet-pill, .destinations-header .wallet-pill, .packages-header .wallet-pill");
    if (walletToggle) {
      e.preventDefault();
      e.stopPropagation();

      // If we clicked inside the dropdown itself but not on the button, do nothing (keep it open)
      if (e.target.closest(".wallet-dropdown")) {
        return;
      }

      let dropdown = walletToggle.querySelector(".wallet-dropdown");
      if (!dropdown) {
        dropdown = document.createElement("div");
        dropdown.className = "wallet-dropdown glass-panel";
        dropdown.innerHTML = `
          <div class="wallet-dropdown-info">
            <span class="wallet-dropdown-label">Nest Balance</span>
            <span class="wallet-dropdown-amount">₹${currentNestBalance.toLocaleString("en-IN")}</span>
          </div>
          <button class="btn-wallet-redirect">
            <span>View Dashboard</span>
            <i data-lucide="arrow-right" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;"></i>
          </button>
        `;
        walletToggle.appendChild(dropdown);
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }

      // Close other open dropdowns
      document.querySelectorAll(".wallet-dropdown.show").forEach(d => {
        if (d !== dropdown) d.classList.remove("show");
      });

      dropdown.classList.toggle("show");
      return;
    }

    // Close dropdown on outside click
    document.querySelectorAll(".wallet-dropdown.show").forEach(d => {
      d.classList.remove("show");
    });

    const gotoNestBtn = e.target.closest("#btn-goto-nest");
    if (gotoNestBtn) {
      e.preventDefault();
      window.history.pushState(null, "", "/nest");
      checkRoute();
      return;
    }

    const backDashboardBtn = e.target.closest("#btn-dashboard-back");
    if (backDashboardBtn) {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      checkRoute();
      return;
    }

    const backDestBtn = e.target.closest("#btn-destinations-back, #btn-wishlist-back");
    if (backDestBtn) {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      checkRoute();
      return;
    }

    const wishlistIcon = e.target.closest(".btn-wishlist-heart, .pkg-wishlist-btn");
    if (wishlistIcon) {
      return;
    }

    const exploreDestBtn = e.target.closest(".btn-dest-explore, .dest-card");
    if (exploreDestBtn) {
      e.preventDefault();
      const card = exploreDestBtn.closest(".dest-card");
      if (card) {
        const slug = card.getAttribute("data-slug");
        window.history.pushState(null, "", `/destination/${slug}`);
        checkRoute();
      }
      return;
    }

    const viewAllDestBtn = e.target.closest(".btn-trending-view-all");
    if (viewAllDestBtn) {
      e.preventDefault();
      window.history.pushState(null, "", "/destinations");
      checkRoute();
      return;
    }

    const mmOpt = e.target.closest(".mm-opt");
    if (mmOpt) {
      e.preventDefault();
      const parent = mmOpt.closest(".matchmaker-options");
      if (parent) {
        parent.querySelectorAll(".mm-opt").forEach(btn => btn.classList.remove("active"));
        mmOpt.classList.add("active");

        // Tactile elastic spring feedback click interaction
        if (window.gsap) {
          gsap.killTweensOf(mmOpt);
          gsap.fromTo(mmOpt,
            { scale: 0.92 },
            { scale: 1, duration: 0.45, ease: "elastic.out(1, 0.45)" }
          );
        }

        renderAllDestinations();
      }
      return;
    }

    const clearSearchBtn = e.target.closest("#btn-clear-search");
    if (clearSearchBtn) {
      e.preventDefault();
      const input = document.getElementById("destinations-search-input");
      if (input) {
        input.value = "";
        clearSearchBtn.style.display = "none";
        renderAllDestinations();
      }
      return;
    }
  });

  // Real-time search input handler
  document.addEventListener("input", (e) => {
    if (e.target.id === "destinations-search-input") {
      const clearBtn = document.getElementById("btn-clear-search");
      if (clearBtn) {
        clearBtn.style.display = e.target.value ? "flex" : "none";
      }
      renderAllDestinations();
    }
  });

  // ==========================================================================
  // REDESIGNED PREMIUM NEST DASHBOARD STATE & CORE LOGIC
  // ==========================================================================
  let currentNestBalance = 245000;
  let isAutoSaveActive = true;
  let boostSpeedMultiplier = 1;
  let dashboardSliderVal = 300;
  let dashboardSelectedMonths = 3;
  let isDashboardListenersInitialized = false;
  let trackedGoal = null;
  let selectedMilestoneIdx = 0;
  let isSimulating = false;
  let currentYieldPercent = 10;
  let simInterval = null;
  let backupNestBalance = 245000;
  let backupTransactions = [];
  let simDay = 0;

  let simulatedTransactions = [
    { type: 'boost', title: 'Initial Wallet Balance Transfer', date: 'March 15, 2026', amount: 218000 },
    { type: 'save', title: 'Auto-Save Deposit', date: 'April 28, 2026', amount: 9000 },
    { type: 'save', title: 'Auto-Save Deposit', date: 'May 28, 2026', amount: 9000 },
    { type: 'save', title: 'Auto-Save Deposit', date: 'June 28, 2026', amount: 9000 }
  ];

  const milestoneDestinations = [
    { name: "Weekend Stay in Alibaug", limit: 0, image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80", icon: "compass", desc: "Relax by the tranquil beaches and coconut groves just outside Mumbai.", vibe: "coastal" },
    { name: "Heritage Stay in Jaipur", limit: 15000, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80", icon: "hotel", desc: "Live like royalty in restored palace suites with grand courtyards and pools.", vibe: "heritage" },
    { name: "Eco-Resort in Bali", limit: 35000, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80", icon: "trees", desc: "Wake up overlooking cascading rice paddies and volcano ridges in a bamboo suite.", vibe: "beach" },
    { name: "Water Villa in Maldives", limit: 65000, image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80", icon: "ship", desc: "Step directly into crystal-clear turquoise lagoons from your private water bungalow.", vibe: "beach" },
    { name: "Ski Lodge in Switzerland", limit: 120000, image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80", icon: "snowflake", desc: "Soak in thermal pools with panoramic views of the legendary Matterhorn peaks.", vibe: "alpine" },
    { name: "Yacht Cruise in Greece", limit: 250000, image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80", icon: "palmtree", desc: "Sail between white-washed Cycladic islands under spectacular golden Aegean sunsets.", vibe: "coastal" }
  ];

  // Expose global synchronizer on window so other components can keep in sync
  window.updateNestBalanceGlobal = function (newBalance) {
    currentNestBalance = newBalance;
    updateGlobalWalletDisplays(newBalance);
    // Sync with festival page wallet if active
    const fvWallet = document.querySelector(".fv-wallet-amount");
    if (fvWallet) {
      fvWallet.textContent = `₹${newBalance.toLocaleString("en-IN")}`;
    }
  };

  // Sync wallet counters globally across all static pages
  function updateGlobalWalletDisplays(newBalance) {
    document.querySelectorAll(".wallet-amount").forEach(el => {
      el.textContent = `₹${newBalance.toLocaleString("en-IN")}`;
    });
    document.querySelectorAll(".wallet-dropdown-amount").forEach(el => {
      el.textContent = `₹${newBalance.toLocaleString("en-IN")}`;
    });
    const holdings = document.getElementById("dash-total-holdings");
    if (holdings) holdings.textContent = `₹${newBalance.toLocaleString("en-IN")}`;

    // Update live gold weight equivalency
    const goldVal = document.getElementById("dash-gold-weight-val");
    if (goldVal) {
      const grams = newBalance / 7500;
      goldVal.textContent = `~${grams.toFixed(2)}g of 24K Gold`;
    }
    const capsuleGold = document.getElementById("capsule-gold-val");
    if (capsuleGold) {
      const grams = newBalance / 7500;
      capsuleGold.textContent = `~${grams.toFixed(2)}g Gold`;
    }
  }

  // Smooth integer rolling animation
  function animateValue(obj, start, end, duration) {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const val = Math.floor(progress * (end - start) + start);
      obj.textContent = `₹${val.toLocaleString("en-IN")}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent = `₹${end.toLocaleString("en-IN")}`;
      }
    };
    window.requestAnimationFrame(step);
  }

  // Toast alert system
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast-notification ${type} glass-panel animate-zoom`;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      border-radius: 16px;
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 700;
      color: ${type === 'success' ? '#10AC84' : '#EB5757'};
      border: 1px solid ${type === 'success' ? 'rgba(16, 172, 132, 0.2)' : 'rgba(235, 87, 87, 0.2)'};
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    `;
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';
    toast.innerHTML = `<i data-lucide="${icon}" style="width:16px;height:16px;"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    gsap.fromTo(toast, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    setTimeout(() => {
      gsap.to(toast, { opacity: 0, y: -20, duration: 0.3, onComplete: () => toast.remove() });
    }, 3000);
  }

  // Confetti Particle Explosion
  let confettiAnimationId = null;
  function triggerConfetti() {
    window.triggerConfetti = triggerConfetti;
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#b98a45", "#e5c185", "#10AC84", "#2ed573", "#ff4757", "#2f3542"];
    const particles = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 + 2.5
      });
    }

    let frames = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += p.speedY;
        p.x += p.speedX;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      const finished = particles.every(p => p.y > canvas.height);
      if (!finished && frames < 200) {
        frames++;
        confettiAnimationId = requestAnimationFrame(draw);
      } else {
        canvas.style.display = "none";
        cancelAnimationFrame(confettiAnimationId);
      }
    }
    draw();
  }

  // Render Milestones map grid
  function getTimelineProgressPercent(balance) {
    const limits = [0, 15000, 35000, 65000, 120000, 250000];
    if (balance <= 0) return 0;
    if (balance >= 250000) return 100;

    let idx = 0;
    for (let i = 0; i < limits.length - 1; i++) {
      if (balance >= limits[i] && balance < limits[i + 1]) {
        idx = i;
        break;
      }
    }

    const intervalBase = idx * 20;
    const range = limits[idx + 1] - limits[idx];
    const offset = ((balance - limits[idx]) / range) * 20;
    return intervalBase + offset;
  }

  // Render Milestones map grid inside alternating timeline
  function renderMilestonesGrid() {
    const grid = document.getElementById("dash-milestones-grid");
    const spotlightCard = document.getElementById("milestone-spotlight-card");
    if (!grid) return;

    grid.innerHTML = "";
    let unlockedCount = 0;

    // Determine active progress bar targets
    const activeGoal = milestoneDestinations.filter(d => currentNestBalance >= d.limit).pop() || milestoneDestinations[0];
    const nextGoal = trackedGoal || milestoneDestinations.find(d => currentNestBalance < d.limit) || null;

    // Get current vibe filter setting
    const activeVibeBtn = document.querySelector(".vibe-filter-btn.active");
    const selectedVibe = activeVibeBtn ? activeVibeBtn.getAttribute("data-vibe") : "all";

    // Auto-select first matching milestone if current selection doesn't match selected vibe
    const currentSelectedMilestone = milestoneDestinations[selectedMilestoneIdx];
    if (selectedVibe !== "all" && currentSelectedMilestone.vibe !== selectedVibe) {
      const firstMatchingIdx = milestoneDestinations.findIndex(d => d.vibe === selectedVibe);
      if (firstMatchingIdx !== -1) {
        selectedMilestoneIdx = firstMatchingIdx;
      }
    }

    // Populate dropdown options list
    milestoneDestinations.forEach((dest, idx) => {
      const isUnlocked = currentNestBalance >= dest.limit;
      if (isUnlocked) unlockedCount++;

      // Create option element
      const option = document.createElement("div");
      option.className = `milestone-option-item ${idx === selectedMilestoneIdx ? 'selected' : ''}`;
      option.setAttribute("data-index", idx);

      // Filter option display based on vibe filter
      const matchesVibe = (selectedVibe === "all" || dest.vibe === selectedVibe);
      if (!matchesVibe) {
        option.style.display = "none";
      }

      let badgeHTML = "";
      let statusIconHTML = "";
      if (isUnlocked) {
        badgeHTML = `<span class="option-badge unlocked">Unlocked</span>`;
        statusIconHTML = `<div class="option-status-icon unlocked"><i data-lucide="check"></i></div>`;
      } else {
        const gap = dest.limit - currentNestBalance;
        badgeHTML = `<span class="option-badge locked">₹${gap.toLocaleString("en-IN")} remaining</span>`;
        statusIconHTML = `<div class="option-status-icon locked"><i data-lucide="lock"></i></div>`;
      }

      option.innerHTML = `
        <div class="option-left">
          <img class="option-thumb" src="${dest.image}" alt="${dest.name}">
          <div class="option-info">
            <span class="option-name">${dest.name}</span>
            <span class="option-goal">Goal: ₹${dest.limit.toLocaleString("en-IN")}+</span>
          </div>
        </div>
        <div class="option-right">
          ${badgeHTML}
          ${statusIconHTML}
        </div>
      `;

      // Set up click action to select this option
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedMilestoneIdx = idx;
        
        // Hide dropdown
        const optionsList = document.getElementById("milestone-select-options-list");
        const trigger = document.getElementById("milestone-select-trigger");
        if (optionsList) optionsList.classList.remove("show");
        if (trigger) trigger.classList.remove("active");

        // Re-render
        renderMilestonesGrid();
      });

      // Mouseenter and mouseleave to sync chart highlight
      option.addEventListener("mouseenter", () => {
        if (window.highlightChartMilestone) {
          window.highlightChartMilestone(dest.name, dest.limit);
        }
      });
      option.addEventListener("mouseleave", () => {
        if (window.clearChartMilestoneHighlight) {
          window.clearChartMilestoneHighlight();
        }
      });

      grid.appendChild(option);
    });

    // Update Dropdown Trigger Details
    const selectedDest = milestoneDestinations[selectedMilestoneIdx];
    const isSelectedUnlocked = currentNestBalance >= selectedDest.limit;
    
    const triggerTitle = document.getElementById("trigger-title");
    const triggerGoal = document.getElementById("trigger-goal");
    const triggerBadge = document.getElementById("trigger-status-badge");
    const triggerIconBox = document.getElementById("trigger-icon-box");

    if (triggerTitle) triggerTitle.textContent = selectedDest.name;
    if (triggerGoal) triggerGoal.textContent = `Goal: ₹${selectedDest.limit.toLocaleString("en-IN")}+`;
    if (triggerBadge) {
      if (isSelectedUnlocked) {
        triggerBadge.className = "trigger-status-badge badge-unlocked";
        triggerBadge.textContent = "Unlocked";
      } else {
        const gap = selectedDest.limit - currentNestBalance;
        triggerBadge.className = "trigger-status-badge badge-locked";
        triggerBadge.textContent = `₹${gap.toLocaleString("en-IN")} remaining`;
      }
    }
    if (triggerIconBox) {
      triggerIconBox.innerHTML = `<i data-lucide="${selectedDest.icon || 'compass'}"></i>`;
    }

    // Populate Spotlight Selected Card
    if (spotlightCard) {
      const gap = selectedDest.limit - currentNestBalance;
      const progressPercent = Math.min(100, Math.max(0, (currentNestBalance / (selectedDest.limit || 1)) * 100));
      const isTracked = trackedGoal && trackedGoal.name === selectedDest.name;

      let actionButtonHTML = "";
      if (isSelectedUnlocked) {
        actionButtonHTML = `
          <button class="btn-spotlight-action booking btn-proceed-booking">
            Proceed to Book Stay <i data-lucide="arrow-right"></i>
          </button>
        `;
      } else {
        if (isTracked) {
          actionButtonHTML = `
            <button class="btn-spotlight-action tracked" disabled>
              <i data-lucide="check-circle"></i> Tracking as Primary Target
            </button>
          `;
        } else {
          actionButtonHTML = `
            <button class="btn-spotlight-action track btn-track-milestone-goal">
              Track as Primary Goal <i data-lucide="target"></i>
            </button>
          `;
        }
      }

      spotlightCard.innerHTML = `
        <div class="spotlight-content-grid spotlight-animate">
          <!-- Left half: Image -->
          <div class="spotlight-image-panel spotlight-animate" style="background-image: url('${selectedDest.image}');">
            <span class="spotlight-image-badge">${isSelectedUnlocked ? 'Unlocked' : 'In Progress'}</span>
          </div>
          
          <!-- Right half: Info -->
          <div class="spotlight-info-panel spotlight-animate">
            <div class="spotlight-header">
              <span class="spotlight-vibe-tag">${selectedDest.vibe || 'travel'} vibe</span>
              <h3 class="spotlight-title">${selectedDest.name}</h3>
              <p class="spotlight-desc">${selectedDest.desc}</p>
            </div>
            
            <div class="spotlight-progress-section">
              <div class="progress-left">
                <div class="progress-label-row">
                  <span>Current: ₹${currentNestBalance.toLocaleString("en-IN")}</span>
                  <span>Goal: ₹${selectedDest.limit.toLocaleString("en-IN")}</span>
                </div>
                <div class="progress-track-bar">
                  <div class="progress-fill-bar" style="width: ${progressPercent}%"></div>
                </div>
              </div>
              
              <div class="progress-right-ring">
                <!-- Circular progress ring -->
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(169, 124, 55, 0.1)" stroke-width="4"/>
                  <circle class="progress-ring-circle-spot" cx="30" cy="30" r="25" fill="none" stroke="#A97C37" stroke-width="4"
                    stroke-dasharray="157" stroke-dashoffset="${157 - (progressPercent / 100) * 157}"
                    stroke-linecap="round" transform="rotate(-90 30 30)"/>
                </svg>
                <span class="progress-ring-text">${Math.floor(progressPercent)}%</span>
              </div>
            </div>
            
            <div class="spotlight-action-row">
              ${actionButtonHTML}
            </div>
          </div>
        </div>
      `;

      // Spotlight actions listeners
      const proceedBtn = spotlightCard.querySelector(".btn-proceed-booking");
      if (proceedBtn) {
        proceedBtn.addEventListener("click", () => {
          const slug = selectedDest.limit === 0 ? "amalfi" : (selectedDest.limit === 15000 ? "japan" : (selectedDest.limit === 35000 ? "bali" : (selectedDest.limit === 65000 ? "maldives" : (selectedDest.limit === 120000 ? "switzerland" : "santorini"))));
          window.history.pushState(null, "", `/destination/${slug}`);
          checkRoute();
        });
      }

      const trackBtn = spotlightCard.querySelector(".btn-track-milestone-goal");
      if (trackBtn) {
        trackBtn.addEventListener("click", () => {
          trackedGoal = selectedDest;
          showToast(`Now tracking ${selectedDest.name} as primary target!`, "success");
          renderMilestonesGrid();
        });
      }

      // Entrance Animations using GSAP
      if (window.gsap) {
        gsap.fromTo("#milestone-spotlight-card .spotlight-animate", 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
        );
        // Animate the fill bar
        const fillBar = spotlightCard.querySelector(".progress-fill-bar");
        if (fillBar) {
          gsap.fromTo(fillBar, { width: "0%" }, { width: `${progressPercent}%`, duration: 0.75, ease: "power2.out" });
        }
        // Animate progress circle offset
        const ringCircle = spotlightCard.querySelector(".progress-ring-circle-spot");
        if (ringCircle) {
          const targetOffset = 157 - (progressPercent / 100) * 157;
          gsap.fromTo(ringCircle, { strokeDashoffset: 157 }, { strokeDashoffset: targetOffset, duration: 0.75, ease: "power2.out" });
        }
      }
    }

    const countPill = document.getElementById("unlocked-milestones-count");
    if (countPill) countPill.textContent = unlockedCount;

    // Draw central vertical timeline progress height
    const progressLine = document.getElementById("milestones-timeline-progress");
    if (progressLine) {
      const progressPercentVal = getTimelineProgressPercent(currentNestBalance);
      progressLine.style.height = `${progressPercentVal}%`;
    }

    // Draw Progress Milestones markers along the bar
    const markersContainer = document.getElementById("dash-progress-markers");
    if (markersContainer) {
      markersContainer.innerHTML = "";
      const maxLimit = milestoneDestinations[milestoneDestinations.length - 1].limit;
      milestoneDestinations.forEach((dest) => {
        if (dest.limit > 0) {
          const percent = (dest.limit / maxLimit) * 100;
          const marker = document.createElement("div");
          marker.className = `progress-marker ${currentNestBalance >= dest.limit ? 'reached' : ''}`;
          marker.style.left = `${percent}%`;
          markersContainer.appendChild(marker);
        }
      });
    }

    const fill = document.getElementById("dash-progress-fill");
    const progressLabel = document.getElementById("dash-progress-label");
    const progressPercent = document.getElementById("dash-progress-percent");
    const activeGoalName = document.getElementById("dash-active-goal-name");

    if (activeGoalName) activeGoalName.textContent = activeGoal.name;

    if (nextGoal) {
      const segmentProgress = currentNestBalance - activeGoal.limit;
      const segmentTarget = nextGoal.limit - activeGoal.limit;
      const percent = Math.min(100, Math.max(0, (segmentProgress / segmentTarget) * 100));

      if (fill) fill.style.width = `${percent}%`;
      if (progressLabel) progressLabel.textContent = `${nextGoal.name} Goal Progress (₹${nextGoal.limit.toLocaleString("en-IN")} target)`;
      if (progressPercent) {
        progressPercent.textContent = `${Math.floor(percent)}% Complete`;
        progressPercent.style.color = "var(--accent-gold)";
      }
    } else {
      if (fill) fill.style.width = "100%";
      if (progressLabel) progressLabel.textContent = "All travel milestones unlocked!";
      if (progressPercent) {
        progressPercent.textContent = "100% Unlocked";
        progressPercent.style.color = "#10AC84";
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Render Transaction Ledger with 3D Receipt Flip effect
  function renderLedgerList(filterType = "all") {
    const list = document.getElementById("dash-ledger-list");
    if (!list) return;

    list.innerHTML = "";
    const filtered = [...simulatedTransactions].reverse().filter(tx => {
      if (filterType === "all") return true;
      return tx.type === filterType;
    });

    filtered.forEach((tx) => {
      const item = document.createElement("div");
      item.className = "ledger-card-wrapper";

      const isBoost = tx.type === "boost";
      // Generate a mock transaction ID
      const txId = `TX-${Math.floor(100000 + Math.random() * 900000)}`;
      const goldEquivalent = (tx.amount / 7500).toFixed(2);

      item.innerHTML = `
        <div class="ledger-card-inner">
          <div class="ledger-card-front">
            <div class="ledger-left">
              <div class="ledger-icon ${tx.type}">
                <i data-lucide="${isBoost ? 'zap' : 'plus'}"></i>
              </div>
              <div class="ledger-info">
                <strong>${tx.title}</strong>
                <span>${tx.date}</span>
              </div>
            </div>
            <span class="ledger-amount ${isBoost ? 'boost' : 'positive'}">+₹${tx.amount.toLocaleString("en-IN")}</span>
          </div>
          <div class="ledger-card-back">
            <div class="receipt-left">
              <span class="receipt-title">Gold Ledger Receipt</span>
              <div class="receipt-details">
                <span>Purity: 24K (99.9%)</span> &bull; 
                <span>Rate: ₹7,500/g</span>
              </div>
            </div>
            <div class="receipt-right" style="text-align: right;">
              <span class="receipt-id">${txId}</span>
              <div class="receipt-details">Gold: ~${goldEquivalent}g</div>
            </div>
          </div>
        </div>
      `;

      item.addEventListener("click", () => {
        item.classList.toggle("flipped");
      });

      list.appendChild(item);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Global Highlight handlers for milestones hover
  window.highlightChartMilestone = function (name, limit) {
    const guide = document.getElementById("chart-target-guide");
    const line = document.getElementById("chart-target-line");
    const rect = document.getElementById("chart-target-bg");
    const text = document.getElementById("chart-target-text");
    if (!guide || !line || !rect || !text) return;

    const svg = document.getElementById("dash-growth-chart-svg");
    if (!svg) return;

    const minVal = parseFloat(svg.getAttribute("data-min-val"));
    const maxVal = parseFloat(svg.getAttribute("data-max-val"));
    const chartH = parseFloat(svg.getAttribute("data-chart-h"));
    const height = parseFloat(svg.getAttribute("data-height"));
    const paddingBottom = parseFloat(svg.getAttribute("data-padding-bottom"));
    const paddingTop = parseFloat(svg.getAttribute("data-padding-top"));

    if (isNaN(minVal) || isNaN(maxVal)) return;

    const range = maxVal - minVal || 1;
    const clampedLimit = Math.max(minVal, Math.min(maxVal, limit));
    const y = height - paddingBottom - ((clampedLimit - minVal) / range) * chartH;

    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    rect.setAttribute("y", y - 10);
    text.setAttribute("y", y - 2);
    text.textContent = `${name}: ₹${limit.toLocaleString("en-IN")}`;

    guide.style.opacity = "1";
  };

  window.clearChartMilestoneHighlight = function () {
    const guide = document.getElementById("chart-target-guide");
    if (guide) guide.style.opacity = "0";
  };

  // Draw SVG Area/Line Chart of holdings growth curves
  function drawGrowthChart() {
    const svg = document.getElementById("dash-growth-chart-svg");
    if (!svg) return;

    let runningBalance = 0;
    const dataPoints = [];

    // Compute chronological balances from transaction ledger
    const sortedTx = [...simulatedTransactions]; // Keep chronological order (oldest first)
    sortedTx.forEach((tx) => {
      runningBalance += tx.amount;
      dataPoints.push({ label: tx.date.split(",")[0], val: runningBalance });
    });

    if (dataPoints.length === 0) return;

    const minVal = Math.min(...dataPoints.map(p => p.val)) * 0.95;
    const maxVal = Math.max(...dataPoints.map(p => p.val)) * 1.05;
    const range = maxVal - minVal || 1;

    const width = 350;
    const height = 140;
    const paddingLeft = 35;
    const paddingRight = 15;
    const paddingTop = 20;
    const paddingBottom = 20;

    const chartW = width - paddingLeft - paddingRight;
    const chartH = height - paddingTop - paddingBottom;

    // Set parameters on SVG for hover calculations
    svg.setAttribute("data-min-val", minVal);
    svg.setAttribute("data-max-val", maxVal);
    svg.setAttribute("data-chart-h", chartH);
    svg.setAttribute("data-height", height);
    svg.setAttribute("data-padding-bottom", paddingBottom);
    svg.setAttribute("data-padding-top", paddingTop);

    let pathD = "";
    let areaD = "";

    const points = dataPoints.map((p, idx) => {
      const x = paddingLeft + (idx / (dataPoints.length - 1 || 1)) * chartW;
      const y = height - paddingBottom - ((p.val - minVal) / range) * chartH;
      return { x, y, label: p.label, val: p.val };
    });

    points.forEach((pt, idx) => {
      if (idx === 0) {
        pathD += `M ${pt.x} ${pt.y}`;
        areaD += `M ${pt.x} ${height - paddingBottom} L ${pt.x} ${pt.y}`;
      } else {
        const prev = points[idx - 1];
        const cpX1 = prev.x + (pt.x - prev.x) / 2;
        const cpY1 = prev.y;
        const cpX2 = prev.x + (pt.x - prev.x) / 2;
        const cpY2 = pt.y;
        pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${pt.x} ${pt.y}`;
        areaD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${pt.x} ${pt.y}`;
      }
    });

    if (points.length > 0) {
      areaD += ` L ${points[points.length - 1].x} ${height - paddingBottom} Z`;
    }

    let svgContent = `
      <defs>
        <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#b98a45" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#b98a45" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      <line x1="${paddingLeft}" y1="${paddingTop}" x2="${width - paddingRight}" y2="${paddingTop}" stroke="rgba(169, 124, 55, 0.05)" stroke-width="1"/>
      <line x1="${paddingLeft}" y1="${paddingTop + chartH / 2}" x2="${width - paddingRight}" y2="${paddingTop + chartH / 2}" stroke="rgba(169, 124, 55, 0.05)" stroke-width="1"/>
      <line x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}" stroke="rgba(169, 124, 55, 0.15)" stroke-width="1"/>
      
      <!-- Area Fill -->
      <path d="${areaD}" class="growth-area"/>
      <!-- Line path -->
      <path d="${pathD}" class="growth-line"/>

      <!-- Dynamic Target Guide Group -->
      <g id="chart-target-guide" style="opacity: 0; transition: opacity 0.3s ease; pointer-events: none; z-index: 10;">
        <line id="chart-target-line" x1="${paddingLeft}" y1="0" x2="${width - paddingRight}" y2="0" stroke="var(--accent-gold)" stroke-width="1" stroke-dasharray="3,3"/>
        <rect id="chart-target-bg" x="${paddingLeft + 5}" y="0" width="125" height="13" rx="3" fill="var(--text-dark)"/>
        <text id="chart-target-text" x="${paddingLeft + 10}" y="0" font-size="7.5" font-family="var(--font-sans)" font-weight="700" fill="var(--accent-gold)"></text>
      </g>
    `;

    points.forEach((pt) => {
      svgContent += `
        <circle cx="${pt.x}" cy="${pt.y}" r="3.5" class="chart-dot" title="₹${pt.val.toLocaleString('en-IN')}"/>
        <text x="${pt.x}" y="${height - 5}" font-size="7.5" font-family="var(--font-sans)" font-weight="700" fill="var(--text-light)" text-anchor="middle">${pt.label}</text>
      `;
    });

    svg.innerHTML = svgContent;
  }

  function updatePullForwardTimeline() {
    const targetDateEl = document.getElementById("pull-forward-target-date");
    const badgeEl = document.getElementById("pull-forward-days-saved");
    if (!targetDateEl) return;

    const target = trackedGoal || milestoneDestinations.find(d => currentNestBalance < d.limit) || milestoneDestinations[milestoneDestinations.length - 1];

    if (currentNestBalance >= target.limit) {
      targetDateEl.textContent = "Goal Achieved!";
      if (badgeEl) {
        badgeEl.textContent = "Ready";
        badgeEl.style.background = "#10AC84";
      }
      return;
    }

    const gap = target.limit - currentNestBalance;
    const dailyContribution = dashboardSliderVal * boostSpeedMultiplier;
    const daysNeeded = gap / (dailyContribution || 1);

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysNeeded);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    targetDateEl.textContent = `${months[targetDate.getMonth()]} ${targetDate.getDate()}, ${targetDate.getFullYear()}`;

    // Calculate pull-forward days saved compared to baseline (₹300)
    const baselineDays = gap / 300;
    const daysSaved = baselineDays - daysNeeded;

    if (badgeEl) {
      if (daysSaved > 0) {
        badgeEl.style.display = "inline-block";
        badgeEl.textContent = `Saves ${Math.round(daysSaved)} Days`;
        badgeEl.style.background = "#10AC84";
      } else if (daysSaved < 0) {
        badgeEl.style.display = "inline-block";
        badgeEl.textContent = `+${Math.round(Math.abs(daysSaved))} Days`;
        badgeEl.style.background = "#EB5757";
      } else {
        badgeEl.style.display = "none";
      }
    }
  }

  // Update simulator numbers inside the calculator customizer
  let currentPreviewTargetId = null;

  function updateDashboardProjections() {
    const slider = document.getElementById("dash-slider-input");
    const valDisplay = document.getElementById("dash-slider-val-display");
    if (!slider) return;

    const daily = parseInt(slider.value);
    if (valDisplay) valDisplay.textContent = `₹${daily} / day`;

    const capsuleSaveRate = document.getElementById("capsule-save-rate");
    if (capsuleSaveRate) capsuleSaveRate.textContent = `₹${daily}/day`;

    // Sync slider value
    dashboardSliderVal = daily;

    const projected = daily * 30 * dashboardSelectedMonths;
    const projBal = document.getElementById("dash-proj-balance");
    if (projBal) {
      const currentVal = parseInt(projBal.textContent.replace(/[^\d]/g, "")) || 0;
      const targetVal = projected;
      if (currentVal !== targetVal) {
        const tweenObj = { val: currentVal };
        gsap.to(tweenObj, {
          val: targetVal,
          duration: 0.45,
          ease: "power2.out",
          onUpdate: () => {
            projBal.textContent = `₹${Math.round(tweenObj.val).toLocaleString("en-IN")}`;
          }
        });
      }
    }

    const estimatedUnlocks = milestoneDestinations.filter(d => projected >= d.limit).length;
    const projUnlocks = document.getElementById("dash-proj-unlocks");
    if (projUnlocks) {
      const rewardsShare = projected * (currentYieldPercent / 100);
      projUnlocks.innerHTML = `${estimatedUnlocks} Destination${estimatedUnlocks !== 1 ? 's' : ''} <span style="font-size:0.72rem; font-weight:600; color:var(--accent-gold); display:block; margin-top:2px;">(Incl. ₹${Math.round(rewardsShare).toLocaleString("en-IN")} Gold Yield)</span>`;
    }

    // Dynamic Live Escape Preview
    const nextTarget = milestoneDestinations.find(d => projected < d.limit) || milestoneDestinations[milestoneDestinations.length - 1];
    if (nextTarget && nextTarget.name !== currentPreviewTargetId) {
      currentPreviewTargetId = nextTarget.name;
      const previewImg = document.getElementById("dash-proj-preview-img");
      const previewName = document.getElementById("dash-proj-preview-name");
      if (previewImg) {
        gsap.to(previewImg, {
          opacity: 0.1,
          scale: 0.95,
          duration: 0.2,
          onComplete: () => {
            previewImg.style.backgroundImage = `url('${nextTarget.image}')`;
            if (previewName) previewName.textContent = nextTarget.name;
            if (window.lucide) window.lucide.createIcons();
            gsap.to(previewImg, { opacity: 1, scale: 1, duration: 0.3 });
          }
        });
      }
    }

    // Update target unlock timeline
    updatePullForwardTimeline();
  }

  // Render plan settings and plan state
  function updateSavingsStatus() {
    const statusStat = document.getElementById("dash-status-stat");

    // Auto-Save active gold pulse animations on wallet header pill and holdings card
    const walletPills = document.querySelectorAll(".wallet-pill");
    const holdingsCard = document.querySelector(".premium-holdings-card");

    if (isAutoSaveActive) {
      walletPills.forEach(p => p.classList.add("glowing-pulse"));
      if (holdingsCard) holdingsCard.classList.add("glowing-pulse");
    } else {
      walletPills.forEach(p => p.classList.remove("glowing-pulse"));
      if (holdingsCard) holdingsCard.classList.remove("glowing-pulse");
    }

    if (!statusStat) return;

    if (!isAutoSaveActive) {
      statusStat.textContent = "Paused";
      statusStat.className = "status-growing";
      statusStat.style.color = "#EB5757";
      return;
    }

    const unlockedCount = milestoneDestinations.filter(d => currentNestBalance >= d.limit).length;
    if (unlockedCount > 0) {
      statusStat.textContent = "Ready to Book";
      statusStat.className = "status-ready";
      statusStat.style.color = "#10AC84";
    } else {
      statusStat.textContent = "Growing";
      statusStat.className = "status-growing";
      statusStat.style.color = "var(--accent-gold)";
    }
  }

  // Master refresh callback
  function refreshDashboardData() {
    updateGlobalWalletDisplays(currentNestBalance);
    renderMilestonesGrid();
    renderLedgerList();
    drawGrowthChart();
    updateSavingsStatus();
    updateDashboardProjections();
  }

  // Open modals helper
  function openBoostModal(prefilledAmount = null) {
    const modal = document.getElementById("nest-boost-modal");
    if (!modal) return;

    modal.style.display = "flex";
    const customInput = document.getElementById("boost-custom-input");
    if (customInput) customInput.value = prefilledAmount || "";

    // Clear active preset buttons
    document.querySelectorAll(".boost-preset-grid .preset-btn").forEach(btn => {
      btn.classList.remove("active");
      if (prefilledAmount && parseInt(btn.getAttribute("data-value")) === prefilledAmount) {
        btn.classList.add("active");
      }
    });
  }

  // Milestone Detail Modal trigger logic
  function openMilestoneDetailsModal(dest, isUnlocked) {
    const modal = document.getElementById("nest-milestone-modal");
    if (!modal) return;

    modal.style.display = "flex";

    const title = document.getElementById("milestone-modal-title");
    const desc = document.getElementById("milestone-modal-desc");
    const img = document.getElementById("milestone-modal-image");
    const badge = document.getElementById("milestone-modal-badge");
    const statusText = document.getElementById("milestone-modal-status-text");
    const actionBtn = document.getElementById("btn-action-milestone");
    const progressBlock = document.getElementById("milestone-modal-progress-summary");
    const trackGoalBtn = document.getElementById("btn-modal-track-goal");

    if (title) title.textContent = dest.name;
    if (desc) desc.textContent = dest.desc;
    if (img) img.style.backgroundImage = `url('${dest.image}')`;
    if (badge) badge.textContent = `₹${dest.limit.toLocaleString("en-IN")}+ Required`;

    if (isUnlocked) {
      if (statusText) {
        statusText.innerHTML = `<i data-lucide="check-circle" class="unlocked-icon"></i><span class="unlocked-text">Unlocked</span>`;
      }
      if (progressBlock) progressBlock.style.display = "none";
      if (trackGoalBtn) trackGoalBtn.style.display = "none";
      if (actionBtn) {
        actionBtn.innerHTML = `<span>Proceed to Book Stay</span><i data-lucide="arrow-right" style="width:14px;height:14px;margin-left:5px;vertical-align:middle;"></i>`;
        actionBtn.className = "btn-modal-confirm";
        actionBtn.setAttribute("data-slug", isUnlocked ? (dest.limit === 0 ? "amalfi" : (dest.limit === 15000 ? "japan" : (dest.limit === 35000 ? "bali" : "maldives"))) : "japan");
      }
    } else {
      const gap = dest.limit - currentNestBalance;
      if (statusText) {
        statusText.innerHTML = `<i data-lucide="lock" class="locked-icon"></i><span class="locked-text">Locked</span>`;
      }
      if (progressBlock) {
        progressBlock.style.display = "flex";
        const curBarVal = document.getElementById("milestone-modal-current-bar-val");
        const tarBarVal = document.getElementById("milestone-modal-target-bar-val");
        const barFill = document.getElementById("milestone-modal-progress-fill");

        if (curBarVal) curBarVal.textContent = `₹${currentNestBalance.toLocaleString("en-IN")}`;
        if (tarBarVal) tarBarVal.textContent = `₹${dest.limit.toLocaleString("en-IN")}`;
        if (barFill) barFill.style.width = `${(currentNestBalance / dest.limit) * 100}%`;
      }
      if (trackGoalBtn) {
        trackGoalBtn.style.display = "flex";
        trackGoalBtn.onclick = (e) => {
          e.preventDefault();
          trackedGoal = dest;
          renderMilestonesGrid();
          modal.style.display = "none";
          showToast(`Now tracking ${dest.name} as active milestone target!`);
        };
      }
      if (actionBtn) {
        actionBtn.innerHTML = `<span>Quick Boost by ₹${gap.toLocaleString("en-IN")}</span><i data-lucide="zap" style="width:13px;height:13px;margin-left:5px;vertical-align:middle;"></i>`;
        actionBtn.className = "btn-modal-confirm gold-boost-action";
        actionBtn.setAttribute("data-boost-val", gap);
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Register interactive listeners inside DOM scope once
  function initRedesignedDashboardListeners() {
    if (isDashboardListenersInitialized) return;

    const slider = document.getElementById("dash-slider-input");
    if (slider) {
      slider.addEventListener("input", updateDashboardProjections);
    }

    // Duration selectors
    document.querySelectorAll(".duration-pills .dur-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".duration-pills .dur-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        dashboardSelectedMonths = parseInt(pill.getAttribute("data-months"));
        updateDashboardProjections();
      });
    });

    // Save autopilot customizer settings
    const applyBtn = document.getElementById("btn-apply-settings");
    if (applyBtn) {
      applyBtn.addEventListener("click", () => {
        const sliderInput = document.getElementById("dash-slider-input");
        if (sliderInput) {
          dashboardSliderVal = parseInt(sliderInput.value);
          const activeDaily = dashboardSliderVal * boostSpeedMultiplier;

          const autosaveStat = document.getElementById("dash-autosave-stat");
          if (autosaveStat) autosaveStat.textContent = `₹${activeDaily.toLocaleString("en-IN")} / day`;

          const monthsStat = document.getElementById("dash-months-stat");
          if (monthsStat) monthsStat.textContent = `${dashboardSelectedMonths} Months`;

          updateSavingsStatus();
          showToast("Autopilot savings target settings applied to plan!");
        }
      });
    }

    // Active toggles switches
    const autoSaveToggle = document.getElementById("toggle-autosave");
    if (autoSaveToggle) {
      autoSaveToggle.addEventListener("change", function () {
        isAutoSaveActive = this.checked;
        updateSavingsStatus();
        showToast(isAutoSaveActive ? "Auto-Save Engine activated." : "Auto-Save deposits paused.", isAutoSaveActive ? "success" : "error");
      });
    }

    const velocityToggle = document.getElementById("toggle-velocity");
    if (velocityToggle) {
      velocityToggle.addEventListener("change", function () {
        boostSpeedMultiplier = this.checked ? 2 : 1;
        const activeDaily = dashboardSliderVal * boostSpeedMultiplier;

        const autosaveStat = document.getElementById("dash-autosave-stat");
        if (autosaveStat) autosaveStat.textContent = `₹${activeDaily.toLocaleString("en-IN")} / day`;

        showToast(boostSpeedMultiplier === 2 ? "Speed-Boost (2x velocity) activated!" : "Boost velocity normal (1x).");
      });
    }

    // Ledger filter buttons tags
    document.querySelectorAll(".ledger-filter-tags .filter-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        document.querySelectorAll(".ledger-filter-tags .filter-tag").forEach(t => t.classList.remove("active"));
        tag.classList.add("active");
        renderLedgerList(tag.getAttribute("data-filter"));
      });
    });

    // Modal 1: Open Boost Balance Modal
    const boostBtn = document.getElementById("btn-boost-balance");
    if (boostBtn) {
      boostBtn.addEventListener("click", () => openBoostModal());
    }

    // Preset buttons clicks in boost modal
    document.querySelectorAll(".boost-preset-grid .preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".boost-preset-grid .preset-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const customInput = document.getElementById("boost-custom-input");
        if (customInput) customInput.value = btn.getAttribute("data-value");
      });
    });

    // Cancel & Close boost modal
    const closeBoostX = document.getElementById("btn-close-boost-modal");
    if (closeBoostX) closeBoostX.addEventListener("click", () => {
      document.getElementById("nest-boost-modal").style.display = "none";
    });

    const cancelBoostBtn = document.getElementById("btn-cancel-boost");
    if (cancelBoostBtn) cancelBoostBtn.addEventListener("click", () => {
      document.getElementById("nest-boost-modal").style.display = "none";
    });

    // Confirm deposit boost balance
    const confirmBoostBtn = document.getElementById("btn-confirm-boost");
    if (confirmBoostBtn) {
      confirmBoostBtn.addEventListener("click", () => {
        const customInput = document.getElementById("boost-custom-input");
        const val = customInput ? parseInt(customInput.value) : 0;

        if (isNaN(val) || val <= 0) {
          showToast("Please enter a valid deposit amount.", "error");
          return;
        }

        // Process deposit simulated transaction
        const previousBalance = currentNestBalance;
        currentNestBalance += val;

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        const dateStr = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

        simulatedTransactions.unshift({
          type: 'boost',
          title: 'One-time Nest Boost',
          date: dateStr,
          amount: val
        });

        document.getElementById("nest-boost-modal").style.display = "none";

        // Visual effects trigger
        triggerConfetti();

        const holdingsDisplay = document.getElementById("dash-total-holdings");
        if (holdingsDisplay) {
          animateValue(holdingsDisplay, previousBalance, currentNestBalance, 900);
        }

        updateGlobalWalletDisplays(currentNestBalance);
        renderMilestonesGrid();
        renderLedgerList();
        drawGrowthChart();
        updateSavingsStatus();

        showToast(`Instant Boost of ₹${val.toLocaleString("en-IN")} deposited!`);
      });
    }

    // Modal 2: Open Exit Modal
    const exitBtn = document.getElementById("btn-exit-plan");
    if (exitBtn) {
      exitBtn.addEventListener("click", () => {
        const modal = document.getElementById("nest-exit-modal");
        if (!modal) return;

        modal.style.display = "flex";

        // Calculate settlement breakdown
        const principal = Math.floor(currentNestBalance * 0.88);
        const contributions = currentNestBalance - principal;
        const bonus = Math.floor(currentNestBalance * 0.1);
        const totalPayout = principal + contributions + bonus;

        const principalVal = document.getElementById("exit-principal-val");
        const autosaveVal = document.getElementById("exit-autosave-val");
        const bonusVal = document.getElementById("exit-bonus-val");
        const totalVal = document.getElementById("exit-total-val");
        const codeInput = document.getElementById("exit-verify-code");
        const confirmExitBtn = document.getElementById("btn-confirm-exit");

        if (principalVal) principalVal.textContent = `₹${principal.toLocaleString("en-IN")}`;
        if (autosaveVal) autosaveVal.textContent = `₹${contributions.toLocaleString("en-IN")}`;
        if (bonusVal) bonusVal.textContent = `+₹${bonus.toLocaleString("en-IN")}`;
        if (totalVal) totalVal.textContent = `₹${totalPayout.toLocaleString("en-IN")}`;

        if (codeInput) {
          codeInput.value = "";
          codeInput.addEventListener("input", function () {
            if (confirmExitBtn) confirmExitBtn.disabled = (this.value.trim() !== "8845");
          });
        }

        if (confirmExitBtn) confirmExitBtn.disabled = true;
      });
    }

    // Cancel & Close exit modal
    const closeExitX = document.getElementById("btn-close-exit-modal");
    if (closeExitX) closeExitX.addEventListener("click", () => {
      document.getElementById("nest-exit-modal").style.display = "none";
    });

    const cancelExitBtn = document.getElementById("btn-cancel-exit");
    if (cancelExitBtn) cancelExitBtn.addEventListener("click", () => {
      document.getElementById("nest-exit-modal").style.display = "none";
    });

    // Confirm simulated exit payout transfer
    const confirmExitPayoutBtn = document.getElementById("btn-confirm-exit");
    if (confirmExitPayoutBtn) {
      confirmExitPayoutBtn.addEventListener("click", () => {
        document.getElementById("nest-exit-modal").style.display = "none";

        const previous = currentNestBalance;
        currentNestBalance = 0;
        simulatedTransactions = [];

        const holdingsDisplay = document.getElementById("dash-total-holdings");
        if (holdingsDisplay) animateValue(holdingsDisplay, previous, 0, 700);

        updateGlobalWalletDisplays(0);
        renderMilestonesGrid();
        renderLedgerList();
        drawGrowthChart();
        updateSavingsStatus();

        showToast("Payout transfer simulated successfully! Nest balance settled to ₹0.", "error");
      });
    }

    // Modal 3: Close Milestone Modal
    const closeMilestoneX = document.getElementById("btn-close-milestone-modal");
    if (closeMilestoneX) closeMilestoneX.addEventListener("click", () => {
      document.getElementById("nest-milestone-modal").style.display = "none";
    });

    const closeMilestoneBtn = document.getElementById("btn-close-milestone-btn");
    if (closeMilestoneBtn) closeMilestoneBtn.addEventListener("click", () => {
      document.getElementById("nest-milestone-modal").style.display = "none";
    });

    // Action button inside milestone detail modal
    const actionMilestoneBtn = document.getElementById("btn-action-milestone");
    if (actionMilestoneBtn) {
      actionMilestoneBtn.addEventListener("click", () => {
        document.getElementById("nest-milestone-modal").style.display = "none";

        const boostVal = actionMilestoneBtn.getAttribute("data-boost-val");
        const slug = actionMilestoneBtn.getAttribute("data-slug");

        if (boostVal) {
          // Pre-populate boost modal
          openBoostModal(parseInt(boostVal));
        } else if (slug) {
          // Router transition to destination stay
          window.history.pushState(null, "", `/destination/${slug}`);
          checkRoute();
        }
      });
    }

    // Sliding Wallet Drawer Triggers
    const walletPills = document.querySelectorAll(".wallet-pill");
    const walletDrawer = document.getElementById("wallet-drawer-panel");
    const drawerBackdrop = document.getElementById("wallet-drawer-backdrop");
    const drawerPrincipalVal = document.getElementById("drawer-principal-balance");
    const drawerRewardsVal = document.getElementById("drawer-rewards-balance");

    function openDrawer() {
      if (walletDrawer) {
        walletDrawer.classList.add("open");
        if (drawerBackdrop) drawerBackdrop.classList.add("open");

        // Update values in drawer dynamically based on yield comparison toggle
        const principalPct = (100 - currentYieldPercent) / 100;
        const rewardsPct = currentYieldPercent / 100;

        if (drawerPrincipalVal) {
          const principal = Math.floor(currentNestBalance * principalPct);
          drawerPrincipalVal.textContent = `₹${principal.toLocaleString("en-IN")}`;
        }
        if (drawerRewardsVal) {
          const rewards = Math.floor(currentNestBalance * rewardsPct);
          drawerRewardsVal.textContent = `₹${rewards.toLocaleString("en-IN")}`;
        }
      }
    }

    function closeDrawer() {
      if (walletDrawer) {
        walletDrawer.classList.remove("open");
        if (drawerBackdrop) drawerBackdrop.classList.remove("open");
      }
    }

    walletPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        if (walletDrawer && walletDrawer.classList.contains("open")) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    });

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener("click", closeDrawer);
    }

    const drawerBtnBoost = document.getElementById("drawer-btn-boost");
    if (drawerBtnBoost) {
      drawerBtnBoost.addEventListener("click", () => {
        closeDrawer();
        openBoostModal();
      });
    }

    const drawerBtnExit = document.getElementById("drawer-btn-exit");
    if (drawerBtnExit) {
      drawerBtnExit.addEventListener("click", () => {
        closeDrawer();
        const exitBtn = document.getElementById("btn-exit-plan");
        if (exitBtn) exitBtn.click();
      });
    }

    // Configure and History responsive drawer toggle bindings
    const configDrawer = document.getElementById("autopilot-settings-drawer");
    const ledgerDrawer = document.getElementById("ledger-history-drawer");
    const toggleConfigBtn = document.getElementById("btn-toggle-settings");
    const toggleLedgerBtn = document.getElementById("btn-toggle-ledger");
    const closeConfigBtn = document.getElementById("btn-close-settings-drawer");
    const closeLedgerBtn = document.getElementById("btn-close-ledger-drawer");

    function closeResponsiveDrawers() {
      if (configDrawer) configDrawer.classList.remove("open");
      if (ledgerDrawer) ledgerDrawer.classList.remove("open");
      if (drawerBackdrop) drawerBackdrop.classList.remove("open");
    }

    if (toggleConfigBtn && configDrawer) {
      toggleConfigBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeDrawer(); // Close wallet drawer first
        configDrawer.classList.add("open");
        if (drawerBackdrop) drawerBackdrop.classList.add("open");
      });
    }

    if (toggleLedgerBtn && ledgerDrawer) {
      toggleLedgerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeDrawer(); // Close wallet drawer first
        ledgerDrawer.classList.add("open");
        if (drawerBackdrop) drawerBackdrop.classList.add("open");
      });
    }

    if (closeConfigBtn) {
      closeConfigBtn.addEventListener("click", closeResponsiveDrawers);
    }
    if (closeLedgerBtn) {
      closeLedgerBtn.addEventListener("click", closeResponsiveDrawers);
    }

    // Also update backdrop click to close responsive drawers
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener("click", () => {
        closeDrawer();
        closeResponsiveDrawers();
      });
    }

    const triggerBoostBtn = document.getElementById("btn-trigger-boost");
    if (triggerBoostBtn) {
      triggerBoostBtn.addEventListener("click", () => {
        closeResponsiveDrawers();
        openBoostModal();
      });
    }

    const triggerExitBtn = document.getElementById("btn-trigger-exit");
    if (triggerExitBtn) {
      triggerExitBtn.addEventListener("click", () => {
        closeResponsiveDrawers();
        const exitBtn = document.getElementById("btn-exit-plan");
        if (exitBtn) exitBtn.click();
      });
    }

    // Gold Reservoir Collect click triggers
    const coinReservoir = document.getElementById("coin-reservoir");
    if (coinReservoir) {
      coinReservoir.addEventListener("click", (e) => {
        e.preventDefault();
        coinReservoir.classList.add("coin-shimmer-active");
        setTimeout(() => {
          coinReservoir.classList.remove("coin-shimmer-active");
        }, 400);

        // Shower gold confetti particles!
        if (window.confetti) {
          window.confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#b98a45', '#d4af37', '#f3e5ab']
          });
        }

        const goldGrams = (currentNestBalance / 7500).toFixed(2);
        showToast(`Stored matched gold holdings secured: ~${goldGrams}g of Pure 24K Gold!`, "success");
      });
    }

    // Yield Comparison toggles
    const yieldStandardBtn = document.getElementById("btn-yield-standard");
    const yieldBoostBtn = document.getElementById("btn-yield-boost");

    function setYieldPlan(percent) {
      currentYieldPercent = percent;

      if (percent === 12) {
        if (yieldBoostBtn) yieldBoostBtn.classList.add("active");
        if (yieldStandardBtn) yieldStandardBtn.classList.remove("active");
        showToast("Premium Accelerated Gold Boost plan selected (+12% yield matching).", "success");
      } else {
        if (yieldStandardBtn) yieldStandardBtn.classList.add("active");
        if (yieldBoostBtn) yieldBoostBtn.classList.remove("active");
        showToast("Standard savings plan selected (+10% baseline matching).", "info");
      }

      // Recompute customizer projections
      updateDashboardProjections();

      // Pulse animation on the projections card
      const projBox = document.querySelector(".calc-projection-box");
      if (projBox) {
        gsap.fromTo(projBox, { scale: 0.98, opacity: 0.8 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" });
      }
    }

    if (yieldStandardBtn) {
      yieldStandardBtn.addEventListener("click", () => setYieldPlan(10));
    }
    if (yieldBoostBtn) {
      yieldBoostBtn.addEventListener("click", () => setYieldPlan(12));
    }

    // Setup Custom Milestone Select Dropdown open/close
    const triggerSelect = document.getElementById("milestone-select-trigger");
    const optionsPanel = document.getElementById("milestone-select-options-list");
    if (triggerSelect && optionsPanel) {
      triggerSelect.addEventListener("click", (e) => {
        e.stopPropagation();
        const show = optionsPanel.classList.toggle("show");
        triggerSelect.classList.toggle("active", show);
      });
    }

    // Close select dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const customSelect = document.getElementById("milestone-custom-select");
      const trig = document.getElementById("milestone-select-trigger");
      const list = document.getElementById("milestone-select-options-list");
      if (customSelect && !customSelect.contains(e.target)) {
        if (list && list.classList.contains("show")) {
          list.classList.remove("show");
          if (trig) trig.classList.remove("active");
        }
      }
    });

    // Travel Vibe Filters
    document.querySelectorAll(".vibe-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".vibe-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMilestonesGrid();
      });
    });

    // Savings time-lapse Simulator
    const runSimBtn = document.getElementById("btn-run-simulation");
    const resetSimBtn = document.getElementById("btn-reset-simulation");
    const simText = document.getElementById("btn-sim-text");
    const sliderInput = document.getElementById("dash-slider-input");

    if (runSimBtn) {
      runSimBtn.addEventListener("click", () => {
        if (isSimulating) {
          // PAUSE SIMULATION
          isSimulating = false;
          clearInterval(simInterval);
          runSimBtn.classList.remove("running");
          if (simText) simText.textContent = "Resume Simulation";
          const icon = runSimBtn.querySelector("i, svg");
          if (icon && window.lucide) {
            runSimBtn.innerHTML = `<i data-lucide="play" style="width: 15px; height: 15px;"></i><span id="btn-sim-text">Resume Simulation</span>`;
            window.lucide.createIcons();
          }
          showToast("Time-lapse simulation paused.");
        } else {
          // START SIMULATION
          if (simDay === 0) {
            backupNestBalance = currentNestBalance;
            backupTransactions = [...simulatedTransactions];
            currentNestBalance = 0; // Start simulation from 0 to show dynamic growth path
          }

          if (sliderInput) sliderInput.disabled = true;
          const applyBtn = document.getElementById("btn-apply-settings");
          if (applyBtn) applyBtn.disabled = true;

          isSimulating = true;
          runSimBtn.classList.add("running");
          if (simText) simText.textContent = "Pause Simulation";

          const icon = runSimBtn.querySelector("i, svg");
          if (icon && window.lucide) {
            runSimBtn.innerHTML = `<i data-lucide="pause" style="width: 15px; height: 15px;"></i><span id="btn-sim-text">Pause Simulation</span>`;
            window.lucide.createIcons();
          }

          if (resetSimBtn) resetSimBtn.style.display = "block";

          const totalDays = dashboardSelectedMonths * 30;
          const prevUnlockedList = new Set();

          simInterval = setInterval(() => {
            simDay++;
            const dailyContribution = dashboardSliderVal * boostSpeedMultiplier;
            currentNestBalance += dailyContribution;

            // Animate holdings balance display
            const holdingsDisplay = document.getElementById("dash-total-holdings");
            if (holdingsDisplay) holdingsDisplay.textContent = `₹${currentNestBalance.toLocaleString("en-IN")}`;

            // Update global views
            updateGlobalWalletDisplays(currentNestBalance);

            // Insert ledger transaction
            if (simDay % 5 === 0) {
              simulatedTransactions.unshift({
                type: 'save',
                title: `Simulation Auto-Save (Day ${simDay})`,
                date: `Day ${simDay} of Sim`,
                amount: dailyContribution * 5
              });
              renderLedgerList();
            }

            // Render map timeline & calculate progress
            renderMilestonesGrid();

            // Check if any milestone unlocks
            milestoneDestinations.forEach(dest => {
              if (currentNestBalance >= dest.limit && !prevUnlockedList.has(dest.name) && dest.limit > 0) {
                prevUnlockedList.add(dest.name);
                triggerConfetti();
                showToast(`Destination unlocked: ${dest.name}!`, "success");
              }
            });

            if (simDay >= totalDays) {
              clearInterval(simInterval);
              isSimulating = false;
              runSimBtn.classList.remove("running");
              if (simText) simText.textContent = "Simulation Finished";
              runSimBtn.disabled = true;
              triggerConfetti();
              showToast("Autopilot simulation target completed!", "success");
            }
          }, 80);
        }
      });
    }

    if (resetSimBtn) {
      resetSimBtn.addEventListener("click", () => {
        isSimulating = false;
        clearInterval(simInterval);
        currentNestBalance = backupNestBalance;
        simulatedTransactions = [...backupTransactions];
        simDay = 0;

        if (sliderInput) sliderInput.disabled = false;
        const applyBtn = document.getElementById("btn-apply-settings");
        if (applyBtn) applyBtn.disabled = false;
        if (runSimBtn) {
          runSimBtn.disabled = false;
          runSimBtn.classList.remove("running");
          runSimBtn.innerHTML = `<i data-lucide="play" style="width: 15px; height: 15px;"></i><span id="btn-sim-text">Simulate Growth</span>`;
        }

        resetSimBtn.style.display = "none";
        if (window.lucide) window.lucide.createIcons();
        refreshDashboardData();
        showToast("Savings plan simulation reset to current balance.");
      });
    }

    // Chart hover guide interactions
    const chartSvg = document.getElementById("dash-growth-chart-svg");
    if (chartSvg) {
      chartSvg.addEventListener("mousemove", (e) => {
        const rect = chartSvg.getBoundingClientRect();
        const x = e.clientX - rect.left;

        const paddingLeft = 35;
        const width = 350;
        const paddingRight = 15;
        const chartW = width - paddingLeft - paddingRight;

        const pct = (x - paddingLeft) / chartW;
        if (pct >= 0 && pct <= 1) {
          const guide = document.getElementById("chart-target-guide");
          const guideLine = document.getElementById("chart-target-line");
          const guideText = document.getElementById("chart-target-text");
          const guideBg = document.getElementById("chart-target-bg");

          if (guide && guideLine) {
            guide.style.opacity = "1";
            const minVal = parseFloat(chartSvg.getAttribute("data-min-val")) || 0;
            const maxVal = parseFloat(chartSvg.getAttribute("data-max-val")) || 300000;
            const currentVal = minVal + pct * (maxVal - minVal);

            const height = parseFloat(chartSvg.getAttribute("data-height")) || 140;
            const paddingBottom = parseFloat(chartSvg.getAttribute("data-padding-bottom")) || 20;
            const chartH = parseFloat(chartSvg.getAttribute("data-chart-h")) || 100;

            const y = height - paddingBottom - ((currentVal - minVal) / (maxVal - minVal || 1)) * chartH;

            guideLine.setAttribute("y1", y);
            guideLine.setAttribute("y2", y);

            if (guideText) {
              guideText.textContent = `Proj: ₹${Math.round(currentVal).toLocaleString("en-IN")}`;
              guideText.setAttribute("y", y - 4);
              if (guideBg) {
                guideBg.setAttribute("y", y - 12);
              }
            }

            // Update interactive glassmorphic popover card details
            const popover = document.getElementById("chart-hover-popover");
            const popoverDate = document.getElementById("popover-date");
            const popoverAmount = document.getElementById("popover-amount");
            const popoverStayName = document.getElementById("popover-stay-name");
            const popoverStayImg = document.getElementById("popover-stay-img");

            if (popover && simulatedTransactions.length > 0) {
              const txIndex = Math.min(simulatedTransactions.length - 1, Math.max(0, Math.round(pct * (simulatedTransactions.length - 1))));
              const currentTx = simulatedTransactions[txIndex];

              let accBalance = 0;
              for (let i = 0; i <= txIndex; i++) {
                accBalance += simulatedTransactions[i].amount;
              }

              const matchedMilestone = milestoneDestinations.filter(d => accBalance >= d.limit).pop() || milestoneDestinations[0];

              if (popoverDate) popoverDate.textContent = currentTx.date.split(",")[0];
              if (popoverAmount) popoverAmount.textContent = `₹${accBalance.toLocaleString("en-IN")}`;
              if (popoverStayName) popoverStayName.textContent = matchedMilestone.name;
              if (popoverStayImg) popoverStayImg.style.backgroundImage = `url('${matchedMilestone.image}')`;

              // Position popover responsively based on graph sweep cursor coords
              const popoverW = 200;
              const popoverH = 68;

              const yPercent = (y / 140) * 100;
              let leftPercent = (x / rect.width) * 100;
              const halfWidthPercent = (popoverW / 2 / rect.width) * 100;
              leftPercent = Math.max(halfWidthPercent, Math.min(100 - halfWidthPercent, leftPercent));

              popover.style.left = `calc(${leftPercent}% - ${popoverW / 2}px)`;

              let topPx = (yPercent / 100) * rect.height - popoverH - 12;
              topPx = Math.max(5, topPx);
              popover.style.top = `${topPx}px`;

              popover.classList.add("show");
            }

            // Sync radar sweep highlight on options and spotlight card
            const matchedMilestone = milestoneDestinations.filter(d => currentVal >= d.limit).pop() || milestoneDestinations[0];
            const options = document.querySelectorAll("#dash-milestones-grid .milestone-option-item");
            const spotlight = document.getElementById("milestone-spotlight-card");

            milestoneDestinations.forEach((dest, idx) => {
              const option = options[idx];
              if (dest.name === matchedMilestone.name) {
                if (option) {
                  option.style.background = "rgba(185, 138, 69, 0.15)";
                  option.style.borderColor = "rgba(185, 138, 69, 0.4)";
                }
                if (spotlight && selectedMilestoneIdx === idx) {
                  spotlight.style.borderColor = "var(--accent-gold)";
                  spotlight.style.boxShadow = "0 20px 45px rgba(185, 138, 69, 0.15)";
                }
              } else {
                if (option && idx !== selectedMilestoneIdx) {
                  option.style.background = "";
                  option.style.borderColor = "";
                }
              }
            });
          }
        }
      });

      chartSvg.addEventListener("mouseleave", () => {
        const guide = document.getElementById("chart-target-guide");
        if (guide) guide.style.opacity = "0";

        const popover = document.getElementById("chart-hover-popover");
        if (popover) popover.classList.remove("show");

        // Clear all sweeps styles
        const options = document.querySelectorAll("#dash-milestones-grid .milestone-option-item");
        const spotlight = document.getElementById("milestone-spotlight-card");
        options.forEach((opt, idx) => {
          if (idx !== selectedMilestoneIdx) {
            opt.style.background = "";
            opt.style.borderColor = "";
          }
        });
        if (spotlight) {
          spotlight.style.borderColor = "";
          spotlight.style.boxShadow = "";
        }
      });
    }

    const exploreIcelandBtn = document.getElementById("btn-explore-iceland");
    if (exploreIcelandBtn) {
      exploreIcelandBtn.addEventListener("click", () => {
        window.history.pushState(null, "", "/destination/iceland");
        checkRoute();
      });
    }

    isDashboardListenersInitialized = true;
  }

  // ── LUXURY BOOKING SYSTEM INTERACTIVES ────────────────────────────────
  function initBookingSystem() {
    const btnSwap = document.getElementById('btn-swap-cities');
    const inputFromCity = document.getElementById('input-from-city');
    const inputFromDetails = document.getElementById('input-from-details');
    const inputToCity = document.getElementById('input-to-city');
    const inputToDetails = document.getElementById('input-to-details');
    const receiptFromCode = document.getElementById('receipt-from-code');
    const receiptToCode = document.getElementById('receipt-to-code');
    const receiptTicketId = document.getElementById('receipt-ticket-id');

    // Setup close button on initial label
    const initialCloseBtn = document.querySelector('.domestic-international-label .close-x');
    const domIntLabel = document.querySelector('.domestic-international-label');
    if (initialCloseBtn && domIntLabel) {
      initialCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        domIntLabel.style.display = 'none';
      });
    }

    // Helper to get 3 letter code
    function getCityCode(detailsVal) {
      if (!detailsVal) return 'XYZ';
      const parts = detailsVal.split(',');
      if (parts.length > 0) {
        const code = parts[0].trim().toUpperCase();
        if (code.length === 3) return code;
      }
      return detailsVal.substring(0, 3).toUpperCase();
    }

    // Update receipt route code dynamically on input change
    if (inputFromDetails) {
      inputFromDetails.addEventListener('input', () => {
        if (receiptFromCode) receiptFromCode.textContent = getCityCode(inputFromDetails.value);
      });
    }
    if (inputToDetails) {
      inputToDetails.addEventListener('input', () => {
        if (receiptToCode) receiptToCode.textContent = getCityCode(inputToDetails.value);
      });
    }

    // 1. Swap Cities
    if (btnSwap && inputFromCity && inputToCity && inputFromDetails && inputToDetails) {
      btnSwap.addEventListener('click', () => {
        const tempCity = inputFromCity.value;
        const tempDetails = inputFromDetails.value;

        inputFromCity.value = inputToCity.value;
        inputFromDetails.value = inputToDetails.value;

        inputToCity.value = tempCity;
        inputToDetails.value = tempDetails;

        // Trigger updates on receipt
        if (receiptFromCode) receiptFromCode.textContent = getCityCode(inputFromDetails.value);
        if (receiptToCode) receiptToCode.textContent = getCityCode(inputToDetails.value);

        showToast("Route reversed successfully!", "success");
      });
    }

    // 2. Trip Type Switcher
    const tripTypeBtns = document.querySelectorAll('.trip-type-btn');
    const colReturn = document.getElementById('col-return');
    tripTypeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tripTypeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const type = btn.getAttribute('data-type');
        if (type === 'oneway') {
          if (colReturn) {
            colReturn.style.opacity = '0.4';
            colReturn.style.pointerEvents = 'none';
          }
          const returnDay = document.getElementById('date-return-day');
          if (returnDay) returnDay.textContent = 'Add return';
        } else {
          if (colReturn) {
            colReturn.style.opacity = '1';
            colReturn.style.pointerEvents = 'auto';
          }
          const returnDay = document.getElementById('date-return-day');
          if (returnDay && returnDay.textContent === 'Add return') {
            returnDay.textContent = '12 Jul \'26';
          }
        }
      });
    });

    // 3. Cabin Class Selector Update
    const cabinClassSelect = document.getElementById('cabin-class-select');
    const receiptClass = document.getElementById('receipt-class');
    const classDisplayVal = document.getElementById('class-display-val');
    if (cabinClassSelect) {
      cabinClassSelect.addEventListener('change', () => {
        const selectedText = cabinClassSelect.options[cabinClassSelect.selectedIndex].text;
        if (receiptClass) receiptClass.textContent = selectedText;
        if (classDisplayVal) classDisplayVal.textContent = selectedText;
      });
    }

    // 4. Search Flights trigger with loading states
    const btnSearch = document.getElementById('btn-search-flights');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        // Redirect to packages view if active tab is holidays
        const activeTab = document.querySelector('.booking-tab.active')?.getAttribute('data-tab');
        if (activeTab === 'holidays') {
          window.history.pushState(null, "", "/packages");
          checkRoute();
          return;
        }

        const originalContent = btnSearch.innerHTML;
        btnSearch.disabled = true;
        btnSearch.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> <span>SEARCHING...</span>`;
        if (window.lucide) window.lucide.createIcons();

        // Generate a new random ticket receipt ID
        if (receiptTicketId && receiptFromCode && receiptToCode) {
          const fromC = receiptFromCode.textContent;
          const toC = receiptToCode.textContent;
          const randomNum = Math.floor(10 + Math.random() * 90);
          receiptTicketId.textContent = `MYTRIP26${fromC}${toC}${randomNum}`;
        }

        setTimeout(() => {
          btnSearch.disabled = false;
          btnSearch.innerHTML = originalContent;
          if (window.lucide) window.lucide.createIcons();
          showToast("Journeys search loaded successfully!", "success");
        }, 1200);
      });
    }

    // 5. Booking Tab Switching
    const TAB_CONTENT_CONFIG = {
      flights: {
        labelFrom: "FROM",
        fromCity: "Coimbatore",
        fromSub: "CJB, India",
        labelTo: "TO",
        toCity: "Bengaluru",
        toSub: "BLR, India",
        toIcon: "map-pin",
        swapVisible: "flex",
        labelDeparture: "DEPARTURE",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "RETURN",
        retDate: "Add return",
        retSub: "for better deals",
        labelTravellers: "TRAVELLERS & CLASS",
        travellersVal: "1 Adult",
        travellersSub: "Economy"
      },
      hotels: {
        labelFrom: "WHERE TO?",
        fromCity: "Bengaluru",
        fromSub: "Karnataka, India",
        labelTo: "ROOMS & GUESTS",
        toCity: "1 Room",
        toSub: "2 Guests",
        toIcon: "users",
        swapVisible: "none",
        labelDeparture: "CHECK-IN",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "CHECK-OUT",
        retDate: "05 Jul '26",
        retSub: "Sunday",
        labelTravellers: "GUEST CLASS",
        travellersVal: "Standard Room",
        travellersSub: "Premium Option"
      },
      villas: {
        labelFrom: "DESTINATION",
        fromCity: "Bali",
        fromSub: "Indonesia",
        labelTo: "VILLAS & GUESTS",
        toCity: "1 Villa",
        toSub: "4 Guests",
        toIcon: "home",
        swapVisible: "none",
        labelDeparture: "CHECK-IN",
        depDate: "10 Jul '26",
        depSub: "Friday",
        labelReturn: "CHECK-OUT",
        retDate: "17 Jul '26",
        retSub: "Friday",
        labelTravellers: "VILLA TYPE",
        travellersVal: "Luxury Pool Villa",
        travellersSub: "Private Access"
      },
      trains: {
        labelFrom: "FROM STATION",
        fromCity: "Coimbatore Jn",
        fromSub: "CBE, Tamil Nadu",
        labelTo: "TO STATION",
        toCity: "Chennai Central",
        toSub: "MAS, Chennai",
        toIcon: "map-pin",
        swapVisible: "flex",
        labelDeparture: "DEPARTURE",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "CLASS",
        retDate: "All Classes",
        retSub: "Sleeper/3AC/2AC",
        labelTravellers: "QUOTA",
        travellersVal: "General",
        travellersSub: "Tatkal/Ladies quota"
      },
      buses: {
        labelFrom: "FROM CITY",
        fromCity: "Coimbatore",
        fromSub: "CBE, Bus Stand",
        labelTo: "TO CITY",
        toCity: "Bengaluru",
        toSub: "Majestic Stand",
        toIcon: "map-pin",
        swapVisible: "flex",
        labelDeparture: "DEPARTURE",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "RETURN",
        retDate: "Add return",
        retSub: "for return trip",
        labelTravellers: "PASSENGERS",
        travellersVal: "1 Passenger",
        travellersSub: "Sleeper/Seater"
      },
      cabs: {
        labelFrom: "FROM ADDRESS",
        fromCity: "Coimbatore Airport",
        fromSub: "CJB, Tamil Nadu",
        labelTo: "TO ADDRESS",
        toCity: "Ooty Outstation",
        toSub: "Hill Station, TN",
        toIcon: "map-pin",
        swapVisible: "flex",
        labelDeparture: "PICKUP DATE",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "TRIP TYPE",
        retDate: "One-Way Trip",
        retSub: "Outstation Cab",
        labelTravellers: "CAB TYPE",
        travellersVal: "4 Seats Sedan",
        travellersSub: "AC Hatchback/SUV"
      },
      holidays: {
        labelFrom: "FROM CITY",
        fromCity: "Mumbai",
        fromSub: "BOM, India",
        labelTo: "DESTINATION",
        toCity: "Maldives Package",
        toSub: "Island Escapes",
        toIcon: "map-pin",
        swapVisible: "none",
        labelDeparture: "START DATE",
        depDate: "15 Jul '26",
        depSub: "Wednesday",
        labelReturn: "DURATION",
        retDate: "5 Nights, 6 Days",
        retSub: "Island Resort",
        labelTravellers: "ROOMS & GUESTS",
        travellersVal: "2 Adults",
        travellersSub: "Premium Suite"
      },
      cruise: {
        labelFrom: "DEPARTURE PORT",
        fromCity: "Singapore Port",
        fromSub: "SIN, Singapore",
        labelTo: "DESTINATION",
        toCity: "Phuket Cruise",
        toSub: "Royal Caribbean",
        toIcon: "ship",
        swapVisible: "none",
        labelDeparture: "CRUISE DATE",
        depDate: "12 Oct '26",
        depSub: "Monday",
        labelReturn: "DURATION",
        retDate: "4 Nights Cruise",
        retSub: "Balcony Room",
        labelTravellers: "CABIN CLASS",
        travellersVal: "2 Adults",
        travellersSub: "Luxury Suite Class"
      },
      visa: {
        labelFrom: "DESTINATION",
        fromCity: "Schengen Visa",
        fromSub: "Europe Entry",
        labelTo: "VISA TYPE",
        toCity: "Tourist Visa",
        toSub: "90 Days Stay",
        toIcon: "file-text",
        swapVisible: "none",
        labelDeparture: "APPLICATION",
        depDate: "Apply Online",
        depSub: "Fast Track Process",
        labelReturn: "APPOINTMENT",
        retDate: "VFS Center",
        retSub: "Doc Checklist Ready",
        labelTravellers: "APPLICANTS",
        travellersVal: "1 Applicant",
        travellersSub: "Tourist Category"
      },
      forex: {
        labelFrom: "SEND CURRENCY",
        fromCity: "INR",
        fromSub: "Indian Rupee",
        labelTo: "RECEIVE CURRENCY",
        toCity: "USD",
        toSub: "US Dollar",
        toIcon: "credit-card",
        swapVisible: "flex",
        labelDeparture: "EXCHANGE RATE",
        depDate: "Current Rate",
        depSub: "Best exchange price",
        labelReturn: "CARD TYPE",
        retDate: "Prepaid Forex Card",
        retSub: "Zero markup rate",
        labelTravellers: "DELIVERY",
        travellersVal: "$1,500 Cash",
        travellersSub: "Home Delivery"
      },
      insurance: {
        labelFrom: "POLICY TYPE",
        fromCity: "Single Trip Cover",
        fromSub: "Worldwide Cover",
        labelTo: "COVER VALUE",
        toCity: "₹10 Lakh Cover",
        toSub: "Zero Deductible",
        toIcon: "shield-check",
        swapVisible: "none",
        labelDeparture: "START DATE",
        depDate: "02 Jul '26",
        depSub: "Thursday",
        labelReturn: "END DATE",
        retDate: "12 Jul '26",
        retSub: "10 Days Coverage",
        labelTravellers: "INSURED GUESTS",
        travellersVal: "1 Insured",
        travellersSub: "Individual Plan"
      }
    };

    const bookingTabs = document.querySelectorAll('.booking-tab');
    bookingTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        bookingTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.getAttribute('data-tab');
        const searchBtnText = btnSearch ? btnSearch.querySelector('span') : null;
        const receiptHeader = document.querySelector('.receipt-title');
        const stubBrand = document.querySelector('.stub-brand');
        const stubTagline = document.querySelector('.stub-tagline');

        // Dynamic Stub & Receipt adaptation based on selected Tab
        if (tabName === 'flights') {
          if (searchBtnText) searchBtnText.textContent = 'SEARCH FLIGHTS';
          if (receiptHeader) receiptHeader.textContent = 'FLIGHT TICKET';
          if (stubBrand) stubBrand.textContent = 'ENJOY YOUR JOURNEY';
          if (stubTagline) stubTagline.innerHTML = 'Safe travels!<br>Have a great trip ahead.';
        } else if (tabName === 'hotels') {
          if (searchBtnText) searchBtnText.textContent = 'SEARCH HOTELS';
          if (receiptHeader) receiptHeader.textContent = 'HOTEL VOUCHER';
          if (stubBrand) stubBrand.textContent = 'ENJOY YOUR STAY';
          if (stubTagline) stubTagline.innerHTML = 'Relax and rejuvenate<br>in style and luxury.';
        } else if (tabName === 'trains') {
          if (searchBtnText) searchBtnText.textContent = 'SEARCH TRAINS';
          if (receiptHeader) receiptHeader.textContent = 'TRAIN TICKET';
          if (stubBrand) stubBrand.textContent = 'EXPLORE BY RAIL';
          if (stubTagline) stubTagline.innerHTML = 'Scenic rail journeys<br>across the landscape.';
        } else {
          const tabText = tab.querySelector('span').textContent;
          if (searchBtnText) searchBtnText.textContent = `SEARCH ${tabText.toUpperCase()}`;
          if (receiptHeader) receiptHeader.textContent = `${tabText.toUpperCase()} RECEIPT`;
          if (stubBrand) stubBrand.textContent = `BOOK YOUR ${tabText.toUpperCase()}`;
          if (stubTagline) stubTagline.innerHTML = `Enjoy your trip<br>with Sparrow premium.`;
        }



        // --- Swapping content logic in card columns ---
        const config = TAB_CONTENT_CONFIG[tabName] || TAB_CONTENT_CONFIG.flights;

        const labelFrom = document.getElementById('label-from');
        const inputFromCity = document.getElementById('input-from-city');
        const inputFromDetails = document.getElementById('input-from-details');
        const labelTo = document.getElementById('label-to');
        const inputToCity = document.getElementById('input-to-city');
        const inputToDetails = document.getElementById('input-to-details');
        const btnSwap = document.getElementById('btn-swap-cities');
        const labelDeparture = document.getElementById('label-departure');
        const dateDepartureDay = document.getElementById('date-departure-day');
        const dateDepartureWeekday = document.getElementById('date-departure-weekday');
        const labelReturn = document.getElementById('label-return');
        const dateReturnDay = document.getElementById('date-return-day');
        const dateReturnSub = document.getElementById('date-return-sub');
        const labelTravellers = document.getElementById('label-travellers');
        const travellersDisplayVal = document.getElementById('travellers-display-val');
        const classDisplayVal = document.getElementById('class-display-val');

        if (labelFrom) labelFrom.textContent = config.labelFrom;
        if (inputFromCity) {
          inputFromCity.value = config.fromCity;
          inputFromCity.dataset.cleanName = config.fromCity;
          inputFromCity.dataset.lastCode = getCityCode(config.fromSub);
        }
        if (inputFromDetails) inputFromDetails.value = config.fromSub;

        if (labelTo) labelTo.textContent = config.labelTo;
        if (inputToCity) {
          inputToCity.value = config.toCity;
          inputToCity.dataset.cleanName = config.toCity;
          inputToCity.dataset.lastCode = getCityCode(config.toSub);
        }
        if (inputToDetails) inputToDetails.value = config.toSub;

        if (btnSwap) {
          btnSwap.style.visibility = config.swapVisible === "flex" ? "visible" : "hidden";
          btnSwap.style.pointerEvents = config.swapVisible === "flex" ? "auto" : "none";
        }

        if (labelDeparture) labelDeparture.textContent = config.labelDeparture;
        if (dateDepartureDay) dateDepartureDay.textContent = config.depDate;
        if (dateDepartureWeekday) dateDepartureWeekday.textContent = config.depSub;

        if (labelReturn) labelReturn.textContent = config.labelReturn;
        if (dateReturnDay) dateReturnDay.textContent = config.retDate;
        if (dateReturnSub) dateReturnSub.textContent = config.retSub;

        if (labelTravellers) labelTravellers.textContent = config.labelTravellers;
        if (travellersDisplayVal) travellersDisplayVal.textContent = config.travellersVal;
        if (classDisplayVal) classDisplayVal.textContent = config.travellersSub;

        // Dynamic icon replacement for TO and FROM wrappers
        const iconToWrapper = document.getElementById('icon-to-wrapper');
        if (iconToWrapper) {
          iconToWrapper.innerHTML = `<i data-lucide="${config.toIcon}" class="input-icon" id="icon-to"></i>`;
        }

        // Sync route code on the right stub receipt
        const receiptFromCode = document.getElementById('receipt-from-code');
        const receiptToCode = document.getElementById('receipt-to-code');
        if (receiptFromCode) receiptFromCode.textContent = getCityCode(config.fromSub);
        if (receiptToCode) receiptToCode.textContent = getCityCode(config.toSub);

        // Make sure Lucide binds to all new/restored elements
        if (window.lucide) {
          window.lucide.createIcons();
        }

        showToast(`Switched booking portal to ${tab.querySelector('span').textContent}`, "info");
      });
    });

    // --- Popular Cities Autocomplete Listeners ---
    function parseAirportInput(inputCity, inputDetails, receiptEl) {
      if (!inputCity) return;

      const handler = () => {
        const val = inputCity.value;
        const match = val.match(/\(([^)]+)\)/); // find 3 letter code inside parentheses
        if (match && match[1]) {
          const code = match[1].trim().toUpperCase();
          const cleanName = val.split('(')[0].trim();

          inputCity.dataset.lastCode = code;
          inputCity.dataset.cleanName = cleanName;

          if (inputDetails) inputDetails.value = `${code}, Airport`;
          if (receiptEl) receiptEl.textContent = code;
          inputCity.value = cleanName;
        } else {
          if (val === inputCity.dataset.cleanName) {
            if (receiptEl && inputCity.dataset.lastCode) {
              receiptEl.textContent = inputCity.dataset.lastCode;
            }
          } else {
            if (receiptEl && val.length >= 3) {
              receiptEl.textContent = getCityCode(val);
            }
          }
        }
      };

      inputCity.addEventListener('input', handler);
      inputCity.addEventListener('change', handler);
    }
    parseAirportInput(inputFromCity, inputFromDetails, receiptFromCode);
    parseAirportInput(inputToCity, inputToDetails, receiptToCode);

    // --- Native Date Pickers Integration ---
    const hiddenDep = document.getElementById('hidden-date-departure');
    const hiddenRet = document.getElementById('hidden-date-return');

    if (hiddenDep) {
      hiddenDep.value = "2026-07-02";
      hiddenDep.addEventListener('change', (e) => {
        const dateVal = new Date(e.target.value);
        if (!isNaN(dateVal.getTime())) {
          const day = String(dateVal.getDate()).padStart(2, '0');
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const month = months[dateVal.getMonth()];
          const year = String(dateVal.getFullYear()).substring(2);
          const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateVal.getDay()];

          const dateDepDay = document.getElementById('date-departure-day');
          const dateDepWeekday = document.getElementById('date-departure-weekday');
          if (dateDepDay) dateDepDay.textContent = `${day} ${month} '${year}`;
          if (dateDepWeekday) dateDepWeekday.textContent = weekday;

          const receiptDate = document.getElementById('receipt-date');
          if (receiptDate) {
            receiptDate.textContent = `${day} ${month.toUpperCase()} ${dateVal.getFullYear()}`;
          }
        }
      });
    }

    if (hiddenRet) {
      hiddenRet.addEventListener('change', (e) => {
        const dateVal = new Date(e.target.value);
        if (!isNaN(dateVal.getTime())) {
          const day = String(dateVal.getDate()).padStart(2, '0');
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const month = months[dateVal.getMonth()];
          const year = String(dateVal.getFullYear()).substring(2);
          const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateVal.getDay()];

          const dateRetDay = document.getElementById('date-return-day');
          const dateRetSub = document.getElementById('date-return-sub');
          if (dateRetDay) dateRetDay.textContent = `${day} ${month} '${year}`;
          if (dateRetSub) dateRetSub.textContent = weekday;

          const btnRoundTrip = document.querySelector('.trip-type-btn[data-type="roundtrip"]');
          if (btnRoundTrip && !btnRoundTrip.classList.contains('active')) {
            btnRoundTrip.click();
          }
        }
      });
    }

    // --- Show Calendar Pickers on Column Click ---
    const colDep = document.getElementById('col-departure');
    const colRet = document.getElementById('col-return');
    if (colDep) {
      colDep.addEventListener('click', () => {
        const input = colDep.querySelector('input[type="date"]');
        if (input && typeof input.showPicker === 'function') {
          input.showPicker();
        }
      });
    }
    if (colRet) {
      colRet.addEventListener('click', () => {
        const input = colRet.querySelector('input[type="date"]');
        if (input && typeof input.showPicker === 'function') {
          input.showPicker();
        }
      });
    }

    // --- Custom Travellers Quantity Dropdown ---
    const colTravellers = document.getElementById('col-travellers');
    const travellersPanel = document.getElementById('travellers-dropdown-panel');
    const btnAdultsMinus = document.getElementById('btn-adults-minus');
    const btnAdultsPlus = document.getElementById('btn-adults-plus');
    const valQtyAdults = document.getElementById('val-qty-adults');
    const btnChildrenMinus = document.getElementById('btn-children-minus');
    const btnChildrenPlus = document.getElementById('btn-children-plus');
    const valQtyChildren = document.getElementById('val-qty-children');
    const dropCabinClass = document.getElementById('dropdown-cabin-class');
    const btnApplyTravellers = document.getElementById('btn-apply-travellers');

    let qtyAdults = 1;
    let qtyChildren = 0;

    if (colTravellers && travellersPanel) {
      colTravellers.addEventListener('click', (e) => {
        if (travellersPanel.contains(e.target)) return;
        const isHidden = travellersPanel.style.display === 'none';
        travellersPanel.style.display = isHidden ? 'flex' : 'none';
      });

      document.addEventListener('click', (e) => {
        if (!colTravellers.contains(e.target)) {
          travellersPanel.style.display = 'none';
        }
      });
    }

    if (btnAdultsMinus && btnAdultsPlus && valQtyAdults) {
      btnAdultsMinus.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (qtyAdults > 1) {
          qtyAdults--;
          valQtyAdults.textContent = qtyAdults;
        }
      });
      btnAdultsPlus.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (qtyAdults < 9) {
          qtyAdults++;
          valQtyAdults.textContent = qtyAdults;
        }
      });
    }

    if (btnChildrenMinus && btnChildrenPlus && valQtyChildren) {
      btnChildrenMinus.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (qtyChildren > 0) {
          qtyChildren--;
          valQtyChildren.textContent = qtyChildren;
        }
      });
      btnChildrenPlus.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (qtyChildren < 9) {
          qtyChildren++;
          valQtyChildren.textContent = qtyChildren;
        }
      });
    }

    if (btnApplyTravellers) {
      btnApplyTravellers.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const total = qtyAdults + qtyChildren;
        const classVal = dropCabinClass ? dropCabinClass.value : 'Economy';

        const displayVal = document.getElementById('travellers-display-val');
        const displaySub = document.getElementById('class-display-val');

        if (displayVal) {
          displayVal.textContent = total > 1 ? `${total} Travellers` : `1 Adult`;
        }
        if (displaySub) {
          displaySub.textContent = classVal;
        }

        const receiptTravellers = document.getElementById('receipt-travellers');
        const receiptClass = document.getElementById('receipt-class');
        if (receiptTravellers) {
          receiptTravellers.textContent = total > 1 ? `${total} Adults` : `1 Adult`;
        }
        if (receiptClass) {
          receiptClass.textContent = classVal;
        }

        travellersPanel.style.display = 'none';
        showToast("Travellers and Class applied!", "success");
      });
    }

    // --- Booking Categories Drag-to-Scroll ---
    const slider = document.querySelector('.booking-tabs-container');
    if (slider) {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
      });
      slider.style.cursor = 'grab';
    }

    // Make sure Lucide binds to all new icons added
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Initialize booking interactives after a brief delay
  setTimeout(initBookingSystem, 250);

  // Active check router triggers
  window.addEventListener('popstate', checkRoute);
  window.addEventListener('hashchange', checkRoute);

  // --- HAMBURGER MENU OVERLAY CONTROL ---
  const hamburgerOverlay = document.getElementById('hamburger-menu-overlay');
  const closeHamburgerBtn = document.getElementById('btn-hamburger-menu-close');
  const hamburgerBackdrop = document.getElementById('hamburger-menu-backdrop');

  // Open menu click handler
  document.addEventListener('click', (e) => {
    const btnMenu = e.target.closest('.btn-menu');
    if (btnMenu && hamburgerOverlay) {
      e.preventDefault();

      // Reveal backdrop first
      if (hamburgerBackdrop) {
        hamburgerBackdrop.style.display = 'block';
        void hamburgerBackdrop.offsetWidth;
        hamburgerBackdrop.style.opacity = '1';
      }

      hamburgerOverlay.style.display = 'flex';
      void hamburgerOverlay.offsetWidth;
      hamburgerOverlay.style.opacity = '1';
      hamburgerOverlay.style.transform = 'translateX(0)';
      hamburgerOverlay.classList.add('open');

      // Detect current path and dynamically tag active page in the drawer menu
      const activeLink = document.querySelector('.nav-links .nav-link.active')?.id || '';
      const path = window.location.pathname;
      const links = hamburgerOverlay.querySelectorAll('.hamburger-link');

      links.forEach(link => {
        link.classList.remove('active-route');
        const target = link.getAttribute('data-target');

        if (target === 'home' && (path === '/' || activeLink.includes('home'))) {
          link.classList.add('active-route');
        } else if (target === 'destinations' && (path.includes('destinations') || activeLink.includes('destinations'))) {
          link.classList.add('active-route');
        } else if (target === 'packages' && (path.includes('packages') || activeLink.includes('packages'))) {
          link.classList.add('active-route');
        } else if (target === 'nest' && (path.includes('nest') || activeLink.includes('nest'))) {
          link.classList.add('active-route');
        } else if (target === 'wishlist' && (path.includes('wishlist') || activeLink.includes('wishlist'))) {
          link.classList.add('active-route');
        }
      });

      if (window.lucide) window.lucide.createIcons();
    }
  });

  // Helper close menu execution
  function closeHamburgerMenu() {
    if (!hamburgerOverlay) return;
    hamburgerOverlay.style.opacity = '0';
    hamburgerOverlay.style.transform = 'translateX(100%)';
    hamburgerOverlay.classList.remove('open');

    if (hamburgerBackdrop) {
      hamburgerBackdrop.style.opacity = '0';
    }

    setTimeout(() => {
      hamburgerOverlay.style.display = 'none';
      if (hamburgerBackdrop) hamburgerBackdrop.style.display = 'none';
    }, 1000);
  }

  // Close menu button click
  if (closeHamburgerBtn) {
    closeHamburgerBtn.addEventListener('click', closeHamburgerMenu);
  }

  // Click outside drawer to close
  if (hamburgerBackdrop) {
    hamburgerBackdrop.addEventListener('click', closeHamburgerMenu);
  }

  // Handle link clicks inside hamburger menu
  if (hamburgerOverlay) {
    hamburgerOverlay.addEventListener('click', (e) => {
      const link = e.target.closest('.hamburger-link');
      if (link) {
        e.preventDefault();
        const target = link.getAttribute('data-target');

        // Start closing animations
        hamburgerOverlay.style.opacity = '0';
        hamburgerOverlay.style.transform = 'translateX(100%)';
        hamburgerOverlay.classList.remove('open');
        if (hamburgerBackdrop) hamburgerBackdrop.style.opacity = '0';

        setTimeout(() => {
          hamburgerOverlay.style.display = 'none';
          if (hamburgerBackdrop) hamburgerBackdrop.style.display = 'none';

          if (target === 'home') {
            window.history.pushState(null, "", "/");
            checkRoute();
          } else if (target === 'destinations') {
            window.history.pushState(null, "", "/destinations");
            checkRoute();
          } else if (target === 'packages') {
            window.history.pushState(null, "", "/packages");
            checkRoute();
          } else if (target === 'nest') {
            window.history.pushState(null, "", "/nest");
            checkRoute();
          } else if (target === 'wishlist') {
            window.history.pushState(null, "", "/wishlist");
            checkRoute();
          }
        }, 1000);
      }
    });
  }

  // Initial mount route check
  setTimeout(checkRoute, 150);

}); // end DOMContentLoaded
