import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('blueprint')
  const [expandedSections, setExpandedSections] = useState({})

  useEffect(() => {
    // Animate progress bars on load
    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.style.width
      })
    }, 100)
  }, [])

  const showTab = (tabId) => {
    setActiveTab(tabId)
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="text-white overflow-x-hidden p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="mono">PDP CONTENT GAP ANALYSIS</span>
            <span>•</span>
            <span>January 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-blue-400">Duijvestein Winterstore</span>
            <span className="text-gray-500 mx-3">×</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Outfindo</span>
          </h1>
          <p className="text-gray-400">Alpine Skis — Sample Product: Stockli Laser GS 2026 Winter</p>
        </header>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Blueprint Coverage */}
          <div className="glass rounded-xl p-4 glow-red layer-card">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Blueprint Coverage</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-red-400">25%</span>
              <span className="text-sm text-gray-500 mb-1">/ 90%</span>
            </div>
            <div className="progress-bar h-2 rounded-full mt-3">
              <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <div className="text-xs text-red-400 mt-2 mono">65% GAP</div>
          </div>

          {/* Description Completeness */}
          <div className="glass rounded-xl p-4 glow-red layer-card">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Description Blocks</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-red-400">2</span>
              <span className="text-sm text-gray-500 mb-1">/ 7</span>
            </div>
            <div className="progress-bar h-2 rounded-full mt-3">
              <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '28.5%' }}></div>
            </div>
            <div className="text-xs text-red-400 mt-2 mono">5 BLOCKS MISSING</div>
          </div>

          {/* Safety Block */}
          <div className="glass rounded-xl p-4 glow-red layer-card">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Safety Block</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-red-400">1</span>
              <span className="text-sm text-gray-500 mb-1">/ 6</span>
            </div>
            <div className="progress-bar h-2 rounded-full mt-3">
              <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '16.6%' }}></div>
            </div>
            <div className="text-xs text-red-400 mt-2 mono">CRITICAL GAP</div>
          </div>

          {/* LLM Readiness */}
          <div className="glass rounded-xl p-4 glow-red layer-card">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">LLM Readiness</div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-red-400">D</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Current</span>
                <span className="text-sm text-green-400">Target: A</span>
              </div>
            </div>
            <div className="text-xs text-red-400 mt-2 mono pulse-glow">MAJOR IMPROVEMENT NEEDED</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 border-b border-gray-700 mb-6">
          <button onClick={() => showTab('blueprint')} id="tab-blueprint" className={`pb-3 text-sm font-medium ${activeTab === 'blueprint' ? 'tab-active' : 'text-gray-400 hover:text-white'}`}>Blueprint Gaps</button>
          <button onClick={() => showTab('description')} id="tab-description" className={`pb-3 text-sm font-medium ${activeTab === 'description' ? 'tab-active' : 'text-gray-400 hover:text-white'}`}>Description Gaps</button>
          <button onClick={() => showTab('research')} id="tab-research" className={`pb-3 text-sm font-medium ${activeTab === 'research' ? 'tab-active' : 'text-gray-400 hover:text-white'}`}>Research Insights</button>
          <button onClick={() => showTab('actions')} id="tab-actions" className={`pb-3 text-sm font-medium ${activeTab === 'actions' ? 'tab-active' : 'text-gray-400 hover:text-white'}`}>Recommendations</button>
          <button onClick={() => showTab('transform')} id="tab-transform" className={`pb-3 text-sm font-medium ${activeTab === 'transform' ? 'tab-active' : 'text-gray-400 hover:text-white'}`}>Before/After</button>
        </div>

        {/* Tab Content: Blueprint Gaps */}
        {activeTab === 'blueprint' && (
          <div id="content-blueprint" className="tab-content">
            <div className="grid gap-4">
              
              {/* L1: Core Identification */}
              <div className="glass rounded-xl overflow-hidden layer-card">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l1')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">L1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Core Identification</h3>
                      <p className="text-sm text-gray-400">Product name, brand, SKU, model</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">✓ ADEQUATE</span>
                    <svg id="arrow-l1" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l1" className={`expandable-content ${expandedSections.l1 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="text-gray-400 text-left">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Current State</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">product_name</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-green-400">"Stockli Laser GS"</td>
                          <td className="py-2"><span className="text-green-400">✓</span></td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">brand</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-green-400">"Stockli"</td>
                          <td className="py-2"><span className="text-green-400">✓</span></td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">sku</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-green-400">Present</td>
                          <td className="py-2"><span className="text-green-400">✓</span></td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">season</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-green-400">"2025-2026"</td>
                          <td className="py-2"><span className="text-green-400">✓</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* L2: Goals & Intent */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-red-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l2')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-bold">L2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Goals & Intent</h3>
                      <p className="text-sm text-gray-400">Use case, problem solved, user goals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium pulse-glow">❌ CRITICAL GAP</span>
                    <svg id="arrow-l2" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l2" className={`expandable-content ${expandedSections.l2 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                      <p className="text-red-300 text-sm"><strong>Impact:</strong> LLMs cannot match user intent queries like "I want a ski for fast GS turns on groomed slopes" without structured goal data.</p>
                    </div>
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="text-gray-400 text-left">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Required</th>
                          <th className="pb-2">Current</th>
                          <th className="pb-2">Recommended Value</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">primary_use_case</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-green-400 mono text-xs">race-gs-training</td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">problem_solved</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-green-400 mono text-xs">long-radius-precision-carving</td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">user_goals</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-green-400 mono text-xs">master-gs-turns, high-speed-stability</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* L3: Key Attributes */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-red-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l3')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-bold">L3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Key Attributes</h3>
                      <p className="text-sm text-gray-400">Waist width, turn radius, construction, flex</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">MAJOR GAPS</span>
                    <svg id="arrow-l3" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l3" className={`expandable-content ${expandedSections.l3 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">❌ Missing Entirely (P0 Priority)</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="mono text-xs">waist_width_mm</span>
                            <span className="text-gray-500">— Cannot filter "narrow carving skis"</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="mono text-xs">turn_radius_m</span>
                            <span className="text-gray-500">— Cannot match "GS-style long turns"</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="mono text-xs">sidecut_mm</span>
                            <span className="text-gray-500">— Cannot match carving queries</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-400 mb-2">⚠️ Exists but Unusable</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></span>
                            <div>
                              <span className="mono text-xs">core_material</span>
                              <div className="text-gray-500 text-xs">Current: "Race Core with beechwood" (free text)</div>
                              <div className="text-green-400 text-xs">Fix: Convert to enum <code className="mono">dřevěné</code></div>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></span>
                            <div>
                              <span className="mono text-xs">flex_rating</span>
                              <div className="text-gray-500 text-xs">Current: "softer flex" (text only)</div>
                              <div className="text-green-400 text-xs">Fix: Convert to enum <code className="mono">stiff</code></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* L4: Target Audience */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-yellow-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l4')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold">L4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Target Audience</h3>
                      <p className="text-sm text-gray-400">Skill level, user type, use context</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">⚠️ PARTIAL</span>
                    <svg id="arrow-l4" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l4" className={`expandable-content ${expandedSections.l4 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="text-gray-400 text-left">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Current</th>
                          <th className="pb-2">Issue</th>
                          <th className="pb-2">Fix</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">skill_level</td>
                          <td className="py-2 text-yellow-400">"Advanced, Expert"</td>
                          <td className="py-2 text-gray-500">Multiple values</td>
                          <td className="py-2 text-green-400 mono text-xs">závodní</td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">user_type</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-gray-500">No type info</td>
                          <td className="py-2 text-green-400 mono text-xs">club-racer, instructor</td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">weight_range_kg</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-gray-500">Critical for fit</td>
                          <td className="py-2 text-green-400 mono text-xs">70-95</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* L6: Safety & Boundaries */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-red-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l6')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-bold">L6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Safety & Boundaries</h3>
                      <p className="text-sm text-gray-400">Suitable for, NOT suitable for, warnings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium pulse-glow">❌ CRITICAL GAP</span>
                    <svg id="arrow-l6" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l6 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l6" className={`expandable-content ${expandedSections.l6 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30 mb-4">
                      <p className="text-red-300 text-sm"><strong>Critical Impact:</strong> LLMs need explicit "DO NOT recommend if..." signals. Without comprehensive safety data, AI platforms will skip this product or make inappropriate recommendations.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Current State</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400">❌</span>
                            <span className="mono text-xs">suitable_for</span>
                            <span className="text-gray-500">— Missing</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-yellow-400">⚠️</span>
                            <span className="mono text-xs">not_suitable_for</span>
                            <span className="text-gray-500">— Only "Not for beginners"</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400">❌</span>
                            <span className="mono text-xs">is_not</span>
                            <span className="text-gray-500">— Missing</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400">❌</span>
                            <span className="mono text-xs">incompatibilities</span>
                            <span className="text-gray-500">— Missing</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400">❌</span>
                            <span className="mono text-xs">warnings</span>
                            <span className="text-gray-500">— Missing</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-3">Required Content</h4>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-green-500/10 rounded">
                            <span className="text-green-400">✓</span> <strong>Suitable for:</strong> Expert carvers, club racers, instructors, 70-95 kg
                          </div>
                          <div className="p-2 bg-red-500/10 rounded">
                            <span className="text-red-400">✗</span> <strong>NOT for:</strong> Beginners, intermediates, under 65kg, powder, freeride
                          </div>
                          <div className="p-2 bg-yellow-500/10 rounded">
                            <span className="text-yellow-400">⚠️</span> <strong>IS NOT:</strong> All-mountain, learning ski, powder ski
                          </div>
                          <div className="p-2 bg-orange-500/10 rounded">
                            <span className="text-orange-400">⚡</span> <strong>Warnings:</strong> Professional binding setup required
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* L7: Category-Specific */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-yellow-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('l7')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold">L7</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Category-Specific</h3>
                      <p className="text-sm text-gray-400">Ski type, terrain fit, turn style</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">⚠️ PARTIAL</span>
                    <svg id="arrow-l7" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.l7 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-l7" className={`expandable-content ${expandedSections.l7 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="text-gray-400 text-left">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Current</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">ski_type</td>
                          <td className="py-2">"Piste Performance, Race, Slalom"</td>
                          <td className="py-2"><span className="text-yellow-400">⚠️ Needs cleanup → carvingové</span></td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">profile_shape</td>
                          <td className="py-2">"Camber"</td>
                          <td className="py-2"><span className="text-green-400">✓ Present</span></td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">turn_style_fit</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-gray-500">Add: long-radius-gs</td>
                        </tr>
                        <tr className="border-t border-gray-700/30">
                          <td className="py-2 mono text-xs">terrain_fit</td>
                          <td className="py-2 text-red-400">❌ Missing</td>
                          <td className="py-2 text-gray-500">Add: groomed-hardpack</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content: Description Gaps */}
        {activeTab === 'description' && (
          <div id="content-description" className="tab-content">
            <div className="grid gap-4">
              
              {/* Block Status Overview */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">7 Semantic Blocks — Current Status</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-yellow-500/20 flex items-center justify-center text-2xl mb-2">⚠️</div>
                    <span className="text-xs text-gray-400">Identity</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-red-500/20 flex items-center justify-center text-2xl mb-2">❌</div>
                    <span className="text-xs text-gray-400">Best For</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-yellow-500/20 flex items-center justify-center text-2xl mb-2">⚠️</div>
                    <span className="text-xs text-gray-400">Mechanism</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-red-500/20 flex items-center justify-center text-2xl mb-2">❌</div>
                    <span className="text-xs text-gray-400">What's Inside</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-red-500/20 flex items-center justify-center text-2xl mb-2">❌</div>
                    <span className="text-xs text-gray-400">Differentiators</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-red-500/20 flex items-center justify-center text-2xl mb-2">❌</div>
                    <span className="text-xs text-gray-400">How to Use</span>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square rounded-lg bg-red-500/20 flex items-center justify-center text-2xl mb-2 pulse-glow">❌</div>
                    <span className="text-xs text-red-400">Safety</span>
                  </div>
                </div>
              </div>

              {/* Block 2: Best For - Critical */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-red-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('b2')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-bold">B2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Best For</h3>
                      <p className="text-sm text-gray-400">5-6 specific user situations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">❌ MISSING</span>
                    <svg id="arrow-b2" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.b2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-b2" className={`expandable-content ${expandedSections.b2 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30 mb-4">
                      <p className="text-red-300 text-sm"><strong>Impact:</strong> This is the #1 block for LLM intent matching. Without it, the product cannot be matched to specific user situations.</p>
                    </div>
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Required "Best For" Content:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><span className="text-blue-400">•</span> For club racers training GS technique who need a ski that rewards clean edge engagement</li>
                      <li className="flex gap-2"><span className="text-blue-400">•</span> For advanced skiers weighing 70-95 kg who ski aggressively on hardpack</li>
                      <li className="flex gap-2"><span className="text-blue-400">•</span> For ski instructors demonstrating long-radius carved turns</li>
                      <li className="flex gap-2"><span className="text-blue-400">•</span> For European hardpack specialists who rarely encounter powder</li>
                      <li className="flex gap-2"><span className="text-blue-400">•</span> For technique-focused skiers progressing from intermediate race skis</li>
                      <li className="flex gap-2"><span className="text-red-400">•</span> NOT for: Skiers who want versatility, powder days, or a forgiving ride</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Block 7: Safety - Critical */}
              <div className="glass rounded-xl overflow-hidden layer-card border-l-4 border-red-500">
                <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('b7')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-bold">B7</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Safety & Boundaries</h3>
                      <p className="text-sm text-gray-400">All 6 sections required for responsible AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium pulse-glow">❌ 5/6 MISSING</span>
                    <svg id="arrow-b7" className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedSections.b7 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <div id="section-b7" className={`expandable-content ${expandedSections.b7 ? 'expanded' : ''}`}>
                  <div className="px-4 pb-4 border-t border-gray-700/50">
                    <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30 mb-4">
                      <p className="text-red-300 text-sm"><strong>Critical:</strong> This block is what enables responsible AI recommendations. LLMs are trained to be cautious — without explicit negatives, they will skip the product entirely.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-green-400 text-sm font-semibold mb-2">✓ Suitable For</div>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Expert hardpack carvers</li>
                          <li>• Club/masters racers</li>
                          <li>• Ski instructors</li>
                          <li>• Skiers 70-95 kg</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                        <div className="text-red-400 text-sm font-semibold mb-2">✗ NOT Suitable For</div>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Beginners/intermediates</li>
                          <li>• Skiers under 65 kg</li>
                          <li>• Powder/variable snow</li>
                          <li>• Freeride terrain</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                        <div className="text-yellow-400 text-sm font-semibold mb-2">⚠️ IS NOT / Warnings</div>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Not an all-mountain ski</li>
                          <li>• Not a learning platform</li>
                          <li>• Pro binding setup required</li>
                          <li>• Demands strong technique</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Quality Issues */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Content Quality Issues</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-3">❌ Problems Found</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">"Maximum precision in turns"</span>
                          <div className="text-gray-500 text-xs">Marketing fluff — LLMs cannot verify</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">"Smooth from start to finish"</span>
                          <div className="text-gray-500 text-xs">Vague claim — no constraint matching</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">No dimensions or specifications</span>
                          <div className="text-gray-500 text-xs">Cannot answer "Is this narrow enough?"</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-3">✓ Required Instead</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">"68mm waist width"</span>
                          <div className="text-gray-500 text-xs">Verifiable, filterable fact</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">"17m turn radius (GS geometry)"</span>
                          <div className="text-gray-500 text-xs">Specific, matches intent queries</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <div>
                          <span className="text-gray-300">"Recommended skier weight: 70-95 kg"</span>
                          <div className="text-gray-500 text-xs">Addresses top customer pain point</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div id="content-research" className="tab-content">
            <div className="grid gap-4">
              
              {/* Pain Points Not Addressed */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Pain Points — Not Addressed by Current PDP</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-red-400">0.93</span>
                    </div>
                    <div className="flex-1">
                      <div className="progress-bar h-3 rounded-full">
                        <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '93%' }}></div>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="text-gray-300">"Short skis less maneuverable in tight terrain"</span>
                      <span className="text-yellow-400 ml-2">⚠️ Only 175cm shown</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-red-400">0.83</span>
                    </div>
                    <div className="flex-1">
                      <div className="progress-bar h-3 rounded-full">
                        <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '83%' }}></div>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="text-gray-300">"Hard to choose correct ski type"</span>
                      <span className="text-red-400 ml-2">❌ No guidance</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-red-400">0.79</span>
                    </div>
                    <div className="flex-1">
                      <div className="progress-bar h-3 rounded-full">
                        <div className="progress-fill h-full bg-red-500 rounded-full" style={{ width: '79%' }}></div>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="text-gray-300">"Weight mismatch causes poor handling"</span>
                      <span className="text-red-400 ml-2">❌ No weight recommendation</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-yellow-400">0.61</span>
                    </div>
                    <div className="flex-1">
                      <div className="progress-bar h-3 rounded-full">
                        <div className="progress-fill h-full bg-yellow-500 rounded-full" style={{ width: '61%' }}></div>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="text-gray-300">"Confusing product specification jargon"</span>
                      <span className="text-red-400 ml-2">❌ Uses jargon without explanation</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-yellow-400">0.52</span>
                    </div>
                    <div className="flex-1">
                      <div className="progress-bar h-3 rounded-full">
                        <div className="progress-fill h-full bg-yellow-500 rounded-full" style={{ width: '52%' }}></div>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="text-gray-300">"Unclear stiffness guidance for user weight"</span>
                      <span className="text-red-400 ml-2">❌ No weight guidance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Profiles Match */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Target Customer Profile Match</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Precision Carving & Race Pursuitors</span>
                      <span className="text-xs text-gray-400">6-12% of buyers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400">⚠️</span>
                      <span className="text-sm text-gray-300">Partial Match</span>
                    </div>
                    <p className="text-xs text-gray-400">Missing technical depth they expect (waist width, turn radius, construction details)</p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Safety-Focused Families</span>
                      <span className="text-xs text-gray-400">18-24% of buyers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400">❌</span>
                      <span className="text-sm text-gray-300">Poor Match</span>
                    </div>
                    <p className="text-xs text-gray-400">No safety guidance — only "not for beginners" without context</p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Guidance-Dependent Buyers</span>
                      <span className="text-xs text-gray-400">12-18% of buyers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400">❌</span>
                      <span className="text-sm text-gray-300">Poor Match</span>
                    </div>
                    <p className="text-xs text-gray-400">No clear guidance — they need "Best For" situations</p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Data-Driven Testers</span>
                      <span className="text-xs text-gray-400">4-9% of buyers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400">❌</span>
                      <span className="text-sm text-gray-300">Poor Match</span>
                    </div>
                    <p className="text-xs text-gray-400">No metrics/data — they want specifications and measurements</p>
                  </div>
                </div>
              </div>

              {/* Unmet Customer Goals */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Goals — Current PDP Support</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 text-left border-b border-gray-700">
                      <th className="pb-3">Customer Goal</th>
                      <th className="pb-3 text-center">Priority</th>
                      <th className="pb-3">PDP Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-700/30">
                      <td className="py-3">"Master turn initiation and tip/shovel handling"</td>
                      <td className="py-3 text-center"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">10</span></td>
                      <td className="py-3"><span className="text-yellow-400">⚠️ Mentioned but not explained</span></td>
                    </tr>
                    <tr className="border-t border-gray-700/30">
                      <td className="py-3">"Choose skis with appropriate stiffness/flex for weight"</td>
                      <td className="py-3 text-center"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">9</span></td>
                      <td className="py-3"><span className="text-red-400">❌ No guidance</span></td>
                    </tr>
                    <tr className="border-t border-gray-700/30">
                      <td className="py-3">"Validate purchase with testing"</td>
                      <td className="py-3 text-center"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">9</span></td>
                      <td className="py-3"><span className="text-green-400">✓ Demo available</span></td>
                    </tr>
                    <tr className="border-t border-gray-700/30">
                      <td className="py-3">"Obtain predictable, strong edge control"</td>
                      <td className="py-3 text-center"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">8</span></td>
                      <td className="py-3"><span className="text-green-400">✓ Mentioned</span></td>
                    </tr>
                    <tr className="border-t border-gray-700/30">
                      <td className="py-3">"Get clear, expert-guided setup advice"</td>
                      <td className="py-3 text-center"><span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">8</span></td>
                      <td className="py-3"><span className="text-red-400">❌ Missing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'actions' && (
          <div id="content-actions" className="tab-content">
            <div className="grid gap-4">
              
              {/* P0: Immediate */}
              <div className="glass rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">P0</span>
                  <h3 className="text-lg font-semibold">Immediate Actions — Week 1-2</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Add Safety & Boundaries Block</h4>
                    <p className="text-sm text-gray-400 mb-2">Enables responsible LLM recommendations</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs">High Impact</span>
                      <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-xs">Medium Effort</span>
                    </div>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Add Missing L3 Parameters</h4>
                    <p className="text-sm text-gray-400 mb-2">Waist width, turn radius, sidecut — enables filtering</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs">High Impact</span>
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">Low Effort</span>
                    </div>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Create "Best For" Block</h4>
                    <p className="text-sm text-gray-400 mb-2">5-6 specific user situations for intent matching</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs">High Impact</span>
                      <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-xs">Medium Effort</span>
                    </div>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Convert Multi-Value Fields</h4>
                    <p className="text-sm text-gray-400 mb-2">"Advanced, Expert" → single enum for reliable filtering</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-xs">Medium Impact</span>
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">Low Effort</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* P1: Short-term */}
              <div className="glass rounded-xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold">P1</span>
                  <h3 className="text-lg font-semibold">Short-term Actions — Week 3-4</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Add L2 Goals & Intent</h4>
                    <p className="text-sm text-gray-400">Primary use case, problem solved, user goals</p>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Create Mechanism Block</h4>
                    <p className="text-sm text-gray-400">Consolidated technical explanation for trust</p>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Create "What's Inside" Table</h4>
                    <p className="text-sm text-gray-400">Specifications with consumer context</p>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Create Differentiators</h4>
                    <p className="text-sm text-gray-400">"X instead of Y" format for competitive positioning</p>
                  </div>
                </div>
              </div>

              {/* P2: Medium-term */}
              <div className="glass rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">P2</span>
                  <h3 className="text-lg font-semibold">Medium-term Actions — Month 2</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Full Blueprint Implementation</h4>
                    <p className="text-sm text-gray-400">Across entire ski catalog</p>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Standardize 7 Blocks</h4>
                    <p className="text-sm text-gray-400">All Description blocks across catalog</p>
                  </div>
                  <div className="p-4 glass-dark rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Add MCL Data</h4>
                    <p className="text-sm text-gray-400">Merchant Consideration Layer for agent trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transform' && (
          <div id="content-transform" className="tab-content">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Before */}
              <div className="glass rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-red-400">Before</span>
                  <span className="text-xs text-gray-400">Current State</span>
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-gray-800/50 rounded-lg mono text-xs">
                    <div className="text-white font-bold mb-2">Stockli Laser GS €1,599.00</div>
                    <div className="text-gray-400 mb-3">
                      <div className="text-green-400">✓ Excellent stability at high speed</div>
                      <div className="text-green-400">✓ Playful agility</div>
                      <div className="text-green-400">✓ Maximum precision in turns</div>
                      <div className="text-green-400">✓ Smooth from start to finish</div>
                      <div className="text-red-400">✗ Not suitable for beginner skiers</div>
                    </div>
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div>Type: Piste Performance, Race, Slalom</div>
                      <div>Experience: Advanced, Expert</div>
                      <div>Shape: Camber</div>
                      <div>Binding: Salomon SRT 12 GW</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-red-400">
                      <span>❌</span> No waist width, turn radius, or sidecut
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>❌</span> No weight recommendation
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>❌</span> Marketing claims, not facts
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>❌</span> No "Best For" situations
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>❌</span> Minimal safety information
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="glass rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-400">After</span>
                  <span className="text-xs text-gray-400">Optimized State</span>
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-blue-400 mb-2">BLUEPRINT (Structured)</div>
                    <div className="mono text-xs space-y-1 text-gray-300">
                      <div><span className="text-purple-400">waist_width_mm:</span> 68</div>
                      <div><span className="text-purple-400">turn_radius_m:</span> 17</div>
                      <div><span className="text-purple-400">sidecut_mm:</span> "122-68-104"</div>
                      <div><span className="text-purple-400">weight_range_kg:</span> "70-95"</div>
                      <div><span className="text-purple-400">skill_level:</span> závodní</div>
                      <div><span className="text-purple-400">primary_use_case:</span> race-gs-training</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-green-400 mb-2">BEST FOR (Intent Matching)</div>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• For club racers training GS technique</li>
                      <li>• For skiers 70-95 kg on hardpack</li>
                      <li>• For ski instructors demonstrating turns</li>
                      <li>• NOT for powder, freeride, beginners</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-yellow-400 mb-2">SAFETY BLOCK (Responsible AI)</div>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>✓ Suitable: Expert carvers, 70-95 kg</li>
                      <li>✗ NOT for: Beginners, under 65 kg</li>
                      <li>⚠️ IS NOT: All-mountain, learning ski</li>
                      <li>⚡ Warning: Pro binding setup required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="glass rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Business Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold text-red-400 mb-3">❌ Without Optimization</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Invisible to queries like "GS ski for club racing under €2000"</li>
                    <li>• LLMs cannot verify claims or filter appropriately</li>
                    <li>• AI platforms skip due to missing safety signals</li>
                    <li>• Competitive disadvantage vs. structured-data retailers</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-3">✓ With Optimization</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Full discoverability for intent-matched queries</li>
                    <li>• LLMs can confidently recommend with explanations</li>
                    <li>• Competitive advantage in AI shopping landscape</li>
                    <li>• Higher conversion from qualified traffic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            Generated by <span className="text-purple-400">Outfindo</span> PDP Content Analysis
            <span className="mx-2">•</span>
            January 8, 2026
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App
