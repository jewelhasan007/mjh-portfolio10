import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ProjectsShowcase2 } from "@/components/projects-showcase-services";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">

        <ProjectsShowcase2 />
        
      </main>

      <Footer />
    </>
  );
}