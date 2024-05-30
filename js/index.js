var productNameInput = document.getElementById('productNameInput'); // كده المتغير ده شايل الانبوت اللي بالاي دي ده يعني مسكته علشان اشوف هعمل في اي   
var producPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var productsContainer = []; // علشان احتفظ باللي بيتكتب وميتمسحش بعد كل مرة بدوس علي الزرار فهخز اللي هكتبه في كرتونة فهعما اراي او ليستة كدا اعبي فيها 
//انا دلوقتي هخرجله الداتا من اللوكال ستوريدج وهحطها في الاراي وهعرضها تحت
if (localStorage.getItem('products') != null ) // هسأله الاول هل الراجل له بيانات في اللوكال ستوريدج ولا لأ لو ملوش بيانات متعملش حاجة 
{
productsContainer = JSON.parse(localStorage.getItem('products')); //ولو له بيانات هاتهاله ورجعهاله تاني جيسون واعرضهاله
displayProducts();   // بعمل جيسون . بارس علشان ارجع الداتا ميثود تاني بعد ماكانت سترينج علشان اخزنها في الاراي
}   // كده جبت الداتا من اللوكال ستوريدج وحطيتها في الاراي وهعرضها بقا دلوقتي

//يبقا كدا اول ماهدوس علي الزرار بتاع الاد الفانكشن دي هتشتغل وهتسحب الفاليوز وبعدين هتعملها بوش في الاراي بتاعي وبعدين هتعمل كلير هتمسح اللي كتبته فوق علشان اكتب مكانه تاني وبعدين هتشوف الفانكشن بتاعة الديسبلاي فيها اي وهتعرض اللي مكتوب فيها وهكذا مع كل دوسة زرار

function addProduct()
{
    //هقوله هنا لو عملت كول لفالديت برودكت نيم ورجعت ترو
   if(validateProductName() == true){ //دي بتاعة الريج اكس
    var product = {  //عملت اوبجيكت وهاخد فيه الفاليو بتاع كل انبوت
        name:productNameInput.value, //كده انا باخد الفاليو اللي هي الكلمة اللي بتتكتب في برودكت نيم انبوت وبحطها في البروبيرتي اللي اسمها نيم بتاع الاوبجكت ده
        price:producPriceInput.value,
        category:productCategoryInput.value,   //كده انا كودت اوبجيكت من اللي بيدخل
        desc:productDescriptionInput.value
    }
    productsContainer.push(product); // كل اوبجيكت هعمله هعبيه هنا علشان لو معملتش كدا كان كل اوبجيكت هيتكتب كان هيمسح اللي قبله
    localStorage.setItem('products' , JSON.stringify(productsContainer)); //علشان اخزن الداتا اللي دخلتها في الاراي جوه اللوكال ستوريج بعد كل منتج هضيفه بحيث برودكتس دي اسم الداتا عادي انا اللي بكتبه كنت ممكن اكتب اي اسم اخزن فيه واللوكال ستوريدج لازم بتاخد سترينج فهحول الاراي لسترينج
    clearForm(); //هعمل كول للفانكشن اللي بتعمل كلير بعد البوش علي طول
    displayProducts()  // لازم اعمل كول للفانكشن هنا بعد كل عملية اضافة لاني اللينث بيتغير بعد كل اضافة بيزيد واحد
    console.log(productsContainer);  // كده بسحب الفاليوز اكون بيها اوبجيكت وباخد الاوبجيكت اعبيها في الاراي وبعدين بطبع الا
   }
   else{
    window.alert('Invalid productName');
   }
}

// عايز بعد كل دوسة زرار الاقي الفاليوز اللي كنت كاتبها اتمسحت بدل ماامسحها بايدي بعد كل دوسة فهعمل كلير
function clearForm(){
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescriptionInput.value = '';
    }
