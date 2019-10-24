import React from 'react';
import withStore from '@/hocs/withStore';
import {Form, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routesMap } from '@/routes';


 class ForgotPassword extends React.Component {

  state = {
    isMessageSend: false
  }

  changeState = () => this.setState({ isMessageSend: true });

  render(){
    let forgotPassModel = this.props.stores.forgotPass;
    let formFields = [];

    for(let name in forgotPassModel.forgotDataForm){
        let field = forgotPassModel.forgotDataForm[name];


        formFields.push(
            <Form.Group key={name} controlId={'order-form-' + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                    type="text"
                    value={field.value}
                    onChange={(e) => forgotPassModel.change(name, e.target.value)}
                />
                {field.valid === null || field.valid ? '' :
                    <Form.Text className="text-muted">
                        {field.errorText}
                    </Form.Text>
                }
            </Form.Group>
        );
    }
    if(this.state.isMessageSend){
      return(
        <div className="col">
          <div class="alert alert-success" role="alert">
              Сообщение успешно отправлено <Link to={routesMap.home} className="alert-link">вернуться на главную</Link>.
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="container-fluid">
          <h4>Восстановление пароля</h4>
          <p>
             Введи почту, указанную тобой на Web App. <br/>
             На неё мы вышлем инструкции по восстановлению пароля
          </p>
          <Form>
              {formFields}
          </Form>
          <Button variant="primary"
                  onClick={this.changeState}
                  disabled={!forgotPassModel.formValid}>
              Восстановить
          </Button>
          <div className="row">
            <div className="col-4 mt-2 d-flex justify-content-center">
              <Link to={routesMap.home}>Назад</Link> <br/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withStore(ForgotPassword);
