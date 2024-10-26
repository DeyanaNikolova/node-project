interface Greeting {
  sayHello(name: string): void;
}

class GreetingImpl implements Greeting{
    sayHello(name: string): void {
        console.log(this.getMessage(name));   
    }
   private getMessage(name: string): string{
    return `Hello ${name}`
    }
}

const greeting1 = new GreetingImpl();

greeting1.sayHello('Maria');
