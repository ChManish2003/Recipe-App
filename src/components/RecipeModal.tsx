import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Recipe } from "@/services/recipeService";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  return (
    <Dialog open={!!recipe} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.label}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">{recipe.totalTime > 0 ? `${recipe.totalTime} mins` : "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Servings</p>
                  <p className="font-medium">{recipe.yield}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Calories</p>
                  <p className="font-medium">{Math.round(recipe.calories)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cuisine</p>
                  <p className="font-medium">{recipe.cuisineType?.join(", ") || "N/A"}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
              <ul className="list-disc pl-5 space-y-2">
                {recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Health Labels</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.healthLabels.map((label, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cream rounded-full text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Full Recipe
            </a>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;