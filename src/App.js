import './micss.css';
//variables let, se puede reasignar, 
// variables string si se pone comillas '' o "" es un cadena y si no lleva eso es numerico
// variables num es tambien numerico

function App() {
  let nombre="jab";
  let caja=<div>nombre</div>

  console.log(nombre)

//arreglos, comienza de 0,1,2,3,4,5

const tecnologias= [20, 30, 15, 'reac']
console.log(tecnologias)
console.log(tecnologias[3])

//arreglos 
  
////////////// HTML
  return (
    <div className="fondo">
      <h1>Proyecto</h1>
      <div>{caja}</div>
      <input value={nombre}/>
    </div>
  );
}

export default App;
