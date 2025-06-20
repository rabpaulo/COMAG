import{Container,Row,Col} from 'react-bootstrap';
import {default as JsonData} from "../data/data.json";


export function Testemunhos()
{
    return(
        <div id='testimonials'>
        <Container>
          <div className='section-title text-center'>
            <h2>O que nossos clientes dizem?</h2>
          </div>
          <Row>
            {JsonData
              ? JsonData.Testemunhos.map((d, i) => (
                  <Col md ={4} key={`${d.name}-${i}`}>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        <img src={d.img} alt='' />{' '}
                      </div>
                      <div className='testimonial-content'>
                        <p>"{d.text}"</p>
                        <div className='testimonial-meta'> - {d.name} </div>
                      </div>
                    </div>
                  </Col>
                ))
              : 'loading'}
          </Row>
        </Container>
      </div>
    )
}