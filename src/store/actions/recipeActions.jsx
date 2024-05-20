import { toast } from "react-toastify";
import { addRecipe } from "../reducers/recipeSlice";

export const asyncAddRecipe = (recipe) => async (dispatch, getState) => {
    try{
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        dispatch(addRecipe(recipes));
    }
    catch(err){
        toast.error(err.message);
    }
}