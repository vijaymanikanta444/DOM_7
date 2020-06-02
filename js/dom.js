// 1st VIDEO //
    // // EXAMINE THE DOCUMENT//

        // // console.log(document);
        // console.log(document.domain);
        // console.log(document.URL);
        // console.log(document.title);
        // console.log(document.head);
        // console.log(document.body);
        // // document.title = 123;
        // console.log(document.all);
        // console.log(document.all[10]);

        // // document.all[10].textContent = 'Hello';

        // console.log(document.forms);
        // console.log(document.links);
        // console.log(document.images);



        // GETELEMENTBYID  //

        // console.log(document.getElementById('header-title'));
        //var headerTitle = document.getElementById('header-title');
        //var header = document.getElementById('main-header');
        // console.log(headerTitle);
        // headerTitle.textContent = 'hello';
        // headerTitle.innerText = 'good bye';
        // console.log(headerTitle.innerText);
        // console.log(headerTitle.textContent);
        // headerTitle.innerHTML = '<h3>hello</h3>';
        //headerTitle.style.borderBottom = 'solid 3px #000';
        //header.style.borderBottom = 'solid 3px #000';

        //GETELEMENTSBYCLASSNAME //
        // var items = document.getElementsByClassName('list-group-item');
        // console.log(items);
        // console.log(items[1]);
        // items[1].textContent = 'Hello';
        // items[1].style.fontWeight = 'bold';
        // items[1].style.backgroundColor = 'yellow';

        // //items.style.backgroundColor = '#f4f4f4';

        // for(var  i = 0; i < items.length; i++){
        //  items[i].style.backgroundColor = '#f4f4f4';
        // }

        // GETELEMENTSBYTAGNAME //
        // var li = document.getElementsByTagName('li');
        // console.log(li);
        // console.log(li[1]);
        // li[1].textContent = 'Hello';
        // li[1].style.fontWeight = 'bold';
        // // li[1].style.backgroundColor = 'yellow';

        // //items.style.backgroundColor = '#f4f4f4';

        // for(var  i = 0; i < li.length; i++){
        // li[i].style.backgroundColor = '#f4f4f4';
        // }

        // QUERYSELECTOR //

        // var header = document.querySelector('#main-header');
        // header.style.borderBottom = 'solid 5px #ccc';

        // var input = document.querySelector('input');
        // input.value = 'hello WORLd';

        // var submit = document.querySelector('input[type="submit"]');
        // submit.value = 'SEND FILE';

        // var item = document.querySelector('.list-group-item');
        // item.style.color = 'red';

        // var lastItem = document.querySelector('.list-group-item:last-child');
        // lastItem.style.color = 'pink';

        // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
        // secondItem.style.color = 'blue';


        // // QUERYSELECTORALL //
        // var titles = document.querySelectorAll('.title');

        // console.log(titles)
        // titles[0].textContent = 'Hello'
        // titles[1].textContent = 'World'


        // var odd = document.querySelectorAll('li:nth-child(odd)');

        // //odd.style.backgroundColor = 'red'

        // for(var i = 0; i < odd.length; i++){
        //  odd[i].style.backgroundColor = 'orange'
        // }

        // var even = document.querySelectorAll('li:nth-child(even)');

        // //even.style.backgroundColor = 'red'

        // for(var i = 0; i < even.length; i++){
        //  even[i].style.backgroundColor = 'yellow'
        // }


        // var odd = document.querySelectorAll('li:nth-child(odd)');
        // var even = document.querySelectorAll('li:nth-child(even)');

        // for(var i = 0; i < odd.length; i++){
        // odd[i].style.backgroundColor = 'orange';
        // even[i].style.backgroundColor = 'yellow';

        // }

