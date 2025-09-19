import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Target, CheckCircle, ExternalLink, Mail, Phone, Calendar, Activity, Database, Cpu, Wifi, Monitor, BarChart3, Settings } from 'lucide-react'
import launchManiacLogo from './assets/LMHorizontalYW_Transparent.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [stardate, setStardate] = useState('')
  const [systemTime, setSystemTime] = useState('')

  useEffect(() => {
    // Generate Star Trek style stardate
    const now = new Date()
    const stardateNum = (now.getFullYear() - 2323) * 1000 + (now.getMonth() * 83.33) + (now.getDate() * 2.74)
    setStardate(stardateNum.toFixed(1))
    
    // Update system time
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setSystemTime(time)
    }
    
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    
    return () => clearInterval(timeInterval)
  }, [])

  const navigationItems = [
    { id: 'home', label: 'MAIN SYSTEMS', code: '001' },
    { id: 'products', label: 'PRODUCT MATRIX', code: '002' },
    { id: 'services', label: 'CUSTOM SOLUTIONS', code: '003' },
    { id: 'about', label: 'COMPANY DATA', code: '004' },
    { id: 'contact', label: 'COMMUNICATIONS', code: '005' }
  ]

  const systemStatus = [
    { label: 'CRM CORE', status: 'active', code: '7248' },
    { label: 'AI ENGINE', status: 'active', code: '8169' },
    { label: 'AUTOMATION', status: 'active', code: '9972' },
    { label: 'ANALYTICS', status: 'active', code: '3911' },
    { label: 'SECURITY', status: 'active', code: '1344' }
  ]

  const products = [
    {
      title: "REVIEWOS",
      subtitle: "REPUTATION MANAGEMENT PROTOCOL",
      description: "Automated reputation management platform that handles most processes, allowing you to launch and scale a profitable agency with minimal manual work.",
      features: [
        "Automated review monitoring across all platforms",
        "AI-powered response generation and automation", 
        "Comprehensive client reporting dashboards",
        "White-label agency-ready tools and workflows"
      ],
      icon: <Star className="w-6 h-6" />,
      statusCode: "ROS-001",
      color: "orange"
    },
    {
      title: "MORTGAGEOS",
      subtitle: "FINANCIAL OPERATIONS SYSTEM",
      description: "Specialized CRM tools designed specifically for mortgage loan officers to streamline operations and increase conversion rates.",
      features: [
        "Advanced lead management and scoring",
        "Automated pipeline tracking and follow-ups",
        "Built-in compliance tools and documentation",
        "Real-time performance analytics and insights"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      statusCode: "MOS-002",
      color: "purple"
    },
    {
      title: "GOHIGHLEVEL EXTENSIONS",
      subtitle: "SYSTEM ENHANCEMENT MODULES",
      description: "Custom applications that seamlessly integrate with and enhance GoHighLevel software capabilities for advanced automation.",
      features: [
        "Seamless native GoHighLevel integration",
        "Enhanced functionality and custom workflows",
        "Advanced automation and trigger systems",
        "Extended reporting and analytics capabilities"
      ],
      icon: <Zap className="w-6 h-6" />,
      statusCode: "GHL-003",
      color: "blue"
    }
  ]

  const stats = [
    { number: "500+", label: "BUSINESSES AUTOMATED", code: "BA-500" },
    { number: "2.5M+", label: "SALES OPPORTUNITIES", code: "SOC-2.5M" },
    { number: "98%", label: "CLIENT SATISFACTION", code: "CSR-98" },
    { number: "24/7", label: "AUTOMATED OPERATIONS", code: "AO-247" }
  ]

  const renderMainContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                CRM AUTOMATION SYSTEMS
              </h1>
              <p className="text-xl text-orange-400 mb-6">
                MODULAR, AI-FIRST AUTOMATION FOR SMALL & MEDIUM BUSINESSES
              </p>
              <div className="lcars-system-code mb-8">
                LAUNCH MANIAC PROVIDES POWERFUL CRM TOOLS DESIGNED TO BOOST SALES PERFORMANCE
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="lcars-content-section text-center">
                  <div className="lcars-tech-readout text-2xl mb-2">{stat.number}</div>
                  <div className="lcars-system-code text-sm">{stat.label}</div>
                  <div className="text-xs text-orange-400 mt-1">{stat.code}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <button 
                className="lcars-button"
                onClick={() => setActiveSection('products')}
              >
                ACCESS PRODUCT MATRIX
              </button>
              <button 
                className="lcars-button-secondary"
                onClick={() => setActiveSection('contact')}
              >
                INITIATE CONTACT
              </button>
            </div>
          </div>
        )
      
      case 'products':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                PRODUCT MATRIX
              </h2>
              <div className="lcars-system-code">
                COMPREHENSIVE CRM SOLUTIONS FOR BUSINESS AUTOMATION
              </div>
            </div>
            
            <div className="space-y-6">
              {products.map((product, index) => (
                <div key={index} className="lcars-content-section">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`lcars-panel lcars-panel-${product.color} p-3`}>
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                        <div className="lcars-system-code text-orange-400">{product.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="lcars-system-code">{product.statusCode}</div>
                      <div className="lcars-status-indicator lcars-status-active"></div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="lcars-button">
                    ACCESS MODULE <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'services':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                CUSTOM SOLUTIONS
              </h2>
              <div className="lcars-system-code">
                TAILORED APPLICATIONS & SOFTWARE DEVELOPMENT
              </div>
            </div>
            
            <div className="lcars-content-section">
              <p className="text-xl text-white/80 mb-8 text-center leading-relaxed">
                Our development team creates tailored applications and software solutions designed specifically for your business requirements and workflows.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="lcars-panel lcars-panel-orange p-6 mb-4">
                    <Zap className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">CUSTOM INTEGRATIONS</h3>
                  <p className="text-white/70 text-sm">Seamless connections between your existing tools and new solutions.</p>
                  <div className="lcars-system-code mt-2">INT-001</div>
                </div>
                
                <div className="text-center">
                  <div className="lcars-panel lcars-panel-purple p-6 mb-4">
                    <Target className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">WORKFLOW AUTOMATION</h3>
                  <p className="text-white/70 text-sm">Eliminate manual tasks with intelligent automation systems.</p>
                  <div className="lcars-system-code mt-2">WFA-002</div>
                </div>
                
                <div className="text-center">
                  <div className="lcars-panel lcars-panel-blue p-6 mb-4">
                    <Shield className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">SCALABLE ARCHITECTURE</h3>
                  <p className="text-white/70 text-sm">Built to grow with your business and adapt to changing needs.</p>
                  <div className="lcars-system-code mt-2">SCA-003</div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="lcars-button">
                  INITIATE PROJECT DISCUSSION <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )
      
      case 'about':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                COMPANY DATA
              </h2>
              <div className="lcars-system-code">
                WHY CHOOSE LAUNCH MANIAC SYSTEMS
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="lcars-content-section">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="lcars-panel lcars-panel-orange p-3">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI-FIRST APPROACH</h3>
                    <div className="lcars-system-code">AI-001</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Cutting-edge automation powered by artificial intelligence to maximize efficiency and results.
                </p>
              </div>
              
              <div className="lcars-content-section">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="lcars-panel lcars-panel-purple p-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SMB FOCUSED</h3>
                    <div className="lcars-system-code">SMB-002</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Purpose-built solutions designed specifically for small and medium businesses' unique needs.
                </p>
              </div>
              
              <div className="lcars-content-section">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="lcars-panel lcars-panel-blue p-3">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">PROVEN RESULTS</h3>
                    <div className="lcars-system-code">RES-003</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Demonstrated track record of increasing sales opportunities and improving business performance.
                </p>
              </div>
              
              <div className="lcars-content-section">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="lcars-panel lcars-panel-pink p-3">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">MODULAR SOLUTIONS</h3>
                    <div className="lcars-system-code">MOD-004</div>
                  </div>
                </div>
                <p className="text-white/70">
                  Pick exactly what you need and scale as your business grows, with seamless integration.
                </p>
              </div>
            </div>
          </div>
        )
      
      case 'contact':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                COMMUNICATIONS
              </h2>
              <div className="lcars-system-code">
                ESTABLISH CONTACT WITH LAUNCH MANIAC SYSTEMS
              </div>
            </div>
            
            <div className="lcars-content-section text-center">
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ready to transform your business with AI-powered CRM automation? 
                Initiate contact with our systems team to begin your journey.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="lcars-panel lcars-panel-blue p-6">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">EMAIL COMMUNICATIONS</h4>
                  <p className="text-sm">hello@launchmaniac.com</p>
                  <div className="lcars-system-code mt-2">COM-001</div>
                </div>
                
                <div className="lcars-panel lcars-panel-orange p-6">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">DIRECT CHANNEL</h4>
                  <p className="text-sm">+1 (555) 123-4567</p>
                  <div className="lcars-system-code mt-2">DIR-002</div>
                </div>
                
                <div className="lcars-panel lcars-panel-purple p-6">
                  <Calendar className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">RESPONSE TIME</h4>
                  <p className="text-sm">Within 24 Hours</p>
                  <div className="lcars-system-code mt-2">RSP-003</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="lcars-button">
                  <Calendar className="mr-2 w-5 h-5" />
                  SCHEDULE DEMO
                </button>
                <button className="lcars-button-secondary">
                  <Mail className="mr-2 w-5 h-5" />
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="lcars-monitor">
      {/* Header Left */}
      <div className="lcars-header-left">
        <img src={launchManiacLogo} alt="Launch Maniac" className="h-8 opacity-90" />
      </div>
      
      {/* Header Center */}
      <div className="lcars-header-center">
        LAUNCH MANIAC CRM SYSTEMS
      </div>
      
      {/* Header Right */}
      <div className="lcars-header-right">
        <div className="text-center">
          <div className="lcars-system-code">STARDATE {stardate}</div>
          <div className="text-sm">{systemTime}</div>
        </div>
      </div>
      
      {/* Left Sidebar */}
      <div className="lcars-sidebar-left">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`lcars-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <div className="flex justify-between items-center">
              <span>{item.label}</span>
              <span className="text-xs">{item.code}</span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Main Display */}
      <div className="lcars-main-display">
        <div className="relative z-10 h-full overflow-y-auto">
          {renderMainContent()}
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="lcars-sidebar-right">
        <div className="lcars-panel lcars-panel-orange mb-4 p-4">
          <div className="lcars-system-code mb-2">SYSTEM STATUS</div>
          <div className="space-y-2">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-xs">{system.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{system.code}</span>
                  <div className={`lcars-status-indicator lcars-status-${system.status}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lcars-panel lcars-panel-purple p-4 mb-4">
          <div className="lcars-system-code mb-2">PERFORMANCE</div>
          <div className="lcars-data-stream">
            <div>CPU: 23.7%</div>
            <div>MEM: 67.2%</div>
            <div>NET: 89.1%</div>
            <div>I/O: 45.3%</div>
          </div>
        </div>
        
        <div className="lcars-panel lcars-panel-blue p-4">
          <div className="lcars-system-code mb-2">OPERATIONS</div>
          <div className="lcars-data-stream">
            <div>ACTIVE: 247</div>
            <div>QUEUE: 12</div>
            <div>ERROR: 0</div>
            <div>UPTIME: 99.9%</div>
          </div>
        </div>
      </div>
      
      {/* Footer Left */}
      <div className="lcars-footer-left"></div>
      
      {/* Footer Center */}
      <div className="lcars-footer-center"></div>
      
      {/* Footer Right */}
      <div className="lcars-footer-right"></div>
    </div>
  )
}

export default App
