// DOM Elements
const diagnosticsBtn = document.getElementById('diagnosticsBtn');
const simulationBtn = document.getElementById('simulationBtn');

// Button Event Listeners
diagnosticsBtn.addEventListener('click', () => {
  runDiagnostics();
});

simulationBtn.addEventListener('click', () => {
  startSimulation();
});

// Functions
function runDiagnostics() {
  alert('🚀 AI diagnostics running...\n\n• Checking plasma containment\n• Verifying magnet stability\n• Analyzing thermal thresholds');
  // In a real app, you would fetch data from an API here
}

function startSimulation() {
  alert('⚡ Fusion simulation initiated!\n\n• Heating plasma to 150M°C\n• Activating containment field\n• Beginning energy harvest');
  updateChart();
}

// Chart Configuration
function initializeChart() {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
      datasets: [{
        label: 'Plasma Temperature (Million °C)',
        data: [0, 25, 60, 90, 130, 145, 150],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff',
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#aaa'
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#aaa',
            callback: function(value) {
              return value + 'M°C';
            }
          }
        }
      }
    }
  });
}

// Dynamic Chart Update
function updateChart() {
  const newData = [0, 30, 70, 110, 140, 148, 152]; // Simulated more efficient reaction
  performanceChart.data.datasets[0].data = newData;
  performanceChart.update();
}

// Initialize Chart on Load
const performanceChart = initializeChart();