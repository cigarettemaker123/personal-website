export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4">
          <div>hey i&apos;m natalie (totally)</div>
          <iframe
            data-testid="embed-iframe"
            className="w-full max-w-md"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/1RVct64jvTDsCIfLEulr7Z?utm_source=generator&theme=0&si=0765cb2d137e4b75"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify track player"
          />
        </div>
      </main>
    </div>
  );
}
