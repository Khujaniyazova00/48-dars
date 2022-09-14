import logo from "./logo.svg";
import "./App.css";
import { Title } from "./Button";
import Fulfil from "./Fulfil";
import fulfil from "./logo1.png";

function App() {
  return (
    <div className="App">
      {/* <Title color="purple">Hello world</Title> */}
      {/* <Input placeholder="Ismingizni kiriting"></Input> */}
        <Title color="#193C3F">
          <h1>Nega aynan bu kursda o’qishim kerak?</h1>
        </Title>
      <div style={{ display: "flex" }}>
        <Fulfil
          image={fulfil}
          title="Natijalar"
          description="Bu yo'nalishda ta'lim berib kelyapmiz va bizni bitirgan
o'quvchilar oz ish joylariga ega bolishmoqda"
        />
        <Fulfil
          image={fulfil}
          title="Izohlar"
          description="Biznig o’quv markazimiz haqida faqatgina ijoyib izohlarni o’qishingiz mumkin."
        />
        <Fulfil
          image={fulfil}
          title="Xamyonbop narx"
          description="Nafaqat Suniy intellekt, balkim boshga kurslarimizning ham narxlari aksariyat o’quv markazlariga nisbatan arzon."
        />
      </div>
      <div style={{ display: "flex" }}>
        <Fulfil
          image={fulfil}
          title="Xalqaro ta'lim"
          description="Ustozimiz, Biyimbetov Azizbek chet elda olgan professional bilimlarini sizlar bilan bo’lishadi"
        />
        <Fulfil
          image={fulfil}
          title="Ilk bor"
          description="O'zbekistonda birinchilardan bo'lib Sun'iy intellekt yo'nalishida
ta'lim berishni boshlaganmiz"
        />
        <Fulfil
          image={fulfil}
          title="Yana bir imkoniyat"
          description="Kursni muvaffaqiyatli yakunlasangiz hamkor
firmalarimizga sizni tavsiya etishimiz mumkin, AI ONE GROUP a'zosi
bo'lish imkoniyati beriladi."
        />
      </div>
    </div>
  );
}

export default App;
