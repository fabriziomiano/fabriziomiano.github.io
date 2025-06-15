---
layout: default
title: "Fabrizio Miano, PhD | Resume"
---

<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
  <div class="hero-container" data-aos="fade-in">
    <h1>Fabrizio Miano</h1>
    <p>I'm a <span class="typed" data-typed-items="Ph.D. in Physics, Tech Enthusiast, Data Expert, Sales and Marketing Business Analyst"></span></p>
  </div>
</section>

<main id="main">

  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>About</h2>
        <p>Hello! I'm Fabrizio (<strong>Fab</strong>), a Senior Business Advisor at STMicroelectronics with a background in physics and data science. Born and raised in Catania, Italy, I hold a PhD from the University of Sussex and have worked at CERN and Leonardo Company. I’m passionate about turning complex data into strategic insights.</p>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img src="{{ '/assets/img/profile-img.jpg' | relative_url }}" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Senior Business Advisor & Data Scientist</h3>
          <p class="fst-italic">
            Bridging technology, strategy and analytics to drive impactful business decisions.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> January 26, 1987</li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="https://fabriziomiano.github.io">fabriziomiano.github.io</a></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> +39 0123 456789</li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> Catania, Italy</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> {{ 'now' | date: '%Y' | minus: 1987 }}</li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> PhD in Physics</li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> fab@example.com</li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> Available</li>
              </ul>
            </div>
          </div>
          <p>
            After completing my PhD at the University of Sussex and a fellowship at CERN, I transitioned into data science consulting for Leonardo Company. Now at STMicroelectronics, I leverage data and strategy to solve high-impact challenges.
          </p>
        </div>
      </div>
    </div>
  </section><!-- End About Section -->

  <!-- ======= Skills Section ======= -->
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Skills</h2>
        <p>My technical and professional skillset.</p>
      </div>
      <div class="row skills-content">
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill">Python <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <!-- repeat for other skills… -->
        </div>
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill">Business Strategy <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <!-- … -->
        </div>
      </div>
    </div>
  </section><!-- End Skills Section -->

  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>Some of my recent projects.</p>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-data">Data Science</li>
            <li data-filter=".filter-web">Web</li>
            <li data-filter=".filter-ml">Machine Learning</li>
          </ul>
        </div>
      </div>
      <div class="row portfolio-container">
        <!-- repeat .portfolio-item for each project… -->
      </div>
    </div>
  </section><!-- End Portfolio Section -->

  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="info-box mb-4">
            <i class="bx bx-map"></i>
            <h3>My Address</h3>
            <p>Via Roma 123, Catania, Italy</p>
          </div>
        </div>
        <!-- email, phone… -->
      </div>
      <form action="https://formspree.io/f/your-form-id" method="post" role="form" class="php-email-form">
        <!-- form fields… -->
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>
    </div>
  </section><!-- End Contact Section -->

</main>
