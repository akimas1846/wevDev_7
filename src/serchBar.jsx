import { Dropdown, Input, Button, Flex, Modal } from "antd";
import { useState } from "react";

//URL設定
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

const items = [
  { key: "all", label: "All" },
  { key: "100", label: "100" },
  { key: "200", label: "200" },
  { key: "300", label: "300" },
  { key: "400", label: "400" },
  { key: "500", label: "500" },
];

//ポップアップ時の各コードのタイトルと説明文設定

const imageDetails = [
  { url: "https://http.cat/100", title: "Status 100", description: "Continue" },
  {
    url: "https://http.cat/101",
    title: "Status 101",
    description: "Switching Protocols",
  },
  {
    url: "https://http.cat/102",
    title: "Status 102",
    description: "Processing",
  },
  {
    url: "https://http.cat/103",
    title: "Status 103",
    description: "Early Hints",
  },
  { url: "https://http.cat/200", title: "Status 200", description: "OK" },
  { url: "https://http.cat/201", title: "Status 201", description: "Created" },
  { url: "https://http.cat/202", title: "Status 202", description: "Accepted" },
  {
    url: "https://http.cat/203",
    title: "Status 203",
    description: "Non-Authoritative Information",
  },
  {
    url: "https://http.cat/204",
    title: "Status 204",
    description: "No Content",
  },
  {
    url: "https://http.cat/205",
    title: "Status 205",
    description: "Reset Content",
  },
  {
    url: "https://http.cat/206",
    title: "Status 206",
    description: "Partial Content",
  },
  {
    url: "https://http.cat/207",
    title: "Status 207",
    description: "Multi-Status",
  },
  { url: "https://http.cat/226", title: "Status 226", description: "IM Used" },
  {
    url: "https://http.cat/300",
    title: "Status 300",
    description: "Multiple Choices",
  },
  {
    url: "https://http.cat/301",
    title: "Status 301",
    description: "Moved Permanently",
  },
  { url: "https://http.cat/302", title: "Status 302", description: "Found" },
  {
    url: "https://http.cat/303",
    title: "Status 303",
    description: "See Other",
  },
  {
    url: "https://http.cat/304",
    title: "Status 304",
    description: "Not Modified",
  },
  {
    url: "https://http.cat/305",
    title: "Status 305",
    description: "Use Proxy",
  },
  {
    url: "https://http.cat/307",
    title: "Status 307",
    description: "Temporary Redirect",
  },
  {
    url: "https://http.cat/308",
    title: "Status 308",
    description: "Permanent Redirect",
  },
  {
    url: "https://http.cat/400",
    title: "Status 400",
    description: "Bad Request",
  },
  {
    url: "https://http.cat/401",
    title: "Status 401",
    description: "Unauthorized",
  },
  {
    url: "https://http.cat/402",
    title: "Status 402",
    description: "Payment Required",
  },
  {
    url: "https://http.cat/403",
    title: "Status 403",
    description: "Forbidden",
  },
  {
    url: "https://http.cat/404",
    title: "Status 404",
    description: "Not Found",
  },
  {
    url: "https://http.cat/405",
    title: "Status 405",
    description: "Method Not Allowed",
  },
  {
    url: "https://http.cat/406",
    title: "Status 406",
    description: "Not Acceptable",
  },
  {
    url: "https://http.cat/407",
    title: "Status 407",
    description: "Proxy Authentication Required",
  },
  {
    url: "https://http.cat/408",
    title: "Status 408",
    description: "Request Timeout",
  },
  { url: "https://http.cat/409", title: "Status 409", description: "Conflict" },
  { url: "https://http.cat/410", title: "Status 410", description: "Gone" },
  {
    url: "https://http.cat/411",
    title: "Status 411",
    description: "Length Required",
  },
  {
    url: "https://http.cat/412",
    title: "Status 412",
    description: "Precondition Failed",
  },
  {
    url: "https://http.cat/413",
    title: "Status 413",
    description: "Payload Too Large",
  },
  {
    url: "https://http.cat/414",
    title: "Status 414",
    description: "URI Too Long",
  },
  {
    url: "https://http.cat/415",
    title: "Status 415",
    description: "Unsupported Media Type",
  },
  {
    url: "https://http.cat/416",
    title: "Status 416",
    description: "Range Not Satisfiable",
  },
  {
    url: "https://http.cat/417",
    title: "Status 417",
    description: "Expectation Failed",
  },
  {
    url: "https://http.cat/418",
    title: "Status 418",
    description: "I'm a teapot",
  },
  {
    url: "https://http.cat/420",
    title: "Status 420",
    description: "Enhance Your Calm",
  },
  {
    url: "https://http.cat/421",
    title: "Status 421",
    description: "Misdirected Request",
  },
  {
    url: "https://http.cat/422",
    title: "Status 422",
    description: "Unprocessable Entity",
  },
  { url: "https://http.cat/423", title: "Status 423", description: "Locked" },
  {
    url: "https://http.cat/424",
    title: "Status 424",
    description: "Failed Dependency",
  },
  {
    url: "https://http.cat/425",
    title: "Status 425",
    description: "Too Early",
  },
  {
    url: "https://http.cat/426",
    title: "Status 426",
    description: "Upgrade Required",
  },
  {
    url: "https://http.cat/428",
    title: "Status 428",
    description: "Precondition Required",
  },
  {
    url: "https://http.cat/429",
    title: "Status 429",
    description: "Too Many Requests",
  },
  {
    url: "https://http.cat/431",
    title: "Status 431",
    description: "Request Header Fields Too Large",
  },
  {
    url: "https://http.cat/444",
    title: "Status 444",
    description: "Connection Closed Without Response",
  },
  {
    url: "https://http.cat/450",
    title: "Status 450",
    description: "Blocked by Windows Parental Controls",
  },
  {
    url: "https://http.cat/451",
    title: "Status 451",
    description: "Unavailable For Legal Reasons",
  },
  {
    url: "https://http.cat/497",
    title: "Status 497",
    description: "HTTP Request Sent to HTTPS Port",
  },
  {
    url: "https://http.cat/498",
    title: "Status 498",
    description: "Invalid Token",
  },
  {
    url: "https://http.cat/499",
    title: "Status 499",
    description: "Token Required",
  },
  {
    url: "https://http.cat/500",
    title: "Status 500",
    description: "Internal Server Error",
  },
  {
    url: "https://http.cat/501",
    title: "Status 501",
    description: "Not Implemented",
  },
  {
    url: "https://http.cat/502",
    title: "Status 502",
    description: "Bad Gateway",
  },
  {
    url: "https://http.cat/503",
    title: "Status 503",
    description: "Service Unavailable",
  },
  {
    url: "https://http.cat/504",
    title: "Status 504",
    description: "Gateway Timeout",
  },
  {
    url: "https://http.cat/505",
    title: "Status 505",
    description: "HTTP Version Not Supported",
  },
  {
    url: "https://http.cat/506",
    title: "Status 506",
    description: "Variant Also Negotiates",
  },
  {
    url: "https://http.cat/507",
    title: "Status 507",
    description: "Insufficient Storage",
  },
  {
    url: "https://http.cat/508",
    title: "Status 508",
    description: "Loop Detected",
  },
  {
    url: "https://http.cat/510",
    title: "Status 510",
    description: "Not Extended",
  },
  {
    url: "https://http.cat/511",
    title: "Status 511",
    description: "Network Authentication Required",
  },
  {
    url: "https://http.cat/599",
    title: "Status 599",
    description: "Network Connect Timeout Error",
  },
];

