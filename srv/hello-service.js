const cds = require( '@sap/cds' ) ;

class HelloService extends cds.ApplicationService
{

    sayHello(name)
    {
    //return `Welcome to the learning series of CAPM ${name}`;
    return "Welcome to the learning series of CAPM  "+name;
    }
    
}
module.exports=HelloService;