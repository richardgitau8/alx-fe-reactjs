import React from 'react';
// Import the desired form component
import RegistrationForm from './components/RegistrationForm';
// import FormikForm from './components/FormikForm';
const App = () => {
  return (
    <div className="App">
      <h1>User Registration</h1>
      {/* Display the form */}
      <RegistrationForm />
      {/* Uncomment the below line and comment the above one if you want to switch to FormikForm */}
      {/* <FormikForm /> */}
    </div>
  );
};

export default App;
