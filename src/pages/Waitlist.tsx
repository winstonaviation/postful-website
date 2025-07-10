import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Waitlist = () => {
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
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Join the Postful Waitlist
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Be among the first to transform your social media marketing with AI-powered insights and automation.
          </p>

          <div className="bg-card rounded-lg shadow-elegant p-8">
            <div 
              id="waitforit-embed" 
              data-project-id="a9f41842-c279-41bb-bb68-a74a6ed8c530"
            >
            </div>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Join thousands of small businesses already on the waitlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;