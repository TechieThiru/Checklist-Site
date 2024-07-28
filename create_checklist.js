document.getElementById('create-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const checklist = {
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

    const response = await fetch('/api/checklists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(checklist)
    });

    if (response.ok) {
        alert('Checklist saved successfully');
        location.href = 'index.html';
    } else {
        alert('Failed to save checklist');
    }
});
