
'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { handleCodeGeneration } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CodeDisplay } from '@/components/code-display';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const initialState = {
  code: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Code
        </>
      )}
    </Button>
  );
}

export function ProCodeUI() {
  const [state, formAction] = useActionState(handleCodeGeneration, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Your Prompt</CardTitle>
          <CardDescription>
            Enter a programming prompt, short or long. Our AI will understand and generate the code for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <Textarea
              name="prompt"
              placeholder="e.g., 'Create a python function to check if a number is prime'"
              className="min-h-[200px] resize-y border-border bg-background/70 text-base focus:ring-primary"
              required
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className="lg:sticky lg:top-24">
        {state?.code ? (
          <CodeDisplay code={state.code} />
        ) : (
          <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border/50 bg-card/50">
            <div className="text-center">
              <Wand2 className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">Generated code will appear here</h3>
              <p className="mt-1 text-sm text-muted-foreground">Start by entering a prompt on the left.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
