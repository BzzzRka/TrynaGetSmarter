document.addEventListener('DOMContentLoaded', function() {
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
    
    // Автоматически прячем все решения при загрузке
    document.querySelectorAll('.solution').forEach(sol => {
        sol.style.display = 'none';
    });
});