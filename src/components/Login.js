import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
export default function Login(props){

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



    const [email, setEmail]= useState({email:"", valid:false});

    const [password, setPassword]= useState({password:"", valid:false});


    let navigate = useNavigate(); 
    const [page, setPage] = useState(0); 
    const [boton, setBoton] = useState(<FormattedMessage id = "NextButton"/>); 




    const handleEmailChange =(e)=>{

        setEmail({email:e.target.value, valid:e.target.value.match(emailRegex) });
    }

    const handlePasswordChange =(e)=>{

        setPassword({password:e.target.value, valid:e.target.value.length>5 });


    }



  



    const handleClick = ()=>{


        if(page ===0 && email.valid ){

            setPage(page+1);
            setBoton(<FormattedMessage id= "SendButton"/>);


        }
        else if(page===1 && password.valid){

            console.log(email.email);
            console.log(password.password)
            


            navigate("/Home");
        }


        
         

};

    return (
<section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://www.rd.com/wp-content/uploads/2021/04/usedbooksonline2.jpg"
                alt="login form" className="img-fluid" />

                <h2><FormattedMessage id= "lema" /></h2>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                  </div>

                  <h3 className="fw-normal mb-3 pb-3" ><FormattedMessage id = "loginTitle"/></h3>


                  {page===0?
                  
                
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example17"><FormattedMessage id= "user_email"/></label>
                    <input type="email" id="form2Example17" value={email.email} onChange={handleEmailChange} className="form-control form-control-lg" />

                     {(!email.valid) ?  <div className="text-danger">
                        <FormattedMessage id = "emailFormat" />
                        </div>:true }</div>
                        :  
                        <div className="form-outline mb-4">
                        <h4>{email.email}</h4>
                        <label className="form-label" for="form2Example27"><FormattedMessage id ="password" /></label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg"  value={password.password} onChange={handlePasswordChange}/>
    
    
                        {(!password.valid) ?  <div className="text-danger">

                        <FormattedMessage id = "passwordFormat" />

                            </div>:true}
                      </div>}

                  

                

               

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleClick}>{boton}</button>
                  </div>

      
               
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>);}