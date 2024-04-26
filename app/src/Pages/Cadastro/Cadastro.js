import "./Cadastro.css";


export const Cadastro = ()=>{
    return(
        <div className="cadastro-container">
            <h2>Cadastro</h2>
            <form>
                <input type="text" placeholder="Nome de Usuário" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}