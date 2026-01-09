import React, { useState } from 'react';

const DuijvesteinSkiPDPComplete = () => {
  const [view, setView] = useState('after'); // 'after', 'compare', 'data', 'mcl'

  // ===========================================
  // PRODUCT DATA (Blueprint Structured Data)
  // ===========================================
  const productData = {
    name: 'Atomic Redster G9 RS',
    fullName: 'Atomic Redster G9 RS + X 12 GW Race Binding 2024/25',
    brand: 'Atomic',
    category: 'Giant Slalom Race Ski',
    season: '2024/25',
    
    // L1: Core Identity
    core: {
      type: 'Race',
      discipline: 'Giant Slalom',
      construction: 'Sandwich Sidewall',
      core: 'Densolite Core + Carbon Backbone',
      lengths: ['171', '177', '183', '189'],
      radiusByLength: { '183': '23m' },
      weight: '~1850g per ski @ 183cm'
    },
    
    // L2: Goals & Intent Matching
    goals: {
      primary: 'Competitive Racing',
      secondary: 'High-Performance Training',
      intents: [
        'Race-ready GS ski for FIS competitions',
        'Elite training for advanced racers',
        'Maximum edge grip on hard snow'
      ]
    },
    
    // L3: Technical Performance
    performance: {
      skillLevel: 'Expert/Elite',
      terrainType: 'Groomed/Race Course',
      snowConditions: ['Hard-pack', 'Icy', 'Race-prepared'],
      flex: 'Very Stiff (9/10)',
      torsion: 'Very Stiff (9/10)',
      dampening: 'Moderate (Race-tuned)',
      edgeGrip: 'Maximum',
      stability: 'Exceptional at High Speed'
    },
    
    // L4: Skier Profile
    skierProfile: {
      ability: 'Expert to Elite',
      style: 'Aggressive, Race-oriented',
      physique: {
        weightRange: '75-100kg optimal',
        heightRange: '175-195cm typical',
        strength: 'High leg strength required'
      },
      experience: '10+ years skiing, racing background'
    },
    
    // L5: Use Context
    useContext: {
      primaryUse: 'FIS Giant Slalom Competition',
      secondaryUse: 'Race Training',
      conditions: 'Hard snow, icy race courses',
      frequency: 'Frequent (50+ days/season)',
      terrain: 'Prepared race courses only'
    },
    
    // L6: Safety & Boundaries
    safety: {
      suitableFor: [
        'FIS-licensed racers',
        'Elite club racers',
        'Former competitive skiers',
        'Advanced skiers with race training'
      ],
      notSuitableFor: [
        'Intermediate skiers',
        'Recreational all-mountain skiing',
        'Powder or off-piste',
        'Beginners or progressing skiers',
        'Lighter skiers under 65kg'
      ],
      warnings: [
        'Extremely demanding ski - requires expert technique',
        'Not forgiving of mistakes at speed',
        'Requires proper race training to handle safely',
        'Stiff flex can cause fatigue without proper conditioning'
      ],
      bindingNote: 'DIN setting must be professionally calibrated'
    },
    
    // Binding specs
    binding: {
      model: 'X 12 GW',
      din: '4-12',
      type: 'Race',
      compatibility: 'GripWalk compatible'
    }
  };

  // ===========================================
  // MCL DATA (Merchant Consideration Layer)
  // ===========================================
  const mclData = {
    // Merchant Profile (Sitewide)
    merchant: {
      merchant_id: 'duijvestein_001',
      display_name: 'Duijvestein Winterstore',
      legal_name: 'Duijvestein Wintersport B.V.',
      website_url: 'https://www.duijvestein.nl',
      country: 'NL',
      years_in_business: 45,
      // Business Identifiers
      identifiers: {
        kvk: '27312456', // Dutch Chamber of Commerce
        vat: 'NL123456789B01',
        duns: null, // Can be added
        gln: null   // Can be added
      },
      // Support
      support: {
        channels: ['phone', 'email', 'chat', 'store'],
        hours: 'Mon-Sat 10:00-18:00 CET',
        response_sla: '< 24 hours',
        phone: '+31 70 355 1234',
        email: 'info@duijvestein.nl'
      },
      // Social Proof / Consensus
      reputation: {
        trustpilot_score: 4.7,
        trustpilot_reviews: 2847,
        google_rating: 4.8,
        google_reviews: 1523,
        kiyoh_score: 9.2,
        source_urls: [
          'https://www.trustpilot.com/review/duijvestein.nl',
          'https://www.google.com/maps/place/Duijvestein'
        ]
      },
      // Certifications
      certifications: [
        'Thuiswinkel Waarborg',
        'WebwinkelKeur',
        'Trusted Shops'
      ],
      // Same As (Knowledge Graph Links)
      same_as: [
        'https://www.linkedin.com/company/duijvestein-wintersport',
        'https://www.facebook.com/duijvesteinwintersport',
        'https://www.instagram.com/duijvestein'
      ]
    },
    
    // Offer Capsule (Per-SKU)
    offer: {
      offer_id: 'atomic-redster-g9-rs-2425',
      canonical_offer_url: 'https://www.duijvestein.nl/atomic-redster-g9-rs-2024-2025',
      price: {
        amount: 1199.00,
        currency: 'EUR',
        price_valid_until: '2025-03-31'
      },
      availability: 'in_stock',
      condition: 'new',
      inventory_count: 8,
      last_inventory_sync: '2026-01-09T10:30:00Z'
    },
    
    // Shipping Policy
    shipping: {
      destinations_supported: ['NL', 'BE', 'DE', 'FR', 'AT', 'CH'],
      policy_url: 'https://www.duijvestein.nl/verzending',
      methods: [
        {
          name: 'Standard Shipping',
          cost: { NL: 0, BE: 0, DE: 9.95, other: 14.95 },
          delivery_window: { min_days: 1, max_days: 3 }
        },
        {
          name: 'Express Shipping',
          cost: { NL: 9.95, BE: 14.95, DE: 19.95 },
          delivery_window: { min_days: 1, max_days: 1 }
        }
      ],
      handling_time_days: 1,
      warehouse_location: 'Den Haag, Netherlands',
      free_shipping_threshold: { NL: 0, BE: 0, DE: 150 }
    },
    
    // Returns Policy
    returns: {
      policy_url: 'https://www.duijvestein.nl/retourneren',
      return_window_days: 30,
      return_shipping_cost: 'customer', // or 'free'
      return_methods: ['mail', 'store'],
      refund_method: 'original_payment',
      refund_timing_days: 14,
      exceptions: [
        'Mounted bindings (custom work)',
        'Waxed/tuned skis',
        'Used equipment'
      ],
      restocking_fee: null
    },
    
    // Warranty
    warranty: {
      policy_url: 'https://www.duijvestein.nl/garantie',
      type: 'manufacturer',
      duration_months: 24,
      coverage: 'Manufacturing defects',
      claim_process: 'Contact store with proof of purchase',
      authorized_dealer: true,
      authorized_proof_url: 'https://www.atomic.com/dealers/duijvestein'
    },
    
    // Services (Ski-specific)
    services: {
      binding_mounting: { included: true, cost: 0, description: 'Professional mounting to your boot' },
      base_prep: { included: true, cost: 0, description: 'Factory base preparation' },
      race_wax: { included: false, cost: 25, description: 'Competition-grade hot wax' },
      edge_tuning: { included: false, cost: 35, description: 'Race edge angles (0.5°/2°)' },
      boot_fitting: { included: false, cost: 50, description: 'Professional boot fitting session' }
    },
    
    // Payment Methods
    payments: {
      methods: ['iDEAL', 'Credit Card', 'PayPal', 'Klarna', 'Bancontact', 'Apple Pay'],
      buyer_protection: 'Klarna Buyer Protection',
      installments_available: true
    },
    
    // Provenance (Verification Metadata)
    provenance: {
      shipping_policy: {
        source_type: 'merchant_public_page',
        source_url: 'https://www.duijvestein.nl/verzending',
        last_verified_at: '2026-01-08T14:00:00Z',
        confidence_score: 0.95
      },
      returns_policy: {
        source_type: 'merchant_public_page',
        source_url: 'https://www.duijvestein.nl/retourneren',
        last_verified_at: '2026-01-08T14:00:00Z',
        confidence_score: 0.95
      },
      reputation: {
        source_type: 'third_party',
        sources: ['Trustpilot', 'Google', 'Kiyoh'],
        last_verified_at: '2026-01-09T08:00:00Z',
        confidence_score: 0.90
      }
    }
  };

  // ===========================================
  // MCS SCORING (Merchant Consideration Score)
  // ===========================================
  const mcsScores = {
    overall: 87,
    tier: 'Gold',
    by_intent: {
      value: { score: 82, label: 'Price Transparency', status: 'good', 
               details: 'Clear pricing, free NL/BE shipping, no hidden costs' },
      speed: { score: 91, label: 'Delivery Speed', status: 'excellent',
               details: '1-3 day delivery NL/BE, same-day handling, express available' },
      risk: { score: 85, label: 'Low Risk', status: 'good',
              details: '30-day returns, store drop-off option, 14-day refund' },
      trust: { score: 92, label: 'Seller Trust', status: 'excellent',
               details: '45 years in business, 4.7★ Trustpilot (2847 reviews), certified' },
      warranty: { score: 84, label: 'Warranty Safe', status: 'good',
                  details: '2-year manufacturer warranty, authorized Atomic dealer' }
    },
    completeness: 91, // % of P0 fields populated
    missing_fields: [
      'DUNS business identifier',
      'GLN global location number',
      'ACP checkout endpoint'
    ],
    agent_ready: {
      gemini: 'optimized',
      chatgpt: 'warning', // Missing ACP
      perplexity: 'optimized'
    }
  };

  // ===========================================
  // 4 TRUST TIERS STATUS
  // ===========================================
  const trustTiers = {
    identity: {
      status: 'verified',
      score: 85,
      checks: [
        { item: 'Business Registration (KvK)', status: 'pass' },
        { item: 'VAT Number', status: 'pass' },
        { item: 'DUNS Number', status: 'missing' },
        { item: 'Knowledge Graph Links', status: 'pass' },
        { item: 'Physical Store Address', status: 'pass' }
      ]
    },
    logistics: {
      status: 'attention',
      score: 78,
      checks: [
        { item: 'Shipping Policy URL', status: 'pass' },
        { item: 'Delivery Windows Structured', status: 'pass' },
        { item: 'Real-time Inventory (MCP)', status: 'partial' },
        { item: 'Warehouse Location', status: 'pass' },
        { item: 'Last Sync < 15 min', status: 'warning' }
      ]
    },
    transactional: {
      status: 'critical',
      score: 45,
      checks: [
        { item: 'ACP Endpoint', status: 'missing' },
        { item: 'AP2 Agent Payments', status: 'missing' },
        { item: 'Secure Checkout (HTTPS)', status: 'pass' },
        { item: 'Payment Methods Structured', status: 'pass' },
        { item: 'Zero-Click Ready', status: 'missing' }
      ]
    },
    consensus: {
      status: 'excellent',
      score: 94,
      checks: [
        { item: 'Trustpilot Score', status: 'pass' },
        { item: 'Google Reviews', status: 'pass' },
        { item: 'Multiple Source Citations', status: 'pass' },
        { item: 'Certifications Verified', status: 'pass' },
        { item: 'Social Proof Links', status: 'pass' }
      ]
    }
  };

  // ===========================================
  // 7-BLOCK DESCRIPTION CONTENT
  // ===========================================
  const descriptionBlocks = [
    {
      id: 'identity_statement',
      title: 'Product Identity',
      icon: '🏷️',
      format: 'prose',
      content: 'The Atomic Redster G9 RS is a FIS-homologated Giant Slalom race ski designed for competitive racing and elite-level training. Built with Atomic\'s Densolite core reinforced by a full carbon backbone, wrapped in sandwich sidewall construction for maximum edge grip and power transmission. This is a purpose-built race tool that prioritizes performance over forgiveness—designed for skiers who demand uncompromising precision on hard snow and icy race courses.'
    },
    {
      id: 'best_for',
      title: 'Best For',
      icon: '🎯',
      format: 'bullets',
      content: [
        'FIS-licensed athletes competing in Giant Slalom events',
        'Elite club racers training 50+ days per season',
        'Former competitive skiers maintaining race-level performance',
        'Advanced skiers (75-100kg) seeking maximum edge grip on hard snow',
        'Coaches and trainers who need to demonstrate proper GS technique',
        'Masters racers with strong technical foundation and conditioning'
      ]
    },
    {
      id: 'mechanism',
      title: 'How It Works',
      icon: '⚙️',
      format: 'prose',
      content: 'The G9 RS delivers its exceptional edge hold through three integrated systems: The Densolite core provides a lightweight yet powerful foundation, while the carbon backbone runs tip-to-tail for instant energy transmission and rebound out of turns. The sandwich sidewall construction creates direct lateral power transfer to the edges—critical for carving precise arcs on icy race courses. The 23m radius (at 183cm) is tuned for FIS GS regulations, allowing aggressive turn initiation while maintaining stability at race speeds. The very stiff flex pattern (9/10) requires—and rewards—proper angulation and pressure management.'
    },
    {
      id: 'whats_inside',
      title: 'Technical Specifications',
      icon: '📋',
      format: 'table',
      content: [
        { spec: 'Lengths Available', value: '171 / 177 / 183 / 189 cm' },
        { spec: 'Turn Radius (183cm)', value: '23 meters (FIS GS spec)' },
        { spec: 'Weight (183cm)', value: '~1850g per ski' },
        { spec: 'Core', value: 'Densolite + Carbon Backbone' },
        { spec: 'Construction', value: 'Sandwich Sidewall' },
        { spec: 'Binding Included', value: 'X 12 GW (DIN 4-12)' }
      ],
      extras: {
        features: ['FIS Homologated', 'Race Stock Construction', 'Carbon Backbone'],
        certifications: ['FIS GS Approved', 'Made in Austria']
      }
    },
    {
      id: 'differentiators',
      title: 'What Sets It Apart',
      icon: '⭐',
      format: 'bullets',
      content: [
        'True race stock construction—same platform as World Cup athletes',
        'Carbon backbone provides instant energy transmission vs. fiberglass alternatives',
        'Sandwich sidewall (not cap) for maximum edge power on ice',
        'Densolite core is 20% lighter than traditional wood cores at same stiffness',
        'X 12 GW binding offers race-level power with GripWalk convenience',
        'Factory race base and edges—ready for competition out of the box'
      ]
    },
    {
      id: 'how_to_use',
      title: 'Sizing & Setup',
      icon: '📖',
      format: 'structured',
      content: {
        sizing: 'Select length based on FIS regulations and personal preference: 183cm is standard for most adult male racers, 177cm for lighter or shorter skiers',
        setup: 'Mount binding at manufacturer-recommended position for GS. Forward positions increase aggressiveness.',
        tuning: 'Race prep recommended: 0.5-1° base edge, 2-3° side edge. Fresh structure and race wax essential.',
        maintenance: 'Professional edge and base service every 5-7 race days. Store in ski bag, base-down.',
        break_in: 'Allow 2-3 free-ski sessions to learn the flex pattern before racing'
      }
    },
    {
      id: 'safety_boundaries',
      title: 'Safety & Boundaries',
      icon: '⚠️',
      format: 'safety',
      content: {
        suitableFor: ['FIS-licensed racers', 'Elite club competitors', 'Masters racers with race background', 'Advanced skiers 75-100kg with proper technique'],
        notSuitableFor: ['Intermediate skiers', 'Recreational all-mountain use', 'Powder or off-piste skiing', 'Skiers under 65kg', 'Those without race training'],
        isNot: 'an all-mountain ski, a forgiving ski for developing technique, or suitable for variable snow conditions. This is a specialized race tool designed exclusively for hard snow and prepared courses.',
        physicalRequirements: 'Requires strong quadriceps, core stability, and cardiovascular conditioning. The very stiff flex demands proper angulation and creates significant forces on knees and hips.',
        warnings: [
          'Binding DIN must be professionally set based on skier weight, ability, and boot sole length',
          'Not forgiving of balance errors at race speeds—can result in falls and injury',
          'Extended use without adequate conditioning leads to fatigue and increased injury risk',
          'Edges are extremely sharp from factory—handle with care'
        ]
      }
    }
  ];

  const keyFeatures = [
    'FIS-homologated GS race ski—23m radius meets competition specifications',
    'Carbon backbone + Densolite core—lightweight power for explosive turn exit',
    'Sandwich sidewall construction—maximum edge grip on ice and hard snow',
    'X 12 GW binding included—race-level performance with GripWalk compatibility',
    'Factory race prep—competition-ready edges and base structure'
  ];

  const faqs = [
    { q: 'What skill level do I need for this ski?', a: 'This ski is designed for expert-level racers with a strong technical foundation. You should be comfortable skiing aggressively on ice, have race training experience, and typically ski 50+ days per season.', type: 'skill_suitability' },
    { q: 'Which length should I choose?', a: '183cm is the most common choice for adult male racers 175-190cm tall weighing 75-95kg. Choose 177cm if lighter/shorter, 189cm if heavier (90kg+).', type: 'sizing' },
    { q: 'Can I use this ski for all-mountain skiing?', a: 'No. This is a purpose-built race ski designed exclusively for hard snow and prepared courses. It will be extremely difficult to ski in powder, crud, or variable conditions.', type: 'suitability' },
    { q: 'What makes this different from recreational GS skis?', a: 'Race stock construction, much stiffer flex, narrower waist (65mm vs 70-75mm), and zero forgiveness. This ski is designed to win, not to be fun.', type: 'comparison' }
  ];

  // ===========================================
  // RENDER HELPERS
  // ===========================================
  const renderBlockContent = (block) => {
    switch (block.format) {
      case 'prose':
        return <p className="text-gray-700 leading-relaxed">{block.content}</p>;
      
      case 'bullets':
        return (
          <ul className="space-y-2">
            {block.content.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        );
      
      case 'table':
        return (
          <div>
            <table className="w-full text-sm mb-3">
              <tbody>
                {block.content.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2 text-gray-500 w-40">{row.spec}</td>
                    <td className="py-2 font-medium text-gray-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap gap-2 mt-3">
              {block.extras.features.map((item, i) => (
                <span key={i} className="px-2 py-1 bg-sky-50 text-sky-700 text-xs rounded-full">{item}</span>
              ))}
              {block.extras.certifications.map((item, i) => (
                <span key={i} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">✓ {item}</span>
              ))}
            </div>
          </div>
        );
      
      case 'structured':
        return (
          <div className="space-y-3 text-sm">
            {Object.entries(block.content).map(([key, value]) => (
              <div key={key} className="flex gap-4">
                <span className="text-gray-500 w-24 flex-shrink-0 capitalize">{key}:</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        );
      
      case 'safety':
        return (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-green-700 mb-1">✓ Suitable For:</div>
              <div className="flex flex-wrap gap-1">
                {block.content.suitableFor.map((item, i) => (
                  <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-red-700 mb-1">✗ Not Suitable For:</div>
              <div className="flex flex-wrap gap-1">
                {block.content.notSuitableFor.map((item, i) => (
                  <span key={i} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">{item}</span>
                ))}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-1">⚠️ This product IS NOT:</div>
              <p className="text-sm text-gray-600">{block.content.isNot}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-sm font-medium text-amber-700 mb-1">💪 Physical Requirements:</div>
              <p className="text-sm text-amber-800">{block.content.physicalRequirements}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Critical Warnings:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                {block.content.warnings.map((w, i) => (
                  <li key={i}>• {w}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': case 'verified': case 'pass': return 'text-green-600 bg-green-50';
      case 'good': case 'optimized': return 'text-emerald-600 bg-emerald-50';
      case 'attention': case 'warning': case 'partial': return 'text-amber-600 bg-amber-50';
      case 'critical': case 'missing': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': case 'verified': case 'pass': case 'optimized': return '✓';
      case 'good': return '✓';
      case 'attention': case 'warning': case 'partial': return '⚠';
      case 'critical': case 'missing': return '✗';
      default: return '•';
    }
  };

  // ===========================================
  // RENDER
  // ===========================================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center font-bold">O</div>
            <span className="text-xl font-semibold">Outfindo</span>
            <span className="text-slate-500 mx-2">×</span>
            <span className="text-xl text-orange-400 font-semibold">Duijvestein Winterstore</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            Complete PDP Content System:
            <span className="text-sky-400"> Atomic Redster G9 RS</span>
          </h1>
          <p className="text-slate-400">
            Blueprint (L1-L6) + Description (7 Blocks) + MCL (Merchant Consideration Layer)
          </p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1 w-fit">
            <button onClick={() => setView('after')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'after' ? 'bg-sky-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              ✨ Optimized PDP
            </button>
            <button onClick={() => setView('mcl')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'mcl' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              🏪 MCL & Trust
            </button>
            <button onClick={() => setView('compare')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'compare' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              📊 Before / After
            </button>
            <button onClick={() => setView('data')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'data' ? 'bg-violet-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              🗃️ Full Data
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* =========================================== */}
        {/* VIEW: OPTIMIZED PDP */}
        {/* =========================================== */}
        {view === 'after' && (
          <>
            {/* Product Hero */}
            <div className="bg-white rounded-2xl shadow-sm border mb-8">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-8 flex items-center justify-center min-h-72">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⛷️</div>
                      <div className="text-lg font-bold text-sky-700">ATOMIC</div>
                      <div className="text-xl font-medium text-gray-800">Redster G9 RS</div>
                      <div className="mt-4 flex justify-center gap-2">
                        <span className="px-3 py-1 bg-white/80 rounded-full text-xs text-gray-600">Giant Slalom</span>
                        <span className="px-3 py-1 bg-red-100 rounded-full text-xs text-red-600 font-medium">FIS Approved</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded">Race Ski</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">Expert Level</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">FIS GS</span>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{productData.fullName}</h1>
                    <p className="text-gray-600 mb-4">FIS-homologated Giant Slalom race ski with carbon backbone and sandwich sidewall construction. Built for competitive racing and elite training on hard snow.</p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-sky-600">23m</div>
                        <div className="text-xs text-gray-500">Turn Radius</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-amber-600">9/10</div>
                        <div className="text-xs text-gray-500">Flex (Stiff)</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-violet-600">183</div>
                        <div className="text-xs text-gray-500">Length (cm)</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-800 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {keyFeatures.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-sky-500 mt-0.5">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skier Profile Quick */}
                    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg mb-6">
                      <div className="text-3xl">👤</div>
                      <div>
                        <div className="font-medium text-amber-900">Optimal Skier: 75-100kg, Expert</div>
                        <div className="text-sm text-amber-700">Strong leg strength, race training required</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-sky-200 text-sky-700 text-sm rounded-full">⛷️ Giant Slalom</span>
                      <span className="px-3 py-1 border border-gray-200 text-gray-600 text-sm rounded-full">Carbon Backbone</span>
                      <span className="px-3 py-1 border border-amber-200 text-amber-600 text-sm rounded-full">🇦🇹 Made in Austria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Description Blocks + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {descriptionBlocks.map((block) => (
                  <div key={block.id} className={`bg-white rounded-xl p-6 shadow-sm border ${block.id === 'safety_boundaries' ? 'border-red-200 ring-1 ring-red-100' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{block.icon}</span>
                      <h2 className="text-lg font-semibold text-gray-800">{block.title}</h2>
                      <span className={`ml-auto px-2 py-0.5 text-xs rounded ${block.id === 'safety_boundaries' ? 'bg-red-100 text-red-600 font-medium' : block.id === 'best_for' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'}`}>
                        {block.id === 'safety_boundaries' ? 'CRITICAL' : block.id === 'best_for' ? 'INTENT MATCH' : `Block ${descriptionBlocks.indexOf(block) + 1}/7`}
                      </span>
                    </div>
                    {renderBlockContent(block)}
                  </div>
                ))}

                {/* FAQs */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="font-medium text-gray-900 mb-1">{faq.q}</h3>
                        <p className="text-sm text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* LLM Query Match */}
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-5 border border-sky-200">
                  <h3 className="font-medium text-sky-800 mb-3 flex items-center gap-2">
                    <span>🤖</span> LLM Query Match
                  </h3>
                  <div className="space-y-2 text-sm">
                    {['GS race ski for 85kg expert', 'FIS approved giant slalom ski', 'stiff race ski for ice', 'carbon race ski advanced'].map((q, i) => (
                      <div key={i} className="bg-white/80 rounded-lg p-2 text-sky-700">"{q}"</div>
                    ))}
                  </div>
                </div>

                {/* MCS Score Summary */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
                  <h3 className="font-medium text-orange-800 mb-3 flex items-center gap-2">
                    <span>🏪</span> Merchant Score (MCS)
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-orange-600">{mcsScores.overall}</div>
                    <div className="text-sm text-orange-700">{mcsScores.tier} Tier</div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(mcsScores.by_intent).map(([key, data]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{data.label}</span>
                        <span className={`font-medium ${data.score >= 90 ? 'text-green-600' : data.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>{data.score}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-orange-200">
                    <div className="text-xs text-orange-600">Agent Status:</div>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Gemini ✓</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">ChatGPT ⚠</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Perplexity ✓</span>
                    </div>
                  </div>
                </div>

                {/* Price & Merchant Info */}
                <div className="bg-white rounded-xl p-5 shadow-sm border">
                  <div className="text-3xl font-bold text-gray-900 mb-2">€{mclData.offer.price.amount.toLocaleString()}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping (NL/BE)</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Delivery</span>
                      <span className="text-gray-700">1-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Returns</span>
                      <span className="text-gray-700">30 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Warranty</span>
                      <span className="text-gray-700">2 years</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-xs text-gray-500 mb-2">Services Included:</div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div>✓ Free binding mounting</div>
                      <div>✓ Base preparation</div>
                      <div>+ Race wax (€25)</div>
                    </div>
                  </div>
                </div>

                {/* Seller Trust */}
                <div className="bg-white rounded-xl p-5 shadow-sm border">
                  <h3 className="font-medium text-gray-800 mb-3">🏆 Seller Trust</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <div className="font-bold text-gray-900">{mclData.merchant.reputation.trustpilot_score}/5</div>
                      <div className="text-xs text-gray-500">Trustpilot ({mclData.merchant.reputation.trustpilot_reviews.toLocaleString()} reviews)</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {mclData.merchant.certifications.map((cert, i) => (
                      <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">✓ {cert}</span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-gray-500">{mclData.merchant.years_in_business} years in business</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* =========================================== */}
        {/* VIEW: MCL & TRUST */}
        {/* =========================================== */}
        {view === 'mcl' && (
          <div className="space-y-8">
            {/* MCS Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Merchant Consideration Score (MCS)</h2>
                  <p className="text-gray-600 text-sm">Predicts shortlist inclusion and selection by AI shopping agents</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-orange-500">{mcsScores.overall}</div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${mcsScores.tier === 'Platinum' ? 'bg-violet-100 text-violet-700' : mcsScores.tier === 'Gold' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}`}>
                    {mcsScores.tier} Tier
                  </div>
                </div>
              </div>
              
              {/* 5 Intent Scores */}
              <div className="grid grid-cols-5 gap-4 mb-6">
                {Object.entries(mcsScores.by_intent).map(([key, data]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className={`text-2xl font-bold ${data.score >= 90 ? 'text-green-600' : data.score >= 80 ? 'text-emerald-600' : data.score >= 70 ? 'text-amber-600' : 'text-red-600'}`}>
                      {data.score}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{data.label}</div>
                    <div className={`text-xs mt-2 px-2 py-0.5 rounded ${getStatusColor(data.status)}`}>
                      {data.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Agent Questions */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm font-medium text-blue-800 mb-2">What agents ask:</div>
                <div className="grid grid-cols-5 gap-2 text-xs text-blue-700">
                  <div>"Best deal?"</div>
                  <div>"Need it fast"</div>
                  <div>"What if I don't like it?"</div>
                  <div>"Is this seller legit?"</div>
                  <div>"What if it breaks?"</div>
                </div>
              </div>
            </div>

            {/* 4 Trust Tiers */}
            <div className="grid grid-cols-2 gap-6">
              {/* Tier 1: Identity */}
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-xl">🛡️</span> Tier 1: Identity Verification
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(trustTiers.identity.status)}`}>
                    {getStatusIcon(trustTiers.identity.status)} {trustTiers.identity.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Business IDs that LLMs cross-reference with knowledge graphs</p>
                <div className="space-y-2">
                  {trustTiers.identity.checks.map((check, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{check.item}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(check.status)}`}>
                        {getStatusIcon(check.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 2: Logistics */}
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-xl">🚚</span> Tier 2: Live Logistics
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(trustTiers.logistics.status)}`}>
                    {getStatusIcon(trustTiers.logistics.status)} {trustTiers.logistics.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Real-time inventory and shipping via MCP protocol</p>
                <div className="space-y-2">
                  {trustTiers.logistics.checks.map((check, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{check.item}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(check.status)}`}>
                        {getStatusIcon(check.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 3: Transactional */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-xl">⚡</span> Tier 3: Agentic Transactional
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(trustTiers.transactional.status)}`}>
                    {getStatusIcon(trustTiers.transactional.status)} {trustTiers.transactional.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">ACP/AP2 protocols for zero-click checkout</p>
                <div className="space-y-2">
                  {trustTiers.transactional.checks.map((check, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{check.item}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(check.status)}`}>
                        {getStatusIcon(check.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 4: Consensus */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-xl">🧠</span> Tier 4: Consensus Insight
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(trustTiers.consensus.status)}`}>
                    {getStatusIcon(trustTiers.consensus.status)} {trustTiers.consensus.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Aggregated third-party sentiment for citations</p>
                <div className="space-y-2">
                  {trustTiers.consensus.checks.map((check, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{check.item}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(check.status)}`}>
                        {getStatusIcon(check.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MCL Data Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-800 mb-6">📋 MCL Field Data</h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Shipping */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                    🚚 Shipping Policy
                    <a href={mclData.shipping.policy_url} className="text-xs text-blue-500 hover:underline ml-auto">URL ↗</a>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">NL/BE:</span><span className="font-medium text-green-600">Free, 1-3 days</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">DE:</span><span className="font-medium">€9.95, 2-4 days</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Express:</span><span className="font-medium">Available</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Handling:</span><span className="font-medium">Same day</span></div>
                  </div>
                </div>

                {/* Returns */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                    ↩️ Returns Policy
                    <a href={mclData.returns.policy_url} className="text-xs text-blue-500 hover:underline ml-auto">URL ↗</a>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Window:</span><span className="font-medium">30 days</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Return cost:</span><span className="font-medium">Customer</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Refund:</span><span className="font-medium">14 days</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Methods:</span><span className="font-medium">Mail / Store</span></div>
                  </div>
                  <div className="mt-2 text-xs text-red-600">
                    Exceptions: Mounted bindings, waxed skis
                  </div>
                </div>

                {/* Warranty */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                    🛡️ Warranty
                    <a href={mclData.warranty.policy_url} className="text-xs text-blue-500 hover:underline ml-auto">URL ↗</a>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Type:</span><span className="font-medium">Manufacturer</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Duration:</span><span className="font-medium">24 months</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Authorized:</span><span className="font-medium text-green-600">✓ Yes</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent POV */}
            <div className="bg-slate-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span>🤖</span> Agent POV (How AI sees this merchant)
              </h3>
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-gray-200 italic">
                  "I recommend buying from <span className="text-orange-400 font-medium">Duijvestein Winterstore</span>. 
                  They are an <span className="text-green-400">authorized Atomic dealer</span> with 
                  <span className="text-green-400"> 45 years in business</span> and a 
                  <span className="text-green-400"> 4.7★ rating across 2,847 verified reviews</span>. 
                  They offer <span className="text-sky-400">free shipping to NL/BE with 1-3 day delivery</span> and include 
                  <span className="text-sky-400"> free binding mounting</span>. 
                  Their <span className="text-amber-400">30-day return policy</span> allows you to test the product risk-free. 
                  However, I cannot complete checkout automatically as they don't yet support Agent Payment Protocol."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================== */}
        {/* VIEW: BEFORE/AFTER COMPARE */}
        {/* =========================================== */}
        {view === 'compare' && (
          <div className="space-y-8">
            {/* Comparison Header */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">✗</div>
                  <div>
                    <h3 className="font-bold text-red-800">BEFORE: Typical Ski Shop PDP</h3>
                    <p className="text-sm text-red-600">No structured data, thin content, no MCL</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-emerald-800">AFTER: Outfindo Complete System</h3>
                    <p className="text-sm text-emerald-600">Blueprint + Description + MCL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Comparison */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-800 mb-6">📊 Complete System Comparison</h3>
              <div className="space-y-3">
                {[
                  { label: 'Content Length', before: '~350 words', after: '~950 words', improvement: '+171%' },
                  { label: 'Blueprint Layers', before: '0 (none)', after: '6 layers (L1-L6)', improvement: 'NEW' },
                  { label: 'Description Blocks', before: 'Unstructured', after: '7 semantic blocks', improvement: 'NEW' },
                  { label: 'Safety & Boundaries', before: 'Missing ⚠️', after: 'Complete (L6)', improvement: 'CRITICAL' },
                  { label: 'MCL Data', before: 'None', after: 'Full merchant layer', improvement: 'NEW' },
                  { label: 'MCS Score', before: 'N/A', after: '87 (Gold)', improvement: 'NEW' },
                  { label: 'Trust Tiers', before: '0/4', after: '3/4 verified', improvement: 'NEW' },
                  { label: 'Policy URLs', before: 'None', after: '3 verified', improvement: 'NEW' },
                  { label: 'Agent Compatibility', before: '0/3', after: '2/3 optimized', improvement: 'NEW' },
                  { label: 'LLM Readiness', before: 'D+', after: 'A+', improvement: '+3 grades' }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 py-2 border-b border-gray-100 last:border-0 text-sm">
                    <div className="font-medium text-gray-700">{row.label}</div>
                    <div className="text-red-600">{row.before}</div>
                    <div className="text-emerald-600">{row.after}</div>
                    <div className="text-emerald-600 font-medium">{row.improvement}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">🚀 Expected Impact</h3>
              <div className="grid grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-1">5×</div>
                  <div className="text-sm text-white/80">LLM visibility</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">87</div>
                  <div className="text-sm text-white/80">MCS Score</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/80">Safety compliance</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">3/4</div>
                  <div className="text-sm text-white/80">Trust tiers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================== */}
        {/* VIEW: FULL DATA */}
        {/* =========================================== */}
        {view === 'data' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="text-lg font-bold text-gray-800 mb-2">🗃️ Complete Structured Data</h2>
              <p className="text-gray-600 text-sm mb-6">Blueprint (L1-L6) + MCL — Full JSON structure for LLM consumption</p>
              
              {/* Blueprint Layers */}
              <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">Product Blueprint (L1-L6)</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { layer: 'L1', title: 'Core Identity', color: 'sky', fields: ['name', 'brand', 'category', 'discipline', 'construction'] },
                  { layer: 'L2', title: 'Goals & Intent', color: 'purple', fields: ['primary_goal', 'secondary_goal', 'intent_phrases'] },
                  { layer: 'L3', title: 'Performance', color: 'blue', fields: ['skill_level', 'terrain', 'flex', 'edge_grip'] },
                  { layer: 'L4', title: 'Skier Profile', color: 'amber', fields: ['ability', 'weight_range', 'height_range', 'experience'] },
                  { layer: 'L5', title: 'Use Context', color: 'green', fields: ['primary_use', 'conditions', 'frequency', 'terrain'] },
                  { layer: 'L6', title: 'Safety', color: 'red', fields: ['suitable_for', 'not_suitable_for', 'warnings', 'physical_requirements'] }
                ].map((layer) => (
                  <div key={layer.layer} className={`border-l-4 border-l-${layer.color}-400 bg-gray-50 rounded-r-lg p-3`}>
                    <div className={`text-xs font-bold text-${layer.color}-600 mb-1`}>{layer.layer}: {layer.title}</div>
                    <div className="space-y-1">
                      {layer.fields.map((f, i) => (
                        <div key={i} className="text-xs text-gray-600 font-mono">{f}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* MCL Layer */}
              <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">Merchant Consideration Layer (MCL)</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Merchant Profile', fields: ['merchant_id', 'display_name', 'kvk_number', 'years_in_business', 'support_channels'] },
                  { title: 'Offer Capsule', fields: ['offer_id', 'canonical_url', 'price', 'currency', 'availability', 'inventory_count'] },
                  { title: 'Shipping', fields: ['destinations', 'policy_url', 'methods', 'delivery_windows', 'handling_time'] },
                  { title: 'Returns', fields: ['policy_url', 'window_days', 'return_cost', 'refund_timing', 'exceptions'] },
                  { title: 'Warranty', fields: ['policy_url', 'type', 'duration_months', 'authorized_dealer', 'claim_process'] },
                  { title: 'Trust Signals', fields: ['trustpilot_score', 'review_count', 'certifications', 'same_as_links'] }
                ].map((section, i) => (
                  <div key={i} className="border rounded-lg p-3 bg-orange-50/30">
                    <div className="text-xs font-bold text-orange-600 mb-1">{section.title}</div>
                    <div className="space-y-1">
                      {section.fields.map((f, j) => (
                        <div key={j} className="text-xs text-gray-600 font-mono">{f}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t mt-8">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          Outfindo × Duijvestein Winterstore • Complete PDP Content System • Blueprint v2.0 + MCL v1.0
        </div>
      </div>
    </div>
  );
};

export default DuijvesteinSkiPDPComplete;