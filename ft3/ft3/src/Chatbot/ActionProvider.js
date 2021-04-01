class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet = () => {
        const message = this.createChatBotMessage("Que puis-je faire pour régler votre problème ? Comment faire un virement ? Comment ajouter un bénéficiare ? Qu'est-ce qu'un virement immédiat et permanent ? Je n'ai pas recu mon virement");
        this.addMessageToState(message);
    }

    greet2 = () => {
        const message = this.createChatBotMessage("Bien reçu Claire ! Pour faire un virement, il te suffit de cliquer sur le lien ci-dessous et de suivre les étapes. Si tu as encore des difficultés n'hésite pas à revenir :)");
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    };
  }
  
  export default ActionProvider;