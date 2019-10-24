import React from 'react';
import withStore from '@/hocs/withStore';
import { routesMap } from '@/routes';

class MainPage extends React.Component{
  render(){
    return(
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Поздравляем!</div>
        <div className="card-body">
          <h5 className="card-title">Вы вошли в систему</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, maxime tempora id ullam quo, consequuntur nulla cumque possimus voluptate officiis accusamus magnam exercitationem? Totam nisi harum quidem molestias, velit iste!</p>
        </div>
      </div>
    );
  }
}

export default withStore(MainPage);
