import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props){

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



    const [email, setEmail]= useState({email:"", valid:false});

    const [password, setPassword]= useState({password:"", valid:false});


    let navigate = useNavigate(); 
    const [page, setPage] = useState(0); 
    const [boton, setBoton] = useState("Siguiente"); 




    const handleEmailChange =(e)=>{

        setEmail({email:e.target.value, valid:e.target.value.match(emailRegex) });
    }

    const handlePasswordChange =(e)=>{

        setPassword({password:e.target.value, valid:e.target.value.length>5 });


    }



  



    const handleClick = ()=>{


        if(page ===0 && email.valid ){

            setPage(page+1);
            setBoton("Submit");


        }
        if(page===1 && password.valid){
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

                <h2>Encuentra hasta el libro que no estabas buscando</h2>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" ></i>
                  </div>

                  <h3 className="fw-normal mb-3 pb-3" >Tu Librería Aliada</h3>


                  {page===0?
                  
                
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example17">User or email</label>
                    <input type="email" id="form2Example17" value={email.email} onChange={handleEmailChange} className="form-control form-control-lg" />

                     {(!email.valid) ?  <div className="text-danger">
                        Su correo no tiene un formato correcto: Tome de ejemplo "nombre@hotmail.com"
                        </div>:true }</div>
                        :  
                        <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example27">Password</label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg"  value={password.password} onChange={handlePasswordChange}/>
    
    
                        {(!password.valid) ?  <div className="text-danger">
                            Su contraseña no tiene suficientes caracteres 
                            </div>:true}
                      </div>}

                  

                

               

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleClick}>{boton}</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
      
               
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>);}