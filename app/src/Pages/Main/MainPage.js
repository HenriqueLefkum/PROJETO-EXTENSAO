import "./MainPage.css";


export const MainPage = ()=>{
    return(
        <div class="container">
        <div className="MainPage-Container">
            <body>
                <div class="sidebar">
                    <div class="user-profile">
                        <p class="user-name">Nome do Usuário</p>
                    </div>
                    <button class="menu-button">Botão 1</button>
                    <button class="menu-button">Botão 2</button>
                    <button class="menu-button">Botão 3</button>
                    <button class="menu-button">Botão 4</button>
                </div>

                <div class="content">
                    <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Produto 1</td>
                                <td>1212120</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Produto 2</td>
                                <td>15087</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </body>
        </div>
        </div>
    );
}