'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized love letters.
 *
 * The flow takes previous messages and memories as input and uses a generative AI model
 * to create a heartfelt love letter.
 *
 * @exports generateLoveLetter - The main function to generate a love letter.
 * @exports GenerateLoveLetterInput - The input type for the generateLoveLetter function.
 * @exports GenerateLoveLetterOutput - The output type for the generateLoveLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the love letter generator.
const GenerateLoveLetterInputSchema = z.object({
  previousMessages: z.string().describe('A string containing previous messages exchanged.'),
  sharedMemories: z.string().describe('A string containing shared memories.'),
  tone: z.string().optional().describe('The tone of the love letter (e.g., romantic, funny).'),
});

export type GenerateLoveLetterInput = z.infer<typeof GenerateLoveLetterInputSchema>;

// Define the output schema for the love letter generator.
const GenerateLoveLetterOutputSchema = z.object({
  loveLetter: z.string().describe('The generated love letter.'),
});

export type GenerateLoveLetterOutput = z.infer<typeof GenerateLoveLetterOutputSchema>;

// Main function to generate a love letter.
export async function generateLoveLetter(input: GenerateLoveLetterInput): Promise<GenerateLoveLetterOutput> {
  return generateLoveLetterFlow(input);
}

// Define the prompt for the love letter generator.
const loveLetterPrompt = ai.definePrompt({
  name: 'loveLetterPrompt',
  input: {schema: GenerateLoveLetterInputSchema},
  output: {schema: GenerateLoveLetterOutputSchema},
  prompt: `You are a love letter writing assistant. You will generate a personalized love letter based on the provided previous messages, shared memories, and desired tone.

  Previous Messages: {{{previousMessages}}}
  Shared Memories: {{{sharedMemories}}}
  Tone: {{{tone}}}

  Write a heartfelt and personalized love letter, incorporating details from the previous messages and shared memories. The tone of the letter should be appropriate, such as romantic, funny, etc.
  `,
});

// Define the Genkit flow for generating love letters.
const generateLoveLetterFlow = ai.defineFlow(
  {
    name: 'generateLoveLetterFlow',
    inputSchema: GenerateLoveLetterInputSchema,
    outputSchema: GenerateLoveLetterOutputSchema,
  },
  async input => {
    const {output} = await loveLetterPrompt(input);
    return output!;
  }
);
