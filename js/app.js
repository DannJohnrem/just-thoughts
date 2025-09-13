console.log("App loaded");

const input = document.getElementById("thoughtInput");
const addBtn = document.getElementById("addThoughtBtn");
const clearBtn = document.getElementById("clearAllBtn");
const count = document.getElementById("count");
const list = document.getElementById("thoughtList");

// console.log("Elements:", { input, addBtn, clearBtn, count, list });

// addBtn.addEventListener("click", () => {
//     const text = input.value.trim();

//     if (!text) {
//         alert("Please enter a thought.");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = text;
//     list.appendChild(li);
//     input.value = '';
//     input.focus();
// });

let thoughts = [];

function renderThoughts() {
    list.innerHtml = '';
    thoughts.forEach(thoughts => {
        const li = document.createElement("li");
        li.dataset.id = thoughts.id;

        const textSpan = document.createElement("span");
        textSpan.className = "text";
        textSpan.textContent = thoughts.text;

        const btns = document.createElement("div");
        btns.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.dataset.action = "edit";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.dataset.action = "delete";

        btns.append(editBtn, delBtn);
        li.append(textSpan, btns);
        list.appendChild(li);
    });

    updateCount();
}

function updateCount() {
    const total = thoughts.length;
    count.textContent = total === 0 ? "No thoughts yet." : `${total} thoght${total > 1 ? 's' : ''}`;
}

function addThought (text) {
    const newThought = { id: Date.now().toString(), text, createdAt: new Date().toISOString() };
    thoughts.push(newThought);
    renderThoughts();
}

addBtn.addEventListener("click",() => {
    const text = input.value.trim();
    if (!text) return alert("Please enter a thought.");
    addThought(text);
    input.value = '';
    input.focus();
});


