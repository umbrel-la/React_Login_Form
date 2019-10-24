import {observable, computed, action} from 'mobx';

export default class{
    @observable formDataLogin = {
      email: {
          value: '',
          label: 'Логин',
          validator: val => /^.+@.+$/.test(val),
          errorText: 'Адрес электронной почты должен содержать символ @',
          valid: null
      },
        password: {
            value: '',
            label: 'Пароль',
            validator: val => /^[aA-zZ ]{6,}$/.test(val),
            errorText: 'Латинские символы, не менее шести',
            valid: null,
            lastOrderCacheTotal: 0
        }
    }

    constructor(rootStore){
        this.api = rootStore.api.login;
        this.rootStore = rootStore;
    }

    @computed get formValid(){
        return Object.values(this.formDataLogin).every(field => field.valid);
    }

    @computed get name(){
      return this.formDataLogin.name.value;
    }

    @computed  get getLoginData(){
      let email = this.formDataLogin.email.value;
      let password = this.formDataLogin.password.value;
      this.api.add(email, password).then((data) => {
        console.log(data + "запрос за сервер логин и пароль передан");
      });
    }


    @computed get data(){
        let data = {};

        for(let name in this.formDataLogin){
            data[name] = this.formDataLogin[name].value;
        }

        return data;
    }

    @action change(key, value){
        let field = this.formDataLogin[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
}
