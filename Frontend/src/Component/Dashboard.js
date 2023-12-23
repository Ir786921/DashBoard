import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  LineChart,
  Line,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  AreaChart,
  Area,
  linearGradient,
  Cell,
  Label,
  ComposedChart,
} from "recharts";
import DashBoardContext from "../Context/Context";

const DashBoard = () => {
  const { updateSearchquery } = useContext(DashBoardContext);
  console.log(updateSearchquery);

  const [data, setData] = useState([]);

  const myData = [];

  for (let index = 0; index <= 3; index++) {
    myData.push(data[index]);
  }

  console.log(myData);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  useEffect(() => {
    Api();
  }, [updateSearchquery]);

  async function Api() {
    const response = await fetch(
      `http://localhost:8000/api/data?sector=${updateSearchquery}`
    );
    const data = await response.json();
    setData(data.Mydata);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 tw-bg-[#9932B1] tw-shadow-xl tw-rounded-md tw-p-2 tw-flex tw-justify-center tw-mb-6">
          <p className="  tw-text-2xl text-center tw-text-gray-100">
            Sector : {updateSearchquery}{" "}
          </p>
        </div>

        <div className="col-md-12">
          <div className=" tw-flex tw-flex-wrap tw-justify-evenly tw-mb-5 tw-gap-4">
            <div className=" md:tw-w-[300px] tw-w-full tw-bg-[#C9FACD] tw-p-2 tw-shadow-xl tw-rounded-md">
              <h5 className=" tw-text-slate-500">Title</h5>

              <br />
              <p className=" tw-text-md">{myData[0]?.title}</p>
            </div>
            <div className=" md:tw-w-[300px] tw-w-full tw-bg-[#D0F2FE] tw-p-2 tw-shadow-xl tw-rounded-md">
              <h5 className=" tw-text-slate-500">Insight</h5>
              <br />
              <p className=" tw-ml-5 tw-text-md">{myData[0]?.insight}</p>
            </div>
            <div className="md:tw-w-[300px] tw-w-full tw-bg-[#FEA11D] tw-p-2 tw-shadow-xl tw-rounded-md tw-overflow-hidden">
              <h5 className=" tw-text-slate-500">Url</h5>
              <br />
              <a className=" tw-cursor-pointer tw-text-md">{myData[0]?.url}</a>
            </div>
          </div>
        </div>
        <div className="col-md-12 tw-mb-5">
          <div className=" tw-flex tw-justify-evenly tw-gap-5 tw-p-6 tw-bg-[#161C31] tw-rounded-sm tw-shadow-md">
            <div className=" tw-flex tw-flex-col tw-justify-evenly">
              <div className=" tw-bg-red-300 tw-p-2 tw-rounded-sm tw-shadow-lg">
                <h5 className=" tw-text-slate-300">Regions</h5>
                {myData.map((item, index) => {
                  return (
                    <>
                      <p>
                        <i className="fa-solid fa-square tw-text-violet-400"></i>{" "}
                        &nbsp;{item?.region}
                      </p>
                    </>
                  );
                })}
              </div>
              <div className=" tw-bg-[#FEA11D] tw-p-2 tw-rounded-sm tw-shadow-lg">
                <h5>Likelihood: {myData[0]?.likelihood}</h5>
              </div>
            </div>
            <ResponsiveContainer width={730} height={350}>
              <BarChart
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                width={500}
                height={300}
                data={myData}
              >
                <CartesianGrid
                  strokeDasharray="3,3"
                  horizontal="true"
                  vertical=""
                />
                <XAxis dataKey="topic" />
                <YAxis dataKey="intensity" />
                <Tooltip />
                <Legend align="left" />
                <Bar dataKey="relevance" fill="#8884d8" />
                <Bar dataKey="intensity" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <br />

        <br />

        <div className="col-md-12 tw-mb-5">
          <div className=" tw-flex tw-justify-evenly tw-p-4 tw-bg-[#161C31] tw-rounded-sm tw-shadow-md">
            <div className=" tw-flex tw-flex-col tw-gap-5 tw-justify-evenly ">
              <div className=" tw-bg-red-300 tw-p-2 tw-rounded-sm tw-shadow-lg">
                {" "}
                Pestle : {myData[0]?.pestle}
              </div>
              <div className=" tw-bg-[#FEA11D] tw-rounded-sm tw-p-2">
                Published : {myData[0]?.published}
              </div>
            </div>
            <ResponsiveContainer width={730} height={350}>
              <LineChart
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                width={500}
                height={300}
                data={myData}
              >
                <CartesianGrid
                  strokeDasharray="3,3"
                  horizontal="true"
                  vertical=""
                />
                <XAxis dataKey="topic" interval={"preserveStartEnd"} />
                <YAxis dataKey="intensity" />
                <Tooltip />
                <Legend align="left" />
                <Line type="monotone" dataKey="relevance" fill="#8884d8" />
                <Line type="monotone" dataKey="intensity" fill="#FFBB28" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6 tw-mb-5">
          <div className="  tw-flex tw-justify-evenly tw-p-2 tw-bg-[#161C31] tw-rounded-sm tw-shadow-md">
            <div className=" tw-p-2 tw-m-0">
              <p className=" tw-p-2 tw-flex tw-gap-1 tw-justify-center tw-items-center">
                <i className="fa-solid fa-square tw-text-[#8884d8]"></i>
                <span className=" tw-text-slate-300">relevance</span>
              </p>
              <p className=" tw-p-2 tw-flex tw-gap-1 tw-justify-center tw-items-center">
                <i className="fa-solid fa-square tw-text-[#FFBB28]"></i>
                <span className=" tw-text-slate-300">intensity</span>
              </p>
            </div>
            <ResponsiveContainer width={730} height={250}>
              <PieChart width={730} height={250}>
                <Pie
                  data={myData}
                  dataKey="relevance"
                  nameKey="topic"
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={140}
                  fill="#8884d8"
                />
                <Pie
                  data={myData}
                  dataKey="intensity"
                  nameKey="topic"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#FFBB28"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6 tw-mb-5">
          <div className="  tw-flex tw-justify-evenly tw-p-2 tw-bg-[#161C31] tw-rounded-sm tw-shadow-md">
            <ResponsiveContainer width={730} height={250}>
              <ComposedChart width={730} height={250} data={myData}>
                <XAxis dataKey="intensity" />
                <YAxis />
                <Tooltip />
                <Legend align="left" />
                <CartesianGrid
                  stroke="#f5f5f5"
                  strokeDasharray="3,3"
                  horizontal="true"
                  vertical=""
                />
                <Area
                  type="monotone"
                  dataKey="intensity"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="relevance" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="likelihood" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
