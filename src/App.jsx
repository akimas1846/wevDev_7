import Footer from "./footer.jsx";
import SerchBar from "./serchBar.jsx";
import ImageGallery from "./imageGallery.jsx";

export default function App() {
  return (
    <>
      <header>
        <h1>猫画像で見るレスポンスコード</h1>
      </header>
      <ImageGallery />
      <div>
        <SerchBar />
      </div>
      
      <Footer />
    </>
  );
}
