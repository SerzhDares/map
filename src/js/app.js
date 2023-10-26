export default class ErrorRepository {
    
    constructor() {
        this.errorsMap = new Map();
    }
    
    translate(code) {
        if(this.errorsMap.has(code)) {
            return this.errorsMap.get(code);
        } else {
            return 'Unknown error';
        }
    }
}