import "./contacto.css";

export default function Contacto() {
  return (
    <section className="ubicacion">
      <h2>📍 Nuestra ubicación</h2>
      <p>Estamos en Flores, CABA — ¡vení a visitarnos!</p>

      <div className="mapa">
        <iframe
          title="Mapa de la tienda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.758091774705!2d-58.467!3d-34.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7e4f1c3e4f%3A0x7d6e7e3b1e3e3e3e!2sFlores%2C%20CABA!5e0!3m2!1ses!2sar!4v1690000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="info-contacto">
        <p><strong>Dirección:</strong> Av. Rivadavia 7000, Flores, CABA</p>
        <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
        <p><strong>Horario:</strong> Lunes a Sábado de 10:00 a 19:00</p>
      </div>
    </section>
  );
}