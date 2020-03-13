import axios from 'axios';

export default {
	findFavorites: (userId) => {
		return axios.get(`/api/favorites/${userId}`);
	},
	addFavorite: (userId) => {
		return axios.put(`/api/favorites/${userId}`);
	},
	deleteFavorite: (userId) => {
		return axios.put(`/api/favorites/delete/${userId}`);
	},
	getPantry: () => {
		return axios.get('/api/pantry');
	},
	updatePantryItem: (userId) => {
		return axios.put(`/api/pantry/update/${userId}`);
	},
	deletePantryItem: (userId) => {
		return axios.put(`/api/pantry/delete/${userId}`);
	},
	ingredientSearch: () => {
		return axios.get('/api/spoon/ingredient-search');
	},
	recipeSearchRaw: () => {
		return axios.get('/api/spoon/recipe-search');
	},
	recipeSearchByIngredient: () => {
		return axios.get('/api/spoon/recipe-by-ingredient');
	},
	getRecipeData: () => {
		return axios.get('/api/spoon/recipe/data');
	}
};
