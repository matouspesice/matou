import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => observer.observe(el));

    // Navigation dots
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.nav-dot');

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.section === id) {
              dot.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => navObserver.observe(section));

    // Cleanup
    return () => {
      fadeInElements.forEach(el => observer.unobserve(el));
      sections.forEach(section => navObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      {/* Navigation Dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        <a href="#hero" className="nav-dot w-3 h-3 rounded-full bg-gray-600 active" data-section="hero"></a>
        <a href="#problem" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="problem"></a>
        <a href="#shift" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="shift"></a>
        <a href="#solution" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="solution"></a>
        <a href="#blueprint" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="blueprint"></a>
        <a href="#description" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="description"></a>
        <a href="#mcl" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="mcl"></a>
        <a href="#pipeline" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="pipeline"></a>
        <a href="#duijvestein" className="nav-dot w-3 h-3 rounded-full bg-gray-600" data-section="duijvestein"></a>
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" className="section relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-4 py-2 rounded-full glass text-sm text-gray-300">
                <span className="text-blue-400">●</span> Product Data Infrastructure for AI Commerce
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">PDP Content System</span><br />
              <span className="gradient-text">for the AI Era</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Consumer Conversion + LLM Discoverability<br />
              <span className="text-gray-500">One system. Two audiences. Complete coverage.</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-400">Duijvestein</span>
                <span className="text-2xl text-gray-500 mx-4">×</span>
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Outfindo</span>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              Alpine Skis • January 2026
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section id="problem" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <span className="text-sm text-red-400 uppercase tracking-widest">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Current PDPs Are Failing</h2>
            <p className="text-xl text-gray-400 mt-4">Twice over — for both humans and AI</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 fade-in">
            {/* Problem for Humans */}
            <div className="glass rounded-2xl p-8 glow-red">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">For Consumers</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">Manufacturer-centric specs</span>
                    <p className="text-sm text-gray-400">Confusing jargon, no context for decisions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">Marketing fluff</span>
                    <p className="text-sm text-gray-400">"Maximum precision" doesn't answer "Is this right for me?"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">Missing use cases</span>
                    <p className="text-sm text-gray-400">"Is this ski right for my weight and style?"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">No safety guidance</span>
                    <p className="text-sm text-gray-400">Uncertainty prevents purchase</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Problem for LLMs */}
            <div className="glass rounded-2xl p-8 glow-red">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">For AI Platforms</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">No structured data</span>
                    <p className="text-sm text-gray-400">Cannot extract specs for filtering</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">Marketing detected</span>
                    <p className="text-sm text-gray-400">AI trained to discount superlatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">No intent mapping</span>
                    <p className="text-sm text-gray-400">Cannot match to user situations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <span className="font-medium">Missing safety block</span>
                    <p className="text-sm text-gray-400">Risk-averse AI skips product entirely</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center fade-in">
            <div className="inline-block glass rounded-xl px-8 py-4">
              <span className="text-gray-400">Result:</span>
              <span className="text-red-400 font-semibold ml-2">Products invisible to AI shopping + low human conversion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Shift */}
      <section id="shift" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <span className="text-sm text-blue-400 uppercase tracking-widest">The Shift</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">AI Shopping Is Here</h2>
            <p className="text-xl text-gray-400 mt-4">By 2026, AI agents mediate product discovery</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 fade-in">
            <div className="glass rounded-2xl p-6 text-center layer-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">ChatGPT Shopping</h3>
              <p className="text-sm text-gray-400 mb-4">52% accuracy on multi-constraint queries. Memory integration. Trained to detect marketing fluff.</p>
              <div className="text-xs text-green-400">Instant Checkout enabled</div>
            </div>

            <div className="glass rounded-2xl p-6 text-center layer-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Perplexity Shopping</h3>
              <p className="text-sm text-gray-400 mb-4">"Buy with Pro" feature. Snap to Shop visual search. Conversational refinement.</p>
              <div className="text-xs text-purple-400">Citation-based recommendations</div>
            </div>

            <div className="glass rounded-2xl p-6 text-center layer-card">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Google AI Mode</h3>
              <p className="text-sm text-gray-400 mb-4">Agentic checkout. Real-time store availability. Schema.org integration.</p>
              <div className="text-xs text-blue-400">35B+ product listings</div>
            </div>
          </div>

          <div className="mt-16 fade-in">
            <div className="glass-strong rounded-2xl p-8 text-center max-w-4xl mx-auto glow-blue">
              <div className="text-5xl font-bold gradient-text mb-4">$1 Trillion</div>
              <p className="text-xl text-gray-300">Projected US B2C revenue via agentic commerce by 2030</p>
              <p className="text-sm text-gray-500 mt-2">Source: McKinsey</p>
            </div>
          </div>

          <div className="mt-12 text-center fade-in">
            <div className="inline-flex items-center gap-4 glass rounded-xl px-8 py-4">
              <span className="text-2xl">⚠️</span>
              <div className="text-left">
                <span className="text-yellow-400 font-semibold">These platforms don't keyword-match</span>
                <p className="text-sm text-gray-400">They understand intent and match constraints. Poor structured data = invisible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Solution */}
      <section id="solution" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <span className="text-sm text-green-400 uppercase tracking-widest">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Blueprint + Description</h2>
            <p className="text-xl text-gray-400 mt-4">Two-part architecture for complete coverage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 fade-in">
            {/* Blueprint */}
            <div className="glass rounded-2xl p-8 glow-blue layer-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">Blueprint</h3>
                </div>
                <span className="text-xs text-gray-500 mono">STRUCTURED DATA</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Machine-readable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Constraint matching</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Filtering & ranking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">→</span>
                  <span className="font-semibold">"WHAT the product IS"</span>
                </li>
              </ul>
              <div className="glass rounded-lg p-4 mono text-xs">
                <div className="text-gray-500">Format: JSON / controlled vocabularies (enums)</div>
                <div className="mt-2 text-gray-400">
                  <span className="text-purple-400">waist_width_mm:</span> 68<br />
                  <span className="text-purple-400">turn_radius_m:</span> 17<br />
                  <span className="text-purple-400">skill_level:</span> "závodní"
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass rounded-2xl p-8 glow-purple layer-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">Description</h3>
                </div>
                <span className="text-xs text-gray-500 mono">SEMANTIC CONTENT</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Human-readable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Context & explanation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Trust & persuasion</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">→</span>
                  <span className="font-semibold">"WHY and HOW it works"</span>
                </li>
              </ul>
              <div className="glass rounded-lg p-4 text-xs">
                <div className="text-gray-500">Format: 7 semantic blocks with specific purposes</div>
                <div className="mt-2 text-gray-400">
                  "For club racers training GS technique who need a ski that rewards clean edge engagement..."
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 fade-in">
            <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold mb-6 text-center">Why Both Are Needed</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left pb-4">Component</th>
                    <th className="text-left pb-4">LLM Function</th>
                    <th className="text-left pb-4">Consumer Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-blue-400 font-medium">Blueprint</td>
                    <td className="py-4 text-gray-300">Slot filling, constraint matching, filtering</td>
                    <td className="py-4 text-gray-300">Quick specs scanning, comparison</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-purple-400 font-medium">Description</td>
                    <td className="py-4 text-gray-300">Context enrichment, semantic understanding</td>
                    <td className="py-4 text-gray-300">Trust building, decision support</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 text-center text-gray-400">
                <span className="text-green-400">→</span> LLM uses Blueprint to <strong className="text-white">find</strong> products, then uses Description to <strong className="text-white">explain</strong> and <strong className="text-white">verify</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Blueprint Layers */}
      <section id="blueprint" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-12">
            <span className="text-sm text-blue-400 uppercase tracking-widest">Blueprint Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">7 Structured Layers</h2>
            <p className="text-xl text-gray-400 mt-4">Each layer serves a specific purpose for discovery</p>
          </div>

          <div className="grid gap-4 fade-in">
            {/* L1 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-500/30 to-slate-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-slate-300">L1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Core Identification</h4>
                <p className="text-sm text-gray-400">Product name, brand, SKU, variant — entity resolution</p>
              </div>
              <div className="text-xs text-gray-500 mono hidden md:block">product_name, brand, sku, gtin</div>
            </div>

            {/* L2 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card border border-blue-500/30">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-blue-300">L2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-blue-400">Goals & Intent</h4>
                <p className="text-sm text-gray-400">Primary use case, problem solved, user goals — <strong>intent matching</strong></p>
              </div>
              <div className="text-xs text-blue-400 mono hidden md:block">primary_use_case, user_goals</div>
            </div>

            {/* L3 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-cyan-300">L3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Key Attributes</h4>
                <p className="text-sm text-gray-400">Technical specs with controlled vocabularies — constraint filtering</p>
              </div>
              <div className="text-xs text-gray-500 mono hidden md:block">waist_width, turn_radius, flex</div>
            </div>

            {/* L4 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-emerald-300">L4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Target Audience</h4>
                <p className="text-sm text-gray-400">Skill level, user type, weight range — audience filtering</p>
              </div>
              <div className="text-xs text-gray-500 mono hidden md:block">skill_level, user_type, weight_range</div>
            </div>

            {/* L5 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-amber-300">L5</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Usage & Experience</h4>
                <p className="text-sm text-gray-400">Setup, maintenance, demo availability — practical context</p>
              </div>
              <div className="text-xs text-gray-500 mono hidden md:block">setup_complexity, demo_available</div>
            </div>

            {/* L6 - Critical */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card border-2 border-red-500/50 glow-red">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-500/30 to-red-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-red-300">L6</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-red-400">Safety & Boundaries</h4>
                <p className="text-sm text-gray-400">Suitable for, NOT suitable for, warnings — <strong>responsible AI recommendations</strong></p>
              </div>
              <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs hidden md:block">CRITICAL</div>
            </div>

            {/* L7 */}
            <div className="glass rounded-xl p-4 flex items-center gap-4 layer-card">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-violet-500/30 to-violet-600/30 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-violet-300">L7</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Category-Specific</h4>
                <p className="text-sm text-gray-400">Ski type, terrain fit, turn style — deep matching for category</p>
              </div>
              <div className="text-xs text-gray-500 mono hidden md:block">ski_type, terrain_fit, turn_style</div>
            </div>
          </div>

          <div className="mt-8 fade-in text-center">
            <div className="inline-block glass rounded-xl px-8 py-4">
              <span className="text-red-400 font-semibold">L6 is Critical:</span>
              <span className="text-gray-300 ml-2">AI platforms need explicit "DO NOT recommend if..." signals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Description Blocks */}
      <section id="description" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-12">
            <span className="text-sm text-purple-400 uppercase tracking-widest">Description Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">7 Semantic Blocks</h2>
            <p className="text-xl text-gray-400 mt-4">Each block serves consumers and LLMs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 fade-in">
            {/* Block 1 */}
            <div className="glass rounded-xl p-5 layer-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">1</span>
                <h4 className="font-semibold">Identity Statement</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">50-80 words, prose</p>
              <div className="text-xs text-gray-500">"What exactly is this?" — Entity resolution</div>
            </div>

            {/* Block 2 */}
            <div className="glass rounded-xl p-5 layer-card border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-sm font-bold text-green-400">2</span>
                <h4 className="font-semibold text-green-400">Best For</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">5-6 bullet points, specific situations</p>
              <div className="text-xs text-green-400">"Is this right for me?" — Intent matching</div>
            </div>

            {/* Block 3 */}
            <div className="glass rounded-xl p-5 layer-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">3</span>
                <h4 className="font-semibold">Mechanism</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">80-120 words, prose</p>
              <div className="text-xs text-gray-500">"How does it work?" — Trust building</div>
            </div>

            {/* Block 4 */}
            <div className="glass rounded-xl p-5 layer-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">4</span>
                <h4 className="font-semibold">What's Inside</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">Structured table with context</p>
              <div className="text-xs text-gray-500">"What am I getting?" — Verification</div>
            </div>

            {/* Block 5 */}
            <div className="glass rounded-xl p-5 layer-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">5</span>
                <h4 className="font-semibold">Differentiators</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">"X instead of Y" format</p>
              <div className="text-xs text-gray-500">"Why this vs alternatives?" — Positioning</div>
            </div>

            {/* Block 6 */}
            <div className="glass rounded-xl p-5 layer-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">6</span>
                <h4 className="font-semibold">How to Use</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">Structured key-value</p>
              <div className="text-xs text-gray-500">"How do I use it?" — Practical guidance</div>
            </div>

            {/* Block 7 - Critical */}
            <div className="glass rounded-xl p-5 layer-card border-2 border-red-500/50 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-400">7</span>
                <h4 className="font-semibold text-red-400">Safety & Boundaries</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">6 required sections</p>
              <div className="text-xs text-red-400">"What should I know?" — Responsible AI</div>
              <div className="mt-3 text-xs text-gray-500">
                ✓ Suitable for • ✗ NOT suitable for • ⚠️ IS NOT • 💊 Incompatibilities • 🚫 Do not combine • ⚡ Warnings
              </div>
            </div>
          </div>

          <div className="mt-12 fade-in">
            <div className="glass-strong rounded-2xl p-6 max-w-3xl mx-auto">
              <h4 className="text-center font-semibold mb-4">Block 2 Example: "Best For"</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-gray-500">Bad: "For people who want quality"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Good: "For club racers training GS technique who need a ski that rewards clean edge engagement and punishes sloppy form"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: MCL */}
      <section id="mcl" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-12">
            <span className="text-sm text-orange-400 uppercase tracking-widest">The Third Layer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Merchant Consideration Layer</h2>
            <p className="text-xl text-gray-400 mt-4">Trust signals that help AI agents choose your store</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 fade-in">
            <div className="glass rounded-xl p-6 text-center layer-card">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h4 className="font-semibold mb-2">Identity</h4>
              <p className="text-xs text-gray-400">Merchant name, rating, years in business, verified profiles</p>
            </div>

            <div className="glass rounded-xl p-6 text-center layer-card">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-2">Shipping</h4>
              <p className="text-xs text-gray-400">Destinations, cost model, delivery windows, handling time</p>
            </div>

            <div className="glass rounded-xl p-6 text-center layer-card">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h4 className="font-semibold mb-2">Returns</h4>
              <p className="text-xs text-gray-400">Window days, shipping cost, exceptions, policy URL</p>
            </div>

            <div className="glass rounded-xl p-6 text-center layer-card">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-xs text-gray-400">Channels, hours, response SLA, expert availability</p>
            </div>
          </div>

          <div className="mt-12 fade-in">
            <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-center font-semibold mb-6">Merchant Consideration Score (MCS)</h4>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">Value</div>
                  <p className="text-xs text-gray-400 mt-1">Price transparency</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">Speed</div>
                  <p className="text-xs text-gray-400 mt-1">Delivery windows</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">Risk</div>
                  <p className="text-xs text-gray-400 mt-1">Returns clarity</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">Trust</div>
                  <p className="text-xs text-gray-400 mt-1">Rating & reviews</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">Support</div>
                  <p className="text-xs text-gray-400 mt-1">Availability</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="text-gray-400">Combined into:</span>
                <span className="ml-2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-semibold">Agent-Ready Score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: LLM Pipeline */}
      <section id="pipeline" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-12">
            <span className="text-sm text-cyan-400 uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">LLM Discovery Pipeline</h2>
            <p className="text-xl text-gray-400 mt-4">How AI shopping platforms use our content</p>
          </div>

          <div className="fade-in">
            {/* User Query */}
            <div className="glass rounded-xl p-6 mb-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <span className="text-xs text-gray-500">User Query</span>
                  <p className="text-lg font-medium">"I need a race ski for GS training, I weigh 85kg"</p>
                </div>
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="grid gap-4 max-w-4xl mx-auto">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-cyan-400">1</span>
                </div>
                <div className="flex-1">
                  <span className="font-semibold">Intent Classification</span>
                  <p className="text-sm text-gray-400">Category: Skis • Intent: PURCHASE • Constraints: race, GS, 85kg</p>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 border border-blue-500/30">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-blue-400">2</span>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-blue-400">Slot Filling (BLUEPRINT)</span>
                  <p className="text-sm text-gray-400">primary_use_case: "race-gs-training" • weight_range: "70-95" • skill_level: "závodní"</p>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 border border-blue-500/30">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-blue-400">3</span>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-blue-400">Constraint Matching (BLUEPRINT)</span>
                  <p className="text-sm text-gray-400">Filter products meeting all constraints → Rank by relevance</p>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 border border-purple-500/30">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-purple-400">4</span>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-purple-400">Context Enrichment (DESCRIPTION)</span>
                  <p className="text-sm text-gray-400">"Best For" confirms GS training suitability • "Safety" confirms 85kg is in range • No exclusions apply</p>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 border border-green-500/30">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-green-400">5</span>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-green-400">Response Generation</span>
                  <p className="text-sm text-gray-400">LLM synthesizes recommendation with explanations → Cites specific features → Notes limitations</p>
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="glass-strong rounded-xl p-6 mt-8 max-w-3xl mx-auto glow-green">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <span className="text-xs text-green-400">AI Recommendation</span>
                  <p className="text-sm text-gray-300 mt-2">"The Stockli Laser GS is well-suited for your GS training needs. At 85kg, you're in the optimal weight range (70-95kg) for this ski's stiff flex. The 17m turn radius and 68mm waist are designed specifically for GS-style long-radius turns on groomed hardpack. Available at Duijvestein Winterstore with demo option in Zoetermeer."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Duijvestein */}
      <section id="duijvestein" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-12">
            <span className="text-sm text-blue-400 uppercase tracking-widest">For Duijvestein</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What This Means For You</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 fade-in">
            {/* Without */}
            <div className="glass rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <span>❌</span> Without Optimization
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300">Invisible to queries like "GS ski for club racing under €2000"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300">LLMs cannot verify claims or filter by specs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300">AI platforms skip due to missing safety signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300">Competitive disadvantage vs structured-data retailers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300">Lower conversion from human visitors — no guidance</span>
                </li>
              </ul>
            </div>

            {/* With */}
            <div className="glass rounded-2xl p-8 border border-green-500/30 glow-green">
              <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <span>✓</span> With Outfindo System
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Full discoverability for intent-matched queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">LLMs can confidently recommend with explanations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Responsible AI recommendations with clear boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Competitive advantage in AI shopping landscape</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Higher conversion — customers find the right products</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 fade-in">
            <div className="glass-strong rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-6">What We Deliver</h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl mb-2">📐</div>
                  <h5 className="font-semibold">Category Blueprint</h5>
                  <p className="text-xs text-gray-400">All parameters and enums for Alpine Skis</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📝</div>
                  <h5 className="font-semibold">Description Templates</h5>
                  <p className="text-xs text-gray-400">7 blocks adapted for your products</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔍</div>
                  <h5 className="font-semibold">Gap Analysis</h5>
                  <p className="text-xs text-gray-400">Current vs optimized state</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold">Generated Content</h5>
                  <p className="text-xs text-gray-400">Ready-to-deploy for your catalog</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center fade-in">
            <div className="inline-block">
              <div className="text-sm text-gray-500 mb-2">Built on Outfindo consumer research for Alpine Skis</div>
              <div className="glass rounded-xl px-8 py-4">
                <span className="text-gray-400">This is not SEO. This is not marketing copy.</span><br />
                <span className="text-white font-semibold">This is product data infrastructure for the AI commerce era.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-800">
        <p className="text-sm text-gray-500">
          <span className="text-blue-400">Duijvestein Winterstore</span>
          <span className="mx-3">×</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Outfindo</span>
          <span className="mx-3">•</span>
          January 2026
        </p>
      </footer>
    </div>
  )
}

export default App
