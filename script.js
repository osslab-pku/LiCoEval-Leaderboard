document.addEventListener('DOMContentLoaded', function() {
    const data = {
        labels: [
            "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct",
            "DeepSeek-Coder-V2", "CodeQwen1.5-7B-Chat", "StarCoder2-15B-Instruct", "Codestral-22B-v0.1", "CodeGemma-7B-IT", "WizardCoder-Python-13B"
        ],
        datasets: [{
            label: 'LiCo Score',
            data: [0.373, 0.376, 0.385, 0.317, 0.571, 0.985, 1.0, 0.714, 0.142, 0.781, 0.780, 0.360, 0.809, 0.153],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(201, 203, 207, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(201, 203, 207, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)',
            ],
            borderWidth: 1
        }]
    };


    const ctx = document.getElementById('llmChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.1,
                    ticks: {
                        stepSize: 0.1,
                        font: {
                            size: 20, // Change the font size for x-axis labels
                            family: 'JetBrains Mono' // Change the font type for x-axis labels
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 20, // Change the font size for x-axis labels
                            family: 'JetBrains Mono'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'LiCoEval Score',
                    font: {
                        size: 20,
                        family: 'JetBrains Mono'
                    }
                }
            }
        }
    });
});