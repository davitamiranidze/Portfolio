import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        title="Contact Me"
        subtitle="Have a project or opportunity? Let's connect."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Let's work together.
          </h3>

          <p className="paragraph mt-4">
            I'm currently looking for software engineering opportunities,
            internships, and freelance projects.
          </p>

          <div className="mt-6 sm:mt-8">
            <p className="text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
              <span className="font-semibold">Email</span>
              <br />
              <a
                href="mailto:davit.amiranidze@gmail.com"
                className="break-all transition hover:text-black dark:hover:text-white"
              >
                davit.amiranidze@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://www.linkedin.com/in/daviti-amiranidze"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              GitHub
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="card space-y-4 sm:space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="input"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message..."
            required
            className="input min-h-36 resize-y"
          />

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
