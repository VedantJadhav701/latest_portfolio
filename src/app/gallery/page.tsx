import GalleryComponent from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-12 text-white">
      <div className="w-full">
        <GalleryComponent />
      </div>
    </main>
  );
}
