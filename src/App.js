import './App.css';
import {useState} from 'react';
import Finish from './components/finish'

function App() {
  const optionsArr = ["Less than 500$", "500$ - 2000$", "More than 2000$"];
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: ''

  });
  const [showFinish, setShowFinish] = useState(false);

 

  function handleOnSubmit(e){
    e.preventDefault();
    const validationErrors ={};
    if(!formData.name.trim()){
      validationErrors.name = "Name is required";
    }

    if(!formData.phone.trim()){
      validationErrors.phone = "phone is required";
    }else if(formData.phone.length < 11){
      validationErrors.phone = "Phone number is less than 11 digits"
    }

    if(!formData.age.trim()){
      validationErrors.age = "age is required";
    }else if(formData.age < 18){
      validationErrors.age = "Age is not acceptable, your age must not be less than 18"
    }else if(formData.age > 80){
      validationErrors.age = "Age is not acceptable, your age must not be more than 80"

    }
    else{
      if(Object.keys(validationErrors).length === 0){
    setShowFinish(showFinish => !showFinish)
      }
    }
    setErrors(validationErrors);
    
  }
  function componenthidden(){
    let newShow = showFinish;
    newShow = false
    setShowFinish(newShow)
  }

 

  return (
    <div className="App" onClick={componenthidden}>
      <form onSubmit={handleOnSubmit}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name</label>
        <input type='text' onChange={(e)=> {setFormData({...formData, name:e.target.value})}} value={formData.name}/>
        {errors.name && <span>{errors.name}</span>}

        <label>Phone Number</label>
        <input type='text' onChange={(e)=> {setFormData({...formData, phone:e.target.value})}} value={formData.phone}/>
        {errors.phone && <span>{errors.phone}</span>}

        <label>Age</label>
        <input type='text' onChange={(e)=> {setFormData({...formData, age:e.target.value})}} value={formData.age}/>
        {errors.age && <span>{errors.age}</span>}

        <label>Are you an employee?</label>
        <input type='checkbox' />
        <label>Salary</label>
        <select>
          {optionsArr.map((op, index) => {
            return(
              <option key={index}>{op}</option>
            )
          })}
        </select>
        <button>Submit</button>
      </form>
      {showFinish && <Finish  />}
      
    </div>
  );
}

export default App;