// 2nd VIDEO //

    //  //TRAVERSING THE DOM //


        //var itemList = document.querySelector('#items');
        // PARENTNODE
        // console.log(itemList.parentNode);
        // itemList.parentNode.style.background = '#f4f4f4'
        // console.log(itemList.parentNode.parentNode.parentNode.parentNode);

        // PARENTELEMENT
        // console.log(itemList.parentElement);
        // itemList.parentElement.style.background = '#f4f4f4'
        // console.log(itemList.parentElement.parentElement.parentElement);

        //childNodes
        // console.log(itemList.childNodes);

        // children
        // console.log(itemList.children);
        // console.log(itemList.children[2]);
        // itemList.children[2].style.backgroundColor = 'pink'

        // //firstChild
        // console.log(itemList.firstChild);
        // //firstElementChild
        // console.log(itemList.firstElementChild);
        // itemList.firstElementChild.textContent = 'Hello 1'

        // //lastChild
        // console.log(itemList.lastChild);
        // //lastElementChild
        // console.log(itemList.lastElementChild);
        // itemList.lastElementChild.textContent = 'Hello 1'

        // //nextSiblings
        // console.log(itemList.nextSibling);
        // //nextElementSiblings
        // console.log(itemList.nextElementSibling);

        // //previousSiblings
        // console.log(itemList.previousSibling);
        // //nextElementSiblings
        // console.log(itemList.previousElementSibling);
        // itemList.previousElementSibling.style.backgroundColor = '#ccc'


        // createElement

        // Create div
        // var newDiv = document.createElement('div');

        // // Create class

        // newDiv.className = 'hello';

        // //create id

        // newDiv.id = 'hello 1';

        // //add attribute
        // newDiv.setAttribute('title', 'hiee');

        // //create text node
        // var newDivText = document.createTextNode('hello world');

        // //add text to div

        // newDiv.appendChild(newDivText);

        // var container = document.querySelector('header .container');
        // var h1 = document.querySelector('header h1');


        // console.log(newDiv);
        // newDiv.style.fontSize = '30px';

        // container.insertBefore(newDiv, h1);

// 3rd VIDEO
        // EVENTS // 

        // var button = document.getElementById('button').addEventListener('click', buttonClick);

        // function buttonClick(e){
        // // console.log('button clicked');
        // // document.getElementById('header-title').textContent = 'hello world';
        // // document.querySelector('#main').style.backgroundColor = 'pink';
        // // console.log(e);
        // // console.log(e.target);
        // // console.log(e.target.id);
        // // console.log(e.target.className);
        // // console.log(e.target.classList);
        // // var output = document.getElementById('output');

        // // output.innerHTML = '<h3>'+e.target.id+'</h3>';
        // // console.log(e.type);
        // // console.log(e.clientX);
        // // console.log(e.clientY);

        // // console.log(e.offsetX);
        // // console.log(e.offsetY);


        // console.log(e.altKey);
        // console.log(e.shiftKey);
        // console.log(e.ctrlKey);

        // }

        // var button = document.getElementById('button');
        // var box = document.getElementById('box');



        // button.addEventListener('click', runEvent);
        // button.addEventListener('dblclick', runEvent);
        // button.addEventListener('mousedown', runEvent);
        // button.addEventListener('mouseup', runEvent);

        // box.addEventListener('mouseenter', runEvent);
        // box.addEventListener('mouseleave', runEvent);


        // box.addEventListener('mouseover', runEvent);
        // box.addEventListener('mouseout', runEvent);

        // box.addEventListener('mousemove', runEvent);

        // var itemInput = document.querySelector('input[type="text"]');
        // var form = document.querySelector('form');
        // var select = document.querySelector('select');

        // itemInput.addEventListener('keydown', runEvent);
        // itemInput.addEventListener('keyup', runEvent);
        // itemInput.addEventListener('keypress', runEvent);

        // itemInput.addEventListener('focus', runEvent);
        // itemInput.addEventListener('blur', runEvent);

        // itemInput.addEventListener('cut', runEvent);
        // itemInput.addEventListener('paste', runEvent);
        // itemInput.addEventListener('copy', runEvent);

        // itemInput.addEventListener('input', runEvent);

        // select.addEventListener('change', runEvent);
        // select.addEventListener('input', runEvent);

        // form.addEventListener('submit', runEvent);


        // function runEvent(e){
        // e.preventDefault();
        // console.log('EVENT TYPE:'+e.type)

        // console.log(e.target.value);

        // document.body.style.display = 'none';
        
        // console.log(e.target.value);
        // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

        // output.innerHTML = '<h3>MouseX : '+e.offsetX+' <h3> MouseY: '+e.offsetY+' </h3>'
        // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
        // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

        // }

