import './Login.css'
import downloadImg from '../assets/dowload.png'

function Login() {
  return (
    <main className="container">
      <section className="left">
        <img src={downloadImg} alt="Fortnite splash" />
      </section>

      <section className="right">
        <div className="battle">
          <div className="logo">Fortnite</div>
          <h2>Login</h2>
          <form>
            <div className="field-group">
              <label htmlFor="player">Jogador</label>
              <input id="player" type="text" placeholder="Digite seu nick..." />
            </div>

            <div className="field-group">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" placeholder="Digite sua senha..." />
            </div>

            <button type="submit">Entrar</button>
            <a href="#">Esqueci minha senha</a>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
