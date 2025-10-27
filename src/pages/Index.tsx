import { Beaker, FlaskConical, Linkedin, Github, Mail, Atom } from "lucide-react";
import Navigation from "@/components/Navigation";
import ThesisCard from "@/components/ThesisCard";
import PublicationCard from "@/components/PublicationCard";
import ContactForm from "@/components/ContactForm";
import ProfilePhoto from "@/components/ProfilePhoto";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chemistry.jpg";
import profilePhoto from "@/assets/linkedin image 2.jpg";

const Index = () => {
  const thesisReports = [
    {
      title: "High Purity Zeolite Prepared from Different Industrial Wastes for the Treatment of Chromium from Wastewater",
      description: "Research Project • Mar 2025 - Jun 2025",
      abstract:
        "Synthesis of zeolites prepared from industrial wastes like fly ash, water treatment sludge, and iron tailings. Tested the efficacy of adsorption of Chromium using the zeolites using the diphenylcarbazide method. Optimised the adsorption process by varying four parameters - pH, dosage, adsorption time and Cr(VI) concentration.",
      pdfLink: "#",
    },
    {
      title: "Removal of Hexavalent Chromium from Industrial Wastewater Using Sugarcane Bagasse Adsorbents",
      description: "Bachelor's Degree Research Project • July 2024 - May 2025",
      abstract:
        "Investigated the removal of hexavalent chromium Cr(VI) from aqueous solutions using sustainable adsorbents derived from sugarcane bagasse. Synthesized iron-doped biochar and zeolite adsorbents using sugarcane bagasse. Employed Response Surface Methodology (RSM) and the Box-Behnken Design (BBD) to develop a predictive model for process optimization using the parameters of pH, contact time, and adsorbent dosage. Found Cr(VI) concentrations using the Diphenylcarbazide method and UV-vis spectroscopy to determine removal efficiency.",
      pdfLink: "https://drive.google.com/file/d/1B3YhohyPbqaby5MwqKOHI9bk4wju-Eve/view?usp=sharing",
    },
    {
      title: "Reduction of Hexavalent Chromium in Industrial Wastewater Using an Inverse Fluidized Bed Bioreactor (IFBBR)",
      description: "Research Project • July 2024 - Mar 2025",
      abstract:
        "Investigated the feasibility of the Inverse Fluidized Bed Bioreactor (IFBBR) for the biological reduction of hexavalent chromium in mine wastewater. Cultured a mixed bacterial culture with a specific growth rate of 0.234 hr⁻¹. Conducted hydrodynamic studies in the IFBBR and determined its minimum fluidization velocity as 0.0071 m/s. Achieved a 93.07% reduction of Cr(VI) in synthetic wastewater (Cr concentration 10 ppm) and 77.16% reduction in actual mine wastewater (Cr concentration 3 ppm).",
      pdfLink: "#",
    },
    {
      title: "Upgradation of Iron Ore through Beneficiation Techniques and Reduction Roasting",
      description: "Summer Internship Project • May 2024 - July 2024",
      abstract:
        "Investigated the efficacy of froth flotation, gravity separation and reduction roasting in upgrading the quality of low-grade iron ore. Found the froth flotation and gravity separation techniques to be ineffective for the given ore. Successfully identified reduction roasting followed by magnetic separation (LIMS) as the most effective method to upgrade the Fe grade of a low-grade iron ore. Upgraded the iron content of the ore from 51.55% to 67.24% through the reduction roasting method, and successfully recovered 89.89% of iron from the reduced product. Identified optimal conditions for reduction roasting to be 750°C heating temperature with coal weight and reduction time optimization.",
      pdfLink: "https://drive.google.com/file/d/1khiSiNYe-EWwnZUGPvoc9Z_qYjW0l7jo/view?usp=sharing",
    },
  ];

  const achievements = [
    {
      title: "GATE Chemical Engineering",
      description: "AIR 565 (2025)",
      category: "Engineering Entrance Examination",
      year: "2025",
    },
    {
      title: "Chem-e-MUN Winner",
      description: "AIChE Student Regional Conference",
      category: "Competition",
      year: "2024",
    },
    {
      title: "Chem-e-Jeopardy National Semifinalist",
      description: "AIChE Student Regional Conference",
      category: "Competition", 
      year: "2024",
    },
    {
      title: "MLA Quiz Winner",
      description: "Peninsular Odyssey hosted by NITK, Surathkal",
      category: "Quiz Competition",
      year: "2025",
    },
    {
      title: "SpEnt Quiz Winner",
      description: "Peninsular Odyssey hosted by NIT Trichy",
      category: "Quiz Competition",
      year: "2025",
    },
    {
      title: "India Quiz Winner",
      description: "Srijan - Cultural Fest, IIT Dhanbad",
      category: "Quiz Competition",
      year: "2025",
    },
  ];

  const experiences = [
    {
      title: "Graduate Engineering Trainee (GET)",
      company: "Reliance Industries Ltd.",
      location: "Jamnagar, India",
      duration: "Aug 2025 - Present",
      description: "Currently working as a Graduate Engineering Trainee at India's largest private sector company."
    },
    {
      title: "Summer Intern",
      company: "CSIR - Institute of Minerals and Materials Technology (IMMT)",
      location: "Bhubaneswar, India", 
      duration: "May 2024 - July 2024",
      description: "Research internship under Dr. Swagat S. Rath, Principal Scientist, focusing on mineral processing and beneficiation techniques."
    },
    {
      title: "Summer Intern", 
      company: "ONGC - Institute of Drilling Fluids",
      location: "Dehradun, India",
      duration: "July 2024 - Sep 2024",
      description: "Internship under Ms. Poonam Kumar, Chemist, working on drilling fluid technologies."
    },
    {
      title: "Advisor",
      company: "Factaco Inc.",
      location: "Delhi, India",
      duration: "July 2022 - Aug 2024",
      description: "Advisory role at technology startup, contributing to strategic planning and technical decisions."
    },
    {
      title: "Intern",
      company: "KIIT University",
      location: "Bhubaneswar, India",
      duration: "Dec 2023 - Dec 2023",
      description: "Internship under Dr. Priti S. Mohanty, KIIT University, Bhubaneswar, India"
    },
     {
      title: "Advisor",
      company: "Quizadilla",
      location: "Delhi", India",
      duration: "Dec 2021 - July 2022",
      description: "Assisted the team in organizing and conducting interactive quizzes, developing engaging content, and improving participant experience"
    },
  ];

  const researchInterests = [
    "Sustainable Materials and Waste Valorization",
    "Adsorption and Material Synthesis",
    "Wastewater Treatment",
    "Bioremediation",
    "Mineral Processing",
    "Catalysis and Reaction Engineering",
    "Inverse Fluidization",
    "Zeolite Synthesis",
    "Chromium Degradation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="molecular-bg absolute inset-0" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <ProfilePhoto 
                name="Divyanshu Mohanty"
                size="lg"
                className="mb-4"
                imageUrl={profilePhoto}
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Divyanshu Mohanty
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              B.Tech. (Hons.) Chemical Engineering, NIT Rourkela | Graduate Engineering Trainee at Reliance Industries Ltd.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#thesis">View Research</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <ProfilePhoto 
                name="Divyanshu Mohanty"
                size="md"
                imageUrl={profilePhoto}
              />
            </div>
            
            {/* About Content */}
            <div className="md:col-span-2 space-y-6 text-center md:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
              I’m Divyanshu Mohanty, a chemical engineer who recently completed my B.Tech (Hons.) in Chemical Engineering at the National Institute of Technology, Rourkela. I am passionate about sustainable materials, waste valorization, and wastewater treatment.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-4">
                <span>📞 +91 9439309390</span>
                <span>✉️ divyanshumohanty22@gmail.com</span>
                <span>🏆 GATE AIR 565 (2025)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="section-container bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <FlaskConical className="h-12 w-12 text-primary mx-auto animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research Interests</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My research spans multiple areas of chemical engineering, focusing on innovation and
              sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300 hover:scale-105 text-center"
              >
                <p className="font-medium text-foreground">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="thesis" className="section-container">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <Beaker className="h-12 w-12 text-primary mx-auto animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my research work in sustainable materials, wastewater treatment, and mineral processing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thesisReports.map((thesis, index) => (
              <ThesisCard key={index} {...thesis} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Experience */}
      <section id="achievements" className="section-container bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements & Experience</h2>
            <p className="text-muted-foreground">
              Academic achievements, competition wins, and professional experience
            </p>
          </div>
          
          {/* Achievements Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Awards & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="p-6 rounded-lg border border-border/50 bg-card">
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Leadership */}
      <section id="education" className="section-container">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education & Leadership</h2>
            <p className="text-muted-foreground">
              Academic background and leadership roles
            </p>
          </div>
          
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Education</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card">
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">B.TECH. (HONS.) Chemical Engineering</h4>
                      <p className="text-primary font-medium">National Institute of Technology, Rourkela</p>
                      <p className="text-sm text-muted-foreground">Research Guide: Prof. Abanti Sahoo</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Dec 2021 - Jun 2025
                      </span>
                      <p className="text-sm font-semibold mt-1">CGPA: 8.14/10</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Research Areas: Inverse Fluidization, Zeolite Synthesis, Chromium Degradation
                  </p>
                  <p className="text-muted-foreground">
                    Relevant Coursework: Mass Transfer Operations, Heat Transfer Operations, Fluid Dynamics, Thermodynamics
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-border/50 bg-card">
                  <h4 className="font-semibold text-foreground text-lg">INTERMEDIATE (CBSE)</h4>
                  <p className="text-primary font-medium">Mother's Public School</p>
                  <p className="text-sm text-muted-foreground">Bhubaneswar, India</p>
                  <p className="text-sm text-muted-foreground">Apr 2018 - Mar 2020</p>
                  <p className="text-sm font-semibold mt-2">Score: 93.0%</p>
                  <p className="text-xs text-muted-foreground mt-1">Physics, Chemistry, Mathematics, English, Computer Science</p>
                </div>
                
                <div className="p-6 rounded-lg border border-border/50 bg-card">
                  <h4 className="font-semibold text-foreground text-lg">MATRICULATION (CBSE)</h4>
                  <p className="text-primary font-medium">Mother's Public School</p>
                  <p className="text-sm text-muted-foreground">Bhubaneswar, India</p>
                  <p className="text-sm text-muted-foreground">Apr 2016 - Mar 2018</p>
                  <p className="text-sm font-semibold mt-2">Score: 95.0%</p>
                  <p className="text-xs text-muted-foreground mt-1">Mathematics, Science, English, Social Studies, Sanskrit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Service */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Leadership & Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card">
                <h4 className="font-semibold text-foreground text-lg mb-3">Leadership Positions</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Vice President</p>
                    <p className="text-sm text-muted-foreground">Inquizzitive - The Quiz Club, NIT Rourkela (2023-24)</p>
                  </div>
                  <div>
                    <p className="font-medium">Content Head</p>
                    <p className="text-sm text-muted-foreground">American Institute of Chemical Engineers NIT Rourkela Student Chapter (2023-24)</p>
                  </div>
                  <div>
                    <p className="font-medium">Co-Founder</p>
                    <p className="text-sm text-muted-foreground">Factaco Inc. (2022-24)</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card">
                <h4 className="font-semibold text-foreground text-lg mb-3">Technical Skills</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-sm">Languages:</p>
                    <p className="text-sm text-muted-foreground">Python, MATLAB, LaTeX</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Software/Tools:</p>
                    <p className="text-sm text-muted-foreground">Aspen Plus, Origin Pro, Wondershare Filmora</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Others:</p>
                    <p className="text-sm text-muted-foreground">MS Office Suite, Canva</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Languages:</p>
                    <p className="text-sm text-muted-foreground">English, Hindi, Odia (Fluent); Bengali (Intermediate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="section-container bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Extracurricular & Outreach</h2>
            <p className="text-muted-foreground">
              Quiz competitions, leadership roles, and community service activities
            </p>
          </div>
          
          {/* Extracurricular Activities */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-primary">Extracurricular Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">MLA Quiz Winner</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peninsular Odyssey hosted by NITK, Surathkal</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">SpEnt Quiz Winner</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peninsular Odyssey hosted by NIT Trichy</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">TLC Quiz Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peninsular Odyssey hosted by NIT Calicut</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">General Quiz 2nd Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peninsular Odyssey hosted by NIT Warangal</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">General Quiz Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Pravaah - Cultural and Technopreneural Fest, IIT Bhubaneswar</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">India Quiz Winner</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Srijan - Cultural Fest, IIT Dhanbad</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">General Quiz Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Srijan - Cultural Fest, IIT Dhanbad</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">MELA Quiz Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Srijan - Cultural Fest, IIT Dhanbad</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Mettle Meet 2nd Runner Up</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Hosted by OrissaPost</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Inqube National Semifinalist</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">A National-Level Business Challenge Competition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service and Outreach */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-primary">Service & Outreach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">GIAN Workshop Volunteer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Applications of Fluidized Bed Technology, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">AIChE Conference Organizer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Student Regional Conference, Organizing Committee Member, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Chem-e-Jeopardy Chair</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">AIChE NITR x AIChE ICT-IOCB, Organizing Committee Chair, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">AIChE Express Head Writer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">The Annual Newsletter, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Sustainathon Organizer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">A Conclave on Revolutionary Sustainable Technologies, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Professional Development Week</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Core Team Member and Backend, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Maneuver 4.0 Organizer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Organizing Committee and Quizmaster, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Code Green Organizer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground">AIChE NITR x AIChE Koç University, Organizing Committee, NIT Rourkela</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">AIChE ESC Member</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Executive Student Committee, K-12 Outreach Subcommittee Member, AIChE Global</p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-[0_4px_20px_hsl(180_65%_45%/0.15)] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">K-12 Expo Organizer</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Core Team Member and Quizmaster, NIT Rourkela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <Mail className="h-12 w-12 text-primary mx-auto animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? Feel free to reach out
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="section-container py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Divyanshu Mohanty
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
