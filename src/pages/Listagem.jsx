import './Listagem.css'

function Listagem() {
  return (
    <>
      <main className="playstation-screen">
        <h1>Fortnite</h1>
        <table>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Tipo</td>
              <td>Jogadores</td>
            </tr>
            <tr>
              <td>Brazão</td>
              <td>brazão@fortnite.com</td>
              <td>Assalto</td>
              <td>4</td>
            </tr>
            <tr>
              <td>D maior</td>
              <td>dmaior@epicgames.com</td>
              <td>Solo</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Pedro</td>
              <td>pedro@fn.com</td>
              <td>Escudeira</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Listagem
