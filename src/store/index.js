import loginSrore from './login';
import registrationSrore from './registration';
import forgotPassStore from './forgotPass';
import smsPasswordStore from './smsPassword';

import * as login from '@/api/login';


class RootStore{
    constructor(){
      this.api = {
        login
      };
        this.login = new loginSrore(this);
        this.registration = new registrationSrore(this);
        this.forgotPass = new forgotPassStore(this);
        this.smsPassword = new smsPasswordStore(this);
    }
}

export default new RootStore();
