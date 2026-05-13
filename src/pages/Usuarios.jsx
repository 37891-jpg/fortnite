import './Usuarios.css'

function Usuarios() {
  return (
    <main className="login">
      <form className="borda">
        <h1>Cadastro</h1>
        <input className="nome" type="text" placeholder="Nome" />
        <input className="email" type="email" placeholder="Email" />
        <input className="senha1" type="password" placeholder="Senha" />
        <input className="senha2" type="password" placeholder="Confirmar senha" />
        <button className="entrar" type="submit">Criar conta</button>
      </form>
    </main>
  )
}

export default Usuarios
