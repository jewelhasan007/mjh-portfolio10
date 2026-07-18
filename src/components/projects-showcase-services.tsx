"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { projects, type Project } from "@/lib/content";

// ────── Constants & Variants ──────
const websiteCategories = ["All", "Landing Page", "E-commerce", "Dashboard", "Blog"];

const industries = ["All", "SaaS", "E-commerce", "Agency", "Restaurant", "Portfolio"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ────── ProjectCard Component ──────
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary)]">
          {project.category} • {project.industry}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-[var(--ink-soft)]">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

// ────── Main Component ──────
export function ProjectsShowcase2() {
  const [category, setCategory] = React.useState("All");
  const [industry, setIndustry] = React.useState("All");

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = category === "All" || project.category === category;
      const industryMatch = industry === "All" || project.industry === industry;
      return categoryMatch && industryMatch;
    });
  }, [category, industry]);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24 sm:px-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm text-[var(--primary)]">Website Templates</span>
        <h2 className="mt-3 text-3xl font-bold text-[var(--ink)] sm:text-4xl">
          Industry Website Solutions
        </h2>
        <p className="mt-4 text-[var(--ink-soft)]">
          Explore ready-made website concepts for different businesses and
          industries.
        </p>
      </motion.div>

      {/* Website Type Filter */}
      <div className="mt-10">
        <h3 className="mb-3 text-center text-sm font-medium">Website Type</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {websiteCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                category === item
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--primary)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div className="mt-8">
        <h3 className="mb-3 text-center text-sm font-medium">Business Industry</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((item) => (
            <button
              key={item}
              onClick={() => setIndustry(item)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                industry === item
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "border border-[var(--border)] text-[var(--ink-soft)] hover:text-[var(--primary)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}