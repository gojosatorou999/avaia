const cards = ["Project One", "Project Two", "Project Three", "Project Four"];

export default function ImpactProjects() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-12" aria-labelledby="impact-title">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">Impact / Projects</p>
          <h2 id="impact-title" className="text-4xl font-semibold text-jet md:text-5xl">
            Modular grid for campaigns and outcomes.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((title) => (
            <article
              key={title}
              className="rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:-translate-y-1 hover:border-accent/50"
            >
              <h3 className="text-xl font-medium text-jet">{title}</h3>
              <p className="mt-3 text-charcoal/70">
                Placeholder for initiative snapshot, KPI, and call-to-action.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
