import ExperienceComponent from '@/components/Experience';
import SkillsComponent from '@/components/Skills';

export default function ExperiencePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-12 text-white">
      <div className="w-full space-y-24">
        <ExperienceComponent />
        <SkillsComponent />
      </div>
    </main>
  );
}
