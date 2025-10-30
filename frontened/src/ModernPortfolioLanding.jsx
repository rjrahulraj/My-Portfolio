import React from "react";
import { motion } from "framer-motion";


export default function ModernPortfolioLanding({ profile }) {
     // profile prop is optional — fallback sample data is included below
     const data = profile || {
          name: "Rahul Raj",
          title: "Full‑Stack Developer",
          location: "IIIT Bhopal",
          bio:
               "I build clean, scalable web apps with a focus on performance and delightful UX. Currently building a resume builder and portfolio projects using React, Node and MongoDB.",
          avatar: "https://i.pravatar.cc/300",
          social: [
               { name: "GitHub", url: "https://github.com/yourusername" },
               { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
               { name: "Mail", url: "mailto:you@domain.com" },
          ],
          projects: [
               {
                    id: 1,
                    title: "Resume Builder",
                    desc: "PDF export, ATS‑friendly templates, React + Node + MongoDB.",
                    tags: ["React", "Tailwind", "Node"],
                    link: "#",
               },
               {
                    id: 2,
                    title: "Delish Dish",
                    desc: "Food delivery MERN app with real‑time order updates.",
                    tags: ["MERN", "Socket.IO"],
                    link: "#",
               },
               {
                    id: 3,
                    title: "Chat App",
                    desc: "Real‑time chat with roles and notifications.",
                    tags: ["WebSocket", "Express"],
                    link: "#",
               },
          ],
     };

     return (
          <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 font-sans">
               {/* Nav */}
               <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg">RR</div>
                         <div>
                              <div className="text-sm font-medium">{data.name}</div>
                              <div className="text-xs text-gray-500">{data.title}</div>
                         </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                         <a className="hover:text-gray-900" href="#about">About</a>
                         <a className="hover:text-gray-900" href="#projects">Projects</a>
                         <a className="hover:text-gray-900" href="#skills">Skills</a>
                         <a className="hover:text-gray-900" href="#contact">Contact</a>
                         <a className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm shadow-md hover:scale-105 transform transition">Resume</a>
                    </nav>
               </header>

               {/* Hero */}
               <main className="max-w-6xl mx-auto px-6 py-12">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                   Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">{data.name}</span>
                              </h1>
                              <p className="mt-4 text-lg text-gray-600 max-w-xl">{data.bio}</p>

                              <div className="mt-6 flex items-center gap-4">
                                   <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-500 text-white font-medium shadow hover:brightness-105 transition">See my work</a>
                                   <a href={data.social[2].url} className="text-sm text-gray-600 hover:underline">Get in touch</a>
                              </div>

                              <div className="mt-8 flex gap-3 flex-wrap">
                                   {data.social.map((s) => (
                                        <a key={s.name} href={s.url} className="px-3 py-2 text-xs border rounded-full border-gray-200 hover:shadow-sm">{s.name}</a>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div className="flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white">
                                   <img src={data.avatar} alt="avatar" className="object-cover w-full h-full" />
                                   <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-lg text-sm">{data.location}</div>
                              </div>
                         </motion.div>
                    </section>

                    {/* Quick stats / highlights */}
                    <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <div className="p-5 bg-white rounded-2xl shadow flex flex-col">
                              <div className="text-sm text-gray-500">Years Experience</div>
                              <div className="mt-2 text-2xl font-semibold">2+</div>
                         </div>
                         <div className="p-5 bg-white rounded-2xl shadow flex flex-col">
                              <div className="text-sm text-gray-500">Projects</div>
                              <div className="mt-2 text-2xl font-semibold">12</div>
                         </div>
                         <div className="p-5 bg-white rounded-2xl shadow flex flex-col">
                              <div className="text-sm text-gray-500">Open Source</div>
                              <div className="mt-2 text-2xl font-semibold">5</div>
                         </div>
                    </section>

                    {/* Projects */}
                    <section id="projects" className="mt-16">
                         <div className="flex items-center justify-between">
                              <h2 className="text-2xl font-bold">Selected Projects</h2>
                              <a href="#" className="text-sm text-gray-600 hover:underline">See all</a>
                         </div>

                         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                              {data.projects.map((p) => (
                                   <motion.a key={p.id} href={p.link} className="block p-5 bg-white rounded-2xl shadow hover:shadow-lg transition" whileHover={{ y: -6 }}>
                                        <div className="flex items-start justify-between gap-3">
                                             <div>
                                                  <h3 className="text-lg font-semibold">{p.title}</h3>
                                                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                                             </div>
                                        </div>

                                        <div className="mt-4 flex gap-2 flex-wrap">
                                             {p.tags.map((t) => (
                                                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-200">{t}</span>
                                             ))}
                                        </div>
                                   </motion.a>
                              ))}
                         </div>
                    </section>

                    {/* Skills */}
                    <section id="skills" className="mt-16">
                         <h2 className="text-2xl font-bold">Skills</h2>
                         <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                              {[
                                   "React",
                                   "Node.js",
                                   "MongoDB",
                                   "Tailwind CSS",
                                   "Socket.IO",
                                   "C++",
                                   "TypeScript",
                                   "AWS",
                              ].map((s) => (
                                   <div key={s} className="p-3 bg-white rounded-xl shadow text-sm text-center">{s}</div>
                              ))}
                         </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="mt-16 p-8 bg-gradient-to-r from-white to-orange-50 rounded-2xl">
                         <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                              <div>
                                   <h2 className="text-2xl font-bold">Let's build something together</h2>
                                   <p className="mt-2 text-gray-600">Open to internships and full-time roles. I love turning ideas into products.</p>

                                   <div className="mt-6 flex gap-3">
                                        <a href="mailto:you@domain.com" className="inline-flex items-center px-5 py-3 rounded-lg bg-orange-500 text-white font-medium shadow">Email me</a>
                                        <a href="#" className="px-4 py-3 border rounded-lg text-sm">Download CV</a>
                                   </div>
                              </div>

                              <form className="p-4 bg-white rounded-xl shadow">
                                   <label className="block text-sm">Name</label>
                                   <input className="w-full mt-1 p-3 rounded-md border" placeholder="Your name" />

                                   <label className="block mt-3 text-sm">Email</label>
                                   <input className="w-full mt-1 p-3 rounded-md border" placeholder="you@domain.com" />

                                   <label className="block mt-3 text-sm">Message</label>
                                   <textarea className="w-full mt-1 p-3 rounded-md border" rows={4} placeholder="Brief message..." />

                                   <button type="button" className="mt-4 w-full inline-flex justify-center items-center px-4 py-3 bg-orange-500 text-white rounded-lg">Send</button>
                              </form>
                         </div>
                    </section>

                    <footer className="mt-12 text-center text-sm text-gray-500">
                         © {new Date().getFullYear()} {data.name} • Built with ❤️
                    </footer>
               </main>
          </div>
     );
}
