import './home.css';
import '../static/styles/buttons.css';
import logo from '../static/Logo.png'

function Home() {
  return (
    <div>
      <section className='body_home'>
        <div className='home_principal'>
          <img src={logo} alt='Logo principal de la aplicación Mimage' className=''></img>
        </div>
        <div className='home_txt'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </section>
    </div>
  );
}

export default Home;

