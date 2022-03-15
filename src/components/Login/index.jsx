import "./styles.css";
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

                <span className="login-form-title">
                    Bem Vindo!
                </span>
                <span className="login-form-title">
                    <strong className="logo"> Mô </strong>
                </span>

                <div className="wrap-input">
                    <input 
                        className={email !== "" ? 'has-val input' : 'input' } // Se meu input tiver diferente de vazio, deixar com has-val e input. Se estiver vazio deixa somente o input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                     />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input 
                       className={password !== "" ? 'has-val input' : 'input' } // Se meu input tiver diferente de vazio, deixar com has-val e input. Se estiver vazio deixa somente o input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="text1">Não possui conta? </span>

                    <a className="text2" href=""> Criar conta.</a>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
