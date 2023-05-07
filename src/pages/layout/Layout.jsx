import React from "react";
import Logo from "../../components/img/Logo.png";
import Phone from "../../components/img/phone.png";
import Like from "../../components/img/Like.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useState } from "react";
const ButtonGroup = Button.Group;
import { Link, Outlet } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <a className="item1" target="_blank" rel="noopener noreferrer" href="">
        iPhone 12
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a className="item2" target="_blank" rel="noopener noreferrer" href="">
        iPhone 12 Max
      </a>
    ),
 
  },
  {
    key: "3",
    label: (
      <a className="item3" target="_blank" rel="noopener noreferrer" href="#">
        iPhone 13
      </a>
    ),
  },
  {
    key: "4",

    label: (
      <a className="item4" target="_blank" rel="noopener noreferrer" href="#">
        iPhone 13 Max
      </a>
    ),
  },
  {
    key: "5",

    label: (
      <a className="item5" target="_blank" rel="noopener noreferrer" href="#">
        iPhone 13 Pro Max
      </a>
    ),
  },
  {
    key: "6",

    label: (
      <a className="item6" target="_blank" rel="noopener noreferrer" href="#">
        iPhone 14
      </a>
    ),
  },
];

export default function Layout() {
  const [count, setCount] = useState(0); 
  const [show, setShow] = useState(true);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="#" class="nav-link " aria-current="page" to="/">
            <img src={Logo} alt={Logo} />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={Phone} alt={Phone} /> Выбрать модель телефона
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" to="/">
            <Space direction="vertical">
              <Space size="large">
                <Badge count={count}>
                  <img shape="square" size="large" src={Like} alt={Like} />
                </Badge>
                <ButtonGroup>
                  <Button onClick={decline} icon={<MinusOutlined />} />
                  <Button onClick={increase} icon={<PlusOutlined />} />
                </ButtonGroup>
              </Space>
            </Space>
          </a>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/selected">
            <ShoppingFilled />
          </Link>
        </li>
        <li>
          <Link className="nav-link text-dark" to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}


