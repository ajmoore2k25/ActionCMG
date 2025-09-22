export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm">Action</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">AI Solutions • Online Communities • Media Outreach</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Action is the publishing and media arm within the Logan-Hood ecosystem. We design, deploy,
          and distribute stories, platforms, and tools that advance sovereignty, community, and legacy.
        </p>
      </header>

      <section className="mt-16 rounded-2xl border p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Featured: The Chosen Project — Book One</h2>
        <p className="mt-2 text-gray-700 italic">"Exile is not the end. It is the beginning."</p>
        <p className="mt-4 text-gray-700">
          <span className="font-medium">Enoch’s Truth and Exile</span> opens The Chosen Project — a testament to lineage,
          sovereignty, and bonds that endure beyond exile.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="rounded-lg border px-4 py-2">Media / Inquiries</a>
          <a href="#" className="rounded-lg bg-black text-white px-4 py-2">Join the list</a>
        </div>
      </section>

      <section id="about" className="mt-16">
        <h3 className="text-xl font-semibold">About Action</h3>
        <p className="mt-2 text-gray-700">
          We build clean systems and compelling media. From book publishing to community platforms,
          our work is grounded in clarity, dignity, and measurable impact.
        </p>
      </section>

      <section id="contact" className="mt-16 rounded-2xl border p-8">
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="text-gray-700 mt-2">Questions, media, partnerships — email us or use the form.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm text-gray-600">Email</div>
            <a className="text-lg underline" href="mailto:AJ@AJMoore.com">AJ@AJMoore.com</a>
          </div>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-3">
            <input className="w-full rounded-lg border px-3 py-2" name="name" placeholder="Your name" required />
            <input className="w-full rounded-lg border px-3 py-2" type="email" name="email" placeholder="Your email" required />
            <textarea className="w-full rounded-lg border px-3 py-2" name="message" placeholder="Message" rows="4" required />
            <button className="rounded-lg bg-black text-white px-4 py-2" type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer className="mt-24 border-t pt-6 text-sm text-gray-600 flex items-center justify-between">
        <div>© 2025 Action. All rights reserved.</div>
        <div className="space-x-4">
          <a href="/press" className="underline">Press</a>
          <a href="#about" className="underline">About</a>
        </div>
      </footer>
    </main>
  );
}
