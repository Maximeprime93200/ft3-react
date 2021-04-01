class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase();

      if (lowercase.includes("virement") && lowercase.includes("faire")){
        this.actionProvider.greet2();
      }
      else if (lowercase.includes("virement")){
        this.actionProvider.greet();
      } 
    }
  }
  
  export default MessageParser;