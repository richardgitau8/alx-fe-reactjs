import React, { useState } from 'react';

const AddRecipeForm = () => {
  // ... (rest of your component logic)

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300" value={title} onChange={handleTitleChange} required />
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
