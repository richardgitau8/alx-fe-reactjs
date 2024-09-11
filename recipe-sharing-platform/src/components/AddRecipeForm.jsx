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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      <div>
        <label htmlFor="steps">Steps:</label>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <input type="text" id="newStep" value={newStep} onChange={handleStepChange} />
        <button type="button" onClick={handleAddStep}>Add Step</button>
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <input type="text" id="newIngredient" value={newIngredient} onChange={handleIngredientChange} />
        <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
