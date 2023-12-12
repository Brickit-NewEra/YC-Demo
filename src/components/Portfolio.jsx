import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Footer from "../components/Home/Footer";

const data6 = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const data = [
  {
    name: "15/02",
    uv: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "15/03",
    uv: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "15/04",
    uv: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "15/05",
    uv: 2780,
    profit: 3908,
    amt: 2000,
  },
  {
    name: "15/06",
    uv: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: "15/07",
    uv: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: "15/08",
    uv: 3490,
    profit: 4300,
    amt: 2100,
  },
];

const data2 = [
  { name: "TKM", value: 30, description: "Tower King Manager" },
  { name: "TKM2", value: 25, description: "Tower King Manager 2" },
  { name: "TKM3", value: 20, description: "Tower King Manager 3" },
  { name: "TKM4", value: 25, description: "Tower King Manager 4" },
];

const data3 = [
  {
    token: "TKM",
    cantidad: 30,
    total: 200,
    profit: "25%",
    project: "Great Buenos Aires",
    date: "28/06/2023",
  },
  {
    token: "BTM",
    cantidad: 30,
    total: 1000,
    profit: "25%",
    project: "NYC Tower",
    date: "28/06/2023",
  },
  {
    token: "SAS",
    cantidad: 30,
    total: 100,
    profit: "25%",
    project: "SIF Building",
    date: "28/06/2023",
  },
  {
    token: "CDC",
    cantidad: 30,
    total: 3000,
    profit: "25%",
    project: "Company And Storage",
    date: "28/06/2023",
  },
  {
    token: "TKM",
    cantidad: 30,
    total: 200,
    profit: "25%",
    project: "Great Buenos Aires",
    date: "28/06/2023",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-white p-4 rounded-[12px] border-[1px] border-gray200">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{`${data.value}%`}</p>
      </div>
    );
  }
  return null;
};

const Portfolio = () => {
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Función que se ejecutará cuando el componente se monte
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para el evento 'resize'
    window.addEventListener("resize", handleResize);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col  pt-[100px] justify-between px-20">
        <div className="w-full flex flex-col">
          <div className="flex w-full items-center justify-between border rounded-[20px]">
            <div className=" mr-2 p-8 pr-20 rounded-[20px]">
              <h2 className="text-[20px]">Inversion Total</h2>
              <span className="text-[40px] font-bold text-[#473DC7] font-roboto">
                $853,44 USD
              </span>
              <p className="text-[14px] text-[#828282]">
                +20% desde el mes pasado
              </p>
            </div>
            <div className=" mx-2 p-8 pr-20 rounded-[20px]">
              <h2 className="text-[20px]">Tokens adquiridos</h2>
              <span className="text-[40px] font-bold font-roboto">+35</span>
              <p className="text-[14px] text-[#828282]">
                +20% desde el mes pasado
              </p>
            </div>
            <div className=" mx-2 p-8 pr-20 rounded-[20px]">
              <h2 className="text-[20px]">Transacciones realizadas</h2>
              <span className="text-[40px] font-bold text-[#CC724C] font-roboto">
                +40
              </span>
              <p className="text-[14px] text-[#828282]">
                +20% desde el mes pasado
              </p>
            </div>
            <div className=" mx-2 p-8 pr-20 rounded-[20px]">
              <h2 className="text-[20px]">Ganancias</h2>
              <span className="text-[40px] font-bold text-[#58BD4F] font-roboto">
                +300 USD
              </span>
              <p className="text-[14px] text-[#828282]">
                +20% desde el mes pasado
              </p>
            </div>
          </div>

          {/* <div className="flex flex-row items-center justify-start mb-6">
            {show ? (
              <h1 className="text-left text-[26px] text-gray500">
                $8453,25 USD
              </h1>
            ) : (
              <h1 className="text-left text-[26px] text-gray500">
                $******,** USD
              </h1>
            )}
            <Icon
              icon="mdi:eye"
              width="28"
              className="text-gray500 ml-4"
              onClick={() => {
                setShow(!show);
              }}
            />
          </div> */}
        </div>
        <div className="flex mt-6  w-full items-between justify-between h-fit ">
          <div className="card-container p-4 pt-6 pl-2 rounded-[16px] border w-[45vw]">
            <h2 className="text-[18px] mb-6 pl-5">Overview</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data6}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey="total" fill="#58BD4F" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="ml-5 card-container p-4 pt-6 rounded-[16px] border w-[70%] h-[443px] px-10">
            <h2 className="text-[22px] font-roboto font-medium">
              Ultimas transacciones
            </h2>
            <p className="text-[#828282]">Transaccionaste 40 veces este mes.</p>
            {data3.map((token, index) => {
              return (
                <div
                  className="flex items-center justify-between font-roboto mt-5"
                  key={index}
                >
                  <div className="flex items-center">
                    <img src="/logo192.png" className="mr-4" width={45}></img>
                    <div>
                      <h3 className="font-bold">{token.token}</h3>
                      <h3 className="text-[14px]">{token.project}</h3>
                    </div>
                  </div>
                  <div className="flex w-[20%] justify-between">
                    <h2 className="text-[#828282]">{token.date}</h2>

                    <h3 className="font-bold">- ${token.total}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between h-[350px] w-full mt-5 mb-20">
          <div className="w-[72%] h-[100%]">
            <div className="w-full h-full flex items-center justify-start p-7 rounded-[20px] border">
              <table className="w-full h-full  text-left ">
                <thead style={{ borderBottom: " 1px solid lightgray" }}>
                  <th className="h-10">Token</th>
                  <th className="h-10">Cantidad</th>
                  <th className="h-10">Total</th>
                  <th className="h-10">Ganancia/Perdida</th>
                </thead>
                <tbody>
                  {data3.map((row) => {
                    return (
                      <tr className="w-full">
                        <td
                          className="w-[20%]"
                          style={{ borderBottom: " 1px solid lightgray" }}
                        >
                          {row.token}
                        </td>
                        <td
                          className="w-[30%]"
                          style={{ borderBottom: " 1px solid lightgray" }}
                        >
                          {row.cantidad}
                        </td>
                        <td
                          className="w-[30%]"
                          style={{ borderBottom: " 1px solid lightgray" }}
                        >
                          {row.total}
                        </td>
                        <td
                          className="w-[20%]"
                          style={{ borderBottom: " 1px solid lightgray" }}
                        >
                          {row.profit}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* <DataTable value={data3} tableStyle={{ minWidth: "1000px" }}>
                <Column field="token" header="Token"></Column>
                <Column field="cantidad" header="Amount"></Column>
                <Column field="total" header="Total"></Column>
                <Column field="profit" header="Profit"></Column>
              </DataTable> */}
            </div>
          </div>
          <div className="h-full ml-8 w-[28%] border rounded-[20px] flex items-center justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={data2}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={120}
                paddingAngle={5}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" align="right" verticalAlign="middle"/>
            </PieChart>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Portfolio;
