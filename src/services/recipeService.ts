import { toast } from "@/components/ui/use-toast";

const APP_ID = "a5de3521";
const APP_KEY = "28f8a20bd893e2740e68d4bbb349b977";
const BASE_URL = "https://api.edamam.com/search";

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  ingredientLines: string[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
}

export interface RecipeSearchResponse {
  count: number;
  hits: Array<{
    recipe: Recipe;
  }>;
}

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data: RecipeSearchResponse = await response.json();
    return data.hits.map(hit => hit.recipe);
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to fetch recipes. Please try again later.",
      variant: "destructive",
    });
    return [];
  }
};