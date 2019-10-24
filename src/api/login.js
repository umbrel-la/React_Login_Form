import makeRequest from './helpers/makeRequest';


function add(email, password){
  return makeRequest(`cart/add.php?token=${email}&id=${password}`);
}

export { add };
