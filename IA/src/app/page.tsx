import { ProCodeUI } from '@/components/code-sage-ui';
import { CodeXml } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="p-4 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold flex items-center gap-2 font-headline">
            <CodeXml className="w-8 h-8 text-primary" />
            ProCode AI
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto">
          <ProCodeUI />
        </div>
      </main>
      <footer className="p-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>Powered by GenAI. Built for developers.</p>
        </div>
      </footer>
    </div>
  );
}
