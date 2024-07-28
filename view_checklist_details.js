document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const checklistId = urlParams.get('id');

    const response = await fetch(`/api/checklists/${checklistId}`);
    const checklist = await response.json();

    document.getElementById('name').value = checklist.name;
    document.querySelector('input[name="q1_yes"]').checked = checklist.q1_yes;
    document.querySelector('input[name="q1_no"]').checked = checklist.q1_no;
    document.querySelector('input[name="q1_na"]').checked = checklist.q1_na;
    document.querySelector('input[name="q2_yes"]').checked = checklist.q2_yes;
    document.querySelector('input[name="q2_no"]').checked = checklist.q2_no;
    document.querySelector('input[name="q2_na"]').checked = checklist.q2_na;
    document.querySelector('input[name="q3_yes"]').checked = checklist.q3_yes;
    document.querySelector('input[name="q3_no"]').checked = checklist.q3_no;
    document.querySelector('input[name="q3_na"]').checked = checklist.q3_na;
    document.querySelector('input[name="q4_yes"]').checked = checklist.q4_yes;
    document.querySelector('input[name="q4_no"]').checked = checklist.q4_no;
    document.querySelector('input[name="q4_na"]').checked = checklist.q4_na;    
    document.querySelector('input[name="q5_yes"]').checked = checklist.q5_yes;
    document.querySelector('input[name="q5_no"]').checked = checklist.q5_no;
    document.querySelector('input[name="q5_na"]').checked = checklist.q5_na;
    document.querySelector('input[name="q6_yes"]').checked = checklist.q6_yes;
    document.querySelector('input[name="q6_no"]').checked = checklist.q6_no;
    document.querySelector('input[name="q6_na"]').checked = checklist.q6_na;
    document.querySelector('input[name="q7_yes"]').checked = checklist.q7_yes;
    document.querySelector('input[name="q7_no"]').checked = checklist.q7_no;
    document.querySelector('input[name="q7_na"]').checked = checklist.q7_na;
    document.querySelector('input[name="q8_yes"]').checked = checklist.q8_yes;
    document.querySelector('input[name="q8_no"]').checked = checklist.q8_no;
    document.querySelector('input[name="q8_na"]').checked = checklist.q8_na;   
    document.querySelector('input[name="q9_yes"]').checked = checklist.q9_yes;
    document.querySelector('input[name="q9_no"]').checked = checklist.q9_no;
    document.querySelector('input[name="q9_na"]').checked = checklist.q9_na;
    document.querySelector('input[name="q10_yes"]').checked = checklist.q10_yes;
    document.querySelector('input[name="q10_no"]').checked = checklist.q10_no;
    document.querySelector('input[name="q10_na"]').checked = checklist.q10_na;
    document.querySelector('input[name="q11_yes"]').checked = checklist.q11_yes;
    document.querySelector('input[name="q11_no"]').checked = checklist.q11_no;
    document.querySelector('input[name="q11_na"]').checked = checklist.q11_na;
    document.querySelector('input[name="q12_yes"]').checked = checklist.q12_yes;
    document.querySelector('input[name="q12_no"]').checked = checklist.q12_no;
    document.querySelector('input[name="q12_na"]').checked = checklist.q12_na;
    document.querySelector('input[name="q13_yes"]').checked = checklist.q13_yes;
    document.querySelector('input[name="q13_no"]').checked = checklist.q13_no;
    document.querySelector('input[name="q13_na"]').checked = checklist.q13_na;
    document.querySelector('input[name="q14_yes"]').checked = checklist.q14_yes;
    document.querySelector('input[name="q14_no"]').checked = checklist.q14_no;
    document.querySelector('input[name="q14_na"]').checked = checklist.q14_na;
});

