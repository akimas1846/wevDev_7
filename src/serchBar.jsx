import { Button, Dropdown, Flex } from "antd";
import { useState, useEffect } from "react";
import serchimgs from "./serchImgs";

const onMenuClick = (e) => {
  console.log("click", e);
};

export default function bodies() {
  const items = [
    { key: "all", label: "All" },
    { key: "100", label: "100" },
    { key: "200", label: "200" },
    { key: "300", label: "300" },
    { key: "400", label: "400" },
    { key: "500", label: "500" },
  ];
  return (
    <div>
      <aside>
        <form>
          <Flex align="flex-start" gap="small" vertical>
            <label htmlFor="category">フィルタで検索</label>
            <Dropdown.Button
              menu={{
                items,
                onClick: onMenuClick,
              }}
            >
              コードを選んで検索
            </Dropdown.Button>
          </Flex>
        </form>
        <form>
          <div>
            <label htmlFor="searchTerm">コードで検索:</label>
            <input type="text" id="searchTerm" placeholder="エラーは友達！" />
          </div>
          <div>
            <button type="submit">検索</button>
          </div>
        </form>
      </aside>
    </div>
  );
}
