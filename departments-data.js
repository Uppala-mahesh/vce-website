/* All 8 departments — data shared across dept pages. */
window.VCE_DEPTS = {
  cse: {
    code: "DEPT-CSE-01", founded: 1988, key: "cse",
    name: "Computer Science &amp; Engineering",
    tagline: "Engineering.",
    prefix: "Computer Science &amp;",
    accredited: "NBA Accredited",
    intake: "B.E. · 180 Sanctioned",
    hod: { initials: "RK", name: "Dr. Ravi Krishna", role: "HOD · Prof, CSE" },
    facts: { faculty: 92, labs: 6, place: 98, reg: "R-24" },
    overview: [
      "Founded in 1988, the CSE department at Vasavi has operated for the entire commercial life of the software industry it now feeds. Its graduates enter the world's largest technology companies, its faculty publishes in ACM and IEEE venues, and its labs — six in total — run continuously through both semesters.",
      "The programme is deliberately traditional in its foundations: strong emphasis on data structures, systems programming, operating systems, and databases. It is deliberately contemporary in its electives: machine learning, distributed systems, cloud infrastructure, security. The mix has held for three decades because it works.",
      "Undergraduate intake is 180 seats — one of the largest single-department cohorts in Hyderabad — and admission is via the TS EAMCET counselling. The department also participates in the CSE (AI &amp; ML) programme launched in 2020, which operates as a distinct 60-seat scheme."
    ],
    heroImg: "assets/circuit-board.jpg",
    faculty: [
      { i: "RK", n: "Dr. Ravi Krishna", d: "Professor · HOD", s: "Distributed systems, consensus protocols, database internals." },
      { i: "SM", n: "Dr. Sunitha Menon", d: "Professor", s: "Machine learning, natural language processing, information retrieval." },
      { i: "AV", n: "Dr. Arvind Verma", d: "Professor", s: "Operating systems, security, low-level systems programming." },
      { i: "PL", n: "Dr. Priya Lakshmi", d: "Associate Professor", s: "Computer networks, protocol design, software-defined networking." },
      { i: "NS", n: "Dr. Nagesh Sharma", d: "Associate Professor", s: "Algorithms, combinatorial optimisation, competitive programming coach." },
      { i: "KG", n: "Dr. Kavitha Goud", d: "Associate Professor", s: "Databases, data warehousing, query optimisation." },
      { i: "RB", n: "Dr. Rajesh Babu", d: "Assistant Professor", s: "Compilers, programming languages, type systems." },
      { i: "DA", n: "Ms. Deepika Anand", d: "Assistant Professor", s: "Software engineering, human-computer interaction, requirements analysis." },
      { i: "VR", n: "Mr. Vikram Rao", d: "Assistant Professor", s: "Web systems, cloud infrastructure, DevOps." }
    ],
    labs: [
      { c: "LAB-CSE-01", n: "Programming &amp; Systems Lab", e: "80-seat Linux workstation lab, gigabit lab network, Docker &amp; virtualisation infrastructure.", t: ["C · C++", "Python", "OS · Systems"] },
      { c: "LAB-CSE-02", n: "Networks &amp; Security Lab", e: "Cisco packet tracers, dedicated switch bank, Kali Linux security testbed, wireshark instrumentation.", t: ["Networks", "Security", "SDN"] },
      { c: "LAB-CSE-03", n: "Database Systems Lab", e: "PostgreSQL / MySQL / MongoDB instances, ~4TB warm storage, sample datasets from Kaggle &amp; census.", t: ["SQL", "NoSQL", "DWH"] },
      { c: "LAB-CSE-04", n: "Machine Learning Lab", e: "4× NVIDIA A100 GPU nodes, PyTorch &amp; TensorFlow stack, Jupyter cluster with shared datasets.", t: ["ML · DL", "NLP", "CV"] },
      { c: "LAB-CSE-05", n: "Software Engineering Lab", e: "Full CI/CD stack on-premise, GitLab instance, Jira boards, capstone project workspaces.", t: ["CI/CD", "Agile", "Capstone"] },
      { c: "LAB-CSE-06", n: "Web &amp; Mobile Lab", e: "Cross-browser test rig, Android/iOS emulator farm, front-end framework toolchain, design instrumentation.", t: ["Web", "Mobile", "UX"] }
    ]
  },

  aiml: {
    code: "DEPT-AIML-02", founded: 2020, key: "aiml",
    name: "CSE — AI &amp; Machine Learning",
    tagline: "Machine Learning.",
    prefix: "CSE — AI &amp;",
    accredited: "New Scheme · UGC Approved",
    intake: "B.E. · 60 Sanctioned",
    hod: { initials: "SM", name: "Dr. Sunitha Menon", role: "HOD · Prof, AIML" },
    facts: { faculty: 28, labs: 3, place: 96, reg: "R-24" },
    overview: [
      "The college's youngest programme — launched in 2020 as a deliberate specialisation for graduates entering data-forward industry roles. The AI &amp; ML programme operates within the CSE department but with its own dedicated faculty, its own labs, and its own curriculum path.",
      "The programme carries a compact 60-seat cohort so that lab work stays hands-on. GPU compute is provisioned per-student for capstone projects; every graduate walks out having deployed a working model, not just written papers about them.",
      "Admission is through TS EAMCET counselling. Applicants entering VCE with an AI &amp; ML preference are placed here directly rather than the general CSE stream."
    ],
    heroImg: "assets/circuit-board.jpg",
    faculty: [
      { i: "SM", n: "Dr. Sunitha Menon", d: "Professor · HOD", s: "Machine learning, natural language processing, information retrieval." },
      { i: "AN", n: "Dr. Anand Nair", d: "Associate Professor", s: "Deep learning, computer vision, generative models." },
      { i: "KP", n: "Dr. Kiran Patel", d: "Associate Professor", s: "Reinforcement learning, robotics, autonomous systems." },
      { i: "SR", n: "Ms. Shruti Reddy", d: "Assistant Professor", s: "MLOps, model deployment, production ML systems." },
      { i: "HV", n: "Mr. Harish Verma", d: "Assistant Professor", s: "Statistical learning, probabilistic models, Bayesian methods." },
      { i: "PA", n: "Ms. Pooja Agarwal", d: "Assistant Professor", s: "Ethics in AI, fairness, interpretability." }
    ],
    labs: [
      { c: "LAB-AIML-01", n: "Deep Learning Lab", e: "8× NVIDIA H100 nodes, PyTorch &amp; JAX stack, Weights &amp; Biases tracking, per-student GPU quota.", t: ["Deep Learning", "CV", "NLP"] },
      { c: "LAB-AIML-02", n: "Data Engineering Lab", e: "Airflow, Spark, Kafka cluster, PostgreSQL &amp; ClickHouse warehouses, benchmark datasets.", t: ["ETL", "Pipelines", "Warehousing"] },
      { c: "LAB-AIML-03", n: "MLOps Lab", e: "Kubernetes cluster, MLflow, model registry, canary deployment testbed, monitoring stack.", t: ["MLOps", "Deployment", "Monitoring"] }
    ]
  },

  ece: {
    code: "DEPT-ECE-03", founded: 1981, key: "ece",
    name: "Electronics &amp; Communication",
    tagline: "Communication.",
    prefix: "Electronics &amp;",
    accredited: "NBA Accredited",
    intake: "B.E. · 120 + M.E. (VLSI, ES) · 24 Sanctioned",
    hod: { initials: "AV", name: "Dr. Anitha Varma", role: "HOD · Prof, ECE" },
    facts: { faculty: 64, labs: 8, place: 89, reg: "R-24" },
    overview: [
      "One of four founding departments from 1981. Electronics &amp; Communication anchors the college's technical identity — the campus has been shaped by ECE's labs, ECE's research groups, and ECE's contribution to the two M.E. schemes that run from within the department (VLSI Design; Embedded Systems).",
      "The undergraduate curriculum is deliberately breadth-first: signals &amp; systems, analog and digital electronics, communication theory, VLSI, embedded systems, wireless. The postgraduate schemes let students go deep on one branch — silicon layout, or embedded firmware, or communication protocol design.",
      "Alumni are represented across the semiconductor industry (Intel, Qualcomm, Broadcom, TI, Micron) and in telecommunications (Nokia, Ericsson, Reliance Jio). The department maintains an active industry-visit programme."
    ],
    heroImg: "assets/circuit-board.jpg",
    faculty: [
      { i: "AV", n: "Dr. Anitha Varma", d: "Professor · HOD", s: "VLSI design, mixed-signal circuits, testing methodology." },
      { i: "RM", n: "Dr. Ramesh Murthy", d: "Professor", s: "Digital signal processing, image processing, communication systems." },
      { i: "SB", n: "Dr. Suresh Bhat", d: "Professor", s: "Embedded systems, real-time systems, IoT infrastructure." },
      { i: "LN", n: "Dr. Lakshmi Narayana", d: "Associate Professor", s: "RF &amp; microwave engineering, antenna design." },
      { i: "GR", n: "Dr. Gopi Raju", d: "Associate Professor", s: "Communication theory, wireless networks, 5G." },
      { i: "MP", n: "Ms. Meera Prakash", d: "Assistant Professor", s: "Analog electronics, mixed-signal design." },
      { i: "AT", n: "Mr. Ajay Thomas", d: "Assistant Professor", s: "FPGA prototyping, hardware description languages." }
    ],
    labs: [
      { c: "LAB-ECE-01", n: "Analog Electronics Lab", e: "48-station analog benches, function generators, oscilloscopes, discrete component inventory.", t: ["Analog", "Circuits"] },
      { c: "LAB-ECE-02", n: "Digital Electronics Lab", e: "Digital trainer boards, FPGA dev kits (Xilinx, Altera), logic analysers.", t: ["Digital", "FPGA"] },
      { c: "LAB-ECE-03", n: "VLSI Design Lab", e: "Cadence Virtuoso, Synopsys stack, Mentor Graphics Calibre, silicon-tapeout capable.", t: ["VLSI", "Layout", "Tapeout"] },
      { c: "LAB-ECE-04", n: "Embedded Systems Lab", e: "ARM Cortex kits, STM32 boards, Raspberry Pi cluster, embedded Linux.", t: ["Embedded", "RTOS", "IoT"] },
      { c: "LAB-ECE-05", n: "Communication Lab", e: "Spectrum analysers, vector network analysers, modulation trainers.", t: ["Comm", "RF", "Wireless"] },
      { c: "LAB-ECE-06", n: "DSP Lab", e: "TI DSP kits, MATLAB stations, real-time signal processing benches.", t: ["DSP", "Signals"] },
      { c: "LAB-ECE-07", n: "Microwave &amp; Antenna Lab", e: "Anechoic chamber (small), antenna trainers, waveguide components.", t: ["Microwave", "Antenna"] },
      { c: "LAB-ECE-08", n: "IoT &amp; Sensors Lab", e: "Sensor arrays, LoRa &amp; NB-IoT modules, edge-compute dev kits.", t: ["IoT", "Sensors"] }
    ]
  },

  eee: {
    code: "DEPT-EEE-04", founded: 1981, key: "eee",
    name: "Electrical &amp; Electronics",
    tagline: "Electronics.",
    prefix: "Electrical &amp;",
    accredited: "NBA Accredited",
    intake: "B.E. · 60 + M.E. (PS, PE) · 24 Sanctioned",
    hod: { initials: "PS", name: "Dr. Padma Sundar", role: "HOD · Prof, EEE" },
    facts: { faculty: 38, labs: 5, place: 87, reg: "R-24" },
    overview: [
      "Electrical Engineering as a founding discipline. The department has evolved from a traditional electrical machines focus in the 1980s to a broader remit that includes power electronics, renewable energy systems, smart-grid research, and control engineering.",
      "The two M.E. schemes (Power Systems; Power &amp; Electronics) draw students from across India. Research in the department has active funding from the Central Power Research Institute and Telangana State Southern Power Distribution.",
      "The undergraduate programme keeps its classical spine — machines, power systems, control, measurement — while introducing modern subjects (renewables, e-mobility, grid integration) in the later semesters."
    ],
    heroImg: "assets/circuit-board.jpg",
    faculty: [
      { i: "PS", n: "Dr. Padma Sundar", d: "Professor · HOD", s: "Power systems, load flow analysis, smart grid." },
      { i: "VK", n: "Dr. Venkat Krishnan", d: "Professor", s: "Power electronics, motor drives, industrial control." },
      { i: "RN", n: "Dr. Ramesh Naik", d: "Associate Professor", s: "Renewable energy systems, photovoltaic integration." },
      { i: "SG", n: "Dr. Shanti Ghosh", d: "Associate Professor", s: "Control systems, robotics, automation." },
      { i: "NM", n: "Ms. Nandini Menon", d: "Assistant Professor", s: "Electrical machines, transformer design." }
    ],
    labs: [
      { c: "LAB-EEE-01", n: "Electrical Machines Lab", e: "DC machines, three-phase induction motors, synchronous machines, transformers.", t: ["Machines", "Motors"] },
      { c: "LAB-EEE-02", n: "Power Electronics Lab", e: "Full-bridge converters, motor drives, SCR banks, oscilloscope stations.", t: ["Power Elec", "Drives"] },
      { c: "LAB-EEE-03", n: "Power Systems Lab", e: "Real-time power system simulator (RTDS), load-flow software, protective relay testbed.", t: ["Power Sys", "Grid"] },
      { c: "LAB-EEE-04", n: "Control Systems Lab", e: "Process control trainers, MATLAB/Simulink stations, PLC bank.", t: ["Control", "PLC"] },
      { c: "LAB-EEE-05", n: "Renewable Energy Lab", e: "Rooftop PV integration, wind trainer, MPPT controllers, battery testing.", t: ["Solar", "Wind", "Storage"] }
    ]
  },

  it: {
    code: "DEPT-IT-05", founded: 2001, key: "it",
    name: "Information Technology",
    tagline: "Technology.",
    prefix: "Information",
    accredited: "NBA Accredited",
    intake: "B.E. · 120 Sanctioned",
    hod: { initials: "GS", name: "Dr. Ganesh Shastri", role: "HOD · Prof, IT" },
    facts: { faculty: 32, labs: 4, place: 94, reg: "R-24" },
    overview: [
      "Founded in 2001 to formalise a distinction VCE had been maintaining informally for a decade: CSE-as-foundations and IT-as-applied. The IT programme prioritises web systems, networks, cloud infrastructure, and information security over the deeper theory-heavy content that CSE emphasises.",
      "Graduates enter product-engineering roles at scale: SRE, DevOps, cloud architecture, application security. The department maintains an on-premise Kubernetes cluster that undergraduates use through their programme — students graduate having actually deployed production-grade systems.",
      "Distinct from CSE in emphasis but not lower in rigour — the IT curriculum's electives cover blockchain, quantum-secure networking, and cloud-native architecture."
    ],
    heroImg: "assets/circuit-board.jpg",
    faculty: [
      { i: "GS", n: "Dr. Ganesh Shastri", d: "Professor · HOD", s: "Cloud infrastructure, distributed systems, container orchestration." },
      { i: "AK", n: "Dr. Ashok Kumar", d: "Professor", s: "Information security, cryptography, blockchain." },
      { i: "MN", n: "Dr. Meena Nayar", d: "Associate Professor", s: "Web systems, service-oriented architecture, APIs." },
      { i: "RV", n: "Dr. Ravi Verma", d: "Associate Professor", s: "Databases, NoSQL, big data systems." },
      { i: "SI", n: "Mr. Sameer Iyer", d: "Assistant Professor", s: "DevOps, CI/CD, site reliability engineering." }
    ],
    labs: [
      { c: "LAB-IT-01", n: "Cloud &amp; Infrastructure Lab", e: "On-premise Kubernetes cluster (12 nodes), private AWS-compatible endpoint, monitoring stack.", t: ["Cloud", "K8s", "IaC"] },
      { c: "LAB-IT-02", n: "Networks &amp; Security Lab", e: "Enterprise switch/router bank, IDS/IPS testbed, penetration testing lab (isolated).", t: ["Networks", "Security"] },
      { c: "LAB-IT-03", n: "Web Systems Lab", e: "Full-stack dev stations, load testing rig, browser test farm.", t: ["Web", "Full-stack"] },
      { c: "LAB-IT-04", n: "Data Systems Lab", e: "SQL &amp; NoSQL cluster, streaming platforms, benchmark datasets.", t: ["Data", "Streaming"] }
    ]
  },

  mech: {
    code: "DEPT-MECH-06", founded: 1981, key: "mech",
    name: "Mechanical Engineering",
    tagline: "Engineering.",
    prefix: "Mechanical",
    accredited: "NBA Accredited",
    intake: "B.E. · 120 + M.E. (ADM) · 24 Sanctioned",
    hod: { initials: "SP", name: "Dr. Suryanarayan Pai", role: "HOD · Prof, MECH" },
    facts: { faculty: 44, labs: 7, place: 82, reg: "R-24" },
    overview: [
      "The largest single facility on campus by floor area — anchored by a full workshop wing of foundry, machining, welding, forming, and metrology. Mechanical Engineering at VCE is an unromantic, physical, hands-on department. Students spend more of their time in the workshop than any other cohort.",
      "The M.E. scheme in Advanced Design &amp; Manufacturing pulls together CAD/CAM, additive manufacturing, and tribology. Undergraduate electives include automotive engineering, refrigeration &amp; air conditioning, and aerospace fundamentals.",
      "SAE Baja and SAE Supra teams are run out of MECH. The department funds their annual builds and provides workshop access year-round."
    ],
    heroImg: "assets/vce-campus-2.jpg",
    faculty: [
      { i: "SP", n: "Dr. Suryanarayan Pai", d: "Professor · HOD", s: "Thermal engineering, IC engines, combustion." },
      { i: "MK", n: "Dr. Manoj Kulkarni", d: "Professor", s: "Manufacturing processes, additive manufacturing, tribology." },
      { i: "DR", n: "Dr. Deepak Rao", d: "Professor", s: "Machine design, finite element analysis, structural mechanics." },
      { i: "VN", n: "Dr. Vijay Nair", d: "Associate Professor", s: "Refrigeration &amp; air conditioning, HVAC systems." },
      { i: "AS", n: "Dr. Ashwin Shetty", d: "Associate Professor", s: "Automotive engineering, vehicle dynamics." }
    ],
    labs: [
      { c: "LAB-MECH-01", n: "Workshop Wing", e: "Full foundry (sand casting), lathes, milling machines, welding bays, sheet-metal forming.", t: ["Workshop", "Manufacturing"] },
      { c: "LAB-MECH-02", n: "Thermal &amp; IC Engines Lab", e: "Petrol &amp; diesel test rigs, refrigeration test benches, heat exchanger rigs.", t: ["Thermal", "IC Engines"] },
      { c: "LAB-MECH-03", n: "CAD/CAM Lab", e: "SolidWorks, CATIA, Fusion 360 stations; CNC training centre.", t: ["CAD", "CAM", "CNC"] },
      { c: "LAB-MECH-04", n: "Fluid Mechanics Lab", e: "Turbine test rigs, pump test setups, pipe-flow benches.", t: ["Fluids", "Turbomachinery"] },
      { c: "LAB-MECH-05", n: "Metrology &amp; QC Lab", e: "Coordinate measuring machines, surface roughness testers, hardness testers.", t: ["Metrology", "QC"] },
      { c: "LAB-MECH-06", n: "Additive Manufacturing Lab", e: "FDM &amp; SLA 3D printers, material characterisation setup, post-processing tools.", t: ["3D Print", "AM"] },
      { c: "LAB-MECH-07", n: "Robotics &amp; Automation Lab", e: "Industrial robotic arms (KUKA, ABB), PLC benches, pneumatic trainers.", t: ["Robotics", "Automation"] }
    ]
  },

  civil: {
    code: "DEPT-CIVIL-07", founded: 1981, key: "civil",
    name: "Civil Engineering",
    tagline: "Engineering.",
    prefix: "Civil",
    accredited: "NBA Accredited",
    intake: "B.E. · 60 Sanctioned",
    hod: { initials: "BR", name: "Dr. Bhaskar Reddy", role: "HOD · Prof, CIVIL" },
    facts: { faculty: 26, labs: 5, place: 78, reg: "R-24" },
    overview: [
      "Civil is the smallest of the founding departments by intake, but arguably the most consequential for the city. The department carries an ongoing consultancy relationship with the Greater Hyderabad Municipal Corporation and has audited or contributed to design work on projects across Telangana and Andhra Pradesh.",
      "The curriculum covers the four classical branches — structures, geotechnical, transportation, environmental — with modern additions in earthquake engineering, sustainable construction, and BIM. Field work is a stated requirement of the programme.",
      "Graduates enter both the private construction industry (L&amp;T, Shapoorji Pallonji) and public engineering services (Indian Railways, PWD, CPWD)."
    ],
    heroImg: "assets/vce-campus-3.jpg",
    faculty: [
      { i: "BR", n: "Dr. Bhaskar Reddy", d: "Professor · HOD", s: "Structural engineering, seismic design, concrete technology." },
      { i: "JK", n: "Dr. Jayanth Krishnan", d: "Professor", s: "Geotechnical engineering, foundation design, slope stability." },
      { i: "PM", n: "Dr. Prabhakar Mehta", d: "Associate Professor", s: "Transportation engineering, highway design, traffic analysis." },
      { i: "RS", n: "Dr. Rekha Sharma", d: "Associate Professor", s: "Environmental engineering, water treatment, wastewater management." }
    ],
    labs: [
      { c: "LAB-CIVIL-01", n: "Structural Engineering Lab", e: "Universal testing machines, concrete testing rig, reinforcement testing setup.", t: ["Structures", "Concrete"] },
      { c: "LAB-CIVIL-02", n: "Geotechnical Lab", e: "Triaxial testers, direct shear apparatus, consolidometers, permeability setups.", t: ["Geotech", "Soil"] },
      { c: "LAB-CIVIL-03", n: "Transportation Lab", e: "Bitumen testing, aggregate impact tester, CBR apparatus, marshall stability rig.", t: ["Transport", "Highway"] },
      { c: "LAB-CIVIL-04", n: "Environmental Lab", e: "Water quality analysis, BOD/COD testing, jar test apparatus, spectrophotometer.", t: ["Environment", "Water"] },
      { c: "LAB-CIVIL-05", n: "Survey Lab", e: "Total stations, theodolites, GPS units, drone-based survey capability.", t: ["Survey", "GIS"] }
    ]
  },

  hs: {
    code: "DEPT-HS", founded: 1981, key: "hs",
    name: "Sciences &amp; Humanities",
    tagline: "Humanities.",
    prefix: "Sciences &amp;",
    accredited: "Foundation Department",
    intake: "All UG cohorts · Foundation",
    hod: { initials: "LR", name: "Dr. Latha Ramachandran", role: "HOD · Prof, H&amp;S" },
    facts: { faculty: 31, labs: 3, place: "N/A", reg: "R-24" },
    overview: [
      "The shared foundation that every engineering student at Vasavi passes through in their first year. Mathematics, physics, chemistry, English communication, and — from 2020 — an introduction to critical thinking and technical writing.",
      "The department is deliberately not a service department. Its faculty publishes independent research and runs its own seminar series. First-year students who show mathematical aptitude are encouraged toward the department's advanced electives in later semesters.",
      "The Humanities wing (English, Communication, Constitution of India) is compact but active — running debate societies and inter-college communication contests."
    ],
    heroImg: "assets/vce-library.jpg",
    faculty: [
      { i: "LR", n: "Dr. Latha Ramachandran", d: "Professor · HOD", s: "Applied mathematics, numerical analysis, optimisation." },
      { i: "PV", n: "Dr. Prasad Venkatesh", d: "Professor", s: "Physics, solid-state physics, semiconductor materials." },
      { i: "KM", n: "Dr. Karuna Menon", d: "Professor", s: "Chemistry, physical chemistry, materials science." },
      { i: "EF", n: "Dr. Elizabeth Fernandez", d: "Associate Professor", s: "English literature, communication, academic writing." }
    ],
    labs: [
      { c: "LAB-HS-01", n: "Physics Lab", e: "Optics benches, wave-propagation setups, semiconductor characterisation.", t: ["Physics", "Optics"] },
      { c: "LAB-HS-02", n: "Chemistry Lab", e: "Wet chemistry stations, titration setups, instrumental analysis (UV-Vis, IR).", t: ["Chemistry"] },
      { c: "LAB-HS-03", n: "Communication Lab", e: "Language lab with headset stations, presentation recording, group discussion rooms.", t: ["Comm", "English"] }
    ]
  }
};
