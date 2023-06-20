import { styled } from 'styled-components';

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
                            <Mudar required type="number" id="idade">
                            
                            </Mudar>
                        </div>
                    </div>
                    
                    <div>
                        <div>T Sagrado</div>
                        <div>
                            <Mudar required id="T sagrado">
                                 
                            </Mudar>
                        </div>
                    </div>

                    <div>
                    <Butao2>
                        Salvar
                    </Butao2>
                    <Butao2>
                        Cancelar
                    </Butao2>
                    </div>
                    
                </form>

            </div>
        </div>
    )
}


const Mudar = styled.input`

 color: #8707ff;
 border: 2px solid #8707ff;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
 max-width: 190px;


&:active {
 box-shadow: 2px 2px 15px #8707ff inset;
}
`


const Butao2 = styled.button`
  margin: 20px;
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover{
    background-color: #000000;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
}
    transform: translateY(-4px);
    &:active {
      transform: translateY(-1px);
}
`