//serchBarの挙動

const Bodies = () => {
  const [selectedCode, setSelectedCode] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState(code_All);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const handleDropdownClick = ({ key }) => {
    setSelectedCode(key);
    setSearchTerm("");
    filterImages(key);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterImages(selectedCode, searchTerm);
  };

  const filterImages = (code, term = "") => {
    const source = code === "all" ? code_All : eval(`code_${code}`);
    const filtered =
      code === "all"
        ? code_All.filter((img) =>
            img.toLowerCase().includes(term.toLowerCase())
          )
        : source.filter((img) =>
            img.toLowerCase().includes(term.toLowerCase())
          );

    setFilteredImages(filtered);
  };

  const showModal = (image) => {
    const selectedImageInfo = imageDetails.find(
      (detail) => detail.url === image
    );

    if (selectedImageInfo) {
      setSelectedImage(image);
      setModalTitle(selectedImageInfo.title);
      setModalDescription(selectedImageInfo.description);
      setModalVisible(true);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
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
          <section key={index} onClick={() => showModal(content)}>
            <img src={content} alt={`Image ${index + 1}`} />
          </section>
        ))}
      </main>

      <Modal
        title={modalTitle}
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <img src={selectedImage} alt={modalTitle} style={{ width: "100%" }} />
        <p>{modalDescription}</p>
      </Modal>
    </>
  );
};

export default Bodies;
