'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy, Check, Code2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type CodeDisplayProps = {
  code: string;
};

export function CodeDisplay({ code }: CodeDisplayProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({
      title: 'Copied!',
      description: 'The generated code has been copied to your clipboard.',
    });
  };

  return (
    <Card className="relative h-full bg-card/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Code2 className="h-5 w-5" />
          Generated Code
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleCopy} disabled={!code}>
          {hasCopied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-auto max-h-[60vh]">
          <pre className="rounded-md bg-background/70 p-4">
            <code className="font-code whitespace-pre-wrap text-sm text-foreground/90">{code}</code>
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
