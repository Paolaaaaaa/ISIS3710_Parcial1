
import './home.css'

import Card from './Card';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import Detail from './Detaill';
export default function Home(props){

    const [isbn, setIsbnToFind]= useState("");
      ;



      const handleCardClick = (id) => {
        setIsbnToFind(id);
      };

    const renderBooks = () => {
        const books_jx = props.books.map((book, index) => (
          <Col key={index} md={3}> {}
            <Card
              title={book.title}
              image={book.image}
              isbn={book.isbn}
              id_loc ={index}
              onClick={handleCardClick} 
            />
          </Col>
        ));
      
        const rows = [];
        for (let i = 0; i < books_jx.length; i += 4) {
          const row = books_jx.slice(i, i + 4);
          rows.push(
            <Row key={i}>
              {row}
            </Row>
          );
        }
      
        return rows;
      };



    return (
<section className="vh-100" >

    <div className='title'><h1>Books</h1></div>
    <h1>Books</h1>
    <div className="galerie_detail">
        

        <div className='galerie'>

        {renderBooks()}


        </div>

        {isbn!==""?

        <div className='detail'>

            <Detail bookDetail ={props.books[isbn]} editable = {props.editable}/>


        </div>:true }




    </div>
  </section>


    );
}