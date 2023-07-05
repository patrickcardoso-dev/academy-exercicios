import './App.css';
import CardItem from './components/CardItem/index'
import DavidPicture from './assets/david.jpg';
import GuilhermePicture from './assets/guilherme.jpg';
import JuliPicture from './assets/juli.jpg';
import NandaPicture from './assets/nanda.jpg';

export default function App() {
  return (
    <div className="cards">
      <CardItem 
        		profile_picture={DavidPicture}
            description="Homem branco de óculos usando camisa branca"
            name="David Sarpa"
            link_instagram="https://www.instagram.com/davidsarpa/"
            nick_instagram="@davidsarpa"
            seguidores="981 seguidores"
            seguindo="2.110 seguindo"
      />

      <CardItem 
        		profile_picture={GuilhermePicture}
            description="Homem branco de cabelos curtos e usando camisa roxa"
            name="Guilherme Daltro"
            link_instagram="https://www.instagram.com/guiga_daltro"
            nick_instagram="@guiga_daltro"
            seguidores="206 seguidores"
            seguindo="484 seguindo"
      />

      <CardItem 
        		profile_picture={JuliPicture}
            description="Mulher branca de cabelos pretos e curtos"
            name="Juliana Fagundes"
            link_instagram="https://www.instagram.com/julifagundes/"
            nick_instagram="@julifagundes"
            seguidores="423 seguidores"
            seguindo="971 seguindo"
      />

      <CardItem 
        		profile_picture={NandaPicture}
            description="Mulher negra usando óculos e coque"
            name="Fernanda Lima"
            link_instagram="https://www.instagram.com/gastro_holic/"
            nick_instagram="@gastro_holic"
            seguidores="946 seguidores"
            seguindo="1.624 seguindo"
      />
    </div>
  );
}

