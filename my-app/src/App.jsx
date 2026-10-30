import { useEffect, useState } from 'react';
import ProdutoCard from "./components/ProdutoCard.jsx"
import "./App.css"

const API_URL = 'https://crudcrud.com/api/538862ed350f4682855c75367b356e33';

function App() {

  const [produtos, setProdutos] = useState([]);
  const [produtoId, setProdutoId] = useState(1);
  const [nomes, setNomes] = useState('');
  const [precos, setPrecos] = useState('');
  const [imagens, setImagens] = useState('');
  const [descricoes, setDescricoes] = useState('');
  const [mensagem, setMensagem] = useState('Carregando...');


  useEffect(() => {
    const idTimeout = setTimeout(() => {
      const produtoExemplo =
      {
        id: produtoId,
        nome: "Camisa de Exemplo",
        preco: 10.00,
        descricao: "Camisa branca de exemplo",
        imagem: "https://images.tcdn.com.br/img/img_prod/275189/180_camisa_branca_100_poliester_30_1_tamanho_m_unidade_414_1_20191216172157.jpg"
      }

      setProdutos([...produtos, produtoExemplo])
      setProdutoId(produtoId + 1)

      setMensagem('');
    }, 5000);

    return () => clearTimeout(idTimeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nomes.trim() === '' || !precos || descricoes.trim() === '')
      return;

    const novoProduto = {
      nome: nomes.trim(),
      preco: Number(precos),
      imagem: imagens,
      descricao: descricoes.trim(),
      id: produtoId
    }
    setProdutos([...produtos, novoProduto]);
    setProdutoId(produtoId + 1);

    setNomes('');
    setPrecos('');
    setImagens('');
    setDescricoes('');

  }

  return (
    <main>
      <header className="cabecalho">
        <h1>Lista de Produtos</h1>
      </header>

      <section className="adicionarProduto">
        <div className="titulo">
        <h3>Adicionar Produto</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formulario">

            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" required placeholder="Digite o nome do Produto"
              value={nomes}
              onChange={(e) => setNomes(e.target.value)} />

            <label htmlFor="preco">Preço:</label>
            <input type="number" id="preco" required placeholder="Digite o valor do Produto"
              value={precos}
              onChange={(e) => setPrecos(e.target.value)} />

            <label htmlFor="imagem">Imagem:</label>
            <input type="text" id="imagem" placeholder="Digite o URL da imagem do Produto"
              value={imagens}
              onChange={(e) => setImagens(e.target.value)} />

            <label htmlFor="descricao">Descrição:</label>
            <input type="text" id="descricao" required placeholder="Digite a descrição do Produto"
              value={descricoes}
              onChange={(e) => setDescricoes(e.target.value)} />

            <button className="botaoSubmit" type="submit" >Adicionar Produto</button>
          </div>
        </form>
      </section>

      <section className="listaProdutos">
        <div className="titulo">
        <h3>
          Lista de Produtos
        </h3>
        </div>
        <div className="mensagemCarregamento">
          <h1>{mensagem}</h1>
        </div>
        <div>
        <ul>
          {produtos.map(produto => <ProdutoCard key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} descricao={produto.descricao} />)}
        </ul>
        </div>
      </section>
    </main>
  )
}

export default App
