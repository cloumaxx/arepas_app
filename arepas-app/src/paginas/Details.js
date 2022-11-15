import { React, Component } from "react";
import { Button} from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBBtn,
} from "mdb-react-ui-kit";


export class Details extends Component {

  state = {
    isLoading: true,
    users: [],
    error: null
  };

  getFetchUsers() {
    this.setState({
      loading: true
    }, () => {
      fetch("http://localhost:3000/arepas").then(res => res.json()).then(result => this.setState({
        loading: false,
        users: result
      })).catch(console.log);
    });
  }

  componentDidMount() {
    this.getFetchUsers();
  }

  render() {
    return (
      <section className="vh-100 gradient-custom-2">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10" lg="8" xl="6">
              <MDBCard
                className="card-stepper"
                style={{ borderRadius: "16px" }}
              >
              
                <MDBCardHeader className="p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                    
                    <button type="button" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-arrow-left-square-fill" 
                viewBox="0 0 16 16"
                href="http://localhost:3001/">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"></path>
</svg>
                    </button>

                    </div>
                  </div>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex flex-row mb-4 pb-2">
                    <div className="flex-fill">
                      <MDBTypography tag="h5" className="bold"> (Name)Arepa con Carne</MDBTypography>
                      <p className="text-muted"> (Description)Arepa acompañada con chorizo de res</p>
                      <p className="text-muted">
                        Descripsion:{" "}
                        <span className="text-body">(Historia) Esta deliciosa arepa viene acompañada de un exquisito chorizo de su res</span>
                      </p>
                      <MDBTypography tag="h4" className="mb-3">
                        {" "}
                        $ 2500 (precio){" "}
                      </MDBTypography>
                    </div>
                    <div>
                      <MDBCardImage
                        fluid
                        className="align-self-center rounded"
                        src="https://raw.githubusercontent.com/Jucer74/WebDevelopment/main/Proyecto/ImageProducts/Arepa-Con-Chorizo.jpg"
                        width="450"
                        height="500"
                      />
                    </div>
                  </div>
                  <div>
                  <Button variant="outline-success">Ordenar</Button>
                  </div>
                </MDBCardBody>
                <MDBCardFooter className="p-4">

                  {/* <Button className="left" variant="outline-success" onClick={() => openCloseModalCreate()}>Ordenar por ${usr.Price}!!</Button> */}
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}