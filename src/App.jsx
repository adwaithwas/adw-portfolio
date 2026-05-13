import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-muted-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm font-medium tracking-tight"
        >
          ADWAITH SUNIL
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm font-medium tracking-tight opacity-70"
        >
          {/* PORTFOLIO '26 */}
        </motion.div>
      </nav>

      <main className="px-6 md:px-12 lg:px-24 pb-24 max-w-[1600px] mx-auto">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.h2 variants={fadeInUp} className="text-charcoal/70 tracking-widest text-xs sm:text-sm uppercase mb-6 uppercase">
              B.Tech CSE (AIML)
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter font-medium leading-[0.9] text-black mb-12">
              Adwaith <br /> Sunil.
            </motion.h1>
            <motion.div variants={fadeInUp} className="max-w-2xl">
              {/* <p className="text-xl sm:text-2xl md:text-3xl text-charcoal leading-snug tracking-tight text-balance">
                building emotionally aware systems through code, ai, sound, and interaction.
              </p> */}
              <p className="mt-6 text-sm text-charcoal/60 uppercase tracking-widest">
                ai/ml • frontend systems • sound/media
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Anchor */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute right-6 md:right-24 bottom-24 w-[1px] h-32 md:h-64 bg-charcoal/20 origin-bottom"
          />
        </section>

        {/* SKILLS / TECHNOLOGIES SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-24 md:py-32 border-t border-charcoal/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="text-xs uppercase tracking-widest text-charcoal/50">01 / Tools</h3>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-4xl text-black tracking-tight leading-tight max-w-3xl mb-16">
                Tools I work with
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                <SkillCategory title="AI / ML" items={["Python", "TensorFlow", "PyTorch", "OpenCV"]} />
                <SkillCategory title="Frontend" items={["React", "JavaScript", "Tailwind CSS", "Framer Motion"]} />
                <SkillCategory title="Backend" items={["Node.js", "Express", "MySQL"]} />
                <SkillCategory title="Creative / Tools" items={["FL Studio", "Tauri", "Git", "Figma"]} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-24 md:py-32 border-t border-charcoal/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="text-xs uppercase tracking-widest text-charcoal/50">02 / Index</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-4xl text-black tracking-tight leading-tight max-w-3xl">
                I’m a CSE (AI/ML) student exploring machine learning, interface design, and creative digital experiences.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section className="py-24 md:py-32 border-t border-charcoal/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h3 className="text-xs uppercase tracking-widest text-charcoal/50 mb-4">03 / Work</h3>
            <h2 className="text-4xl md:text-6xl tracking-tighter text-black">Projects I've built</h2>
          </motion.div>

          <div className="space-y-32">
            <ProjectCategory
              title="AI / ML Systems"
              projects={[
                { name: "Multimodal Meme Sentiment Analysis", desc: "Analyzing sentiment across image and text modalities.", tech: "Python, PyTorch, Transformers" },
                { name: "Deepfake Detection", desc: "Identifying synthetic media and manipulated artifacts.", tech: "CNNs, OpenCV, TensorFlow" }
              ]}
            />

            <ProjectCategory
              title="Interactive Experiences"
              projects={[
                { name: "Jumper.js", desc: "A pure Vanilla JS platformer game.", tech: "JavaScript, HTML5 Canvas" },
                { name: "Guitar Fretboard Simulator", desc: "Interactive tool for music theory visualization.", tech: "React, CSS Modules" },
                { name: "Tabs Maker", desc: "Minimalist tab authoring experience.", tech: "React, LocalStorage" }
              ]}
            />

            <ProjectCategory
              title="Sound / Media"
              projects={[
                { name: "be like him", desc: "Slowcore one-man-band project.", tech: "electric guitar, bass guitar and fl studio", link: "https://open.spotify.com/artist/66xW3S7OQtWvYR4VASX3al?si=jfKuK7pPQDWh3Vgg8th2Vw" },
                { name: "picking up cats", desc: "Ambient guitar project.", tech: "electric guitar, bass guitar and fl studio", link: "https://open.spotify.com/artist/4jEvdgGVyDUKMFG1GukYI0?si=EmxXvcO6Sz-ml0GJzl8bHg" },
                { name: "yekshi", desc: "blackgaze/ blackmetal one-man-band project.", tech: "electric guitar, bass, drums, sound-design, engineer", link: "https://open.spotify.com/artist/1PLsa01CmxJ2i61Ezm54Qv?si=-AZjuVS4Sy6__JBsgioNsA" }
              ]}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <h4 className="text-sm tracking-wide text-charcoal/80 mb-6">Problem Solving</h4>
              </div>
              <div className="md:col-span-8">
                <motion.div variants={fadeInUp}>
                  <p className="text-charcoal/70 text-lg mb-6">
                    Solving algorithmic and data structure problems across competitive programming platforms.
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <a href="https://leetcode.com/u/ranoutofwhy/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-black hover:text-muted-red transition-colors duration-300 flex items-center group">
                      LeetCode
                      <ArrowUpRight className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" size={16} />
                    </a>
                    <a href="https://codeforces.com/profile/adwaithwas" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-black hover:text-muted-red transition-colors duration-300 flex items-center group">
                      Codeforces
                      <ArrowUpRight className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" size={16} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-32 md:py-48 border-t border-charcoal/10"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-8xl tracking-tighter text-black mb-12">Let's connect.</h2>
            <div className="flex space-x-8">
              <SocialLink href="https://github.com/adwaithwas" icon={<GithubIcon />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/adwaith-sunil-700178284/" icon={<LinkedinIcon />} label="LinkedIn" />
              <SocialLink href="https://leetcode.com/u/ranoutofwhy/" icon={<LeetcodeIcon />} label="LeetCode" />
              <SocialLink href="mailto:betteradwaith@gmail.com" icon={<MailIcon />} label="Email" />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function ProjectCategory({ title, projects }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-12 gap-8"
    >
      <div className="md:col-span-4">
        <h4 className="text-sm tracking-wide text-charcoal/80 mb-6">{title}</h4>
      </div>
      <div className="md:col-span-8 space-y-1">
        {projects.map((project, i) => {
          const Wrapper = project.link ? motion.a : motion.div;
          const wrapperProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

          return (
            <Wrapper
              key={i}
              variants={fadeInUp}
              className="group block border-t border-charcoal/10 pt-8 pb-8 hover:bg-black/5 transition-colors duration-500 cursor-pointer px-4 -mx-4 rounded-xl"
              {...wrapperProps}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h5 className="text-2xl md:text-3xl text-black tracking-tight group-hover:text-muted-red transition-colors duration-300 flex items-center">
                  {project.name}
                  <ArrowUpRight className="ml-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" size={24} />
                </h5>
                <span className="text-xs uppercase tracking-widest text-charcoal/50 mt-2 md:mt-0">{project.tech}</span>
              </div>
              <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl">{project.desc}</p>
            </Wrapper>
          )
        })}
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div className="flex flex-col group">
      <h5 className="text-xs uppercase tracking-widest text-charcoal/60 mb-6 border-b border-charcoal/10 pb-4">{title}</h5>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="text-black text-lg md:text-xl tracking-tight hover:text-muted-red transition-colors duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-charcoal hover:text-black transition-colors group relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-4 rounded-full border border-charcoal/10 group-hover:border-black/30 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <span className="sr-only">{label}</span>
    </a>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function LeetcodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 12l10 10 10-10L12 2zM12 6l6 6-6 6-6-6 6-6z" />
    </svg>
  );
}

export default App;
