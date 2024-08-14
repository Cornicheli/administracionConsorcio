import whatsapp from '../../public/whatsapp.png';

export const WhatsappChat = () => {
    return (
        <a
            className="fixed bottom-4 right-4 z-10 h-16 w-16 transform rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            href="http://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat de WhatsApp"
            title="Contactar por WhatsApp">
            <img
                className="h-full w-full rounded-full"
                src={whatsapp}
                alt="WhatsApp"
            />
        </a>
    );
};
