export default function PricingPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="text-muted-foreground mb-4">Basic features for personal use.</p>
          <p className="text-3xl font-bold">$0</p>
        </div>
        <div className="border p-6 rounded shadow bg-secondary-background">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-muted-foreground mb-4">Advanced features for individuals.</p>
          <p className="text-3xl font-bold">$19/mo</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
          <p className="text-muted-foreground mb-4">Custom solutions for businesses.</p>
          <p className="text-3xl font-bold">Contact Us</p>
        </div>
      </div>
    </main>
  );
}
