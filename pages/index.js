import { useState } from "react";
import dayjs from 'dayjs';

export default function Main() {
  const nowYear = dayjs().get('year');
  const nowMonth = dayjs().get('month');

  const yearArr = [...Array(200)].map((v, idx) => idx + 1951);
  const monthArr = [...Array(12)].map((v, idx) => idx + 1);

  const [selectedYear, setSelectYear] = useState(Number(nowYear));
  const [selectedMonth, setSelectMonth] = useState(Number(nowMonth) + 1);

  const handleYearSelect = (e) => {
    setSelectYear(e.target.value);
  }

  const handleMonthSelect = (e) => {
    setSelectMonth(e.target.value);
  }

  return (
    <>
      {/* Head */}
      <div className="flex pt-5">
        <div className="flex justify-center font-bold text-2xl w-96 px-3">
          <div className="flex justify-center items-center px-1">
            <select
              className="appearance-none w-16 text-center border-b-2 border-black"
              onChange={handleYearSelect}
              value={selectedYear}
            >
              {
                yearArr.map((year, idx) => {
                  return (
                    <option className="text-base" value={year} key={idx}>
                      {year}
                    </option>
                  )
                })
              }
            </select>
            <div>년</div>
          </div>
          <div className="flex justify-center items-center px-1">
            <select
              className="appearance-none w-10 text-center border-b-2 border-black"
              onChange={handleMonthSelect}
              value={selectedMonth}
            >
              {
                monthArr.map((month, idx) => {
                  return (
                    <option className="text-base" value={month} key={idx}>
                      {month}
                    </option>
                  )
                })
              }
            </select>
            <div>월</div>
          </div>
        </div>
        <div className="w-full">
          <ul className="list-disc list-inside font-bold break-all">
            <li>1111111111111111111111111111111111</li>
            <li>2222222222222222222222222222222222</li>
            <li>3333333333333333333333333333333333</li>
          </ul>
        </div>
      </div>
      {/* Body1 - 내역 */}
      <div className="flex p-5 w-full">
        <div className="text-center w-1/6">
          <div className="font-bold border-2 border-black bg-blue-200">수입</div>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border border-black border-t-0 w-1/3">14일</td>
                <td className="border border-black border-t-0 w-1/3">급여</td>
                <td className="border border-black border-t-0 w-1/3">2500000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center w-1/6">저축</div>
        <div className="text-center w-1/6">고정지출</div>
        <div className="text-center w-1/6">변동지출</div>
      </div>
      <div>
        합계
      </div>
    </>
  )
}
