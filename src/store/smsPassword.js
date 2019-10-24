import {observable, computed, action} from 'mobx';

export default class{
    @observable smsPassword = {
      phone: {
          value: '',
          label: 'Смс пароль',
          validator: val => /^[0-9]{4,8}$/.test(val),
          errorText: 'От 4 до 8 цифр',
          valid: null
      }
    }

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @computed get formValid(){
        return Object.values(this.smsPassword).every(field => field.valid);
    }

    @computed get name(){
      return this.smsPassword.name.value;
    }

    @computed get data(){
        let data = {};

        for(let name in this.smsPassword){
            data[name] = this.smsPassword[name].value;
        }

        return data;
    }

    @action change(key, value){
        let field = this.smsPassword[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
}
