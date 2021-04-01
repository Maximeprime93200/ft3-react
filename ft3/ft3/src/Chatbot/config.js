import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Louky",

    initialMessages: [
        createChatBotMessage("Bonjour Claire, que puis-je faire pour t'aider ?"),
        createChatBotMessage("Virement ?" , {delay : 500}),
        createChatBotMessage("Dépenses ?" , {delay : 750}),
        createChatBotMessage("Carte bancaire ?" , {delay : 1000}),
        createChatBotMessage("Prendre rendez-vous ?" , {delay : 1250}),
    ],

    customComponents: {
        // Replaces the default header
       header: () => <div style={{ backgroundColor: "white", padding: "5px", borderRadius: "3px", color: "purple", textAlign: "center", width: "100%",}}>Louky</div>
    },

}

export default config