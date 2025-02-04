import { Recipe } from "@/services/recipeService";
import { Heart } from "lucide-react";
import { useState } from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, onSelect }: RecipeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.some((fav: Recipe) => fav.uri === recipe.uri);
  });

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    if (isFavorite) {
      const newFavorites = favorites.filter((fav: Recipe) => fav.uri !== recipe.uri);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="recipe-card cursor-pointer" 
      onClick={() => onSelect(recipe)}
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.label} 
          className="recipe-image"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? "fill-primary text-primary" : "text-gray-600"}`} 
          />
        </button>
      </div>
      <div className="recipe-content">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{recipe.label}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {recipe.dietLabels.map((label, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-cream text-xs rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {recipe.totalTime > 0 ? `${recipe.totalTime} mins` : "Time N/A"} • {Math.round(recipe.calories)} cal
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;