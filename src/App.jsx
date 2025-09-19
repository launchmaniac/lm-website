import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Target, CheckCircle, ExternalLink, Mail, Phone, Calendar, Activity, Database, Cpu, Wifi, Monitor, BarChart3, Settings, Clock, Server } from 'lucide-react'
import launchManiacLogo from './assets/LMHorizontalYW_Transparent.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [currentTime, setCurrentTime] = useState('')
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(timeString)
    }
    
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    
    return () => clearInterval(timeInterval)
  }, [])

  const navigationItems = [
    { id: 'dashboard', label: 'SYSTEM OVERVIEW', icon: <Monitor className="w-4 h-4" /> },
    { id: 'products', label: 'PRODUCT MATRIX', icon: <Database className="w-4 h-4" /> },
    { id: 'services', label: 'CUSTOM SOLUTIONS', icon: <Settings className="w-4 h-4" /> },
    { id: 'analytics', label: 'PERFORMANCE DATA', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'contact', label: 'COMMUNICATIONS', icon: <Wifi className="w-4 h-4" /> }
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
      status: "active"
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
      status: "active"
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
      status: "active"
    }
  ]

  const stats = [
    { number: "500+", label: "BUSINESSES AUTOMATED", code: "BA-500", trend: "+12%" },
    { number: "2.5M+", label: "SALES OPPORTUNITIES", code: "SOC-2.5M", trend: "+8%" },
    { number: "98%", label: "CLIENT SATISFACTION", code: "CSR-98", trend: "+2%" },
    { number: "24/7", label: "AUTOMATED OPERATIONS", code: "AO-247", trend: "100%" }
  ]

  const systemMetrics = [
    { label: "CPU USAGE", value: "23.7%", status: "active" },
    { label: "MEMORY", value: "67.2%", status: "warning" },
    { label: "NETWORK", value: "89.1%", status: "active" },
    { label: "STORAGE", value: "45.3%", status: "active" },
    { label: "UPTIME", value: "99.9%", status: "active" }
  ]

  const renderMainContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="picard-panel">
              <h1 className="picard-data-large mb-4">CRM AUTOMATION SYSTEMS</h1>
              <p className="picard-data-medium mb-6">
                MODULAR, AI-FIRST AUTOMATION FOR SMALL & MEDIUM BUSINESSES
              </p>
              <div className="picard-code mb-8">
                LAUNCH MANIAC PROVIDES POWERFUL CRM TOOLS DESIGNED TO BOOST SALES PERFORMANCE
              </div>
              
              <div className="picard-grid-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="picard-panel-primary text-center">
                    <div className="picard-data-large">{stat.number}</div>
                    <div className="picard-data-small">{stat.label}</div>
                    <div className="picard-code">{stat.code}</div>
                    <div className="text-green-400 text-sm mt-2">{stat.trend}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center">
                <button 
                  className="picard-button picard-button-primary"
                  onClick={() => setActiveSection('products')}
                >
                  <Database className="w-4 h-4" />
                  ACCESS PRODUCT MATRIX
                </button>
                <button 
                  className="picard-button picard-button-success"
                  onClick={() => setActiveSection('contact')}
                >
                  <Wifi className="w-4 h-4" />
                  INITIATE CONTACT
                </button>
              </div>
            </div>
          </div>
        )
      
      case 'products':
        return (
          <div className="space-y-6">
            <div className="picard-panel">
              <h2 className="picard-data-large mb-4">PRODUCT MATRIX</h2>
              <div className="picard-code mb-8">
                COMPREHENSIVE CRM SOLUTIONS FOR BUSINESS AUTOMATION
              </div>
            </div>
            
            <div className="space-y-6">
              {products.map((product, index) => (
                <div key={index} className="picard-panel picard-scan-effect">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="picard-panel-secondary p-3 rounded-full">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="picard-data-medium">{product.title}</h3>
                        <div className="picard-code text-blue-400">{product.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="picard-code">{product.statusCode}</div>
                      <div className={`picard-status-indicator picard-status-${product.status}`}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="picard-button">
                    <ExternalLink className="w-4 h-4" />
                    ACCESS MODULE
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'services':
        return (
          <div className="space-y-6">
            <div className="picard-panel">
              <h2 className="picard-data-large mb-4">CUSTOM SOLUTIONS</h2>
              <div className="picard-code mb-8">
                TAILORED APPLICATIONS & SOFTWARE DEVELOPMENT
              </div>
            </div>
            
            <div className="picard-panel">
              <p className="picard-data-medium mb-8 text-center leading-relaxed">
                Our development team creates tailored applications and software solutions designed specifically for your business requirements and workflows.
              </p>
              
              <div className="picard-grid-3 mb-8">
                <div className="picard-panel-primary text-center">
                  <div className="picard-panel-secondary p-6 mb-4 rounded-full inline-block">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="picard-data-medium mb-2">CUSTOM INTEGRATIONS</h3>
                  <p className="text-gray-400 text-sm mb-4">Seamless connections between your existing tools and new solutions.</p>
                  <div className="picard-code">INT-001</div>
                </div>
                
                <div className="picard-panel-primary text-center">
                  <div className="picard-panel-secondary p-6 mb-4 rounded-full inline-block">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="picard-data-medium mb-2">WORKFLOW AUTOMATION</h3>
                  <p className="text-gray-400 text-sm mb-4">Eliminate manual tasks with intelligent automation systems.</p>
                  <div className="picard-code">WFA-002</div>
                </div>
                
                <div className="picard-panel-primary text-center">
                  <div className="picard-panel-secondary p-6 mb-4 rounded-full inline-block">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="picard-data-medium mb-2">SCALABLE ARCHITECTURE</h3>
                  <p className="text-gray-400 text-sm mb-4">Built to grow with your business and adapt to changing needs.</p>
                  <div className="picard-code">SCA-003</div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="picard-button picard-button-primary">
                  <ArrowRight className="w-4 h-4" />
                  INITIATE PROJECT DISCUSSION
                </button>
              </div>
            </div>
          </div>
        )
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="picard-panel">
              <h2 className="picard-data-large mb-4">PERFORMANCE DATA</h2>
              <div className="picard-code mb-8">
                SYSTEM METRICS & OPERATIONAL ANALYTICS
              </div>
            </div>
            
            <div className="picard-grid-2">
              <div className="picard-panel-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="picard-panel-secondary p-3 rounded-full">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="picard-data-medium">AI-FIRST APPROACH</h3>
                    <div className="picard-code">AI-001</div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Cutting-edge automation powered by artificial intelligence to maximize efficiency and results.
                </p>
              </div>
              
              <div className="picard-panel-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="picard-panel-secondary p-3 rounded-full">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="picard-data-medium">SMB FOCUSED</h3>
                    <div className="picard-code">SMB-002</div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Purpose-built solutions designed specifically for small and medium businesses' unique needs.
                </p>
              </div>
              
              <div className="picard-panel-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="picard-panel-secondary p-3 rounded-full">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="picard-data-medium">PROVEN RESULTS</h3>
                    <div className="picard-code">RES-003</div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Demonstrated track record of increasing sales opportunities and improving business performance.
                </p>
              </div>
              
              <div className="picard-panel-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="picard-panel-secondary p-3 rounded-full">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="picard-data-medium">MODULAR SOLUTIONS</h3>
                    <div className="picard-code">MOD-004</div>
                  </div>
                </div>
                <p className="text-gray-400">
                  Pick exactly what you need and scale as your business grows, with seamless integration.
                </p>
              </div>
            </div>
          </div>
        )
      
      case 'contact':
        return (
          <div className="space-y-6">
            <div className="picard-panel">
              <h2 className="picard-data-large mb-4">COMMUNICATIONS</h2>
              <div className="picard-code mb-8">
                ESTABLISH CONTACT WITH LAUNCH MANIAC SYSTEMS
              </div>
            </div>
            
            <div className="picard-panel text-center">
              <p className="picard-data-medium mb-8 leading-relaxed">
                Ready to transform your business with AI-powered CRM automation? 
                Initiate contact with our systems team to begin your journey.
              </p>
              
              <div className="picard-grid-3 mb-8">
                <div className="picard-panel-secondary p-6">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="picard-data-medium mb-2">EMAIL COMMUNICATIONS</h4>
                  <p className="text-sm text-gray-400">hello@launchmaniac.com</p>
                  <div className="picard-code mt-2">COM-001</div>
                </div>
                
                <div className="picard-panel-secondary p-6">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="picard-data-medium mb-2">DIRECT CHANNEL</h4>
                  <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                  <div className="picard-code mt-2">DIR-002</div>
                </div>
                
                <div className="picard-panel-secondary p-6">
                  <Calendar className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="picard-data-medium mb-2">RESPONSE TIME</h4>
                  <p className="text-sm text-gray-400">Within 24 Hours</p>
                  <div className="picard-code mt-2">RSP-003</div>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button className="picard-button picard-button-primary">
                  <Calendar className="w-4 h-4" />
                  SCHEDULE DEMO
                </button>
                <button className="picard-button picard-button-success">
                  <Mail className="w-4 h-4" />
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
    <div className="picard-layout">
      {/* Header */}
      <header className="picard-header">
        <img src={launchManiacLogo} alt="Launch Maniac" className="picard-logo" />
        <h1 className="picard-title">LAUNCH MANIAC CRM SYSTEMS</h1>
        <div className="picard-status">
          <div className="flex items-center gap-2">
            <div className="picard-status-indicator picard-status-active"></div>
            <span>{systemStatus}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{currentTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="picard-main">
        {/* Sidebar */}
        <aside className="picard-sidebar">
          <nav className="picard-nav">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`picard-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </nav>

          {/* System Status Panel */}
          <div className="mt-8">
            <div className="picard-panel-primary p-4">
              <h4 className="picard-data-small mb-4">SYSTEM STATUS</h4>
              <div className="space-y-2">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono">{metric.value}</span>
                      <div className={`picard-status-indicator picard-status-${metric.status}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="picard-content">
          {renderMainContent()}
        </section>
      </main>
    </div>
  )
}

export default App
