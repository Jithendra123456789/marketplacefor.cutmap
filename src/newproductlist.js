
import React,{Component} from "react";
import Card from "./cardui";
import c1 from './cubook.jpg';
import c2 from './cuuniform.jpg';
import c3 from './cuimg4.jpg';
import c4 from './cuimg5.jpg';


function Cads(){
   const products=[{
    id: 1,
    name: 'collegeuniform',
    href: '#',
    price: '1000',
    imageSrc: c2,
    imageAlt: 'uniform image',
  },
  {
    id: 2,
    name: 'Books',
    href: '#',
    price: '300',
    imageSrc: c1,
    imageAlt: 'books',
  },
  {
    id: 3,
    name: 'Spects',
    href: '#',
    price: '500',
    imageSrc: c3,
    imageAlt: 'image4',
  },
  {
    id: 4,
    name: 'Evehicle',
    href: '#',
    price: '300',
    imageSrc: c4,
    imageAlt: 'image5',
  },

];
        return(
            <div className="container-fluid d-flex justify-content-center" id="courses_list">
                <div className="lg:flex sm:flex-row p-10">
                    
                        {products.map((product)=>
                        <div className="col-md-4">
                            
                       <Card imgsrc={product.imageSrc} title={product.name} info={product.imageAlt}/>
                       
                       <br></br>
                        </div>

                        )}
                        
                </div>


            </div>

        );
    }


export default Cads

