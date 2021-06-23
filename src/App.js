import "./App.css";
import Header from "./Components/Header/Index.jsx";
import CategoryMusic from "./Components/Header/DropdownMenu/CategoryMusic";

const dataCategoryMusic = {
  "vietnam": [
    "VIỆT NAM", "Nhạc Trẻ", "Trữ Tình", "Remix Việt", "Rap Việt", "Tiền Chiến", 'Nhạc Trịnh', 'Rock Việt', "Cách Mạng"
  ],
  "us-uk": [
    "Âu Mỹ", "POP", "Rock", "Electronica/Dance", "R&B/HipHop/Rap", "Blues/Jazz", "Country", "Latin", "Indie", "Âu Mỹ khác"
  ]
}

function App() {
  return (
    <div>
      <Header className="adad" />
      <CategoryMusic className="adasad" dataCategoryMusic={dataCategoryMusic}/>
    </div>
  );
}

export default App;
