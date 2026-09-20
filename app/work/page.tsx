import Image from "next/image";

export default function Work() {
  return (
    <main className="flex w-full flex-1 justify-center px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden">
        <Image
          src="/paint.jpeg"
          alt="A painting by Natalie Puha"
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}
