import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Brain, CheckSquare, ArrowRight, Sparkles, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  useEffect(() => {
    // Load the waitforit script
    const script = document.createElement('script');
    script.src = 'https://www.waitforit.me/waitlistV3.bundle.js';
    script.async = true;
    document.head.appendChild(script);

    // Load the waitforit CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://www.waitforit.me/wfiEmbedStyles.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: BarChart3,
      title: "Post Analytics",
      description: "Deep insights into your post performance with AI-powered analytics that help you understand what content works best for your audience."
    },
    {
      icon: TrendingUp,
      title: "Trending Audio Discovery",
      description: "Stay ahead of trends with our AI that identifies viral sounds and music before they peak, giving your content the edge it needs."
    },
    {
      icon: Brain,
      title: "AI Insights & Recommendations",
      description: "Get personalized content suggestions, optimal posting times, and strategic recommendations tailored to your business goals."
    },
    {
      icon: CheckSquare,
      title: "Smart Marketing Checklists",
      description: "Never miss important tasks with AI-generated to-do lists that adapt to your posting schedule and marketing campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 py-6 backdrop-blur-sm bg-background/80 transition-all duration-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Postful Logo" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold hover:text-primary transition-colors duration-300">Postful</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  AI-Powered Marketing
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight hover:tracking-wide transition-all duration-500">
                  Take Your 
                  <span className="bg-gradient-primary bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300"> Small Business</span> 
                  {" "}to the Next Level
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Postful uses AI automation and social media trend analysis to help small businesses create winning marketing strategies and grow their audience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg" onClick={scrollToWaitlist}>
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Mobile First</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Small Business Focused</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Postful mobile app interface showing analytics and AI insights" 
                className="w-full rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold hover:tracking-wide transition-all duration-300">
              Everything You Need to 
              <span className="bg-gradient-primary bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300 pl-2"> Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform provides all the tools small businesses need to create engaging content, understand their audience, and grow their social media presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border-0 shadow-soft backdrop-blur-sm bg-card/90 hover:bg-card hover:rotate-1">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-soft">
                    <feature.icon className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Waitlist */}
      <section id="waitlist-section" className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Social Media Marketing?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of small businesses already on our waitlist. Be the first to access Postful when we launch.
            </p>
            
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-elegant p-8 max-w-2xl mx-auto">
                <div 
                  id="waitforit-embed" 
                  data-project-id="a9f41842-c279-41bb-bb68-a74a6ed8c530"
                >
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Early access when we launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Exclusive beta features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Special launch pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-gradient-hero/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Postful Logo" className="w-8 h-8 hover:scale-110 hover:rotate-6 transition-all duration-300" />
                <span className="text-2xl font-bold hover:text-primary transition-colors duration-300">Postful</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Contact Us
                </Button>
                <Button variant="outline" size="sm" className="group hover:bg-gradient-primary hover:text-primary-foreground border-primary/30 transition-all duration-300 hover:scale-105 hover:-rotate-1" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Follow Us
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                AI-powered social media marketing for small businesses.
                <br />
                © 2024 Postful. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;