# Mini Gemini Genkit App
This project demonstrates how to use [Genkit](https://github.com/genkit-ai) with the Google Gemini model to generate structured recipes based on user input.

## Features

- Uses [Genkit](https://www.npmjs.com/package/genkit) and [@genkit-ai/google-genai](https://www.npmjs.com/package/@genkit-ai/google-genai) for AI-powered recipe generation.
- Accepts main ingredient and dietary restrictions as input.
- Returns a recipe with title, description, prep/cook time, servings, ingredients, instructions, and tips.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Environment Variables

Copy .env.example to .env and add your [Google Gemini API key](https://ai.google.dev/gemini-api/docs/api-key):

```
GEMINI_API_KEY=your_api_key_here
```

### Running the App

```sh
npm run dev
```

This will generate a recipe for avocado with vegetarian dietary restriction and print it to the console.

## Project Structure

- src/index.ts: Main entry point. Defines the recipe generation flow and runs an example.
- .genkit: Genkit runtime, trace, and server metadata (auto-generated).
- .env: API key configuration.

## Example Output

```json
{
  "title": "Creamy Avocado Pasta",
  "description": "A quick and easy vegetarian pasta dish featuring a rich and creamy sauce made from fresh avocados, garlic, lemon, and basil.",
  "prepTime": "10 minutes",
  "cookTime": "15 minutes",
  "servings": 4,
  "ingredients": [
    "2 ripe avocados, pitted and scooped",
    "1/2 pound (225g) spaghetti or linguine",
    "2 cloves garlic, minced",
    "1/4 cup fresh basil leaves, packed",
    "2 tablespoons fresh lemon juice",
    "1/4 cup olive oil",
    "Salt and freshly ground black pepper to taste",
    "2-4 tablespoons pasta cooking water (as needed)",
    "Optional: Cherry tomatoes, halved, for garnish",
    "Optional: Red pepper flakes, for a kick"
  ],
  "instructions": [
    "Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions until al dente. Before draining, reserve about 1 cup of the pasta cooking water.",
    "While the pasta is cooking, prepare the avocado sauce. In a food processor or blender, combine the scooped avocado flesh, minced garlic, fresh basil, lemon juice, and olive oil.",
    "Blend until the sauce is smooth and creamy. Season with salt and pepper to taste. If the sauce is too thick, add 1-2 tablespoons of the reserved pasta cooking water until it reaches your desired consistency.",
    "Once the pasta is drained, immediately add it to a large bowl. Pour the avocado sauce over the hot pasta.",
    "Toss well to coat the pasta evenly. The heat from the pasta will gently warm the sauce. If needed, add more reserved pasta water to achieve a smoother consistency.",
    "Serve immediately, garnished with cherry tomatoes, fresh basil leaves, and red pepper flakes if desired."
  ],
  "tips": [
    "For a richer flavor, add a tablespoon of nutritional yeast to the sauce for a cheesy hint (vegetarian-friendly).",
    "Ensure your avocados are very ripe for the creamiest sauce.",
    "This sauce is best served immediately as avocado can oxidize and brown over time if left exposed to air.",
    "Add some toasted pine nuts or chopped walnuts for extra crunch and healthy fats."
  ]
}
```

## License

See lincense under [LICENSE](LICENSE.md)

---

For more details, see [index.ts](src/index.ts)