  import React from 'react';

 
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';



  export default function Home() {
    return (

      <>
      <div className='content '>
       
       <Content1/>
       </div>


      <div className='content2 bg-cover bg-center pb-0 sm:pb-[1500px]"'>
        <Content2/>
      </div>

      <div className='content3 '>
        <Content3/>
      </div>

      <div className='content '>
        <Content4/>
      </div>

      <div className='content5'>
        <Content5/>
      </div>

      




   

    </>
    );
  }
