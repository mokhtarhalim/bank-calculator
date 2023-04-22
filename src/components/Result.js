import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Result = ({ data }) => {

  const totalLoanMonths = data.loanTerm * 12;
  const interestPerMonth = data.interestRate / 100 / 12;

  const monthlyPayment =
    (data.loanAmount * interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1
    );

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - data.loanAmount;

  const chartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ratio of principles and interest',
        data: [data.homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={5}>
      <Typography textAlign='center' variant="h5">Monthly Payment: $ {monthlyPayment.toFixed(2)}</Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={chartData} />
        </div>
      </Stack>
    </Stack>
  )
}

export default Result