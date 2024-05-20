import { nanoid } from "nanoid";
<<<<<<< HEAD
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
=======
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddRecipe } from "../store/actions/recipeActions";
>>>>>>> 0f20ea1 (Add: Update & Delete)

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
<<<<<<< HEAD
    const { recipes } = useSelector((state) => state.recipeReducer);
=======
    const recipes = useSelector(state => state.recipeSlice.recipes);
>>>>>>> 0f20ea1 (Add: Update & Delete)

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };
<<<<<<< HEAD

=======
        // sets the data in the localStorge of the browser
>>>>>>> 0f20ea1 (Add: Update & Delete)
        localStorage.setItem(
            "recipes",
            JSON.stringify([...recipes, newRecipe])
        );
<<<<<<< HEAD
        dispatch(asyncgetrecipies());
=======

        // dispatch the action to the reducer
        dispatch(asyncAddRecipe(newRecipe));

>>>>>>> 0f20ea1 (Add: Update & Delete)
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };
    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto  pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
