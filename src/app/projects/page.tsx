import ProjectsComponent from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-12 text-white">
      <div className="w-full">
        <ProjectsComponent />
      </div>
    </main>
  );
}
