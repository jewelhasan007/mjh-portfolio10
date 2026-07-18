import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsShowcase } from "@/components/projects-showcase";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">
        <ProjectsShowcase />
      </main>

      <Footer />
    </>
  );
}