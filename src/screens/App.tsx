import { Header } from '../components';
import { Card } from '../components/Card';
import parralax from '../../public/parallax.jpg';
import { Footer } from '../components/Footer';
import { Services } from './Services';
import Testimonials from './Testimonials';
import { WhatsappChat } from '../components/WhatsappChat';
import mantenimiento from '../../public/mantenimiento.png';
import contabi from '../../public/contabilidad.png';
import seguridad from '../../public/seguridad.png';
import Carrousel from '../components/Carrousel';
import { Contact } from './Contact';

export const App = () => {
    return (
        <>
            <Header />
            <Carrousel />
            <Card
                photo={
                    'https://cdn.euroinnova.edu.es/img/subidasEditor/5-1622634541.webp'
                }
                photoDescription="edificios"
                description={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis modi minima, architecto aliquid, quam nisi neque a, ipsa quas magnam tempora beatae cum rerum error dolor deserunt officia porro.'
                }
            />
            <Contact />
            <section id="services" className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h3 className="mb-12 text-3xl font-semibold">
                        Nuestros Servicios
                    </h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Services
                            title={'Mantenimiento'}
                            description={
                                'Servicios de mantenimiento para todas las instalaciones.'
                            }
                            image={mantenimiento}
                        />
                        <Services
                            title={'Contabilidad'}
                            description={
                                'Gestión contable y financiera del consorcio'
                            }
                            image={contabi}
                        />
                        <Services
                            title={'Seguridad'}
                            description={
                                'Implementación de sistemas de seguridad y vigilancia.'
                            }
                            image={seguridad}
                        />
                    </div>
                </div>
            </section>
            <section
                className="relative flex h-96 items-center justify-center bg-cover bg-fixed bg-center text-center"
                style={{ backgroundImage: `url(${parralax})` }}>
                <article className="max-w-3xl px-4">
                    <h2 className="mb-4 text-2xl font-semibold text-white">
                        Administración de Consorcios
                    </h2>
                    <p className="font-medium text-white">
                        Un Consorcio de Propietarios, a diferencia de muchas de
                        las sociedades comerciales que puedan existir: anónima,
                        responsabilidad limitada, etc.; es una sociedad sin
                        fines de lucro que, a diferencia de las anteriores, no
                        fabrica ni vende ningún producto, pero cuenta con
                        equipos e instalaciones, contrata personal, nombra
                        representantes y contrae obligaciones con terceros con
                        el fin de brindar diversos servicios que son consumidos
                        por los propietarios.
                    </p>
                </article>
            </section>
            <Testimonials />
            <WhatsappChat />
            <Footer />
        </>
    );
};
