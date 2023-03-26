import React from 'react';
import '../assets/css/home.css'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        < hr/>
            <div className='home-title'><h2>Bienvenidos a Happy Cake</h2></div>
        < hr/>
        <div className="contenedor p-4 grid gap-3">
            <div className="card ms-3 g-col-6">
                <img src="https://cdn.pixabay.com/photo/2020/05/01/09/13/cupcakes-5116009_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Cup Cake Chocolate</h5>
                    <p className="card-text">$ 1.490</p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2016/10/11/14/15/paper-1731726_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Cup Cake Frambuesa</h5>
                    <p className="card-text">$ 1.690</p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2018/12/06/18/59/cake-3860391_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Torta Vainilla Cerezas</h5>
                    <p className="card-text">$ 10.900</p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2016/10/13/18/28/strudel-1738462_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Strudel de Manzana</h5>
                    <p className="card-text">$ 1.990</p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2019/03/10/08/54/party-4045697_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Muffins Variedades</h5>
                    <p className="card-text">$ 1.350</p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2019/10/04/12/16/coffe-4525484_1280.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Cafe Variedades</h5>
                    <p className="card-text">$ 2.300</p>
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home
