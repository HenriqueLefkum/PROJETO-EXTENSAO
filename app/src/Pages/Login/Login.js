import "./Login.css";

export const Login = ()=>{
    return(
      <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Nome de Usuário" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="cadastro.js">Cadastre-se</a></p>
    </div>
    );
}