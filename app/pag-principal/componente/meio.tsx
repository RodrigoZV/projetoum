import { useState } from 'react';
import { styled } from 'styled-components';

export default function Meio(){

    const [visualize, setVisualize] = useState(false)

    function showForm(){
        setVisualize(true)

    }

return(
        <div id="lista">

            <div className="all">
                <div>
                    <Mudar2 type="text"  placeholder="Pesquisar"/>
                </div> 

                
                    <Tabela>
                        <thead>
                            <tr>
                                <Barras>Id</Barras>
                                <Barras>Email</Barras>
                                <Barras>Senha</Barras>
                                <Barras>Nome</Barras>
                                <Barras>Raça</Barras>
                                <Barras>Idade</Barras>
                                <Barras>T Sagrados</Barras>
                            </tr>
                        </thead>
                            <tbody id='listaRegistrosBody'></tbody>
                    </Tabela> 
                
                <div>
                    <Butao2 onClick={() => showForm()}>Novo Usuário</Butao2>
                </div>

                {visualize?

                <form id="cadastroRegistro">
                <div>
                    <div>ID</div>
                    <div>
                        <Mudar type="number" readOnly id="id">

                        </Mudar>
                    </div>
                </div>

                <div>
                    <div>Email</div>
                    <div>
                        <Mudar required type="email" id="email" >
                            
                        </Mudar>
                    </div>
                </div>

                <div>
                    <div>Senha</div>
                    <div>
                        <Mudar required type="password" id="senha">
                        
                        </Mudar> 
                    </div>
                </div>

                <div>
                    <div>Nome</div>
                    <div>
                        <Mudar required id="nome">

                        </Mudar>
            
                    </div>
                </div>

                <div>
                    <div>Raça</div>
                    <div>
                        <Mudar required id="raça">

                        </Mudar>
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
                :<></>}

            </div>
        </div>
    )
}
const Tabela = styled.table`
    display: flex;
    margin-top: 5vh;
    justify-content: center;
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    font-size: 20px;
`

const Barras = styled.th`
    color: white;
    font-size: 18px;
    border: solid 1px #f8f7f7;
    border-radius: 10px;
    width: 20vw;
    padding: 10px;
    background: transparent;
    box-shadow: 0 8px 32px 0 rgba(5, 5, 5, 0.37);
    backdrop-filter: blur(4px);
`

const Mudar = styled.input`

 color: #ffffff;
 border: 2px solid #000000;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
 max-width: 190px;
 margin: 10px;


&:active {
 box-shadow: 2px 2px 15px #000000 inset;
}
`
const Mudar2 = styled.input`
 color: #ffffff;
 border: 2px solid #000000;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
 max-width: 190px;
 margin: 10px;


&:active {
 box-shadow: 2px 2px 15px #ffffff inset;
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
    transform: translateY(-4px);
}
    &:active {
      transform: translateY(-1px);
}
`
