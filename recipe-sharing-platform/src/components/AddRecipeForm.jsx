import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [errors, setErrors] = useState({});

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    validateField('title', e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    validateField('description', e.target.value);
  };

  const handleStepChange = (e) => {
    setNewStep(e.target.value);
  };

  const handleAddStep = () => {
    if (newStep.trim() !== '') {
      setSteps([...steps, newStep]);
      setNewStep('');
    }
  };

  const handleIngredientChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic here (e.g., send data to API)
      console.log('Recipe added:', { title, description, steps, ingredients });
    }
  };

  const validateField = (fieldName, value) => {
    let error = null;
    if (fieldName === 'title' && value.trim() === '') {
      error = 'Title is required.';
    } else if (fieldName === 'description' && value.trim() === '') {
      error = 'Description is required.';
    }
    setErrors({ ...errors, [fieldName]: error });
  };

  const validateForm = () => {
    validateField('title', title);
    validateField('description', description);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title"   
 className="w-full px-3 py-2 border   
 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300" value={title} onChange={handleTitleChange} required />
        {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
      </div>
      {/* ... (rest of the form fields) */}
      <div className="flex justify-end mt-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">Submit Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
