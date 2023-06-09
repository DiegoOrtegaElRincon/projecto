import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://es-es.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.es/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://github.com/DiegoOrtegaElRincon/projecto' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Woohojin Coaching
              </h6>
              <p>
                Somos una asociación de coaches enfocados al gaming que buscamos llevar tu gameplay a un nuevo nivel.
                Desde rutinas de AIM hasta VOD Reviews personalizadas, buscamos hacerte cada dia un mejor jugador.
                Bienvenido a WCoaching.
              </p>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/vods' className='text-reset'>
                  VODs
                </a>
              </p>
              <p>
                <a href='/reviews' className='text-reset'>
                  Reviews
                </a>
              </p>
              <p>
                <a href='/forum' className='text-reset'>
                  Forum
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='/news' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='/rss/RSS.xml' className='text-reset'>
                  RSS
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Las Palmas de Gran Canaria, Telde, España
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                diegoalejandroortegamanzano@alumnoieselrincon.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 99 999 999 99
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 99 999 999 99
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta:
        <a className='text-reset fw-bold' href='/'>
          Coach.me
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer