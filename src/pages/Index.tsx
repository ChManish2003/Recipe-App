import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Recipe, searchRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("popular recipes");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["recipes", searchTerm],
    queryFn: () => searchRecipes(searchTerm),
    enabled: !!searchTerm,
  });

  const favorites: Recipe[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  const displayedRecipes = showFavorites ? favorites : recipes;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Delicious Recipes</h1>
          <p className="text-gray-600 mb-8">Discover and save your favorite recipes</p>
          
          <div className="max-w-xl mx-auto flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowFavorites(false)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                !showFavorites
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Recipes
            </button>
            <button
              onClick={() => setShowFavorites(true)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showFavorites
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Favorites
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="recipe-card">
                <div className="bg-gray-200 h-48 w-full" />
                <div className="p-4 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.uri}
                recipe={recipe}
                onSelect={setSelectedRecipe}
              />
            ))}
          </div>
        )}

        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </div>
  );
};

export default Index;