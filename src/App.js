import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList}></Route>
        <Route path="/edit/:id" component={EditExercise}></Route>
        <Route path="/create" component={CreateExercise}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
