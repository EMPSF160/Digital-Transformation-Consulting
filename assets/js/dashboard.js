/* ==========================================================================
   NEXUS CONSULTING - Executive Client Dashboard JavaScript
   Chart.js Metrics, Project Tracking, Widgets & Interactive Controls
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Chart.js Line Chart: Digital Transformation ROI & Efficiency Progress
    const roiCtx = document.getElementById('dashboardRoiChart');
    if (roiCtx && typeof Chart !== 'undefined') {
        new Chart(roiCtx, {
            type: 'line',
            data: {
                labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
                datasets: [
                    {
                        label: 'Cloud Efficiency ROI (%)',
                        data: [120, 185, 240, 310, 420, 510, 680],
                        borderColor: '#00E5FF',
                        backgroundColor: 'rgba(0, 229, 255, 0.12)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#00E5FF',
                        pointRadius: 5
                    },
                    {
                        label: 'AI Automation Impact ($M)',
                        data: [15, 28, 45, 62, 90, 125, 168],
                        borderColor: '#9D4DFF',
                        backgroundColor: 'rgba(157, 77, 255, 0.08)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#9D4DFF',
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#94A3B8',
                            font: { family: 'Plus Jakarta Sans', size: 12 }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#94A3B8' }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#94A3B8' }
                    }
                }
            }
        });
    }

    // 2. Chart.js Donut Chart: Resource & Budget Allocation
    const budgetCtx = document.getElementById('dashboardBudgetChart');
    if (budgetCtx && typeof Chart !== 'undefined') {
        new Chart(budgetCtx, {
            type: 'doughnut',
            data: {
                labels: ['AI & Machine Learning', 'Cloud Infrastructure', 'Cybersecurity', 'Enterprise Apps', 'Data Governance'],
                datasets: [{
                    data: [35, 25, 18, 14, 8],
                    backgroundColor: [
                        '#6C2BFF',
                        '#00E5FF',
                        '#9D4DFF',
                        '#3B82F6',
                        '#10B981'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94A3B8',
                            font: { family: 'Plus Jakarta Sans', size: 11 },
                            padding: 15
                        }
                    }
                },
                cutout: '72%'
            }
        });
    }

    // 3. Project Filter Tabs
    const projectTabs = document.querySelectorAll('.project-tab-btn');
    const projectRows = document.querySelectorAll('.project-table-row');

    if (projectTabs.length > 0) {
        projectTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                projectTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const category = tab.getAttribute('data-category');
                projectRows.forEach(row => {
                    if (category === 'all' || row.getAttribute('data-status') === category) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
    }
});
