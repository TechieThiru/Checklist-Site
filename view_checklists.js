document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/checklists');
    const checklists = await response.json();

    const container = document.getElementById('checklists');
    checklists.forEach(checklist => {
        const link = document.createElement('a');
        link.href = `view_checklist_details.html?id=${checklist._id}`;
        link.textContent = `${checklist.name} - ${new Date(checklist.createdAt).toLocaleString()}`;
        container.appendChild(link);
        container.appendChild(document.createElement('br'));
    });
});
