export default function AboutMission() {
  return (
    <section
      className="min-h-screen px-6 py-20 md:px-12"
      aria-labelledby="mission-title"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center rounded-3xl bg-white/60 p-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">About / Mission</p>
          <h2 id="mission-title" className="text-4xl font-semibold text-jet md:text-5xl">
            Built for text-reveal storytelling on scroll.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal/80">
            This section is intentionally clean and spacious, ready for progressive text animations that communicate mission, values, and long-form narrative.
          </p>
        </div>
      </div>
    </section>
  );
}
