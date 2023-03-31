import "./App.css";
import Videos from "./pages/Videos";

function App() {
  return (
    <div className="App">
      <div className="tik_videos">
        <Videos 
        likes={973}
        messages={167}
        shares={462}
        name="ctheodorocn"
        description="O meu gato é melhor goleiro do que goleiro do Flamengo"
        music="Musica épica"
        url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        />
        <Videos 
        likes={1360}
        messages={326}
        shares={769}
        name="ctheodo2023"
        description="O meu gato adora receber meu carrinho"
        music="Musica legal"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