document.getElementById('view-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const updatedChecklist = {
        name: document.getElementById('name').value,
        q1_yes: document.querySelector('input[name="q1_yes"]').checked,
        q1_no: document.querySelector('input[name="q1_no"]').checked,
        q1_na: document.querySelector('input[name="q1_na"]').checked,
        q2_yes: document.querySelector('input[name="q2_yes"]').checked,
        q2_no: document.querySelector('input[name="q2_no"]').checked,
        q2_na: document.querySelector('input[name="q2_na"]').checked,
        q3_yes: document.querySelector('input[name="q3_yes"]').checked,
        q3_no: document.querySelector('input[name="q3_no"]').checked,
        q3_na: document.querySelector('input[name="q3_na"]').checked,
        q4_yes: document.querySelector('input[name="q4_yes"]').checked,
        q4_no: document.querySelector('input[name="q4_no"]').checked,
        q4_na: document.querySelector('input[name="q4_na"]').checked,
        q5_yes: document.querySelector('input[name="q5_yes"]').checked,
        q5_no: document.querySelector('input[name="q5_no"]').checked,
        q5_na: document.querySelector('input[name="q5_na"]').checked,
        q6_yes: document.querySelector('input[name="q6_yes"]').checked,
        q6_no: document.querySelector('input[name="q6_no"]').checked,
        q6_na: document.querySelector('input[name="q6_na"]').checked,
        q7_yes: document.querySelector('input[name="q7_yes"]').checked,
        q7_no: document.querySelector('input[name="q7_no"]').checked,
        q7_na: document.querySelector('input[name="q7_na"]').checked,
        q8_yes: document.querySelector('input[name="q8_yes"]').checked,
        q8_no: document.querySelector('input[name="q8_no"]').checked,
        q8_na: document.querySelector('input[name="q8_na"]').checked,
        q9_yes: document.querySelector('input[name="q9_yes"]').checked,
        q9_no: document.querySelector('input[name="q9_no"]').checked,
        q9_na: document.querySelector('input[name="q9_na"]').checked,
        q10_yes: document.querySelector('input[name="q10_yes"]').checked,
        q10_no: document.querySelector('input[name="q10_no"]').checked,
        q10_na: document.querySelector('input[name="q10_na"]').checked,
        q11_yes: document.querySelector('input[name="q11_yes"]').checked,
        q11_no: document.querySelector('input[name="q11_no"]').checked,
        q11_na: document.querySelector('input[name="q11_na"]').checked,
        q12_yes: document.querySelector('input[name="q12_yes"]').checked,
        q12_no: document.querySelector('input[name="q12_no"]').checked,
        q12_na: document.querySelector('input[name="q12_na"]').checked,
        q13_yes: document.querySelector('input[name="q13_yes"]').checked,
        q13_no: document.querySelector('input[name="q13_no"]').checked,
        q13_na: document.querySelector('input[name="q13_na"]').checked,
        q14_yes: document.querySelector('input[name="q14_yes"]').checked,
        q14_no: document.querySelector('input[name="q14_no"]').checked,
        q14_na: document.querySelector('input[name="q14_na"]').checked,

    };

    const response = await fetch(`/api/checklists/${checklistId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedChecklist)
    });

    if (response.ok) {
        alert('Checklist updated successfully');
        location.href = 'index.html';
    } else {
        alert('Failed to update checklist');
    }
});

document.getElementById("print-pdf").addEventListener("click", () => {
    const doc = new jsPDF();
    let y = 10;
    const title = 'Checklist Details';
    
    // Add title
    doc.setFontSize(16);
    doc.text(title, 10, y);
    y += 10;
    
    // Add table headers
    doc.setFontSize(12);
    const headers = ['WOC', 'Yes', 'No', 'NA'];
    headers.forEach((header, index) => {
        doc.text(header, 10 + (index * 50), y);
    });
    y += 10;

    // Add table rows
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        let text = '';
        cells.forEach((cell) => {
            text += cell.innerText.trim() + ' ';
        });
        doc.text(text, 10, y);
        y += 10;
    });

    doc.save('checklist.pdf');
});

function enableEditing() {
    document.getElementById('view-form').querySelectorAll('input').forEach(input => input.disabled = false);
    document.getElementById('save-button').style.display = 'inline-block';
}
