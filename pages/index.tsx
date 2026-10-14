import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WXS — website development, SEO and AI automations</title>
        <meta name="description" content="Modern, fast websites from €299, local SEO and AI automations for businesses. Ready in 3‑7 business days, invoice after approval." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
        {/* Hero */}
        <section className="text-center p-8 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Fast, Modern Websites for Your Business</h1>
          <p className="text-xl mb-6">From €299 we build a complete, SEO‑optimized site ready in 3‑7 business days.</p>
          <a href="#pricing" className="px-6 py-3 bg-white text-indigo-700 rounded-md hover:bg-gray-100 transition">See Pricing</a>
        </section>
        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 p-8 max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-800"><h2 className="text-2xl font-semibold mb-2">Performance</h2><p>Lightning‑fast loading times with modern web tech.</p></div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-800"><h2 className="text-2xl font-semibold mb-2">SEO</h2><p>Built‑in SEO best practices to get found online.</p></div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-800"><h2 className="text-2xl font-semibold mb-2">AI Automation</h2><p>AI‑powered tools for content and workflow automation.</p></div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="bg-gray-100 w-full py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-300 rounded-xl p-8 bg-white"><h3 className="text-2xl font-semibold mb-4">Starter</h3><p className="text-3xl font-bold mb-4">€299</p><ul className="mb-4 text-left"><li>1‑page website</li><li>Basic SEO</li><li>Email support</li></ul><button className="px-4 py-2 bg-indigo-600 text-white rounded">Choose</button></div>
              <div className="border border-indigo-600 rounded-xl p-8 bg-white shadow-lg"><h3 className="text-2xl font-semibold mb-4">Business</h3><p className="text-3xl font-bold mb-4">€799</p><ul className="mb-4 text-left"><li>5‑page website</li><li>Advanced SEO</li><li>AI content generator</li><li>Phone support</li></ul><button className="px-4 py-2 bg-indigo-600 text-white rounded">Choose</button></div>
              <div className="border border-gray-300 rounded-xl p-8 bg-white"><h3 className="text-2xl font-semibold mb-4">Enterprise</h3><p className="text-3xl font-bold mb-4">Custom</p><ul className="mb-4 text-left"><li>Full‑scale website</li><li>Custom integrations</li><li>Dedicated account manager</li></ul><button className="px-4 py-2 bg-indigo-600 text-white rounded">Contact Us</button></div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section className="p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="p-2 rounded border" required />
            <input type="email" placeholder="Email" className="p-2 rounded border" required />
            <textarea placeholder="Message" rows=4 className="p-2 rounded border" required />
            <button type="submit" className="bg-indigo-600 text-white py-2 rounded">Send</button>
          </form>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white w-full py-4 text-center"><p>© 2026 WXS – All rights reserved.</p></footer>
      </main>
    </>
  );
}
