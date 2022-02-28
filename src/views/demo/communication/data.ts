import axios from 'axios';
export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '访问数',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '月',
  },
  {
    title: '成交额',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '月',
  },
  {
    title: '下载数',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '周',
  },
  {
    title: '成交数',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '年',
  },
];

// 模拟接口
export function getDataList() {
  return new Promise((res, rej) => {
    axios
      .post('https://gdsorder.ey.net:18003/Business/api/ScheduleActualDetail/GetTrackerItem')
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

// interface DataItem {
//   name: string;
//   age: number;
//   address: string;
// }
// export function mockData() {
//   const dataList = [];
//   for (let index = 0; index < 100; index++) {
//     const dataItem: DataItem = {
//       name: `name_${index}`,
//       age: ~~(Math.random() * 10),
//       address: `xxxxxxxxxxxxx_address`,
//     };
//     dataList.push(dataItem);
//   }
//   return dataList;
// }
