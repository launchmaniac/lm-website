import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Target, CheckCircle, ExternalLink, Mail, Phone, Calendar, Activity, Database, Cpu, Wifi } from 'lucide-react'
import launchManiacLogo from './assets/LMHorizontalYW_Transparent.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [stardate, setStardate] = useState('')

  useEffect(() => {
    setIsVisible(true)
    // Generate a Star Trek style stardate
    const now = new Date()
    const stardateNum = (now.getFullYear() - 2323) * 1000 + (now.getMonth() * 83.33) + (now.getDate() * 2.74)
    setStardate(stardateNum.toFixed(1))
  }, [])

  const products = [
    {
      title: "REVIEWOS",
      subtitle: "REPUTATION MANAGEMENT PROTOCOL",
      description: "AUTOMATED REPUTATION MANAGEMENT PLATFORM THAT HANDLES MOST PROCESSES, ALLOWING YOU TO LAUNCH AND SCALE A PROFITABLE AGENCY WITH MINIMAL MANUAL WORK.",
      features: [
        "AUTOMATED REVIEW MONITORING ACROSS ALL PLATFORMS",
        "AI-POWERED RESPONSE GENERATION AND AUTOMATION", 
        "COMPREHENSIVE CLIENT REPORTING DASHBOARDS",
        "WHITE-LABEL AGENCY-READY TOOLS AND WORKFLOWS"
      ],
      icon: <Star className="w-8 h-8" />,
      panelClass: "lcars-panel-orange",
      statusCode: "ROS-001"
    },
    {
      title: "MORTGAGEOS",
      subtitle: "FINANCIAL OPERATIONS SYSTEM",
      description: "SPECIALIZED CRM TOOLS DESIGNED SPECIFICALLY FOR MORTGAGE LOAN OFFICERS TO STREAMLINE OPERATIONS AND INCREASE CONVERSION RATES.",
      features: [
        "ADVANCED LEAD MANAGEMENT AND SCORING",
        "AUTOMATED PIPELINE TRACKING AND FOLLOW-UPS",
        "BUILT-IN COMPLIANCE TOOLS AND DOCUMENTATION",
        "REAL-TIME PERFORMANCE ANALYTICS AND INSIGHTS"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      panelClass: "lcars-panel-blue",
      statusCode: "MOS-002"
    },
    {
      title: "GOHIGHLEVEL EXTENSIONS",
      subtitle: "SYSTEM ENHANCEMENT MODULES",
      description: "CUSTOM APPLICATIONS THAT SEAMLESSLY INTEGRATE WITH AND ENHANCE GOHIGHLEVEL SOFTWARE CAPABILITIES FOR ADVANCED AUTOMATION.",
      features: [
        "SEAMLESS NATIVE GOHIGHLEVEL INTEGRATION",
        "ENHANCED FUNCTIONALITY AND CUSTOM WORKFLOWS",
        "ADVANCED AUTOMATION AND TRIGGER SYSTEMS",
        "EXTENDED REPORTING AND ANALYTICS CAPABILITIES"
      ],
      icon: <Zap className="w-8 h-8" />,
      panelClass: "lcars-panel-lilac",
      statusCode: "GHL-003"
    }
  ]

  const benefits = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-FIRST APPROACH",
      description: "CUTTING-EDGE AUTOMATION POWERED BY ARTIFICIAL INTELLIGENCE TO MAXIMIZE EFFICIENCY AND RESULTS.",
      statusCode: "AI-001"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "SMB FOCUSED",
      description: "PURPOSE-BUILT SOLUTIONS DESIGNED SPECIFICALLY FOR SMALL AND MEDIUM BUSINESSES' UNIQUE NEEDS.",
      statusCode: "SMB-002"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "PROVEN RESULTS",
      description: "DEMONSTRATED TRACK RECORD OF INCREASING SALES OPPORTUNITIES AND IMPROVING BUSINESS PERFORMANCE.",
      statusCode: "RES-003"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "MODULAR SOLUTIONS",
      description: "PICK EXACTLY WHAT YOU NEED AND SCALE AS YOUR BUSINESS GROWS, WITH SEAMLESS INTEGRATION.",
      statusCode: "MOD-004"
    }
  ]

  const stats = [
    { number: "500+", label: "BUSINESSES AUTOMATED", code: "BA-500" },
    { number: "2.5M+", label: "SALES OPPORTUNITIES CREATED", code: "SOC-2.5M" },
    { number: "98%", label: "CLIENT SATISFACTION RATE", code: "CSR-98" },
    { number: "24/7", label: "AUTOMATED OPERATIONS", code: "AO-247" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* LCARS Navigation */}
      <nav className="lcars-nav sticky top-0 z-50 backdrop-blur-sm">
        <div className="container-lcars">
          <div className="flex items-center justify-between h-20 px-6">
            <div className="flex items-center space-x-4">
              <img src={launchManiacLogo} alt="Launch Maniac" className="h-10 opacity-90" />
              <div className="stardate">STARDATE {stardate}</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="lcars-data">
                <span className="lcars-status lcars-status-active"></span>
                SYSTEMS ONLINE
              </div>
              <a href="#products" className="lcars-data hover:text-white transition-colors">PRODUCTS</a>
              <a href="#about" className="lcars-data hover:text-white transition-colors">ABOUT</a>
              <a href="#contact" className="lcars-data hover:text-white transition-colors">CONTACT</a>
              <Button className="lcars-button lcars-button-primary">ACCESS TERMINAL</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* LCARS Hero Section */}
      <section className={`section-lcars lcars-hero relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container-lcars relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-8">
                <div className="lcars-corner">
                  <Badge className="mb-6 bg-orange-500 text-black border-orange-400 hover:bg-orange-400 font-bold">
                    MODULAR, AI-FIRST AUTOMATION FOR SMBS
                  </Badge>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight lcars-text-glow">
                    CRM TOOLS THAT <span className="lcars-text-accent">INCREASE</span> SALES PERFORMANCE
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                    LAUNCH MANIAC PROVIDES POWERFUL, AI-DRIVEN CRM AUTOMATION TOOLS DESIGNED TO BOOST SALES OPPORTUNITIES AND OUTCOMES FOR SMALL AND MEDIUM BUSINESSES.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="lcars-button text-lg px-8 py-4">
                    INITIATE DEMO SEQUENCE <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button className="lcars-button-secondary text-lg px-8 py-4">
                    VIEW PRODUCT MATRIX
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="lcars-panel p-6">
                  <div className="lcars-data mb-2">SYSTEM STATUS</div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="lcars-data">POWER</span>
                      <span className="lcars-status lcars-status-active"></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="lcars-data">NETWORK</span>
                      <span className="lcars-status lcars-status-active"></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="lcars-data">AI CORE</span>
                      <span className="lcars-status lcars-status-active"></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="lcars-data">AUTOMATION</span>
                      <span className="lcars-status lcars-status-active"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCARS Stats Section */}
      <section className="py-12 bg-black/50 border-y-2 border-blue-500/30">
        <div className="container-lcars">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lcars-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="lcars-data-large mb-2">
                  {stat.number}
                </div>
                <div className="lcars-data mb-1">{stat.label}</div>
                <div className="text-xs text-orange-400">{stat.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LCARS Products Section */}
      <section id="products" className="section-lcars">
        <div className="container-lcars">
          <div className="text-center mb-16 lcars-corner">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 lcars-text-primary">
              PRODUCT <span className="lcars-text-accent">MATRIX</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto lcars-data">
              COMPREHENSIVE CRM SOLUTIONS DESIGNED TO AUTOMATE YOUR BUSINESS PROCESSES AND MAXIMIZE SALES PERFORMANCE ACROSS DIFFERENT INDUSTRIES.
            </p>
          </div>
          
          <div className="lcars-grid">
            {products.map((product, index) => (
              <div key={index} className={`lcars-card p-8 lcars-slide-in`} style={{animationDelay: `${index * 0.3}s`}}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`${product.panelClass} p-4 rounded-2xl`}>
                    {product.icon}
                  </div>
                  <div className="text-right">
                    <div className="lcars-data text-orange-400">{product.statusCode}</div>
                    <div className="lcars-status lcars-status-active mt-1"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 lcars-text-primary">{product.title}</h3>
                <p className="lcars-data text-orange-400 mb-4">{product.subtitle}</p>
                <p className="text-white/80 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-xs text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full lcars-button-secondary">
                  ACCESS MODULE <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LCARS Custom Development Section */}
      <section className="section-lcars bg-black/30">
        <div className="container-lcars">
          <div className="max-w-6xl mx-auto">
            <div className="lcars-card p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 lcars-text-primary">
                CUSTOM APPS & <span className="lcars-text-accent">SOFTWARE SOLUTIONS</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto">
                NEED SOMETHING UNIQUE? OUR DEVELOPMENT TEAM CREATES TAILORED APPLICATIONS AND SOFTWARE SOLUTIONS DESIGNED SPECIFICALLY FOR YOUR BUSINESS REQUIREMENTS AND WORKFLOWS.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="lcars-panel-orange p-6 rounded-2xl text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-lg font-bold mb-2 text-black">CUSTOM INTEGRATIONS</h3>
                  <p className="text-black/80 text-sm">SEAMLESS CONNECTIONS BETWEEN YOUR EXISTING TOOLS AND NEW SOLUTIONS.</p>
                  <div className="lcars-data text-black/60 mt-2">INT-001</div>
                </div>
                
                <div className="lcars-panel-blue p-6 rounded-2xl text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-lg font-bold mb-2 text-black">WORKFLOW AUTOMATION</h3>
                  <p className="text-black/80 text-sm">ELIMINATE MANUAL TASKS WITH INTELLIGENT AUTOMATION SYSTEMS.</p>
                  <div className="lcars-data text-black/60 mt-2">WFA-002</div>
                </div>
                
                <div className="lcars-panel-lilac p-6 rounded-2xl text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-lg font-bold mb-2 text-black">SCALABLE ARCHITECTURE</h3>
                  <p className="text-black/80 text-sm">BUILT TO GROW WITH YOUR BUSINESS AND ADAPT TO CHANGING NEEDS.</p>
                  <div className="lcars-data text-black/60 mt-2">SCA-003</div>
                </div>
              </div>
              
              <Button className="lcars-button text-lg px-8 py-4">
                INITIATE PROJECT DISCUSSION <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* LCARS Why Choose Us Section */}
      <section id="about" className="section-lcars">
        <div className="container-lcars">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 lcars-text-primary">
              WHY CHOOSE <span className="lcars-text-accent">LAUNCH MANIAC</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto lcars-data">
              WE COMBINE CUTTING-EDGE TECHNOLOGY WITH DEEP UNDERSTANDING OF SMALL BUSINESS NEEDS TO DELIVER SOLUTIONS THAT ACTUALLY WORK.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="lcars-card p-6 text-center lcars-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="lcars-panel-orange p-4 rounded-2xl w-fit mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 lcars-text-primary">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm mb-4">{benefit.description}</p>
                <div className="lcars-data text-orange-400">{benefit.statusCode}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LCARS CTA Section */}
      <section id="contact" className="section-lcars bg-black/30">
        <div className="container-lcars">
          <div className="max-w-6xl mx-auto">
            <div className="lcars-card p-12 text-center lcars-corner">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 lcars-text-primary">
                READY TO <span className="lcars-text-accent">LAUNCH</span> YOUR SUCCESS?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto">
                JOIN HUNDREDS OF BUSINESSES THAT HAVE TRANSFORMED THEIR SALES PERFORMANCE WITH LAUNCH MANIAC'S AUTOMATION TOOLS. GET STARTED TODAY AND SEE RESULTS WITHIN WEEKS.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="lcars-button text-lg px-8 py-4">
                  <Calendar className="mr-2 w-5 h-5" />
                  SCHEDULE DEMO
                </Button>
                <Button className="lcars-button-secondary text-lg px-8 py-4">
                  <Mail className="mr-2 w-5 h-5" />
                  CONTACT OPERATIONS
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="lcars-panel-blue p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 text-black">COMMUNICATIONS</h4>
                  <p className="text-black/80">hello@launchmaniac.com</p>
                  <div className="lcars-data text-black/60 mt-2">COM-001</div>
                </div>
                <div className="lcars-panel-orange p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 text-black">DIRECT CHANNEL</h4>
                  <p className="text-black/80">+1 (555) 123-4567</p>
                  <div className="lcars-data text-black/60 mt-2">DIR-002</div>
                </div>
                <div className="lcars-panel-lilac p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 text-black">RESPONSE TIME</h4>
                  <p className="text-black/80">WITHIN 24 HOURS</p>
                  <div className="lcars-data text-black/60 mt-2">RSP-003</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCARS Footer */}
      <footer className="lcars-footer py-12">
        <div className="container-lcars">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={launchManiacLogo} alt="Launch Maniac" className="h-8 opacity-80" />
              <div className="lcars-data">
                <Wifi className="w-4 h-4 inline mr-2" />
                SYSTEM ONLINE
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 mb-1">© 2025 LAUNCH MANIAC. ALL RIGHTS RESERVED.</p>
              <p className="lcars-data text-orange-400">MODULAR, AI-FIRST AUTOMATION FOR SMBS—CLEAR, COMPETENT, FAST.</p>
              <div className="stardate mt-2">STARDATE {stardate} - END TRANSMISSION</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
