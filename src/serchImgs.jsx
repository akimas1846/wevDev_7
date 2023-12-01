import { useState, useEffect } from "react";


export default function serchimgs() {
  // const [content, setContent] = useState(null);
  const content = 404;
  const imagesPath = `https://http.cat/${content}`
  const [images,changeimage] = useState([]);

  
  return (
    <>
      <main>
        <section>
          <img src={imagesPath} />
        </section>
      </main>
    </>
  );
}

function serchById(id){
}
function showAll() {
  return (
    <main>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
      <section>
        <img src="https://http.cat/102" width="400px" />
      </section>
    </main>
  );
}
