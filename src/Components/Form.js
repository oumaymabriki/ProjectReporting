
import { React,useState,useEffect } from "react";
import Other from "../pages/Other";
import PersonnalInfo from "../pages/PersonnalInfo";
import SignUp from "../pages/SignUp";
function Form(){
  
  const [page, setPage]=useState(0);
  const FormTitles=["Sign Up","Personnal Info","Other"];
  const PageDisplay=()=>{
    if(page===0){
      return (<SignUp formData={formData} setFormData={setFormData}/>);
    }else if(page===1){
      return (<PersonnalInfo formData={formData} setFormData={setFormData}/>);
    }else{return(<Other formData={formData} setFormData={setFormData}/>);}
  }
  const [formData, setFormData]=useState({
    email:"",
    password:"",
    passwordConfirmed:"",
    firstName:"",
    lastName:"",
    userName:"",
    telNumber:"",
    others:""
  })
 // const handleChnage=(e)=>{
   // const {name,values}=e.target;
   // setFormValues({...setFormValues, [name]:values});
 // }
  const handleSubmit=(e)=>{
  e.prevenDefault();
    //setFormerrors(validate(setFormValues));
    //isSubmit(true);
  }
  //useEffect(()=>{
    //console.log(formErrors);
    //if(Object.keys(formErrors).length===0 && isSubmit)
      // console.log(formValues);
  //},[formErrors])
  //const [formValues, setFormValues]=useState(formData);
  //const [formErrors, setFormerrors]=useState({});
 //const [isSubmit, setIsSubmit]=useState(false);
 // const validate =(values)=>{
   //const errors={};
    //const mailFormat=(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/);
    //if(!formValues.email){formValues.email="email is required !";}
    //if(!formValues.password){formValues.password="password is required !";}
    //if(!formValues.password){formValues.passwordConfirmed="password confirmed is required !";}
    //if(!formValues.password){formValues.firstName="FirstName is required !";}
    //if(!formValues.password){formValues.lastName="LastName is required !";}
    //if(!formValues.password){formValues.userName="UserName is required !";}
    //if(!formValues.password){formValues.telNumber="telephone Number is required !";}
    //if(!formValues.password){formValues.others="others is required !";}
  //return errors;
  //}
 
  return (
   
    <div className="AppForm" onSubmit={handleSubmit}>
     
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
