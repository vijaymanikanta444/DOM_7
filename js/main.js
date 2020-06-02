//4th VIDEO
var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//DELETEEVENT
itemList.addEventListener('click', removeItem);

//filterevent
filter.addEventListener('keyup', filterItems);

//add item

function addItem(e){
    e.preventDefault();

    // getinput value
var newItem = document.getElementById('item').value;

// create new li element
var li = document.createElement('li');

//create class
li.className = 'list-group-item';
console.log(li);

//add text noode
li.appendChild(document.createTextNode(newItem));

//create delete button element
var deleteBtn = document.createElement('button');

// add classes to delete button

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//add text node
deleteBtn.appendChild(document.createTextNode('X'));

// append button to li
li.appendChild(deleteBtn);

// append li to list
itemList.appendChild(li);

}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure?')){
         var li = e.target.parentElement;
         itemList.removeChild(li);

     }
    }
   
}

//FILTERITEMS

function filterItems(e){
    // CONVERT TO LOWERCASE
    var text = e.target.value.toLowerCase();
    // get lis
    var items= itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)  != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';

        }
    });
}