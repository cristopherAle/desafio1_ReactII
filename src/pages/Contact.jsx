import React from 'react'
import Footer from './Footer';
import '../assets/css/contact.css'

const Contact = () => {
  return (
    <div>

     
        <h1 className='home-title1'>Cuentanos, ¿en que te podemos ayudar?</h1> 

        {/* <div className="ms-5 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email de Contacto</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </input>
        </div>
        <div className="ms-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> */}

< hr/>
        <div classname='formulario d-grid gap-2 col-2 mx-auto'>
            <div className='form_email ms-5'>
                <label className='etiquetas'>Email de Contacto</label>
                <input type="email" className="correo" />
            </div>
            <div className='form_email ms-5'>
                <label className='etiquetas'>Descripción</label>
                <textarea className='textarea-contacto' rows="3"></textarea>
            </div>
        </div>
        <div className="ms-5">
            <button className="btn btn-primary mt-3">Enviar</button>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Contact
