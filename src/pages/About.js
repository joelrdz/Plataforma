import figDesign from '../assets/figures/design.png'
import figDev from '../assets/figures/dev.png'


export default function AboutPage() {
  return (
    <div className="page-about">
      <h1 className="page-title">Nosotros</h1>
      <div>
        <div className="content-block">
          <div className="content-block__left">
            <h2>Servicios</h2>
          </div>
          <div className="content-block__right">
            <p>
              Consultora Integral de Negocios enfocada en la implementación de estrategias de negocios basadas en Tecnología, Diseño y Marketing.
            </p>
            <p>
              XIII CREATIVE AGENCY Nuestra cultura de trabajo busca desarrollar estrategias creativas que conectan los negocios con el estilo de vida y los valores de los consumidores.
              Analizamos factores políticos, ambientales, sociales, tecnológicos y económicos en busca de crear valor para la marca y el cliente.
              Contamos historias a través de las experiencias de nuestros clientes. Hacemos conexiones entre nuestros clientes y sus consumidores.
              Creamos experiencias con nuestros productos y servicios.
            </p>

            <div>
              <p>
                  Somos una agencia de consultoría integral con más de 5 años de experiencia oroginada en Monterrey, Nuevo León, México.
                </p>
                <br />
                <p>
                  Contamos con servivios en las ciudades de Monterrey, Guadalajara y la Ciudad de México.
                </p>
                <br />
                <p>
                  El desarrollo de cliente es el acto  de ganar terreno con los mismos, creando y avanzando hacia el punto en donde las necesidades del cliente encajan con lo que el negocio ofrece.
                </p>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="content-block__left">
            <h3>Diseño</h3>
          </div>
          <div className="content-block__right">
            <div className="design">
              <p>Desarrollo de marca y branding, diseño web y diseño de aplicaciones web y nativas.</p>
              <div className="center">
                <img src={figDesign} alt="Design" />
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="content-block__left">
            <h3>Desarrollo</h3>
          </div>
          <div className="content-block__right">
            <div className="development">
              <p>Desarrollo de software y aplicaciones.</p>
              <div className="center">
                <img src={figDev} alt="Dev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}