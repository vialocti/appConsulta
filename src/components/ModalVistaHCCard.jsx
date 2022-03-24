import React, {useEffect,useState} from 'react'
//import './ModalVistahc.css'
const ModalVistaHCCard = ({matdocentes,mat}) => {

    const [horarios, sethorarios] = useState([])
    const [indice, setIndice] = useState(0)
    
    useEffect(()=>{
        sethorarios(matdocentes)
        
    },[horarios,indice])


    const mostrarh = (indice) =>{
      setIndice(indice)

    }
    
    
   
      
   

    const procesa= (lugar)=>{
      var arraycadena = lugar.split(' ');

      for (var i=0; i < arraycadena.length; i++) {
        if (arraycadena[i].indexOf('http')>0){
          
        }
        console.log(arraycadena[i] );
     }
      let p1=lugar.indexOf('http')
      let up = lugar.length -1

      return  up
    }

  return (
    
    <>
    
    
    
  <div>
       
    <div>
    <h4>Actividad: {mat}</h4>
      
    <div className="row m-1">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              
              <tr>
                <td></td>
                <td> Lunes </td>
                <td> Martes</td>
                <td> Miercoles </td>
                <td> Jueves </td>
                <td> Viernes </td>
              </tr>
            </thead>
            <tbody>
            {horarios.map ((ele,ind)=>(
              <>
              <tr key={ind}>
              <td> {ele.apellido} </td> <td>{ele.lugar_c}{procesa(ele.lugar_c)}</td>
              </tr>
             
              <tr>
                <td></td>
                <td>{ele.lunes}</td>
                <td>{ele.martes}</td>
                <td>{ele.miercoles}</td>
                <td>{ele.jueves}</td>
                <td>{ele.viernes}</td>
              </tr>
              </>      
            ))}
           </tbody>
          </table>
        </div>
      
       
</div>    
        
      
      
</div>
       
</div>
    
    

    </>
  )
}

export default ModalVistaHCCard
