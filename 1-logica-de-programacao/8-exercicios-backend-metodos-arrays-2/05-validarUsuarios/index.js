const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

const filtrarUsuarios = usuarios.filter(usuario => usuario.idade >= 18 && usuario.idade <= 65);
const validarUsuarios = filtrarUsuarios.every(usuario => usuario.habilitado === true);

if (validarUsuarios) {
  console.log("Todos passaram no teste!")
} else {
  console.log("Todos precisam estar habilitados!")
};