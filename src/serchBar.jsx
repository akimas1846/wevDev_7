import { Dropdown, Input, Button, Flex } from "antd";
import { useState, useEffect } from "react";

const code_100 = [
  "https://http.cat/100",
  "https://http.cat/101",
  "https://http.cat/102",
  "https://http.cat/103",
];

const code_200 = [
  "https://http.cat/200",
  "https://http.cat/201",
  "https://http.cat/202",
  "https://http.cat/203",
  "https://http.cat/204",
  "https://http.cat/205",
  "https://http.cat/206",
  "https://http.cat/207",
  "https://http.cat/226",
];

const code_300 = [
  "https://http.cat/300",
  "https://http.cat/301",
  "https://http.cat/302",
  "https://http.cat/303",
  "https://http.cat/304",
  "https://http.cat/305",
  "https://http.cat/307",
  "https://http.cat/308",
];

const code_400 = [
  "https://http.cat/400",
  "https://http.cat/401",
  "https://http.cat/402",
  "https://http.cat/403",
  "https://http.cat/404",
  "https://http.cat/405",
  "https://http.cat/406",
  "https://http.cat/407",
  "https://http.cat/408",
  "https://http.cat/409",
  "https://http.cat/411",
  "https://http.cat/412",
  "https://http.cat/413",
  "https://http.cat/414",
  "https://http.cat/415",
  "https://http.cat/416",
  "https://http.cat/417",
  "https://http.cat/418",
  "https://http.cat/420",
  "https://http.cat/421",
  "https://http.cat/422",
  "https://http.cat/423",
  "https://http.cat/424",
  "https://http.cat/425",
  "https://http.cat/426",
  "https://http.cat/428",
  "https://http.cat/429",
  "https://http.cat/431",
  "https://http.cat/444",
  "https://http.cat/450",
  "https://http.cat/451",
  "https://http.cat/497",
  "https://http.cat/498",
  "https://http.cat/499",
];

const code_500 = [
  "https://http.cat/500",
  "https://http.cat/501",
  "https://http.cat/502",
  "https://http.cat/503",
  "https://http.cat/504",
  "https://http.cat/506",
  "https://http.cat/507",
  "https://http.cat/508",
  "https://http.cat/509",
  "https://http.cat/510",
  "https://http.cat/511",
  "https://http.cat/521",
  "https://http.cat/522",
  "https://http.cat/523",
  "https://http.cat/525",
  "https://http.cat/530",
  "https://http.cat/599",
];

const code_All = code_100.concat(code_200, code_300, code_400, code_500);

const notFoundImage = 'https://http.cat/404';

const items = [
  { key: "all", label: "All" },
  { key: "100", label: "100" },
  { key: "200", label: "200" },
  { key: "300", label: "300" },
  { key: "400", label: "400" },
  { key: "500", label: "500" },
];


const Bodies = () => {
  const [selectedCode, setSelectedCode] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(code_All);

  const handleDropdownClick = ({ key }) => {
    setSelectedCode(key);
    setSearchTerm('');
    filterImages(key);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterImages(selectedCode, searchTerm);
  };

  const filterImages = (code, term = '') => {
    const source = code === 'all' ? code_All : eval(`code_${code}`);
    const filtered =
      code === 'all'
        ? code_All.filter((img) => img.toLowerCase().includes(term.toLowerCase()))
        : source.filter((img) => img.toLowerCase().includes(term.toLowerCase()));

    setFilteredImages(filtered);
  };

  return (
    <>
      <aside>
        <form>
          <Flex align="flex-start" gap="small" vertical>
            <label htmlFor="category">フィルタで検索</label>
            <Dropdown.Button
              menu={{
                items,
                onClick: handleDropdownClick,
              }}
            >
              コードを選んで検索
            </Dropdown.Button>
          </Flex>
        </form>
        <form onSubmit={handleSearch}>
          <div>
            <label htmlFor="searchTerm">数字を入力して検索:</label>
            <Input
              id="searchTerm"
              placeholder="エラーは友達！"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              検索
            </Button>
          </div>
        </form>
      </aside>
      <main>
        {filteredImages.map((content, index) => (
          <section key={index}>
            <img src={content} alt={`Image ${index + 1}`} />
          </section>
        ))}
      </main>
    </>
  );
};

export default Bodies;