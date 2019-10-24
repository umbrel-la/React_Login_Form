import React from 'react';
import styles from './registration.module.sass';
import withStore from '@/hocs/withStore';
import {Form, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routesMap } from '@/routes';


 class Registration extends React.Component {

  goToShowPage = () => this.props.history.push(routesMap.mainPage);
  
  render(){
    let registrationModel = this.props.stores.registration;
    let formFields = [];

    for(let name in registrationModel.registrationData){
        let field = registrationModel.registrationData[name];


        formFields.push(
            <Form.Group key={name} controlId={'order-form-' + name} className={styles.formField}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                    type="text"
                    value={field.value}
                    onChange={(e) => registrationModel.change(name, e.target.value)}
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
        <h4>Регистрация</h4>
        <Form>
            {formFields}
        </Form>
        <div className="d-flex justify-content-center">
          <Button className="btn btn-primary"
                  onClick={this.goToShowPage}
                  disabled={!registrationModel.formValid}>
              Зарегистрироваться
          </Button>
        </div>
        <div className="row d-flex justify-content-center mb-2">
          <div>
            <Link to={routesMap.home}>Назад</Link> <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStore(Registration);
