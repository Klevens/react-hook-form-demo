function App() {
  return (
    <form>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" />

      {/* Correo*/}
      <label htmlFor="email">email</label>
      <input type="email" />

      {/* Contraseña */}
      <label htmlFor="password">Password</label>
      <input type="password" />

      {/* Confirmar Contraseña */}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input type="password" />

      {/* Fecha de nacimiento*/}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input type="Date" />

      {/* Pais */}
      <label htmlFor="pais">País</label>
      <select name="" id="">
        <option value="rd">República Dominicana</option>
        <option value="mx">México</option>
        <option value="ar">Argentina</option>
        <option value="co">Colombia</option>
      </select>

      {/* Files */}
      <label htmlFor="file">Foto de perfil</label>
      <input type="File" />

      {/* Terminos*/}
      <label htmlFor="terminos">Acepto términos y condiciones </label>
      <input type="checkbox" />

      <button>Enviar</button>
    </form>
  );
}

export default App;
