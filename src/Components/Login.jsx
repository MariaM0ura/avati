import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    toast.success("Login realizado com sucesso!");

    setUsername("");
    setPassword("");  
  };

  return (
    <div>
      <div className="logo">
        <img src="/image/Logo.png"
        alt="Logo" />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 >Acesse o sistema</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button type="submit" className="button" >Login</button>

          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="#">Registar</a>{" "}
            </p>
          </div>
        </form>
      </div>
      <ToastContainer 
                    position="top-right" 
                    autoClose={3000} 
                    hideProgressBar={false} 
                    newestOnTop={true} 
                    closeOnClick 
                    rtl={false} 
                    pauseOnFocusLoss 
                    draggable 
                    pauseOnHover 
                    toastClassName="custom-toast" 
            />
    </div>

  );
};

export default Login;