import "./Contact.scss";

function Contact() {
  return (
    <main className="contact">
      <h2 className="contact__contact">_contact</h2>

      <section className="contact__text-container">
        <p className="contact__text">
          I'm always open to new opportunities! 🚀 Whether you have questions,
          want to connect 👋, discuss code 💻, share music 🎶, chat about games
          🎮, or expand your network 🌐, don’t hesitate to reach out. I’d love
          to chat with you! 😄
        </p>
      </section>
      <h2 className="contact__reache-me">reach-me-on</h2>
      <div className="contact__link-container">
        <a
          className="contact__mail-container"
          href="mailto:majedur-rahman@outlook.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          email
        </a>

        <a
          target="_blank"
          className="contact__mail-container"
          href="https://m.me/mrehere"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 25 2 C 12.300781 2 2 11.601563 2 23.5 C 2 29.800781 4.898438 35.699219 10 39.800781 L 10 48.601563 L 18.601563 44.101563 C 20.699219 44.699219 22.800781 44.898438 25 44.898438 C 37.699219 44.898438 48 35.300781 48 23.398438 C 48 11.601563 37.699219 2 25 2 Z M 27.300781 30.601563 L 21.5 24.398438 L 10.699219 30.5 L 22.699219 17.800781 L 28.601563 23.699219 L 39.101563 17.800781 Z" />
          </svg>
          messenger
        </a>
      </div>
    </main>
  );
}

export default Contact;
