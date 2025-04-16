export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Have questions or want to say hello? Reach out to us!
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}
