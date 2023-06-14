export default function Meio(){
return(
        <div id="lista">

            <div className="all">
                <div>
                    <input type="text"  placeholder="Pesquisar"/>
                </div> 

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Nome</th>
                            <th>Raça</th>
                            <th>Idade</th>
                            <th>T Sagrados</th>
                        </tr>
                    </thead>
                    <tbody id='listaRegistrosBody'></tbody>
                </table>

                <div>
                    <button>Novo Usuário</button>
                </div>

                <form id="cadastroRegistro">
                    <div>
                        <div>ID</div>
                        <div>
                            <input type="number" readOnly id="id"/>
                        </div>
                    </div>

                    <div>
                        <div>Email</div>
                        <div>
                            <input required type="email" id="email"/>
                        </div>
                    </div>

                    <div>
                        <div>Senha</div>
                        <div>
                            <input required type="password" id="senha" />
                        </div>
                    </div>

                    <div>
                        <div>Nome</div>
                        <div>
                            <input required id="nome" />
                        </div>
                    </div>

                    <div>
                        <div>Raça</div>
                        <div>
                            <input required id="raça" />
                        </div>
                    </div>

                    <div>
                        <div>Idade</div>
                        <div>
                            <input required type="number" id="idade"/>
                        </div>
                    </div>
                    
                    <div>
                        <div>T Sagrado</div>
                        <div>
                            <input required id="T sagrado" />
                        </div>
                    </div>

                    <div>
                        <button>Salvar</button>
                        <button>Cancelar</button>
                    </div>
                </form>

            </div>
        </div>


    
    


        



    )
}