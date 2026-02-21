import { useState, type FormEvent } from "react";

const ContactSignup = () => {
  const [honeyName, setHoneyName] = useState("");
  const [honeyEmail, setHoneyEmail] = useState("");
  const [honeySubmitted, setHoneySubmitted] = useState(false);

  const [nlName, setNlName] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const handleHoneySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (honeyName.trim() && honeyEmail.trim()) {
      setHoneySubmitted(true);
    }
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nlName.trim() && nlEmail.trim()) {
      setNlSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <h2 id="contact-heading" className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
          Stay Connected
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Honey Waitlist */}
          <div className="rounded-xl bg-card border border-border p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Honey Waitlist</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Our honey sells fast! Join the waitlist to be first in line when new batches are ready.
            </p>

            {honeySubmitted ? (
              <div role="status" className="rounded-lg bg-accent/10 border border-accent p-4 text-center">
                <p className="font-body font-semibold text-accent">You're on the list! 🐝</p>
                <p className="font-body text-sm text-muted-foreground mt-1">We'll notify you when honey is available.</p>
              </div>
            ) : (
              <form onSubmit={handleHoneySubmit} noValidate>
                <div className="mb-4">
                  <label htmlFor="honey-name" className="block font-body text-sm font-medium text-foreground mb-1">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="honey-name"
                    type="text"
                    required
                    maxLength={100}
                    value={honeyName}
                    onChange={(e) => setHoneyName(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="honey-email" className="block font-body text-sm font-medium text-foreground mb-1">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="honey-email"
                    type="email"
                    required
                    maxLength={255}
                    value={honeyEmail}
                    onChange={(e) => setHoneyEmail(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-2.5 font-body font-semibold text-primary-foreground hover:bg-honey-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>

          {/* Newsletter */}
          <div className="rounded-xl bg-card border border-border p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Newsletter</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Get updates on new products, seasonal offers, and beekeeping tips delivered to your inbox.
            </p>

            {nlSubmitted ? (
              <div role="status" className="rounded-lg bg-accent/10 border border-accent p-4 text-center">
                <p className="font-body font-semibold text-accent">Subscribed! 🍯</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Watch your inbox for sweet updates.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate>
                <div className="mb-4">
                  <label htmlFor="nl-name" className="block font-body text-sm font-medium text-foreground mb-1">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nl-name"
                    type="text"
                    required
                    maxLength={100}
                    value={nlName}
                    onChange={(e) => setNlName(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="nl-email" className="block font-body text-sm font-medium text-foreground mb-1">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    required
                    maxLength={255}
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-2.5 font-body font-semibold text-primary-foreground hover:bg-honey-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSignup;