//عايز بعد كل دوسة زرار الاقي الفاليوز اللي كنت كاتبها اتخزنت واتعرضت في الحدول تحت فهعمل ديسبلاي
function displayProducts(){
    var cartoona = '' ;  //ده سترينج فاضي لازم اعمله علشان اعبي فيه اللي هدخله
    for (var i=0 ; i < productsContainer.length ; i++ ){ // علشان اعدي علي ليسته واشوف عدد منتجاتها فور لوب علي طول وعلشان يمشي علي الاراي كلها حطيت الشرط اللي في النص دا اللي هو طول الاراي
        cartoona += `<tr>  
        <td>${i}</td>                              
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td> 
        <td><button class="btn btn-sm btn-outline-warning">Update</button></td>
        </tr>`  //+=علشان يعبي اللي دخلته جوه الكرتونة ولازم 
    }//ووانا بعبي في الكرتونة الصفوف هعبي زرار عادي
    document.getElementById('tableBody').innerHTML = cartoona; //علشان اخلي الجافاسكريبت تحط اللي مليته في الاتش تي ام ال
}
//ومش هعمل كول للفانكشن هنا لانه كدا هيكون في الطل وهيشتغل اول ماهفتح وانا مش هكون اصلا لسه دخلت حاجة 
function deleteProduct(deletedIndex)
{
productsContainer.splice(deletedIndex,1); // السبلايس هي اللي بتمسح من الاراي وبتاخد بداية العنصر اللي همسح من عنده وهمسح كام عنصر
//بعد مامسحت محتاج ابدل الاراي اللي كانت موجودة في اللوكال ستوريدج وهسيت فيها الاراي الجديدة بعد المسح علشان يتمسح من اللوكال ستوريدج هي كمان
localStorage.setItem('products' , JSON.stringify(productsContainer)); //  هاخد الاراي اللي مسحت منها وهحطها في اللوكال ستوريدج او بالبالدي كده زي مامسحت من الاراي همسح من اللوكال ستوريدج 
displayProducts(); //علشان يعرض تاني بعد عملية المسح علشان اليوزر يشوف 
}//لاحظ اني عملت ديسبلاي لحد دلوقتي تلت مرات اول مرة اول ماهفتح علشان لو فيه داتا متخزنة في اللوكال ستوريدج وتاني مرة بعد ماهضيف وتالت مرة بعد ماهمسح

//هاخد الكلمة اللي المستخدم بيبحث عليها وهحولها لحروف سمول وهاخد الكلمات اللي ببحث فيها بردو هحولها لسمول علشان خاطر الانكلودز بتقرن سمول بسمول او كابيتال بكابيتال
function searchProduct(term) //تيرم دي الكلمة اللي المستخدم بيبحث بيها
{
    var cartoona = ''; //هعبي في الكرتونة المنتجات اللي بتحتوي علي الكلمة اللي دخلتها
    for (var i=0 ; i < productsContainer.length ; i++ )
    {
        //يعني هل اسم المنتج بعد ماحولته لسمول يحتوي علي الكلمة اللي دخلتها بعد ماحولتها سمول
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true)
        { //اللي فرق ده عن الديسبلاي هو الاف كونديشن بس يعني هو مش هيعبي جوه الكرتونة الا لو اسمه يحتوي علي الكلمة
            cartoona += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
            <td><button class="btn btn-sm btn-outline-warning">Update</button></td>
            </tr> `
        }
    }
    document.getElementById('tableBody').innerHTML = cartoona; // بعد ماتخلص الفور لوب بتاعتك ادخل جوه الاتش تي ام ال وحطلي الكرتونة الجديدة
}
//هجرب الريجيولار اكسبريشن علي اضافة اسم منتج
function validateProductName()
{
var regex = /^[A-Z][a-z]{3,9}$/;
if(regex.test(productNameInput.value) == true)
{
    return true;
}
else{
    return false;
}
}
// وهطلع احط اللي عملته ده في فانكشن الادد برودكت
// وهعملها كول فوق جوه الاف علشان اشوف هدخل ولا لأ وهحط اللي كان في فانكشن الادد كله جواها 





















