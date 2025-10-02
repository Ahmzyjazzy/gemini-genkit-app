/**
 * Copyright 2025 Ahmed Olanrewaju (Ahmzyjazzy)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'dotenv/config';

import { googleAI } from '@genkit-ai/google-genai';
import { genkit, z } from 'genkit';

// Setup Genkit with the Google AI plugin
const ai = genkit({
    plugins: [googleAI()],
    model: googleAI.model('gemini-2.5-flash', {
        temperature: 0.8,
    }),
});

// Define the input schema
const RecipeInputSchema = z.object({
    ingredient: z.string().describe('Main ingredient or cuisine type'),
    dietaryRestrictions: z.string().optional().describe('Any dietary restrictions'),
});

// Define the output schema
const RecipeSchema = z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    tips: z.array(z.string()).optional(),
});

// Define a flow: e.g recipe generator flow
export const recipeGeneratorFlow = ai.defineFlow(
    {
        name: 'recipeGeneratorFlow',
        inputSchema: RecipeInputSchema,
        outputSchema: RecipeSchema,
    },
    async (input) => {
        // Create a prompt based on the input
        const prompt = `Create a recipe with the following requirements:
      Main ingredient: ${input.ingredient}
      Dietary restrictions: ${input.dietaryRestrictions || 'none'}`;

        // Generate structured recipe data using the same schema
        const { output } = await ai.generate({
            prompt,
            output: { schema: RecipeSchema },
        });

        if (!output) throw new Error('Failed to generate recipe');

        return output;
    },
);

// Run the flow
async function main() {
    const recipe = await recipeGeneratorFlow({
        ingredient: 'avocado',
        dietaryRestrictions: 'vegetarian',
    });

    console.log(recipe);
}

main().catch(console.error);