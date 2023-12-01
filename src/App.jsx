import Footer from "./footer.jsx";
import SerchBar from "./serchBar.jsx";
import ImageGallery from "./imageGallery.jsx";
import SerchImgs from "./serchImgs.jsx";
export default function App() {
  return (
    <>
      <header>
        <h1>猫で学ぶネットワークエラー</h1>
      </header>
      <div>
        <SerchBar />
        <SerchImgs />
      </div>
      <ImageGallery />
      <Footer />
    </>
  );
}
