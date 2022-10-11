/*Kuracağınız yapı tamamen size kalmış. Birkaç tane püf noktamız var.

Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
Yazdığınız js dosyasını projenize eklemeyi unutmayın.
Bonus

Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın. */




const formDOM= document.querySelector ("#myForm")  // myform id li forma ulaştım.
formDOM.addEventListener("submit",newElement)

function newElement (event) {
    event.preventDefault()
    const inputDOM = document.querySelector ("#task")
    if (inputDOM.value) {
        addLi (inputDOM.value)
        const localKey = prompt ("local key değeri giriniz")
        localStorage.setItem (localKey,inputDOM.value)
        
    }else {
        alert ("Lütfen bir şeyler yazın")
    }
}



const ulDOM = document.querySelector ("#lists")
function addLi (inputInfo){
    const liDOM = document.createElement ("li")
    liDOM.classList.add ("list-group-item")
    const checkBox= `
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">${inputInfo}</label>
    <button type="submit" onclick="del_function ()" class="float-end pt-0 btn btn-danger" style="height:25px"> sil</button>
    `
    liDOM.innerHTML= checkBox
    ulDOM.appendChild (liDOM)
}

const del_function = () => {
    const delLiDOM = document.querySelector (".list-group-item")   //liste elemanına eklediğim buton içerisindeki onclick özelliğiyle çalışan fonksiyon
    ulDOM.removeChild(delLiDOM)
}











