document.addEventListener('DOMContentLoaded', function() {
    // Автоматически прячем все решения при загрузке (только если не скрыты)
    document.querySelectorAll('.solution').forEach(sol => {
        if (sol.style.display !== 'block') {
            sol.style.display = 'none';
        }
    });
    
    // Добавляем обработчики ко всем кнопкам
    document.querySelectorAll('.toggle-btn').forEach(button => {
        const solutionId = button.getAttribute('data-target');
        const solution = document.getElementById(solutionId);
        
        if (solution) {
            button.addEventListener('click', function() {
                if (solution.style.display === 'none' || !solution.style.display) {
                    solution.style.display = 'block';
                    button.textContent = 'Скрыть решение';
                    button.style.background = '#e74c3c';
                } else {
                    solution.style.display = 'none';
                    button.textContent = 'Показать решение';
                    button.style.background = '#3498db';
                }
            });
        }
    });
});