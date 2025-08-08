document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        // Update active link
        document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');

        // Show correct project content
        const projectId = link.getAttribute('data-project');
        document.querySelectorAll('.project-content').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(projectId).classList.add('active');
    });
});
