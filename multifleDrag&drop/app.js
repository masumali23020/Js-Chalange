let color = document.getElementById("color");
let createBtn = document.getElementById("createBtn");
let list = document.getElementById("list");



createBtn.onclick = (e) => {
  e.preventDefault();
 


  let newNote = document.createElement("div");
  newNote.classList.add('note')

  newNote.innerHTML = `

   <sapn class="close"> + </sapn>
          <textarea
            rows="10"
            cols="30"
            placeholder="Write Content..."
          ></textarea>
         
  `;
   

  newNote.style.borderColor = color.value;

  list.appendChild(newNote);
};

let cursor = {
  x:null,
  y:null
}
let note = {
  dom: null,
  x: null,
  y:null
}

document.addEventListener('mousedown', (ev)=> {
  if(ev.target.classList.contains('note')){
    cursor = {
      x:ev.clientX,
      y:ev.clientY
    }
    note = {
      dom: ev.target,
      x: ev.target.getBoundingClientRect().left,
      y: ev.target.getBoundingClientRect().top
    }
    // console.table(note)
  }
})
document.addEventListener('mousemove', (event) => {
  if(note.dom == null) return;
  let currentCursor = {
      x: event.clientX,
      y: event.clientY
  }
  let distance = {
      x: currentCursor.x - cursor.x,
      y: currentCursor.y - cursor.y
  }
  note.dom.style.left = (note.x + distance.x) + 'px';
  note.dom.style.top = (note.y + distance.y) + 'px';
  note.dom.style.cursor = 'grab';
})
document.addEventListener('mouseup', () => {
  if( note.dom == null) return;
  note.dom.style.cursor = 'auto';
  note.dom = null;  
})