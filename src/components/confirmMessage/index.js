import React from 'react';
import withStore from '@/hocs/withStore';
import {Form, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routesMap } from '@/routes';


 class ConfirmMessage extends React.Component {

   confirmMessage = () => this.props.history.push(routesMap.mainPage);



  render(){
    let smsPasswordModel = this.props.stores.smsPassword;
    let formFields = [];

    for(let name in smsPasswordModel.smsPassword){
        let field = smsPasswordModel.smsPassword[name];


        formFields.push(
            <Form.Group key={name} controlId={'order-form-' + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                    type="text"
                    value={field.value}
                    onChange={(e) => smsPasswordModel.change(name, e.target.value)}
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
        <div className="card">
          <div className="card-header">
              <h5>Подтверждение входа SMS-паролем</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Вам отправлен SMS-пароль.</p>
              <div className="d-flex justify-content-around">
                <div className="form-group col-7">
                  {formFields}
                </div>
                <div className="col-5 mt-2 align-self-center">
                  <button className="btn btn-primary mb-2"
                          onClick={this.confirmMessage}
                          disabled={!smsPasswordModel.formValid}
                          >
                            Подтвердить
                  </button>
                </div>
            </div>
          </div>
        </div>
      );

  }
}

export default withStore(ConfirmMessage);
