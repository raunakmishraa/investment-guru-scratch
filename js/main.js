$(function () {
  /* =========================================================
      FAQ ACCORDION
    ========================================================= */
  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");
    const $answer = $item.find(".faq-answer");
    const $question = $(this);

    $item.toggleClass("active");
    $answer.css("max-height", $item.hasClass("active") ? "200px" : 0);
    $answer.css("padding", $item.hasClass("active") ? "24px 24px 24px" : 0);
  });

  /* =========================================================
     SMART WEALTH PRO MODAL
     ========================================================= */
  const $swpModal = $("#swpModal");
  const $swpModalOverlay = $("#swpModalOverlay");
  const $swpModalClose = $("#swpModalClose");
  const $detailsBtn = $(".details-btn");
  const $joinBtn = $(".join-btn");

  function openSwpModal() {
    $swpModal.attr("hidden", false).removeAttr("hidden");
    $swpModalOverlay.css("display", "block");
    document.body.style.overflow = "hidden";
    // setTimeout(() => $swpModal.addClass('swp-modal-active'), 50);
  }

  function closeSwpModal() {
    $swpModal.removeClass("swp-modal-active");
    setTimeout(() => {
      $swpModal.attr("hidden", true);
      $swpModalOverlay.css("display", "none");
      document.body.style.overflow = "";
    }, 300);
  }

  $detailsBtn.on("click", function (e) {
    e.preventDefault();
    openSwpModal();
  });

  // $joinBtn.on('click', function (e) {
  //   // e.preventDefault();
  //   openIclubModal();
  // });

  $swpModalClose.on("click", closeSwpModal);
  $swpModalOverlay.on("click", function (e) {
    if (e.target === this) closeSwpModal();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && !$swpModal.hasClass("swp-modal-active")) {
      closeSwpModal();
    }
  });

  /* =========================================================
     IG LEARNING CLUB MODAL
     ========================================================= */
  const $iclubModal = $("#iclubModal");
  const $iclubModalOverlay = $("#iclubModalOverlay");
  const $iclubModalClose = $("#iclubModalClose");

  function openIclubModal() {
    $iclubModal.attr("hidden", false).removeAttr("hidden");
    $iclubModalOverlay.css("display", "block");
    document.body.style.overflow = "hidden";
    // setTimeout(() => $iclubModal.addClass('iclub-modal-active'), 50);
  }

  function closeIclubModal() {
    $iclubModal.removeClass("iclub-modal-active");
    setTimeout(() => {
      $iclubModal.attr("hidden", true);
      $iclubModalOverlay.css("display", "none");
      document.body.style.overflow = "";
    }, 300);
  }

  $joinBtn.on("click", function (e) {
    // e.preventDefault();
    // Check which card was clicked based on data attribute or just open the modal
    // For simplicity, we'll always open the ICUB modal
    openIclubModal();
  });

  $iclubModalClose.on("click", closeIclubModal);
  $iclubModalOverlay.on("click", function (e) {
    if (e.target === this) closeIclubModal();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && !$iclubModal.hasClass("iclub-modal-active")) {
      closeIclubModal();
    }
  });

  /* =========================================================
     NAVIGATION & HEADER
     ========================================================= */
  const $header = $("#header");
  const $menu = $(".menu-toggle");
  const $nav = $(".main-nav");

  setTimeout(() => $("#preloader").fadeOut(450), 650);
  $(window).on("scroll", function () {
    $header.toggleClass("scrolled", window.scrollY > 30);
  });
  $menu.on("click", function (e) {
    e.stopPropagation();
    const open = $nav.hasClass("open");
    $nav.toggleClass("open", !open);
    $(this).attr("aria-expanded", !open).toggleClass("active", !open);
  });
  $(".main-nav a").on("click", function () {
    $nav.removeClass("open");
    $menu.attr("aria-expanded", "false").removeClass("active");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".nav-wrap").length && $nav.hasClass("open")) {
      $nav.removeClass("open");
      $menu.attr("aria-expanded", "false").removeClass("active");
    }
  });
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $nav.hasClass("open")) {
      $nav.removeClass("open");
      $menu.attr("aria-expanded", "false").removeClass("active");
    }
  });
  $(window).on("resize", function () {
    if (window.innerWidth > 980 && $nav.hasClass("open")) {
      $nav.removeClass("open");
      $menu.attr("aria-expanded", "false").removeClass("active");
    }
  });

  $('a[href^="#"]').on("click", function (e) {
    const target = $(this).attr("href");
    if (target && target !== "#" && $(target).length) {
      e.preventDefault();
      $("html,body").animate(
        { scrollTop: $(target).offset().top - $header.outerHeight() - 10 },
        700,
      );
    }
  });

  if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  if (window.AOS)
    AOS.init({
      duration: 800,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

  /* =========================================================
     RENDER: HERO STATS (counters)
     ========================================================= */
  function renderStats() {
    const $el = $("#heroStats");
    if (!$el.length || typeof STATS === "undefined") return;
    $el.html(
      STATS.map(
        (s, i) => `
      <div class="stat" data-aos="fade-up" data-aos-delay="${s.delay}">
        <strong data-count="${s.count}">0</strong><sup>${s.suffix}</sup><span>${s.label}</span>
      </div>`,
      ).join(""),
    );
  }

  function runCounters() {
    $("[data-count]").each(function () {
      const $el = $(this),
        end = Number($el.data("count"));
      if ($el.data("done")) return;
      if (window.scrollY + window.innerHeight > $el.offset().top + 30) {
        $el.data("done", true);
        $({ n: 0 }).animate(
          { n: end },
          {
            duration: 1300,
            step: function (now) {
              $el.text(Math.floor(now).toLocaleString());
            },
            complete: function () {
              $el.text(end.toLocaleString());
            },
          },
        );
      }
    });
  }
  renderStats();
  $(window).on("scroll load", runCounters);

  /* =========================================================
     RENDER: TRAINING GRID (index.html + trainings.html)
     ========================================================= */
  function renderTrainingGrid() {
    const $grid = $("#trainingGrid");
    if (!$grid.length || typeof TRAININGS === "undefined") return;
    // Use fullDescription on trainings page, short description elsewhere
    const useFullDesc = $grid.data("fulldesc") === true;
    $grid.html(
      TRAININGS.map(
        (t, i) => `
      <article class="training-card course-card${t.featured ? " featured" : ""}" data-aos="fade-up" data-aos-delay="${i % 3 === 0 ? 0 : i % 3 === 1 ? 80 : 140}">
        <div class="training-number course-number">${t.number}</div>
        <div class="training-tag course-tag">${t.tag}</div>
        <h3>${t.title}</h3>
        <p>${useFullDesc && t.description ? t.description : t.description}</p>
        <ul class="full-features">${t.keyFeatures.map((f) => `<li>${f}</li>`).join("")}</ul>
        <div class="training-foot course-foot">
          <span>${t.duration}</span>
          <strong>${t.price}</strong>
          <div class="card-buttons">
            <a href="enrollment.html?course=${t.id}" class="btn btn-secondary">Enroll Now</a>
            <a href="course-description.html?course=${t.id}" class="btn btn-outline">Learn More</a>
          </div>
        </div>
      </article>`,
      ).join(""),
    );
  }
  renderTrainingGrid();

  /* =========================================================
     RENDER: CONTACT DETAILS
     ========================================================= */
  function renderContactDetails() {
    const $el = $("#contactDetails");
    if (!$el.length || typeof CONTACT === "undefined") return;
    $el.html(`
      <div><span>EMAIL</span><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>
      <div><span>CALL</span>
        <div class="contact-phone-line">
          ${CONTACT.phones.map((p, i) => `<a href="tel:${p.tel}">${p.label}</a>${i < CONTACT.phones.length - 1 ? '<span class="phone-separator">/</span>' : ""}`).join("")}
        </div>
      </div>
      <div><span>WHATSAPP</span><a href="https://wa.me/${CONTACT.whatsapp.number}" target="_blank">${CONTACT.whatsapp.display} ↗</a></div>
      <div><span>VISIT</span><p>${CONTACT.address.line1}<br><small>${CONTACT.address.line2}</small></p></div>
      <div><span>HOURS</span><p>${CONTACT.hours}</p></div>
    `);
  }
  renderContactDetails();

  /* =========================================================
     RENDER: SOCIAL MEDIA SECTION
     ========================================================= */
  function renderSocialMedia() {
    const $grid = $("#socialGrid");
    if (!$grid.length || typeof SOCIAL_MEDIA === "undefined") return;

    $grid.html(
      SOCIAL_MEDIA.map((s) => {
        const isIG = s.platform === "instagram";
        const wrapStyle = isIG
          ? "background:linear-gradient(135deg,#f9ce34 0%,#ee2a7b 50%,#6228d7 100%)"
          : `background:${s.color}`;
        return `
      <a class="social-item" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">
        <div class="social-icon-wrap" style="${wrapStyle}">
          <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="${s.svgPath}"/>
          </svg>
        </div>
        <strong class="social-count">${s.followers}</strong>
        <span class="social-label">${s.followerLabel}</span>
        <span class="social-name">${s.label}</span>
      </a>`;
      }).join(""),
    );
  }
  renderSocialMedia();

  /* =========================================================
     ENROLLMENT PAGE — dynamic card + dropdown
     ========================================================= */
  function renderEnrollmentCard(training) {
    return `
      <div class="training-card course-card${training.featured ? " featured" : ""}" style="grid-column:auto">
        <div class="training-tag course-tag">${training.tag}</div>
        <h3>${training.title}</h3>
        <p>${training.duration} &nbsp;•&nbsp; <strong>${training.price}</strong></p>
        ${training.keyFeatures.length ? `<div class="key-features"><strong>Key Features:</strong>${training.keyFeatures.map((f) => `<p>${f}</p>`).join("")}</div>` : ""}
        <p class="enroll-desc">${training.description}</p>
      </div>`;
  }

  function populateEnrollDropdown() {
    const $select = $("#trainingSelect");
    if (!$select.length || typeof TRAININGS === "undefined") return;

    // Check if a ?course= param was passed from the training cards
    const params = new URLSearchParams(window.location.search);
    const preselect = params.get("course");

    $select.html(
      TRAININGS.map(
        (t) =>
          `<option value="${t.id}"${t.id === preselect ? " selected" : ""}>${t.title} — ${t.price}</option>`,
      ).join(""),
    );

    // Render initial card
    const initial =
      TRAININGS.find((t) => t.id === $select.val()) || TRAININGS[0];
    $("#enrollmentCard").html(
      `<div class="training-grid course-grid" style="grid-template-columns:1fr;margin-top:35px">${renderEnrollmentCard(initial)}</div>`,
    );

    // Update card on change
    $select.on("change", function () {
      const selected =
        TRAININGS.find((t) => t.id === $(this).val()) || TRAININGS[0];
      $("#enrollmentCard").html(
        `<div class="training-grid course-grid" style="grid-template-columns:1fr;margin-top:35px">${renderEnrollmentCard(selected)}</div>`,
      );
    });
  }
  populateEnrollDropdown();

  /* =========================================================
     HOMEPAGE YOUTUBE / PODCAST SECTION
     ========================================================= */
  $("[data-youtube-tab]").on("click", function () {
    const key = $(this).data("youtube-tab");
    $("[data-youtube-tab]")
      .removeClass("active")
      .attr("aria-selected", "false");
    $(this).addClass("active").attr("aria-selected", "true");
    $("[data-youtube-panel]").removeClass("active").attr("hidden", true);
    $('[data-youtube-panel="' + key + '"]')
      .addClass("active")
      .removeAttr("hidden");
  });
  if (window.AOS) AOS.refresh();

  if (!document.getElementById("youtube-media-styles")) {
    const style = document.createElement("style");
    style.id = "youtube-media-styles";
    style.textContent = `
      .youtube-media-section{padding:120px 0;background:#eef3ef;overflow:hidden}.youtube-section-head{display:grid;grid-template-columns:1fr .72fr;gap:70px;align-items:end;margin-bottom:48px}.youtube-section-head h2{font:800 clamp(42px,5vw,68px)/1.02 var(--font-head);letter-spacing:-.055em;margin:0;color:var(--ink)}.youtube-section-head h2 em{font-style:normal;color:var(--green-2)}.youtube-section-head p{color:var(--muted);font-size:16px;max-width:560px;margin:0}.youtube-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:760px;margin-bottom:36px;border-bottom:1px solid #d6dfda;gap:8px}.youtube-tab{appearance:none;border:0;background:transparent;text-align:left;padding:17px 20px;display:flex;align-items:center;gap:14px;color:#6b7771;cursor:pointer;border-bottom:3px solid transparent;transition:.3s}.youtube-tab:hover{color:var(--ink);background:rgba(255,255,255,.55)}.youtube-tab.active{color:var(--green);border-bottom-color:var(--green);background:#fff}.youtube-tab-icon{width:42px;height:42px;border-radius:13px;background:#0c1713;color:#fff;display:grid;place-items:center;flex:0 0 auto;font-size:14px}.youtube-tab.active .youtube-tab-icon{background:var(--green-2)}.youtube-tab b,.youtube-tab small{display:block}.youtube-tab b{font:800 15px var(--font-head)}.youtube-tab small{font-size:11px;margin-top:2px;color:#87938e}.youtube-panel{display:none}.youtube-panel.active{display:block;animation:youtubePanelIn .45s ease both}@keyframes youtubePanelIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.youtube-panel-top{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:26px}.youtube-channel-label{font-size:10px;letter-spacing:.15em;font-weight:800;color:var(--green);text-transform:uppercase}.youtube-panel-top h3{font:800 27px/1.15 var(--font-head);margin:7px 0 0;color:var(--ink)}.youtube-channel-link{padding:12px 17px;border-radius:999px;background:#0c1713;color:#fff;font-size:12px;font-weight:800;white-space:nowrap;transition:.3s}.youtube-channel-link:hover{background:var(--green);transform:translateY(-2px)}.youtube-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.youtube-video-card{display:block;background:#fff;border:1px solid #dde5e0;border-radius:22px;overflow:hidden;box-shadow:0 12px 35px rgba(8,33,23,.06);transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}.youtube-video-card:hover{transform:translateY(-7px);box-shadow:0 22px 55px rgba(8,33,23,.13);border-color:#c4d3ca}.youtube-embed{position:relative;width:100%;aspect-ratio:16/9;background:#07120e;overflow:hidden}.youtube-embed iframe{display:block;width:100%;height:100%;border:0}.youtube-embed-cta{display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#153e2d 0,#0b2017 55%,#07120e 100%)}.youtube-embed-cta .channel-mark{font:800 58px var(--font-head);letter-spacing:-.08em;color:#2ac584}.play-button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#0c1713;font-size:17px;box-shadow:0 12px 30px rgba(0,0,0,.3)}.youtube-video-meta{padding:21px 22px 23px}.youtube-video-meta>span{font-size:9px;letter-spacing:.15em;font-weight:800;color:var(--green);text-transform:uppercase}.youtube-video-meta h4{font:800 20px/1.2 var(--font-head);margin:8px 0;color:var(--ink)}.youtube-video-meta p{font-size:13px;line-height:1.6;color:var(--muted);margin:0}@media(max-width:900px){.youtube-section-head{grid-template-columns:1fr;gap:20px}.youtube-video-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.youtube-media-section{padding:85px 0}.youtube-tabs{grid-template-columns:1fr;max-width:none}.youtube-panel-top{align-items:flex-start;flex-direction:column}.youtube-video-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  if (!document.getElementById("youtube-dark-theme")) {
    const darkTheme = document.createElement("link");
    darkTheme.id = "youtube-dark-theme";
    darkTheme.rel = "stylesheet";
    darkTheme.href = "css/youtube-dark.css";
    document.head.appendChild(darkTheme);
  }

  /* =========================================================
     GSAP ANIMATIONS
     ========================================================= */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero-grid", { opacity: 0, duration: 1.4, ease: "power2.out" });
    gsap.to(".hero-glow", {
      y: -25,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });
    gsap.utils
      .toArray(".course-card, .training-card, .service-card")
      .forEach((card) => {
        gsap.fromTo(
          card,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          },
        );
      });
  }

  /* =========================================================
     CONTACT FORM SUBMIT
     ========================================================= */
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    const form = $(this);
    // Prepare form data
    const formData = new URLSearchParams();
    form.serializeArray().forEach(function(item) {
        formData.append(item.name, item.value);
    });
                
    // Google Apps Script URL for contact form
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbysYTfudKkcK0Atl8EobF_O0pOxxIH7szkeAKJrCLfSp-TWs928BgqPysstHeOGVMjG/exec';
    // Submit form
    fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        // console.log(formData.toString());
        form[0].reset();
        // setTimeout(() => {
        // }, 5000);
    })
    .catch(() => {
        // setTimeout(() => {
        // }, 5000);
    })
    .finally(() => {
        $("#formStatus").text("Your message has been sent successfully.").css('color', 'green');
    });
  });

  /* =========================================================
     ENROLL FORM SUBMIT
     ========================================================= */
  $("#enrollForm").on("submit", function (e) {
    e.preventDefault();

    const form = $(this);
    // Prepare form data
    const formData = new URLSearchParams();
    form.serializeArray().forEach(function(item) {
        formData.append(item.name, item.value);
    });
                
    // Google Apps Script URL for contact form
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyVH8yjgoqr0hsVp0vDC2oid_bVviRdiJo8SmGahoSlFufW2cBDcmriLIuCZP7MB9My/exec';
    // Submit form
    fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        console.log(formData.toString());
        form[0].reset();
    })
    .catch(() => {
    })
    .finally(() => {
        $("#enrollStatus").text("Your enrollment request has been submitted successfully. Please proceed with the next steps.").css('color', 'green');
    });

    // const d = Object.fromEntries(new FormData(this).entries());
    // const subject = "Training Enrollment - " + d.training;
    // const body = `Name: ${d.first} ${d.last}%0D%0AEmail: ${d.email}%0D%0APhone: ${d.phone}%0D%0ATraining: ${d.training}`;
    // window.location.href = `mailto:${CONTACT.emailOfficial}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});
