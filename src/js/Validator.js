export default class Validator {
  validateUsername (name){
    const testLatin = /[a-zA-Z]/;
    const testSimvol = /-|_/;
    const testNumber = /(?!.*\d{3})/;
    


    return testLatin && testNumber && testSimvol;
  }
}