document.addEventListener('DOMContentLoaded', function() {
    const data = {
        labels: [
            "GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct",
            "DeepSeek-Coder-V2", "CodeQwen1.5-7B-Chat", "StarCoder2-15B-Instruct", "Codestral-22B-v0.1", "CodeGemma-7B-IT", "WizardCoder-Python-13B"
        ],
        datasets: [
            {
                label: 'LiCoEval Score',
                data: [0.373, 0.376, 0.385, 0.317, 0.571, 0.985, 1.0, 0.714, 0.142, 0.781, 0.780, 0.360, 0.809, 0.153],
                backgroundColor: (context) => {
                    const label = data.labels[context.dataIndex];
                    if (["GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"].includes(label)) {
                        return 'rgba(153, 102, 255, 0.8)';
                    } else {
                        return 'rgba(255, 159, 64, 0.8)';
                    }
                },
                borderColor: (context) => {
                    const label = data.labels[context.dataIndex];
                    if (["GPT-3.5-Turbo", "GPT-4-Turbo", "GPT4o", "Gemini-1.5-Pro", "Claude-3.5-Sonnet", "Qwen2-7B-Instruct", "GLM-4-9B-Chat", "Llama-3-8B-Instruct"].includes(label)) {
                        return 'rgba(153, 102, 255, 1)';
                    } else {
                        return 'rgba(255, 159, 64, 1)';
                    }
                },
                borderWidth: 1
            }
        ]
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
                    max: 1.0,
                    ticks: {
                        stepSize: 0.1,
                        font: {
                            size: 15
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 15
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        generateLabels: (chart) => {
                            return [
                                { text: 'General LLM', fillStyle: 'rgba(153, 102, 255, 0.8)' },
                                { text: 'Code LLM', fillStyle: 'rgba(255, 159, 64, 0.8)' }
                            ];
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'LiCoEval Score',
                    font: {
                        size: 40
                    }
                }
            }
        }
    });
});