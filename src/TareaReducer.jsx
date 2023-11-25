export const TareaReducer = (initialState, action) => {
	switch (action.type) {
	  case 'Add Todo':
		const updatedStateAdd = [...initialState, action.payload];
		localStorage.setItem('todos', JSON.stringify(updatedStateAdd));
		return updatedStateAdd;
  
	  case 'Delete Todo':
		const updatedStateDelete = initialState.filter(
		  (todo) => todo.id !== action.payload
		);
		localStorage.setItem('todos', JSON.stringify(updatedStateDelete));
		return updatedStateDelete;
  
	  case 'Complete Todo':
		const updatedStateComplete = initialState.map((todo) => {
		  if (todo.id === action.payload) {
			return {
			  ...todo,
			  done: !todo.done,
			};
		  }
		  return todo;
		});
		localStorage.setItem('todos', JSON.stringify(updatedStateComplete));
		return updatedStateComplete;
  
	  case 'Update Todo':
		const updatedStateUpdate = initialState.map((todo) => {
		  if (todo.id === action.payload.id) {
			return {
			  ...todo,
			  description: action.payload.description,
			};
		  }
		  return todo;
		});
		localStorage.setItem('todos', JSON.stringify(updatedStateUpdate));
		return updatedStateUpdate;
  
	  default:
		// Si no hay acción, intento obtener datos del localStorage
		const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
		return storedTodos.length > 0 ? storedTodos : initialState;
	}
  };