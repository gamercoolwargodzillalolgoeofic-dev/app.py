'use server';

import { generateCodeFromPrompt } from '@/ai/flows/generate-code-from-prompt';
import { z } from 'zod';

const schema = z.object({
  prompt: z.string().min(1, { message: 'Prompt cannot be empty.' }),
});

export async function handleCodeGeneration(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.prompt?.[0] || 'Invalid prompt.',
      code: '',
    };
  }

  try {
    const result = await generateCodeFromPrompt({ promptText: validatedFields.data.prompt });
    return {
      error: '',
      code: result.code,
    };
  } catch (e) {
    console.error(e);
    return {
      error: 'Failed to generate code. Please try again.',
      code: '',
    };
  }
}
