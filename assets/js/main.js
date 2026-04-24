/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);

// ============================================================
// COSMIC BACKGROUND: Three.js Particle Universe with Mouse Interaction
// Inspired by index.html's cosmic sphere and interactive effects
// ============================================================
(function initCosmicBackground() {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;

  // Scene Setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505);
  scene.fog = new THREE.FogExp2(0x050505, 0.0008); // subtle fog for depth

  // Camera: slightly perspective for parallax
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 2, 18);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // --- Create Star Particle System ---
  const starsCount = 2800;
  const starsGeometry = new THREE.BufferGeometry();
  const starsPositions = new Float32Array(starsCount * 3);
  const starsColors = new Float32Array(starsCount * 3);

  // Distribute stars in a spherical shell and some random spread for depth
  for (let i = 0; i < starsCount; i++) {
    // Spherical distribution with radius between 20 and 70 units for immersive depth
    const radius = 25 + Math.random() * 45;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta) * 0.6; // flatten slightly for galactic look
    const z = radius * Math.cos(phi);
    
    starsPositions[i*3] = x;
    starsPositions[i*3+1] = y * 0.8;
    starsPositions[i*3+2] = z;
    
    // Color: white, light blue, occasional warm hue
    const colorChoice = Math.random();
    if (colorChoice < 0.7) {
      starsColors[i*3] = 0.8 + Math.random() * 0.2;
      starsColors[i*3+1] = 0.8 + Math.random() * 0.2;
      starsColors[i*3+2] = 1.0;
    } else if (colorChoice < 0.9) {
      starsColors[i*3] = 1.0;
      starsColors[i*3+1] = 0.6 + Math.random() * 0.3;
      starsColors[i*3+2] = 0.4 + Math.random() * 0.3;
    } else {
      starsColors[i*3] = 0.7 + Math.random() * 0.3;
      starsColors[i*3+1] = 0.5 + Math.random() * 0.4;
      starsColors[i*3+2] = 0.9 + Math.random() * 0.1;
    }
  }
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
  starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
  
  const starMaterial = new THREE.PointsMaterial({
    size: 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });
  const starField = new THREE.Points(starsGeometry, starMaterial);
  scene.add(starField);

  // --- Additional Tiny Distant Stars for depth (larger field) ---
  const distantCount = 1800;
  const distantGeo = new THREE.BufferGeometry();
  const distantPos = new Float32Array(distantCount * 3);
  for (let i = 0; i < distantCount; i++) {
    // Larger radius, more scattered
    const rad = 70 + Math.random() * 50;
    const theta2 = Math.random() * Math.PI * 2;
    const phi2 = Math.acos(2 * Math.random() - 1);
    distantPos[i*3] = rad * Math.sin(phi2) * Math.cos(theta2);
    distantPos[i*3+1] = rad * Math.sin(phi2) * Math.sin(theta2) * 0.5;
    distantPos[i*3+2] = rad * Math.cos(phi2);
  }
  distantGeo.setAttribute('position', new THREE.BufferAttribute(distantPos, 3));
  const distantStars = new THREE.Points(distantGeo, new THREE.PointsMaterial({ color: 0x88aaff, size: 0.08, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }));
  scene.add(distantStars);

  // --- Nebula-like particle cloud (glow effect) ---
  const nebulaCount = 800;
  const nebulaGeo = new THREE.BufferGeometry();
  const nebulaPos = new Float32Array(nebulaCount * 3);
  for (let i = 0; i < nebulaCount; i++) {
    const r = 15 + Math.random() * 35;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    nebulaPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
    nebulaPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta) * 0.4;
    nebulaPos[i*3+2] = r * Math.cos(phi);
  }
  nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
  const nebulaMat = new THREE.PointsMaterial({ color: 0x88aaff, size: 0.25, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending });
  const nebulaCloud = new THREE.Points(nebulaGeo, nebulaMat);
  scene.add(nebulaCloud);

  // --- Central subtle glow (like a distant galaxy core) ---
  const coreGlowGeometry = new THREE.SphereGeometry(1.2, 16, 16);
  const coreGlowMaterial = new THREE.MeshBasicMaterial({ color: 0x88aaff, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
  const coreGlow = new THREE.Mesh(coreGlowGeometry, coreGlowMaterial);
  scene.add(coreGlow);
  
  // Additional particle ring orbiting center (cosmic dust)
  const ringParticleCount = 600;
  const ringGeo = new THREE.BufferGeometry();
  const ringPositions = new Float32Array(ringParticleCount * 3);
  for (let i = 0; i < ringParticleCount; i++) {
    const angle = (i / ringParticleCount) * Math.PI * 2;
    const radiusRing = 6 + Math.sin(i * 0.03) * 1.2;
    const xRing = Math.cos(angle) * radiusRing;
    const zRing = Math.sin(angle) * radiusRing;
    const yRing = Math.sin(angle * 3) * 1.2;
    ringPositions[i*3] = xRing;
    ringPositions[i*3+1] = yRing;
    ringPositions[i*3+2] = zRing;
  }
  ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
  const ringPoints = new THREE.Points(ringGeo, new THREE.PointsMaterial({ color: 0xccddff, size: 0.1, transparent: true, blending: THREE.AdditiveBlending }));
  scene.add(ringPoints);

  // Mouse interaction variables for parallax effect
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  let currentRotationX = 0, currentRotationY = 0;
  
  document.addEventListener('mousemove', (event) => {
    // Normalize mouse coordinates between -1 and 1
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    targetRotationY = mouseX * 0.3;    // rotate left/right
    targetRotationX = mouseY * 0.2;    // rotate up/down
  });
  
  // Animation loop: rotate starfield and nebula based on mouse with smooth interpolation
  let time = 0;
  function animateCosmic() {
    requestAnimationFrame(animateCosmic);
    time += 0.002;
    
    // Smooth follow for mouse parallax
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    
    // Apply subtle auto-rotation for stars
    starField.rotation.y = currentRotationY * 0.8 + time * 0.05;
    starField.rotation.x = currentRotationX * 0.6;
    starField.rotation.z = currentRotationX * 0.2;
    
    distantStars.rotation.y = currentRotationY * 0.4 - time * 0.02;
    distantStars.rotation.x = currentRotationX * 0.3;
    
    nebulaCloud.rotation.y = currentRotationY * 0.5 + time * 0.03;
    nebulaCloud.rotation.x = currentRotationX * 0.4;
    
    ringPoints.rotation.y = time * 0.2;
    ringPoints.rotation.x = Math.sin(time * 0.5) * 0.1;
    
    coreGlow.rotation.y += 0.005;
    
    // Camera subtle movement based on mouse for depth parallax
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
  }
  
  animateCosmic();
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  // Add a tiny twinkling effect via CSS? Not necessary, but particles already add depth.
})();


