import React from "react"
import AIRecipe from "./components/AIRecipe"
import RecipeOption from "./components/IngredientsList"
import getRecipeFromGroq from "./ai.js"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGroq(ingredients)
        setRecipe(recipeMarkdown)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(previngredients => [...previngredients, newIngredient])
        event.currentTarget.reset()
        /*in production use addInfredients(formData) {
            const newIngredient = formData.get("ingredient")
            setIngredients(previngredients => [...previngredients, newIngredient])
        }*/
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. Tomato"
                    className="IngredientsInput" 
                    name = "ingredient"
                    required
                />
                <button className="AddingredientsBtn" >Add ingredient</button>
            </form>
            {ingredients.length > 0 && <RecipeOption 
                ingredientitems = {ingredientsListItems} 
                ingredients={ingredients} 
                getRecipe={getRecipe}
            />}
            {recipe && <AIRecipe recipe={recipe}/> }
            </main>
            )
}