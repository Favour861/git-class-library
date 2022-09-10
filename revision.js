var bookArr = [];
var areYouEditing = false;
var editingIndex;

function saveBook(){
    if(areYouEditing){
        let bookTitle = title.value;
        let bookAuthor = author.value;
        let bookDate = date_bought.value;
        let bookPrice = price.value;
        let bookObj = {title: bookTitle, author: bookAuthor, date_bought: bookDate, price: bookPrice};

        bookArr[editingIndex] = bookObj;
        displayBooks();
        localStorage.setItem("books", JSON.stringify(bookArr));
    }else{
        // alert("ioniubioncionoie");
        let bookTitle = title.value;
        let bookAuthor = author.value;
        let bookDate = date_bought.value;
        let bookPrice = price.value;
    
        let bookObj = {title: bookTitle, author: bookAuthor, date_bought: bookDate, price: bookPrice};
        bookArr.push(bookObj);
    
        displayBooks();
        localStorage.setItem("books", JSON.stringify(bookArr));
    }
}

function displayBooks(){
    bookBox.innerHTML = "";
    // for(index = 0; index < bookArr.length; index++){
    //    bookBox.innerHTML += `<tr>
    //         <td>${index+1}</td>
    //         <td>${bookArr[index].title}</td>
    //         <td>${bookArr[index].author}</td>
    //         <td>${bookArr[index].date_bought}</td>
    //         <td>${bookArr[index].price}</td>
    //    </tr>`;
    // }
    bookArr.map((eachBook, index)=>{
        bookBox.innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td>${eachBook.title}</td>
                <td>${eachBook.author}</td>
                <td>${eachBook.date_bought}</td>
                <td>${eachBook.price}</td>
                <td><button class="btn btn-sm btn-success me-2" onclick="editBook(${index})">Edit</button><button class="btn btn-sm btn-danger" onclick="deleteBook(${index})">Delete</button></td>
            </tr>
        `
    })

}

const loadBooks = () => {
    let books = localStorage.getItem('books');
    if(books){
        bookArr = JSON.parse(books);
    }
    displayBooks();
}

const deleteBook = (index) => {
    if(confirm("Are you sure you want to delete this book?")){
        bookArr.splice(index,1);
        displayBooks();
        localStorage.setItem("books",JSON.stringify(bookArr));
    }
}

const editBook = (index) => {
    editingIndex = index;

    let book = bookArr[index];
    title.value = book.title;
    author.value = book.author;
    date_bought.value = book.date_bought;
    price.value = book.price;

    saveBtn.innerHTML = "Update Book";
    areYouEditing = true;
    // saveBtn.addClass("btn-success");
}

// let username = usernameInp.value;
// let customers = [{username: "Favour", password: "0900909090909"},{username: "Taiwo", password: "080808080"},{username: "Iyanuayo", password: "070707070"}];
// // let check = customers.findIndex(c => c.username.toLowerCase() == username.toLowerCase());

// // // if favour exist, check = index;
// // // if favour does not exist, check = -1

// // if(check < 0){
// //     // favour does not exist
// // }else{
// //     // username favour already exist
// // }

// let check = customers.filter(c => c.username.toLowerCase() == username.toLowerCase());

// if(check.length == 0){
//     // username does not exist
// }else{
//     // username already exist
// }

// - filter
// - findIndex
// - indexOf
// - map
// - every
// - sum
// - reduce
// - slice
// - splice


// 1. Create account (name, email, phone, password)
// 2. Sign in (email, password)
// 3. Generate Account Number - 10-digit number (Math.random)
// 4. Operations

// - deposit
// - withrawal
// - transfer
// - history




