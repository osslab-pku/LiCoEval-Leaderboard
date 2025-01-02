// document.addEventListener('DOMContentLoaded', function() {
//     /* First chart (LiCoEval Score) */
//     const data1 = {
//         labels: [
//             "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet",
//             "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct",
//             "DeepSeek-Coder-V2", "CodeQwen1.5-7B-Chat", "StarCoder2-15B-Instruct",
//             "Codestral-22B-v0.1", "CodeGemma-7B-IT", "WizardCoder-Python-13B"
//         ],
//         datasets: [
//             {
//                 label: 'LiCoEval Score',
//                 data: [0.373, 0.376, 0.385, 0.317, 0.571, 0.985, 1.0, 0.714, 0.142, 0.781, 0.780, 0.360, 0.809, 0.153],
//                 backgroundColor: (context) => {
//                     const label = data1.labels[context.dataIndex];
//                     if ([
//                         "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro",
//                         "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"
//                     ].includes(label)) {
//                         return 'rgba(153, 102, 255, 0.8)';
//                     } else {
//                         return 'rgba(255, 159, 64, 0.8)';
//                     }
//                 },
//                 borderColor: (context) => {
//                     const label = data1.labels[context.dataIndex];
//                     if ([
//                         "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro",
//                         "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"
//                     ].includes(label)) {
//                         return 'rgba(153, 102, 255, 1)';
//                     } else {
//                         return 'rgba(255, 159, 64, 1)';
//                     }
//                 },
//                 borderWidth: 1
//             }
//         ]
//     };
//
//     const ctx1 = document.getElementById('LiCoChart').getContext('2d');
//     const myChart1 = new Chart(ctx1, {
//         type: 'bar',
//         data: data1,
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     max: 1.0,
//                     ticks: {
//                         stepSize: 0.1,
//                         font: {
//                             size: 15
//                         }
//                     }
//                 },
//                 x: {
//                     ticks: {
//                         font: {
//                             size: 15
//                         }
//                     }
//                 }
//             },
//             plugins: {
//                 legend: {
//                     display: true,
//                     labels: {
//                         generateLabels: (chart) => [
//                             { text: 'General LLM', fillStyle: 'rgba(153, 102, 255, 0.8)' },
//                             { text: 'Code LLM', fillStyle: 'rgba(255, 159, 64, 0.8)' }
//                         ]
//                     }
//                 },
//                 title: {
//                     display: true,
//                     text: 'LiCoEval Score',
//                     font: {
//                         size: 40
//                     }
//                 }
//             }
//         }
//     });
//
//     /* Second chart (HumanEval) */
//     const data2 = {
//         labels: [
//             "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet",
//             "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct",
//             "DeepSeek-Coder-V2", "CodeQwen1.5-7B-Chat", "StarCoder2-15B-Instruct",
//             "Codestral-22B-v0.1", "CodeGemma-7B-IT", "WizardCoder-Python-13B"
//         ],
//         datasets: [
//             {
//                 label: 'HumanEval',
//                 data: [72.6, 85.4, 90.2, 71.9, 92.0, 79.9, 71.8, 62.2, 90.2, 83.5, 72.6, 61.5, 56.1, 64.0],
//                 backgroundColor: (context) => {
//                     const label = data2.labels[context.dataIndex];
//                     if ([
//                         "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro",
//                         "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"
//                     ].includes(label)) {
//                         return 'rgba(153, 102, 255, 0.8)';
//                     } else {
//                         return 'rgba(255, 159, 64, 0.8)';
//                     }
//                 },
//                 borderColor: (context) => {
//                     const label = data2.labels[context.dataIndex];
//                     if ([
//                         "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro",
//                         "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"
//                     ].includes(label)) {
//                         return 'rgba(153, 102, 255, 1)';
//                     } else {
//                         return 'rgba(255, 159, 64, 1)';
//                     }
//                 },
//                 borderWidth: 1
//             }
//         ]
//     };
//
//     const ctx2 = document.getElementById('HumanChart').getContext('2d');
//     const myChart2 = new Chart(ctx2, {
//         type: 'bar',
//         data: data2,
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     max: 100,
//                     ticks: {
//                         stepSize: 10,
//                         font: {
//                             size: 15
//                         }
//                     }
//                 },
//                 x: {
//                     ticks: {
//                         font: {
//                             size: 15
//                         }
//                     }
//                 }
//             },
//             plugins: {
//                 legend: {
//                     display: true,
//                     labels: {
//                         generateLabels: (chart) => [
//                             { text: 'General LLM', fillStyle: 'rgba(153, 102, 255, 0.8)' },
//                             { text: 'Code LLM', fillStyle: 'rgba(255, 159, 64, 0.8)' }
//                         ]
//                     }
//                 },
//                 title: {
//                     display: true,
//                     text: 'HumanEval Scores',
//                     font: {
//                         size: 40
//                     }
//                 }
//             }
//         }
//     });
// });
// script.js

// Data for the Line Chart
const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Sales in Units',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 90, 75, 85],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

// Configuration for the Line Chart
const salesConfig = {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create the Line Chart
const salesChartCanvas = document.getElementById('salesChart');
const salesChart = new Chart(salesChartCanvas, salesConfig);

// Data for the Bar Chart
const productData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
        label: 'Number of Orders',
        data: [120, 190, 300, 50, 200],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the Bar Chart
const productConfig = {
    type: 'bar',
    data: productData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create the Bar Chart
const productChartCanvas = document.getElementById('productChart');
const productChart = new Chart(productChartCanvas, productConfig);