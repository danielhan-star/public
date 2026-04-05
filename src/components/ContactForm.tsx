"use client";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
  };
}

export default function ContactForm({ labels }: ContactFormProps) {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
          {labels.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-lg transition-colors text-sm tracking-wide uppercase"
      >
        {labels.submit}
      </button>
    </form>
  );
}
