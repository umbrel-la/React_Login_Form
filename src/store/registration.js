import {observable, computed, action} from 'mobx';

export default class{
    @observable registrationData = {
      fitstName: {
          value: '',
          label: 'Имя',
          validator: val => /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(val),
          errorText: 'Поле может содержать только буквы русского или латинского алфавитов',
          valid: null
      },
        lastName: {
            value: '',
            label: 'Фамилия',
            validator: val => /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(val),
            errorText: 'Поле может содержать только буквы русского или латинского алфавитов',
            valid: null,
            lastOrderCacheTotal: 0
        },
        email: {
            value: '',
            label: 'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Проверьте правильность введенного адреса электронной почты',
            valid: null
        },
        phone: {
            value: '',
            label: 'Номер телефона',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'От 7 до 15 цифр',
            valid: null
        }
    }

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @computed get formValid(){
        return Object.values(this.registrationData).every(field => field.valid);
    }

    @computed get name(){
      return this.registrationData.name.value;
    }

    @computed get data(){
        let data = {};

        for(let name in this.registrationData){
            data[name] = this.registrationData[name].value;
        }

        return data;
    }

    @action change(key, value){
        let field = this.registrationData[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
}
