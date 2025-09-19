import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Target, CheckCircle, ExternalLink, Mail, Phone, Calendar } from 'lucide-react'
import launchManiacLogo from './assets/LM_600x600px.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      title: "ReviewOS",
      subtitle: "Start Your Reputation Management Agency",
      description: "Automated reputation management platform that handles most processes, allowing you to launch and scale a profitable agency with minimal manual work.",
      features: [
        "Automated review monitoring across all platforms",
        "AI-powered response generation and automation",
        "Comprehensive client reporting dashboards",
        "White-label agency-ready tools and workflows"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "accent-amber"
    },
    {
      title: "MortgageOS",
      subtitle: "Supercharge Your Mortgage Business",
      description: "Specialized CRM tools designed specifically for mortgage loan officers to streamline operations and increase conversion rates.",
      features: [
        "Advanced lead management and scoring",
        "Automated pipeline tracking and follow-ups",
        "Built-in compliance tools and documentation",
        "Real-time performance analytics and insights"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-[var(--brand-primary-600)]"
    },
    {
      title: "GoHighLevel Extensions",
      subtitle: "Extend GoHighLevel's Power",
      description: "Custom applications that seamlessly integrate with and enhance GoHighLevel software capabilities for advanced automation.",
      features: [
        "Seamless native GoHighLevel integration",
        "Enhanced functionality and custom workflows",
        "Advanced automation and trigger systems",
        "Extended reporting and analytics capabilities"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "text-[var(--brand-accent-cyan)]"
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-First Approach",
      description: "Cutting-edge automation powered by artificial intelligence to maximize efficiency and results."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "SMB Focused",
      description: "Purpose-built solutions designed specifically for small and medium businesses' unique needs."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "Demonstrated track record of increasing sales opportunities and improving business performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Modular Solutions",
      description: "Pick exactly what you need and scale as your business grows, with seamless integration."
    }
  ]

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "2.5M+", label: "Sales Opportunities Created" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Automated Operations" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={launchManiacLogo} alt="Launch Maniac" className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground">Launch Maniac</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button className="btn-primary">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`section-padding hero-gradient relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Modular, AI-first automation for SMBs
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              CRM Tools That <span className="text-[var(--brand-accent-amber)]">Increase</span> Sales Performance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Launch Maniac provides powerful, AI-driven CRM automation tools designed to boost sales opportunities and outcomes for small and medium businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-accent-amber)] mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive CRM solutions designed to automate your business processes and maximize sales performance across different industries.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="card-hover bg-card border-border group">
                <CardHeader className="pb-4">
                  <div className={`${product.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {product.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-[var(--brand-primary-600)]">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[var(--status-success-700)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-secondary group">
                    Learn More 
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Custom Apps & <span className="text-gradient">Software Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Need something unique? Our development team creates tailored applications and software solutions designed specifically for your business requirements and workflows.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-primary-700)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Integrations</h3>
                <p className="text-muted-foreground">Seamless connections between your existing tools and new solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-secondary-700)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
                <p className="text-muted-foreground">Eliminate manual tasks with intelligent automation systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-accent-cyan)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-muted-foreground">Built to grow with your business and adapt to changing needs.</p>
              </div>
            </div>
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Launch Maniac</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with deep understanding of small business needs to deliver solutions that actually work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[var(--brand-primary-700)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Launch</span> Your Success?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of businesses that have transformed their sales performance with Launch Maniac's automation tools. Get started today and see results within weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <Calendar className="mr-2 w-5 h-5" />
                Book a Demo
              </Button>
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                <Mail className="mr-2 w-5 h-5" />
                Contact Sales
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-muted-foreground">hello@launchmaniac.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={launchManiacLogo} alt="Launch Maniac" className="w-8 h-8" />
              <span className="text-lg font-bold">Launch Maniac</span>
            </div>
            <div className="text-muted-foreground text-center md:text-right">
              <p>&copy; 2025 Launch Maniac. All rights reserved.</p>
              <p className="text-sm mt-1">Modular, AI-first automation for SMBs—clear, competent, fast.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
