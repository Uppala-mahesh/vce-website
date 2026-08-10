/* ==========================================================================
   VCE — Shared site chrome (utility bar, ledger, header, footer)
   Include on every page. Marks the active nav item via <body data-nav="key">.
   ========================================================================== */

(function () {
  const NAV_KEY = document.body?.dataset.nav || 'home';

  function chromeHTML() {
    return `
<div class="motto-rail">Striving for a symbiosis of technological excellence and human values · Est. 1981</div>

<div class="utility-bar">
  <div class="wrap-wide">
    <div class="credentials">
      <span class="cred"><span class="dot"></span>NAAC A++</span>
      <span class="cred"><span class="dot"></span>NBA Accredited</span>
      <span class="cred"><span class="dot"></span>Autonomous · UGC 2(f) &amp; 12(B)</span>
    </div>
    <div class="utility-actions">
      <a href="contact.html">Search</a>
      <a href="student-portal.html">Student Login</a>
      <a href="student-portal.html">Faculty</a>
      <a href="student-portal.html" class="fee-btn">Online Fee →</a>
    </div>
  </div>
</div>

<div class="ledger">
  <div class="ledger-inner">
    <span class="ledger-item">Established <span class="num">1981</span></span>
    <span class="ledger-item"><span class="num">44</span> Years</span>
    <span class="ledger-item">NIRF Band <span class="num">201–300</span></span>
    <span class="ledger-item"><span class="num">7</span> UG Programmes</span>
    <span class="ledger-item"><span class="num">780</span> Sanctioned Intake</span>
    <span class="ledger-item">Affiliated to Osmania University</span>
  </div>
</div>

<header class="site-header" id="siteHeader">
  <div class="wrap-wide">
    <a href="index.html" class="brand">
      <div class="brand-mark">V</div>
      <div class="brand-word">
        <span class="name">Vasavi College of Engineering</span>
        <span class="sub">Hyderabad · Autonomous · Est. 1981</span>
      </div>
    </a>
    <nav>
      <ul class="primary-nav">
        <li data-k="home"><a href="index.html">Home</a></li>
        <li data-k="about">
          <button>About<span class="chev"></span></button>
          <div class="mega">
            <div class="mega-grid">
              <div class="mega-col"><h4>Institution</h4><p class="sub-note">History &amp; governance</p><ul>
                <li><a href="about.html">Our College</a></li>
                <li><a href="vision-mission.html">Vision &amp; Mission</a></li>
                <li><a href="governance.html">Governing Body</a></li>
                <li><a href="governance.html#principal">Principal's Message</a></li>
              </ul></div>
              <div class="mega-col"><h4>Approvals</h4><p class="sub-note">Accreditation &amp; status</p><ul>
                <li><a href="accreditation.html#naac">NAAC A++</a></li>
                <li><a href="accreditation.html#nba">NBA</a></li>
                <li><a href="accreditation.html#ugc">UGC · AICTE</a></li>
                <li><a href="accreditation.html#autonomy">Autonomy Order</a></li>
              </ul></div>
              <div class="mega-col"><h4>Leadership</h4><p class="sub-note">People &amp; boards</p><ul>
                <li><a href="governance.html#trust">Trust Members</a></li>
                <li><a href="governance.html#council">Academic Council</a></li>
                <li><a href="governance.html#bos">Board of Studies</a></li>
              </ul></div>
              <div class="mega-col"><h4>Reports</h4><p class="sub-note">Mandatory disclosures</p><ul>
                <li><a href="accreditation.html#reports">Annual Reports</a></li>
                <li><a href="accreditation.html#aaa">AAA Reports</a></li>
                <li><a href="governance.html#statutes">Statutes</a></li>
              </ul></div>
            </div>
          </div>
        </li>
        <li data-k="academics">
          <button>Academics<span class="chev"></span></button>
          <div class="mega">
            <div class="mega-grid">
              <div class="mega-col"><h4>Overview</h4><p class="sub-note">Programmes &amp; regulations</p><ul>
                <li><a href="academics.html">Academics Home</a></li>
                <li><a href="academics.html#programmes">UG &amp; PG Programmes</a></li>
                <li><a href="academics.html#regulations">R-24 · R-20 Regulations</a></li>
              </ul></div>
              <div class="mega-col"><h4>Curriculum</h4><p class="sub-note">Syllabus &amp; VAC</p><ul>
                <li><a href="academics.html#syllabus">Full Syllabus (R-24)</a></li>
                <li><a href="academics.html#vac">Value-Added Courses</a></li>
                <li><a href="academics.html#electives">Open Electives</a></li>
              </ul></div>
              <div class="mega-col"><h4>Examinations</h4><p class="sub-note">Results, revaluation, timetables</p><ul>
                <li><a href="exams.html">Circulars Hub</a></li>
                <li><a href="exams.html?cat=result">Results (CIE &amp; SEE)</a></li>
                <li><a href="exams.html?cat=timetable">Timetables</a></li>
              </ul></div>
              <div class="mega-col"><h4>Resources</h4><p class="sub-note">Calendars &amp; manuals</p><ul>
                <li><a href="almanac.html">Academic Almanac</a></li>
                <li><a href="almanac.html#activity">Activity Calendar</a></li>
                <li><a href="governance.html#manual">Admin Manual</a></li>
              </ul></div>
            </div>
          </div>
        </li>
        <li data-k="admissions"><a href="admissions.html">Admissions</a></li>
        <li data-k="departments">
          <button>Departments<span class="chev"></span></button>
          <div class="mega mega-depts">
            <div class="grid">
              <a href="department.html?d=cse" class="dept-tile"><span class="code">CSE-01 · 1988</span><span class="name">Computer Science &amp; Engineering</span></a>
              <a href="department.html?d=aiml" class="dept-tile"><span class="code">AIML-02 · 2020</span><span class="name">CSE — AI &amp; Machine Learning</span></a>
              <a href="department.html?d=ece" class="dept-tile"><span class="code">ECE-03 · 1981</span><span class="name">Electronics &amp; Communication</span></a>
              <a href="department.html?d=eee" class="dept-tile"><span class="code">EEE-04 · 1981</span><span class="name">Electrical &amp; Electronics</span></a>
              <a href="department.html?d=it" class="dept-tile"><span class="code">IT-05 · 2001</span><span class="name">Information Technology</span></a>
              <a href="department.html?d=mech" class="dept-tile"><span class="code">MECH-06 · 1981</span><span class="name">Mechanical Engineering</span></a>
              <a href="department.html?d=civil" class="dept-tile"><span class="code">CIVIL-07 · 1981</span><span class="name">Civil Engineering</span></a>
              <a href="department.html?d=hs" class="dept-tile"><span class="code">HS · 1981</span><span class="name">Sciences &amp; Humanities</span></a>
            </div>
          </div>
        </li>
        <li data-k="placements">
          <button>Placements<span class="chev"></span></button>
          <div class="mega">
            <div class="mega-grid">
              <div class="mega-col"><h4>Overview</h4><ul>
                <li><a href="placements.html">Placements Home</a></li>
                <li><a href="placements.html#stats">Yearly Statistics</a></li>
                <li><a href="placements.html#process">Placement Process</a></li>
              </ul></div>
              <div class="mega-col"><h4>Recruiters</h4><ul>
                <li><a href="recruiters.html">Full Recruiter List</a></li>
                <li><a href="recruiters.html#tech">Technology Sector</a></li>
                <li><a href="recruiters.html#finance">Finance &amp; Consulting</a></li>
              </ul></div>
              <div class="mega-col"><h4>For Students</h4><ul>
                <li><a href="placements.html#prep">Placement Preparation</a></li>
                <li><a href="placements.html#internships">Internships</a></li>
                <li><a href="placements.html#alumni">Alumni Network</a></li>
              </ul></div>
              <div class="mega-col"><h4>For Recruiters</h4><ul>
                <li><a href="placements.html#invite">Invite VCE for Recruitment</a></li>
                <li><a href="contact.html#tp">T&amp;P Office Contact</a></li>
              </ul></div>
            </div>
          </div>
        </li>
        <li data-k="campus">
          <button>Campus Life<span class="chev"></span></button>
          <div class="mega">
            <div class="mega-grid">
              <div class="mega-col"><h4>Events</h4><ul>
                <li><a href="campus-life.html#acumen">Acumen — Technical</a></li>
                <li><a href="campus-life.html#euphoria">Euphoria — Cultural</a></li>
                <li><a href="campus-life.html#kriti">Kriti — Exhibition</a></li>
              </ul></div>
              <div class="mega-col"><h4>Clubs</h4><ul>
                <li><a href="campus-life.html#clubs">All Clubs &amp; Societies</a></li>
                <li><a href="campus-life.html#nss">NSS · Street Cause</a></li>
                <li><a href="campus-life.html#ecell">Swayam E-Cell</a></li>
              </ul></div>
              <div class="mega-col"><h4>Facilities</h4><ul>
                <li><a href="facilities.html#library">Library</a></li>
                <li><a href="facilities.html#hostel">Hostels</a></li>
                <li><a href="facilities.html#sports">Sports &amp; Gym</a></li>
              </ul></div>
              <div class="mega-col"><h4>Research</h4><ul>
                <li><a href="research.html">R&amp;D Cell</a></li>
                <li><a href="research.html#pubs">Publications</a></li>
                <li><a href="research.html#patents">Patents</a></li>
              </ul></div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <a href="contact.html" class="nav-contact">Contact</a>
  </div>
</header>
`;
  }

  function footerHTML() {
    return `
<footer class="site-footer">
  <div class="wrap-wide">
    <div class="footer-grid">
      <div class="institution">
        <div class="brand-mark">V</div>
        <p style="color: var(--paper); font-family: var(--f-display); font-size: 22px; line-height: 1.2; margin: 0 0 12px;">Vasavi College<br>of Engineering</p>
        <p>9-5-81, Ibrahimbagh<br>Hyderabad — 500 031<br>Telangana, India</p>
        <p style="margin-top: 16px; font-family: var(--f-mono); font-size: 12px;">principal@vce.ac.in<br>+91 40 2314 6079</p>
      </div>
      <div>
        <h5>Quick Links</h5>
        <a href="admissions.html">Admissions</a>
        <a href="placements.html">Placements</a>
        <a href="department.html?d=cse">Departments</a>
        <a href="facilities.html">Facilities</a>
        <a href="campus-life.html">Campus Life</a>
        <a href="alumni.html">Alumni</a>
        <a href="careers.html">Careers at VCE</a>
      </div>
      <div>
        <h5>Academics</h5>
        <a href="academics.html">Overview</a>
        <a href="almanac.html">Almanac</a>
        <a href="academics.html#syllabus">Syllabus (R-24)</a>
        <a href="exams.html">Examinations</a>
        <a href="governance.html#council">Academic Council</a>
        <a href="research.html">Research &amp; Development</a>
      </div>
      <div>
        <h5>Compliance &amp; Regulatory</h5>
        <div class="compliance-grid">
          <a href="accreditation.html#naac" class="compliance-tile">NAAC<br>A++</a>
          <a href="accreditation.html#nba" class="compliance-tile">NBA</a>
          <a href="accreditation.html#ugc" class="compliance-tile">UGC</a>
          <a href="accreditation.html#aicte" class="compliance-tile">AICTE</a>
          <a href="accreditation.html#nirf" class="compliance-tile">NIRF</a>
          <a href="accreditation.html#ariia" class="compliance-tile">ARIIA</a>
        </div>
      </div>
    </div>

    <div class="useful-links">
      <a href="governance.html#rti">RTI</a>
      <a href="governance.html#anti-ragging">Anti-Ragging Policy</a>
      <a href="governance.html#grievance">Grievance Redressal</a>
      <a href="student-portal.html#turnitin">Turnitin</a>
      <a href="student-portal.html#lms">LMS · Moodle</a>
      <a href="student-portal.html#o365">Office 365</a>
      <a href="contact.html#sitemap">Sitemap</a>
      <a href="governance.html#accessibility">Accessibility</a>
    </div>
  </div>
  <div class="sub-footer">
    <div class="wrap-wide">
      <span>© 2026 Vasavi College of Engineering, Hyderabad</span>
      <span>GST · 36AAATV1119R1Z2</span>
      <span>An Autonomous Institution · Affiliated to Osmania University</span>
    </div>
  </div>
</footer>
`;
  }

  // Inject
  const chromeMount = document.getElementById('site-chrome');
  const footerMount = document.getElementById('site-footer');
  if (chromeMount) chromeMount.outerHTML = chromeHTML();
  if (footerMount) footerMount.outerHTML = footerHTML();

  // Set active nav
  document.querySelectorAll('.primary-nav > li').forEach(li => {
    if (li.dataset.k === NAV_KEY) li.classList.add('active');
  });

  // Sticky header shadow
  const hdr = document.getElementById('siteHeader');
  if (hdr) {
    window.addEventListener('scroll', () => {
      hdr.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  // Global reveal-on-scroll observer
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }
})();
