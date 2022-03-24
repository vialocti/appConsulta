import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../css/FindPage.css'
//import FindPageOne from './FindPageOne'
//import HomePage from './HomePage'
//import PageHconsulta from './PageHconsulta'
import ModalVistaHCCard from '../components/ModalVistaHCCard'



const FindPage = () => {
const uri = 'http://200.12.136.64:4000/hcd/'
//const uri = 'http://localhost:4000/hcd/'

//const [pagem, setPgem] = useState(0)
const [ruta, setRuta] = useState(`${uri}consultamv/1/002/3`)

//const [urlsec, setUrlsec] = useState('')
const [materiasvg, setMateriasvg] = useState([])
const [matdocentes, setMatdocentes] = useState([])
const [mat, setMat] = useState('ANALISIS')

useEffect(()=>{
   //setPgem(1) 
   //console.log(matdocentes.length)
   const getMaterias = async ()=>{
        try{
            const res = await axios.get(ruta)
            setMateriasvg(res.data)
        }catch(error){
            console.log(error)
        }
   } 
   

   getMaterias()

},[ruta])


const actualizarhoraconsu = async (urlhd) =>{
    let urld = `${uri}consultam/${urlhd}`
    //console.log(urld)
    try{
    const res = await axios.get(urld)
    setMatdocentes(res.data)
    }catch(error){
        console.log(error)
    }

} 

const VerDocentes = ()=>{
    setMatdocentes([])
    let sede= document.getElementById('sede').value
    let carrera = document.getElementById('carrera').value
    let plan = document.getElementById('plan').value
   
    let urlhd = sede +'/' +carrera + "/" + plan + "/" + document.getElementById('mat').value 
    //console.log(urlhd)
    try{

        actualizarhoraconsu(urlhd)
    
    
    }catch(error){
        console.log(error)
    }
    
    
}

const mostrarPage = ()=>{
    //setPgem(0)
    setMatdocentes([])
    let sede= document.getElementById('sede').value
    let carrera = document.getElementById('carrera').value
    let plan = document.getElementById('plan').value

    let url = uri + 'consultamv/' + sede + '/' + carrera + '/' + plan
    //setUrlsec(sede + '/' + carrera + '/' + plan)
    setRuta(url)
   
}





    return (
     <>
     <div className="row">
         <div className="col-md-8 offset-2">
            <h4 className="display-6">Horario de Consulta Docentes FCE</h4>
         </div>
       
     </div>   
    <div className="row">
       
        <div className="col-md-3 offset-1">
            <select className="form-select" name="sede" id="sede" onChange={mostrarPage}>
                <option value="1"> Sede Mendoza</option>
                <option value="2"> Sede San Rafael</option>
            </select>
        </div>
        <div className="col-md-4">
            <select className="form-select" name="carrera" id="carrera" onChange={mostrarPage}>
                <option value="002">Contador Público Nacional</option>
                <option value="003">Licenciatura en Administración</option>
                <option value="004">Licenciatura en Economía</option>
                <option value="006">LNRG</option>
                <option value="007">Licenciatura en Logistica</option>
                <option value="008">Contador Público</option>
                
            </select>
        </div>
        <div className="col-md-2">
            <select className="form-select" name="plan" id="plan" onChange={mostrarPage}>
                <option value="3">Plan 98</option>
                <option value="4">Plan 19</option>
            </select>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-4 offset-1">
            <select className="form-select" name="mat" id="mat" onChange={VerDocentes}>
                {
                    materiasvg.map((ele,ind)=>
                        <option key={ind} value={ele.id_mat}>{ele.id_mat} - {ele.materia}</option>
                    )}
            </select>
        </div>  
        <div className="col-md-2 offset-2">
            <button className="btn btn-primary" onClick={VerDocentes}>Buscar</button>
        </div>
    </div>
    
    
    <hr/>
    <br/>
    <div>
     { matdocentes.length > 0 ? <ModalVistaHCCard matdocentes={matdocentes} mat={mat}/>:null}
        
    </div>
     </>
  )
}

export default FindPage