export default class Validator {
  validateUsername (name){ 
    const testMix = /^[^0-9_-](-|_|[a-z|A-Z])*(?:(?!\d{4}).)*[^0-9_-]$/;
        
    return testMix.test(name);
  }
}
