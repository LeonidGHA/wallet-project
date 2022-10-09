import { useSelector } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';

import { categoryRu } from 'shared/array-for-ru/category-ru';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartsDiagram = ({ categorySumm }) => {
  const takeCategorySumm = useSelector(
    state => state.transactionsSummary.categoriesSummary
  );
  // const takeCategorySumm = categorySumm;

  const takeAllExpense = takeCategorySumm?.filter(el => el.type !== 'INCOME');

  const totalsOfCategorySumm = takeAllExpense?.map(el => Math.abs(el.total));
  const colorofCategorySumm = takeAllExpense?.map(el => {
    const colorCategory = categoryRu.find(elem => elem.nameEn === el.name);

    return colorCategory.color;
  });
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: totalsOfCategorySumm.length > 0 ? totalsOfCategorySumm : [1],
        backgroundColor:
          colorofCategorySumm.length > 0
            ? colorofCategorySumm
            : ['rgb(255, 99, 132)'],

        hoverOffset: 4,
      },
    ],
  };

  //   console.log(takeAllExpense);
  // console.log(takeCategorySumm);
  // console.log(totalsOfCategorySumm);
  // console.log(colorofCategorySumm);
  return <Doughnut data={data} />;
};

export default ChartsDiagram;