// main2.js - 在原有文件末尾追加星系知识图谱核心逻辑
/**
 * 星系知识图谱模块
 * 功能：基于 list.json 构建恒星-行星-卫星三级结构，绘制星链连线，点击节点在新窗口渲染 Markdown 文章
 */
/**
 /**
  * 星系知识图谱模块 - 拟真天体 + 滚轮缩放 + 鼠标拖拽平移
  */
 (function GalaxyKnowledgeGraph() {
     let animationId = null;
     let nodes = [];
     let starsData = [];
     let dustParticles = [];
     let starLinks = [];
     
     let width, height;
     let canvas, ctx;
     let container;
     let time = 0;
     
     let planetsOrbit = [];
     let satellitesOrbit = [];
     
     // 缩放因子 (范围 0.3 ~ 2.5)，初始视野更大
     let scaleFactor = 0.65;
     const MIN_SCALE = 0.3;
     const MAX_SCALE = 2.5;
     
     // 平移偏移量（世界坐标系偏移，单位：像素）
     let panX = 0;
     let panY = 0;
     
     // 拖拽状态
     let isDragging = false;
     let dragStartX = 0, dragStartY = 0;
     let dragStartPanX = 0, dragStartPanY = 0;
     
     // 布局基础参数（不包含缩放）
     let baseStarOrbitRadius = 0;      // 将在 resize 中计算
     const basePlanetOrbit = 85;
     const baseSatelliteOrbit = 45;
     const baseStarRadius = 28;
     const basePlanetRadius = 18;
     const baseSatelliteRadius = 10;
     
     async function initGalaxyGraph() {
         container = document.getElementById('galaxy-container');
         canvas = document.getElementById('galaxyCanvas');
         if (!container || !canvas) return;
         
         let galaxyData = null;
         try {
             const response = await fetch('projects/list.json');
             if (!response.ok) throw new Error(`HTTP ${response.status}`);
             galaxyData = await response.json();
         } catch(e) {
             console.error("加载星系数据失败", e);
             return;
         }
         
         const starsRaw = galaxyData.galaxies;
         starsData = starsRaw.map(g => g.star);
         
         resizeCanvas();
         window.addEventListener('resize', () => { resizeCanvas(); rebuildGalaxy(); });
         
         // 滚轮缩放
         canvas.addEventListener('wheel', (e) => {
             e.preventDefault();
             const delta = e.deltaY > 0 ? -0.05 : 0.05;
             const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scaleFactor + delta));
             if (newScale !== scaleFactor) {
                 scaleFactor = newScale;
                 rebuildGalaxy();
             }
         }, { passive: false });
         
         // 鼠标拖拽平移
         canvas.addEventListener('mousedown', (e) => {
             // 只响应左键，并且避免点到节点时触发拖拽（节点拖拽可能干扰点击，这里允许点击节点时也拖拽但会与点击打开文章冲突，所以仅在空白区域启动拖拽）
             if (e.button !== 0) return;
             // 简单判断：如果鼠标下方有节点，则不启动拖拽（保持点击打开文章的功能）
             const { mx, my } = getMousePos(e);
             const nodeUnderCursor = findNodeAt(mx, my);
             if (nodeUnderCursor) return;
             
             isDragging = true;
             dragStartX = e.clientX;
             dragStartY = e.clientY;
             dragStartPanX = panX;
             dragStartPanY = panY;
             canvas.style.cursor = 'grabbing';
             e.preventDefault();
         });
         
         window.addEventListener('mousemove', (e) => {
             if (!isDragging) return;
             const dx = e.clientX - dragStartX;
             const dy = e.clientY - dragStartY;
             panX = dragStartPanX + dx;
             panY = dragStartPanY + dy;
             rebuildGalaxy();
         });
         
         window.addEventListener('mouseup', () => {
             if (isDragging) {
                 isDragging = false;
                 canvas.style.cursor = 'default';
             }
         });
         
         rebuildGalaxy();
         initDustParticles();
         
         if (animationId) cancelAnimationFrame(animationId);
         animationId = requestAnimationFrame(animate);
         
         setupMouseEvents();
     }
     
     // 辅助：获取鼠标在 canvas 坐标系中的位置（未经过平移/缩放变换，因为节点坐标已经是屏幕坐标）
     function getMousePos(e) {
         const rect = canvas.getBoundingClientRect();
         const scaleX = canvas.width / rect.width;
         const scaleY = canvas.height / rect.height;
         const mx = (e.clientX - rect.left) * scaleX;
         const my = (e.clientY - rect.top) * scaleY;
         return { mx, my };
     }
     
     // 查找节点（基于当前 nodes 数组）
     function findNodeAt(mx, my) {
         for (let i = nodes.length-1; i >= 0; i--) {
             const n = nodes[i];
             const dx = mx - n.x, dy = my - n.y;
             if (Math.hypot(dx, dy) <= n.radius + 8) return n;
         }
         return null;
     }
     
     function resizeCanvas() {
         width = container.clientWidth;
         height = container.clientHeight;
         canvas.width = width;
         canvas.height = height;
         ctx = canvas.getContext('2d');
         // 恒星轨道半径基数：基于容器最小边长的 0.4 倍（视野更广）
         baseStarOrbitRadius = Math.min(width, height) * 0.4;
     }
     
     function rebuildGalaxy() {
         nodes = [];
         planetsOrbit = [];
         satellitesOrbit = [];
         starLinks = [];
         
         // 应用缩放后的实际尺寸
         const starOrbitRadius = baseStarOrbitRadius * scaleFactor;
         const planetOrbitBase = basePlanetOrbit * scaleFactor;
         const satelliteOrbitBase = baseSatelliteOrbit * scaleFactor;
         
         // 视图中心 = 画布中心 + 平移偏移量
         const centerX = width / 2 + panX;
         const centerY = height / 2 + panY;
         const starCount = starsData.length;
         
         const starPositions = [];
         for (let i = 0; i < starCount; i++) {
             const angle = (i / starCount) * Math.PI * 2;
             const x = centerX + Math.cos(angle) * starOrbitRadius;
             const y = centerY + Math.sin(angle) * starOrbitRadius * 0.8;
             const star = starsData[i];
             starPositions.push({ x, y, star });
             const radius = (star.radius || baseStarRadius) * scaleFactor;
             nodes.push({
                 x, y,
                 radius: radius,
                 type: 'star',
                 name: star.name,
                 mdPath: star.md,
                 color: star.color || '#FFD966',
                 data: star
             });
         }
         
         // 恒星连线
         for (let i = 0; i < starPositions.length; i++) {
             for (let j = i+1; j < starPositions.length; j++) {
                 starLinks.push({
                     from: starPositions[i],
                     to: starPositions[j],
                     flowOffset: Math.random() * Math.PI * 2
                 });
             }
         }
         
         for (let sIdx = 0; sIdx < starPositions.length; sIdx++) {
             const starPos = starPositions[sIdx];
             const star = starPos.star;
             const planets = star.planets || [];
             
             for (let pIdx = 0; pIdx < planets.length; pIdx++) {
                 const planet = planets[pIdx];
                 const orbitRadius = planetOrbitBase + (pIdx * 15 * scaleFactor);
                 const angleOffset = (pIdx / planets.length) * Math.PI * 2;
                 const speed = 0.004 + Math.random() * 0.003;
                 const planetRadius = (planet.radius || basePlanetRadius) * scaleFactor;
                 const planetNode = {
                     radius: planetRadius,
                     type: 'planet',
                     name: planet.name,
                     mdPath: planet.md,
                     color: planet.color || '#6C9FFF',
                     data: planet
                 };
                 planetsOrbit.push({
                     node: planetNode,
                     centerX: starPos.x,
                     centerY: starPos.y,
                     radius: orbitRadius,
                     angle: angleOffset,
                     speed: speed,
                     parentStar: starPos
                 });
                 
                 const satellites = planet.satellites || [];
                 for (let satIdx = 0; satIdx < satellites.length; satIdx++) {
                     const sat = satellites[satIdx];
                     const satOrbitRadius = satelliteOrbitBase + (satIdx * 10 * scaleFactor);
                     const satAngleOffset = (satIdx / Math.max(satellites.length,1)) * Math.PI * 2;
                     const satSpeed = 0.010 + Math.random() * 0.006;
                     const satRadius = (sat.radius || baseSatelliteRadius) * scaleFactor;
                     satellitesOrbit.push({
                         node: {
                             radius: satRadius,
                             type: 'satellite',
                             name: sat.name,
                             mdPath: sat.md,
                             color: sat.color || '#B0BEC5',
                             data: sat
                         },
                         centerX: 0,
                         centerY: 0,
                         radius: satOrbitRadius,
                         angle: satAngleOffset,
                         speed: satSpeed,
                         parentPlanetIndex: planetsOrbit.length - 1
                     });
                 }
             }
         }
         updateSatelliteCenters();
     }
     
     function updateSatelliteCenters() {
         for (let sat of satellitesOrbit) {
             const parentPlanet = planetsOrbit[sat.parentPlanetIndex];
             if (parentPlanet) {
                 const planetX = parentPlanet.centerX + Math.cos(parentPlanet.angle) * parentPlanet.radius;
                 const planetY = parentPlanet.centerY + Math.sin(parentPlanet.angle) * parentPlanet.radius * 0.7;
                 sat.centerX = planetX;
                 sat.centerY = planetY;
             }
         }
     }
     
     function initDustParticles() {
         const count = 600;
         dustParticles = [];
         for (let i = 0; i < count; i++) {
             dustParticles.push({
                 x: Math.random() * width,
                 y: Math.random() * height,
                 radius: 1 + Math.random() * 2,
                 alpha: 0.3 + Math.random() * 0.5,
                 speedX: (Math.random() - 0.5) * 0.2,
                 speedY: (Math.random() - 0.5) * 0.1,
             });
         }
     }
     
     function updateDust() {
         for (let p of dustParticles) {
             p.x += p.speedX;
             p.y += p.speedY;
             if (p.x < 0) p.x = width;
             if (p.x > width) p.x = 0;
             if (p.y < 0) p.y = height;
             if (p.y > height) p.y = 0;
         }
     }
     
     function hexToRgb(hex) {
         let c = hex.substring(1);
         if (c.length === 3) c = c.split('').map(ch => ch+ch).join('');
         const intVal = parseInt(c, 16);
         const r = (intVal >> 16) & 255;
         const g = (intVal >> 8) & 255;
         const b = intVal & 255;
         return { r, g, b };
     }
     
     // 绘制函数（与原相同，略作保留）
     function drawStarGlow(x, y, radius, color, pulse) {
         const rgb = hexToRgb(color);
         ctx.shadowBlur = 0;
         const gradOuter = ctx.createRadialGradient(x, y, radius*0.3, x, y, radius*2.2);
         gradOuter.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`);
         gradOuter.addColorStop(0.6, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`);
         gradOuter.addColorStop(1, 'rgba(0,0,0,0)');
         ctx.beginPath();
         ctx.arc(x, y, radius * 2.2, 0, Math.PI*2);
         ctx.fillStyle = gradOuter;
         ctx.fill();
         
         const gradCore = ctx.createRadialGradient(x - radius*0.2, y - radius*0.2, radius*0.2, x, y, radius);
         gradCore.addColorStop(0, '#fff8e0');
         gradCore.addColorStop(0.4, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
         gradCore.addColorStop(1, `rgb(${rgb.r*0.7}, ${rgb.g*0.7}, ${rgb.b*0.7})`);
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI*2);
         ctx.fillStyle = gradCore;
         ctx.fill();
         
         const pulseAlpha = 0.4 + pulse * 0.3;
         ctx.beginPath();
         ctx.arc(x, y, radius * (0.9 + pulse*0.1), 0, Math.PI*2);
         ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${pulseAlpha})`;
         ctx.fill();
         
         ctx.save();
         ctx.shadowBlur = 0;
         ctx.globalCompositeOperation = 'lighter';
         for (let i = 0; i < 12; i++) {
             const angle = (i / 12) * Math.PI * 2 + time;
             const dx = Math.cos(angle) * radius * 1.8;
             const dy = Math.sin(angle) * radius * 1.8;
             const gradRay = ctx.createLinearGradient(x, y, x+dx, y+dy);
             gradRay.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`);
             gradRay.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
             ctx.beginPath();
             ctx.moveTo(x, y);
             ctx.lineTo(x+dx*0.7, y+dy*0.7);
             ctx.lineTo(x+dx, y+dy);
             ctx.fillStyle = gradRay;
             ctx.fill();
         }
         ctx.restore();
         
         ctx.save();
         ctx.globalCompositeOperation = 'overlay';
         for (let i = 0; i < 80; i++) {
             const angle = Math.random() * Math.PI * 2;
             const r = radius * (0.3 + Math.random() * 0.7);
             const dx = Math.cos(angle) * r;
             const dy = Math.sin(angle) * r;
             ctx.beginPath();
             ctx.arc(x+dx, y+dy, radius * 0.05, 0, Math.PI*2);
             ctx.fillStyle = `rgba(255,200,100,${Math.random() * 0.5})`;
             ctx.fill();
         }
         ctx.restore();
     }
     
     function drawPlanet(x, y, radius, color) {
         const rgb = hexToRgb(color);
         const grad = ctx.createRadialGradient(x - radius*0.3, y - radius*0.3, radius*0.1, x, y, radius);
         grad.addColorStop(0, `rgb(${rgb.r+60}, ${rgb.g+60}, ${rgb.b+60})`);
         grad.addColorStop(0.5, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
         grad.addColorStop(1, `rgb(${rgb.r*0.5}, ${rgb.g*0.5}, ${rgb.b*0.5})`);
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI*2);
         ctx.fillStyle = grad;
         ctx.fill();
         
         const shadowGrad = ctx.createLinearGradient(x - radius*0.5, y - radius*0.5, x + radius*0.5, y + radius*0.5);
         shadowGrad.addColorStop(0, 'rgba(0,0,0,0)');
         shadowGrad.addColorStop(0.7, 'rgba(0,0,0,0.4)');
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI*2);
         ctx.fillStyle = shadowGrad;
         ctx.fill();
         
         ctx.beginPath();
         ctx.arc(x, y, radius + 3, 0, Math.PI*2);
         ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
         ctx.fill();
         
         ctx.globalCompositeOperation = 'overlay';
         for (let i = 0; i < 60; i++) {
             const angle = Math.random() * Math.PI * 2;
             const r = radius * (0.2 + Math.random() * 0.8);
             const dx = Math.cos(angle) * r;
             const dy = Math.sin(angle) * r;
             ctx.beginPath();
             ctx.arc(x+dx, y+dy, radius * 0.04, 0, Math.PI*2);
             ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.3})`;
             ctx.fill();
         }
         ctx.globalCompositeOperation = 'source-over';
     }
     
     function drawSatellite(x, y, radius, color) {
         const rgb = hexToRgb(color);
         const grad = ctx.createRadialGradient(x - radius*0.3, y - radius*0.3, radius*0.1, x, y, radius);
         grad.addColorStop(0, `rgb(${rgb.r+40}, ${rgb.g+40}, ${rgb.b+40})`);
         grad.addColorStop(1, `rgb(${rgb.r*0.6}, ${rgb.g*0.6}, ${rgb.b*0.6})`);
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI*2);
         ctx.fillStyle = grad;
         ctx.fill();
         
         const shadowGrad = ctx.createLinearGradient(x - radius*0.4, y - radius*0.4, x + radius*0.4, y + radius*0.4);
         shadowGrad.addColorStop(0, 'rgba(0,0,0,0)');
         shadowGrad.addColorStop(0.8, 'rgba(0,0,0,0.5)');
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI*2);
         ctx.fillStyle = shadowGrad;
         ctx.fill();
     }
     
     function drawOrbitRing(cx, cy, radius, color) {
         ctx.save();
         ctx.shadowBlur = 0;
         ctx.beginPath();
         ctx.ellipse(cx, cy, radius, radius*0.7, 0, 0, Math.PI*2);
         ctx.strokeStyle = `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, 0.35)`;
         ctx.setLineDash([6, 10]);
         ctx.lineWidth = 1.5;
         ctx.stroke();
         const t = (time * 0.2) % 1;
         const angle = t * Math.PI * 2;
         const x = cx + Math.cos(angle) * radius;
         const y = cy + Math.sin(angle) * radius * 0.7;
         ctx.beginPath();
         ctx.arc(x, y, 2.5, 0, Math.PI*2);
         ctx.fillStyle = `rgb(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b})`;
         ctx.fill();
         ctx.setLineDash([]);
         ctx.restore();
     }
     
     function drawStarLinksFlow() {
         for (let link of starLinks) {
             const from = link.from;
             const to = link.to;
             ctx.beginPath();
             ctx.moveTo(from.x, from.y);
             ctx.lineTo(to.x, to.y);
             ctx.strokeStyle = 'rgba(255,200,100,0.4)';
             ctx.lineWidth = 1.2;
             ctx.setLineDash([4, 8]);
             ctx.stroke();
             ctx.setLineDash([]);
             
             const t = (time * 0.25 + link.flowOffset) % 1;
             const x = from.x + (to.x - from.x) * t;
             const y = from.y + (to.y - from.y) * t;
             ctx.beginPath();
             ctx.arc(x, y, 3, 0, Math.PI*2);
             ctx.fillStyle = '#ffcc77';
             ctx.shadowBlur = 8;
             ctx.fill();
             ctx.shadowBlur = 0;
         }
     }
     
     function drawLabels() {
         ctx.font = '12px "Poppins", "Segoe UI"';
         ctx.fillStyle = 'rgba(255,240,200,0.85)';
         ctx.shadowBlur = 0;
         for (let node of nodes) {
             if (node.type === 'star') {
                 ctx.font = `bold ${Math.max(12, 14 * scaleFactor)}px "Orbitron"`;
                 ctx.fillStyle = '#FFE4A0';
                 ctx.fillText(node.name, node.x - node.radius - 5, node.y - node.radius - 6);
             } else {
                 ctx.font = `${Math.max(10, 11 * scaleFactor)}px "Poppins"`;
                 ctx.fillStyle = '#CCC';
                 ctx.fillText(node.name, node.x - node.radius - 2, node.y - node.radius - 4);
             }
         }
         for (let p of planetsOrbit) {
             const x = p.centerX + Math.cos(p.angle) * p.radius;
             const y = p.centerY + Math.sin(p.angle) * p.radius * 0.7;
             ctx.font = `${Math.max(10, 11 * scaleFactor)}px "Poppins"`;
             ctx.fillStyle = '#CCC';
             ctx.fillText(p.node.name, x - p.node.radius - 2, y - p.node.radius - 4);
         }
         for (let s of satellitesOrbit) {
             const x = s.centerX + Math.cos(s.angle) * s.radius;
             const y = s.centerY + Math.sin(s.angle) * s.radius * 0.7;
             ctx.font = `${Math.max(9, 10 * scaleFactor)}px "Poppins"`;
             ctx.fillStyle = '#AAA';
             ctx.fillText(s.node.name, x - s.node.radius - 2, y - s.node.radius - 4);
         }
     }
     
     function drawDust() {
         for (let p of dustParticles) {
             ctx.beginPath();
             ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
             ctx.fillStyle = `rgba(180, 200, 255, ${p.alpha * 0.4})`;
             ctx.fill();
         }
     }
     
     function updateOrbits() {
         for (let p of planetsOrbit) {
             p.angle += p.speed;
         }
         for (let s of satellitesOrbit) {
             const parent = planetsOrbit[s.parentPlanetIndex];
             if (parent) {
                 s.centerX = parent.centerX + Math.cos(parent.angle) * parent.radius;
                 s.centerY = parent.centerY + Math.sin(parent.angle) * parent.radius * 0.7;
                 s.angle += s.speed;
             }
         }
         nodes = nodes.filter(n => n.type === 'star');
         for (let p of planetsOrbit) {
             const x = p.centerX + Math.cos(p.angle) * p.radius;
             const y = p.centerY + Math.sin(p.angle) * p.radius * 0.7;
             nodes.push({
                 x, y,
                 radius: p.node.radius,
                 type: p.node.type,
                 name: p.node.name,
                 mdPath: p.node.mdPath,
                 color: p.node.color
             });
         }
         for (let s of satellitesOrbit) {
             const x = s.centerX + Math.cos(s.angle) * s.radius;
             const y = s.centerY + Math.sin(s.angle) * s.radius * 0.7;
             nodes.push({
                 x, y,
                 radius: s.node.radius,
                 type: s.node.type,
                 name: s.node.name,
                 mdPath: s.node.mdPath,
                 color: s.node.color
             });
         }
     }
     
     let hoverNode = null;
     let tooltipDiv = null;
     
     function setupMouseEvents() {
         // 注意：mousedown 已在前面用于拖拽，这里需要避免冲突
         // 将点击事件单独处理，拖拽时不触发点击
         let clickPrevented = false;
         
         canvas.addEventListener('mousedown', (e) => {
             // 如果点击在节点上，不启动拖拽（已经在全局 mousedown 中判断并设置 isDragging）
             // 这里记录一下是否即将拖拽
             if (!isDragging) clickPrevented = false;
             else clickPrevented = true;
         });
         
         canvas.addEventListener('click', async (e) => {
             if (clickPrevented) {
                 clickPrevented = false;
                 return;
             }
             const { mx, my } = getMousePos(e);
             const node = findNodeAt(mx, my);
             if (node && node.mdPath) {
                 try {
                     const resp = await fetch(node.mdPath);
                     if (!resp.ok) throw new Error();
                     const md = await resp.text();
                     const html = marked.parse(md);
                     const win = window.open();
                     win.document.write(`
                         <html><head><title>${node.name}</title><meta charset="UTF-8"><style>
                             body{ background:#0a0f1a; color:#ddd; font-family: 'Segoe UI', sans-serif; padding:2rem; max-width:900px; margin:auto; }
                             h1,h2,h3{ color:#ffd966; }
                             pre{ background:#1e2a36; padding:1rem; border-radius:12px; }
                             blockquote{ border-left:4px solid #ffaa33; background:#11161f; padding:0.5rem 1rem; }
                         </style></head><body>${html}<hr/><p style="text-align:center">✨ 来自星际知识图谱 ✨</p></body></html>
                     `);
                     win.document.close();
                 } catch(err) {
                     alert(`无法打开文章: ${node.mdPath}`);
                 }
             }
         });
         
         canvas.addEventListener('mousemove', (e) => {
             const { mx, my } = getMousePos(e);
             const node = findNodeAt(mx, my);
             if (node !== hoverNode) {
                 hoverNode = node;
                 if (node) {
                     if (!tooltipDiv) {
                         tooltipDiv = document.createElement('div');
                         tooltipDiv.className = 'galaxy-tooltip';
                         document.body.appendChild(tooltipDiv);
                     }
                     tooltipDiv.style.left = (e.clientX + 15) + 'px';
                     tooltipDiv.style.top = (e.clientY - 30) + 'px';
                     tooltipDiv.innerHTML = `✨ ${node.name} ✨`;
                     tooltipDiv.style.opacity = '1';
                 } else if (tooltipDiv) {
                     tooltipDiv.style.opacity = '0';
                 }
             } else if (node && tooltipDiv) {
                 tooltipDiv.style.left = (e.clientX + 15) + 'px';
             }
         });
         
         canvas.addEventListener('mouseleave', () => {
             hoverNode = null;
             if (tooltipDiv) tooltipDiv.style.opacity = '0';
         });
     }
     
     let pulse = 0;
     function animate() {
         if (!ctx) return;
         time += 0.02;
         pulse = 0.5 + Math.sin(time * 1.5) * 0.3;
         
         ctx.clearRect(0, 0, width, height);
         
         updateOrbits();
         updateDust();
         
         drawDust();
         drawStarLinksFlow();
         
         for (let p of planetsOrbit) {
             drawOrbitRing(p.centerX, p.centerY, p.radius, p.node.color);
         }
         for (let s of satellitesOrbit) {
             drawOrbitRing(s.centerX, s.centerY, s.radius, s.node.color);
         }
         
         for (let node of nodes) {
             if (node.type === 'star') {
                 drawStarGlow(node.x, node.y, node.radius, node.color, pulse);
             } else if (node.type === 'planet') {
                 drawPlanet(node.x, node.y, node.radius, node.color);
             } else {
                 drawSatellite(node.x, node.y, node.radius, node.color);
             }
         }
         
         drawLabels();
         
         if (hoverNode) {
             ctx.beginPath();
             ctx.arc(hoverNode.x, hoverNode.y, hoverNode.radius + 5, 0, Math.PI*2);
             ctx.strokeStyle = '#FFE484';
             ctx.lineWidth = 2;
             ctx.shadowBlur = 12;
             ctx.shadowColor = '#FFAA55';
             ctx.stroke();
             ctx.shadowBlur = 0;
         }
         
         animationId = requestAnimationFrame(animate);
     }
     
     $(document).ready(() => {
         initGalaxyGraph();
     });
 })();
 
 (function() {
  // 获取元素
  const wrapper = document.querySelector('.circle-img-wrapper');
  const canvas = document.getElementById('gradientArcCanvas');
  let ctx = canvas.getContext('2d');
  let animationFrameId = null;
  let angle = 0; // 当前旋转角度（弧度）

  // 可调节参数
  const CONFIG = {
    arcLength: 220,        // 弧线长度（角度），单位：度，220度 ≈ 3/4圈
    radiusPercent: 0.92,   // 圆弧半径相对于圆形图片半径的比例（0.92 稍微内缩，看起来像环绕图片）
    startWidth: 6,         // 线条起点宽度（像素，粗）
    endWidth: 0.5,         // 线条终点宽度（像素，细）
    lineColor: 'white',    // 线条颜色
    glowSize: 8,           // 光晕强度（像素）
    rotationSpeed: 0.015,  // 旋转速度（弧度每帧，约每秒0.9弧度，完整一圈约7秒）
  };

  // 设置canvas尺寸为高清（处理retina）
  function resizeCanvas() {
    const rect = wrapper.getBoundingClientRect();
    const size = rect.width;
    if (size === 0) return;

    // 实际canvas像素尺寸（物理像素）
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    drawArc(); // 尺寸改变后重绘
  }

  // 绘制带宽度渐变的圆弧
  function drawArc() {
    if (!ctx) return;
    const size = wrapper.clientWidth;
    if (size === 0) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = (size / 2) * CONFIG.radiusPercent;

    // 弧线起始角度和结束角度（弧度），基于当前旋转角度
    const startAngleRad = angle;
    const endAngleRad = angle + (CONFIG.arcLength * Math.PI / 180);
    
    // 清理画布（只清除画布区域，保留透明背景）
    ctx.clearRect(0, 0, size, size);
    
    // 保存状态
    ctx.save();
    ctx.shadowBlur = CONFIG.glowSize;
    ctx.shadowColor = 'white';
    
    // 圆弧路径（不绘制，只用于测量长度？Canvas无法直接渐变宽度，所以我们将弧线分解成多个小线段）
    // 方法：将圆弧细分N段，每段用不同的线宽（从粗到细线性插值）
    const segments = 120;   // 分段数，越大渐变越平滑
    const deltaTheta = (endAngleRad - startAngleRad) / segments;
    
    let currentTheta = startAngleRad;
    for (let i = 0; i < segments; i++) {
      const theta1 = currentTheta;
      const theta2 = currentTheta + deltaTheta;
      
      // 计算当前段的中心角度（用于宽度插值）
      const t = i / segments;  // 0 到 1，从起点到终点
      // 宽度线性插值：起点宽 -> 终点宽
      const lineWidth = CONFIG.startWidth + (CONFIG.endWidth - CONFIG.startWidth) * t;
      
      // 计算起点和终点坐标
      const x1 = centerX + radius * Math.cos(theta1);
      const y1 = centerY + radius * Math.sin(theta1);
      const x2 = centerX + radius * Math.cos(theta2);
      const y2 = centerY + radius * Math.sin(theta2);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = CONFIG.lineColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      currentTheta = theta2;
    }
    
    ctx.restore();
  }
  
  // 动画循环：更新角度并重绘
  function animate() {
    angle += CONFIG.rotationSpeed;
    // 角度无需取模，因为不断增长不影响绘图（三角函数周期性）
    drawArc();
    animationFrameId = requestAnimationFrame(animate);
  }
  
  // 监听窗口大小变化，重新调整canvas尺寸
  let resizeObserver;
  function init() {
    resizeCanvas();
    animate();
    
    // 监听父容器尺寸变化（响应式）
    resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    if (wrapper) {
      resizeObserver.observe(wrapper);
    }
    window.addEventListener('resize', () => {
      resizeCanvas();
    });
  }
  
  // 确保DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


(function() {
        // ---------- DOM 元素 ----------
        const viewerOverlay = document.getElementById('universalImageViewer');
        const viewport = document.getElementById('viewerViewport');
        const imageWrapper = document.getElementById('imageWrapper');
        const viewerImg = document.getElementById('viewerImg');
        const resetBtn = document.getElementById('resetViewBtn');
        const closeBtn = document.getElementById('closeViewerBtn');
        const loadingTip = document.getElementById('loadingTip');
        const toolbar = document.getElementById('viewerToolbar');

        // ---------- 状态变量 ----------
        let scale = 1;
        let translateX = 0;
        let translateY = 0;

        let originalImgWidth = 0;
        let originalImgHeight = 0;
        let viewportWidth = 0;
        let viewportHeight = 0;

        let isDragging = false;
        let dragStartX = 0, dragStartY = 0;
        let dragStartTranslateX = 0, dragStartTranslateY = 0;

        const MIN_SCALE = 0.2;
        const MAX_SCALE = 8;

        // 当前打开的图片地址，用于预防重复加载
        let currentOpenedSrc = '';

        // 工具栏拖拽时禁用指针 (防止误触)
        function setToolbarInteractive(enable) {
            if (!toolbar) return;
            if (enable) {
                toolbar.classList.remove('disable-pointer');
            } else {
                toolbar.classList.add('disable-pointer');
            }
        }

        // 更新变换
        function updateTransform() {
            if (!imageWrapper) return;
            imageWrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }

        // 重置视图：让图片完整居中显示（适应屏幕）
        function resetToFit() {
            if (!originalImgWidth || !originalImgHeight || !viewportWidth || !viewportHeight) return;
            // 保留适量边距 (40px)
            const fitScaleX = (viewportWidth - 40) / originalImgWidth;
            const fitScaleY = (viewportHeight - 40) / originalImgHeight;
            let fitScale = Math.min(fitScaleX, fitScaleY);
            fitScale = Math.min(Math.max(fitScale, MIN_SCALE), 3.0);
            scale = fitScale;
            const scaledWidth = originalImgWidth * scale;
            const scaledHeight = originalImgHeight * scale;
            translateX = (viewportWidth - scaledWidth) / 2;
            translateY = (viewportHeight - scaledHeight) / 2;
            updateTransform();
        }

        function updateViewportSize() {
            if (viewport) {
                const rect = viewport.getBoundingClientRect();
                viewportWidth = rect.width;
                viewportHeight = rect.height;
            }
        }

        // 以鼠标位置为中心的缩放
        function zoomAtMouse(clientX, clientY, deltaY) {
            if (!originalImgWidth || !originalImgHeight) return;

            const rect = viewport.getBoundingClientRect();
            let mouseX = clientX - rect.left;
            let mouseY = clientY - rect.top;
            if (mouseX < 0 || mouseX > viewportWidth || mouseY < 0 || mouseY > viewportHeight) {
                mouseX = viewportWidth / 2;
                mouseY = viewportHeight / 2;
            }

            const deltaFactor = deltaY > 0 ? 0.9 : 1.1;
            let newScale = scale * deltaFactor;
            newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale));
            if (newScale === scale) return;

            const imgX = (mouseX - translateX) / scale;
            const imgY = (mouseY - translateY) / scale;

            let newTranslateX = mouseX - imgX * newScale;
            let newTranslateY = mouseY - imgY * newScale;

            const scaledW = originalImgWidth * newScale;
            const scaledH = originalImgHeight * newScale;
            const maxOffsetX = Math.max(scaledW - viewportWidth, 0) + 200;
            const maxOffsetY = Math.max(scaledH - viewportHeight, 0) + 200;
            newTranslateX = Math.min(maxOffsetX, Math.max(-maxOffsetX, newTranslateX));
            newTranslateY = Math.min(maxOffsetY, Math.max(-maxOffsetY, newTranslateY));

            scale = newScale;
            translateX = newTranslateX;
            translateY = newTranslateY;
            updateTransform();
        }

        // 拖拽逻辑 (带工具栏禁用)
        function onMouseDown(e) {
            if (e.button !== 0) return;
            e.preventDefault();
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartTranslateX = translateX;
            dragStartTranslateY = translateY;
            viewport.style.cursor = 'grabbing';
            setToolbarInteractive(false);
        }

        function onMouseMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            let newTranslateX = dragStartTranslateX + dx;
            let newTranslateY = dragStartTranslateY + dy;

            if (originalImgWidth && originalImgHeight) {
                const scaledW = originalImgWidth * scale;
                const scaledH = originalImgHeight * scale;
                const maxShiftX = Math.max(scaledW, viewportWidth) + 300;
                const maxShiftY = Math.max(scaledH, viewportHeight) + 300;
                newTranslateX = Math.min(maxShiftX, Math.max(-maxShiftX, newTranslateX));
                newTranslateY = Math.min(maxShiftY, Math.max(-maxShiftY, newTranslateY));
            }
            translateX = newTranslateX;
            translateY = newTranslateY;
            updateTransform();
        }

        function onMouseUp(e) {
            if (!isDragging) return;
            isDragging = false;
            viewport.style.cursor = 'grab';
            setToolbarInteractive(true);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        function bindDragEvents() {
            viewport.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }

        function unbindDragEvents() {
            viewport.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            if (isDragging) {
                isDragging = false;
                viewport.style.cursor = 'grab';
                setToolbarInteractive(true);
            }
        }

        // 滚轮缩放
        function onWheel(e) {
            e.preventDefault();
            zoomAtMouse(e.clientX, e.clientY, e.deltaY);
        }

        function bindWheelEvent() {
            viewport.addEventListener('wheel', onWheel, { passive: false });
        }

        function unbindWheelEvent() {
            viewport.removeEventListener('wheel', onWheel);
        }

        // 重置按钮逻辑
        function resetView() {
            if (!originalImgWidth || !originalImgHeight) {
                if (viewerImg.complete && viewerImg.naturalWidth) {
                    originalImgWidth = viewerImg.naturalWidth;
                    originalImgHeight = viewerImg.naturalHeight;
                    updateViewportSize();
                    resetToFit();
                }
                return;
            }
            updateViewportSize();
            resetToFit();
        }

        // 关闭查看器
        function closeViewer() {
            if (!viewerOverlay.classList.contains('active')) return;
            viewerOverlay.classList.remove('active');
            document.body.style.overflow = '';
            unbindDragEvents();
            unbindWheelEvent();
            // 重置变换状态
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
            loadingTip.style.display = 'none';
            setToolbarInteractive(true);
            currentOpenedSrc = '';
        }

        // 图片加载完成：自动适应屏幕
        function onImageLoaded() {
            if (!viewerImg.naturalWidth) return;
            originalImgWidth = viewerImg.naturalWidth;
            originalImgHeight = viewerImg.naturalHeight;
            updateViewportSize();
            resetToFit();      // 保证每次打开图片都自动适应屏幕，不再是原始尺寸
            loadingTip.style.display = 'none';
            viewport.style.cursor = 'grab';
        }

        // 打开查看器 (传入图片地址)
        function openViewer(imgSrc) {
            if (!imgSrc) return;
            if (viewerOverlay.classList.contains('active') && currentOpenedSrc === imgSrc) {
                // 如果相同图片已打开，忽略重复
                return;
            }
            // 显示加载提示
            loadingTip.style.display = 'flex';
            // 重置变换临时状态
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
            // 重置图片尺寸标志
            originalImgWidth = 0;
            originalImgHeight = 0;
            viewerImg.src = '';
            viewerImg.src = imgSrc;
            currentOpenedSrc = imgSrc;
            viewerOverlay.classList.add('active');
            bindDragEvents();
            bindWheelEvent();
            document.body.style.overflow = 'hidden';

            if (viewerImg.complete && viewerImg.naturalWidth !== 0) {
                onImageLoaded();
            } else {
                viewerImg.onload = onImageLoaded;
                viewerImg.onerror = () => {
                    loadingTip.style.display = 'none';
                    console.error('图片加载失败:', imgSrc);
                    alert('图片加载失败，请检查网络或路径：\n' + imgSrc);
                    // 加载失败自动关闭查看器
                    setTimeout(() => {
                        if (viewerOverlay.classList.contains('active')) closeViewer();
                    }, 500);
                };
            }
        }

        // 点击外围关闭：背景遮罩 或 视口空白区域 (图片周围)
        function bindOutsideClose() {
            viewerOverlay.addEventListener('click', (e) => {
                if (e.target === viewerOverlay) {
                    closeViewer();
                }
            });
            viewport.addEventListener('click', (e) => {
                let target = e.target;
                let isClickInsideImage = target === imageWrapper || imageWrapper.contains(target);
                if (!isClickInsideImage) {
                    closeViewer();
                }
            });
        }

        // 窗口尺寸变化时重新适配
        function onWindowResize() {
            if (viewerOverlay.classList.contains('active') && originalImgWidth && originalImgHeight) {
                updateViewportSize();
                resetToFit();
            }
        }

        function onKeyDown(e) {
            if (e.key === 'Escape' && viewerOverlay.classList.contains('active')) {
                closeViewer();
            }
        }

        // ---------- 为所有目标图片绑定双击事件 (支持容器内多个图片) ----------
        function bindMultiImageDoubleClick() {
            // 选择所有 .portfolio-container 内部的 .img-fluid 图片，符合用户场景
            const allImages = document.querySelectorAll('.portfolio-container .img-fluid');
            if (allImages.length === 0) {
                console.warn('未找到图片，请检查 .portfolio-container .img-fluid 选择器');
                return;
            }
            allImages.forEach(img => {
                // 避免重复绑定
                if (img.getAttribute('data-viewer-bound') === 'true') return;
                img.setAttribute('data-viewer-bound', 'true');
                img.addEventListener('dblclick', (e) => {
                    e.stopPropagation();
                    let imgSrc = img.getAttribute('src');
                    if (imgSrc) {
                        openViewer(imgSrc);
                    } else {
                        console.warn('图片无 src 属性');
                    }
                });
            });
        }

        // 处理可能动态加载的图片 (MutationObserver 可选，但静态页面直接绑定即可，为了稳健，监听内容变化)
        function observeNewImages() {
            const container = document.querySelector('.portfolio-container');
            if (!container) return;
            const observer = new MutationObserver((mutations) => {
                let needBind = false;
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length) {
                        needBind = true;
                    }
                });
                if (needBind) bindMultiImageDoubleClick();
            });
            observer.observe(container, { childList: true, subtree: true });
        }

        // 图片加载失败时做降级处理 (不影响功能演示，如果原图不存在则显示网络示例图，保证双击体验)
        function handleImageFallback() {
            const imgs = document.querySelectorAll('.portfolio-container .img-fluid');
            imgs.forEach(img => {
                img.addEventListener('error', function(e) {
                    // 仅当图片路径看起来像本地不存在时，替换为稳定的在线示例图，但不影响原有的证书路径提示
                    const src = img.getAttribute('src');
                    if (src && (src.includes('assets/img/certification/') || src.includes('guoli')) && !img.getAttribute('data-fallback-set')) {
                        img.setAttribute('data-fallback-set', 'true');
                        // 使用占位图保证可双击演示功能，同时保留原始alt
                        img.src = 'https://picsum.photos/id/100/600/400';
                        console.log(`图片加载失败，已替换占位图: ${src}`);
                    }
                });
            });
        }

        // 工具栏按钮事件
        function bindToolbarEvents() {
            resetBtn.addEventListener('click', resetView);
            closeBtn.addEventListener('click', closeViewer);
        }

        // 初始化
        function init() {
            bindToolbarEvents();
            bindOutsideClose();
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('keydown', onKeyDown);
            bindMultiImageDoubleClick();
            handleImageFallback();
            observeNewImages();    // 如果有动态添加的图片也会自动绑定
            // 初始关闭查看器，状态干净
            closeViewer();
        }

        init();
    })();