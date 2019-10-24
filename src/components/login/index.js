import React from 'react';
import withStore from '@/hocs/withStore';
import {Form, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routesMap } from '@/routes';


 class Login extends React.Component {

   confirm = () => {
     console.log("попали в confirm");
     let loginModel = this.props.stores.login;
     loginModel.getLoginData;
     this.props.history.push(routesMap.confirmMessage);
   }

  render(){
    let loginModel = this.props.stores.login;
    let formFields = [];

    for(let name in loginModel.formDataLogin){
        let field = loginModel.formDataLogin[name];


        formFields.push(
            <Form.Group key={name} controlId={'order-form-' + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                    type="text"
                    value={field.value}
                    onChange={(e) => loginModel.change(name, e.target.value)}
                />

                {field.valid === null || field.valid ? '' :
                    <Form.Text className="text-muted">
                        {field.errorText}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
      return(
        <div className="container-fluid">
          <h2>Web App</h2>
          <h4>Войдите в свой профиль</h4>
          <Form>
              {formFields}
          <div className="d-flex justify-content-center">
          <Button variant="primary"
                  className="col"
                  disabled={!loginModel.formValid}
                  onClick={this.confirm}
                  >
              Войти
          </Button>
          </div>
          </Form>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Link className="btn btn-danger mt-2 mr-2" to={routesMap.forgotPass}>Я забыл пароль</Link> <br/>
              <Link className="btn btn-secondary mt-2 mr-2" to={routesMap.registration}>Регистрация</Link>
            </div>
          </div>
        </div>
      );
  }
}

export default withStore(Login);
