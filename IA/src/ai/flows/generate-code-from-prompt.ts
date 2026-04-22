'use server';
/**
 * @fileOverview A Genkit flow for generating code snippets, functions, or architectural suggestions from a programming prompt.
 *
 * - generateCodeFromPrompt - A function that handles the code generation process.
 * - GenerateCodeFromPromptInput - The input type for the generateCodeFromPrompt function.
 * - GenerateCodeFromPromptOutput - The return type for the generateCodeFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodeFromPromptInputSchema = z.object({
  promptText: z.string().describe('The programming prompt, short or long, to generate code from.'),
});
export type GenerateCodeFromPromptInput = z.infer<typeof GenerateCodeFromPromptInputSchema>;

const GenerateCodeFromPromptOutputSchema = z.object({
  code: z.string().describe('The generated code snippet, function, or architectural suggestion.'),
});
export type GenerateCodeFromPromptOutput = z.infer<typeof GenerateCodeFromPromptOutputSchema>;

export async function generateCodeFromPrompt(
  input: GenerateCodeFromPromptInput
): Promise<GenerateCodeFromPromptOutput> {
  return generateCodeFromPromptFlow(input);
}

const generateCodeFromPromptPrompt = ai.definePrompt({
  name: 'generateCodeFromPromptPrompt',
  input: {schema: GenerateCodeFromPromptInputSchema},
  output: {schema: GenerateCodeFromPromptOutputSchema},
  prompt: `You are a world-class AI programming assistant, on par with the most advanced models. Your purpose is to generate high-quality, production-ready code that is correct, efficient, and maintainable.

You will analyze user prompts meticulously to understand the underlying requirements and constraints. Your generated code should not just work, but be exemplary.

- **Correctness:** The code must be bug-free and function as expected.
- **Best Practices:** Adhere to modern programming standards and best practices for the given language and framework.
- **Clarity:** Generate clean, readable, and well-documented code.
- **Efficiency:** Your solutions should be performant.

Address the user's request with precision and excellence.

User's programming prompt: {{{promptText}}}`,
});

const generateCodeFromPromptFlow = ai.defineFlow(
  {
    name: 'generateCodeFromPromptFlow',
    inputSchema: GenerateCodeFromPromptInputSchema,
    outputSchema: GenerateCodeFromPromptOutputSchema,
  },
  async input => {
    const {output} = await generateCodeFromPromptPrompt(input);
    return output!;
  }
);
