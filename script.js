
const students = [
    { name: "Alice", marks: "38%", class: "5th", address: "123" },
    { name: "Dhurandar", marks: "38%", class: "5th", address: "123" },
    { name: "Jameeljamali", marks: "38%", class: "5th", address: "123" },
    { name: "Arshadpappu", marks: "38%", class: "5th", address: "123" },
    { name: "Majoriqbal", marks: "38%", class: "5th", address: "123" },
    { name: "Yaleena", marks: "38%", class: "5th", address: "123" },
    { name: "Rehmandakait", marks: "38%", class: "5th", address: "123" },
    { name: "Babudakait", marks: "38%", class: "5th", address: "123" },
    { name: "Zaalima", marks: "38%", class: "5th", address: "123" },
    { name: "Modi", marks: "38%", class: "5th", address: "123" },
    { name: "Ajithdowal", marks: "38%", class: "5th", address: "123" },
    { name: "Jeskirat", marks: "38%", class: "5th", address: "123" }
];
const cardsContainer = document.querySelector('.cards');
const input = document.getElementById('myinput');
function renderCards(data) {
    const cardsHTML = data.map(student => {
        return `
        <div class="card">
            <ul class="list">
                <li>Student name: <b class="name">${student.name}</b></li>
                <li>marks: <b>${student.marks}</b></li>
                <li>class: <b>${student.class}</b></li>
                <li>address: <b>${student.address}</b></li>
            </ul>
        </div>
        `;
    }).join("");
    cardsContainer.innerHTML = cardsHTML;
}
input.addEventListener('input', function () {
    const value = input.value.toLowerCase().trim();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );
    renderCards(filteredStudents);
});
renderCards(students);