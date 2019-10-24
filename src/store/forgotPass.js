import {observable, computed, action} from 'mobx';

export default class{
    @observable forgotDataForm = {
      email: {
          value: '',
          label: 'email',
          validator: val => /^.+@.+$/.test(val),
          errorText: 'Адрес электронной почты должен содержать символ @',
          valid: null
      }
    }

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @computed get formValid(){
        return Object.values(this.forgotDataForm).every(field => field.valid);
    }

    @computed get name(){
      return this.forgotDataForm.name.value;
    }

    @computed get data(){
        let data = {};

        for(let name in this.forgotDataForm){
            data[name] = this.forgotDataForm[name].value;
        }

        return data;
    }

    @action change(key, value){
        let field = this.forgotDataForm[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
}
