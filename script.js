window.onload = function () {

    const navigation = document.querySelector('.container .navigation');
    document.querySelector('.toggle').onclick = function(){
        
        this.classList.toggle('active');

        navigation.classList.toggle('active');

        /* // other way 
        if(this.classList.toggle('active')) {
            document.querySelector('.container .navigation').style.width = '80px';
        } else {
            document.querySelector('.container .navigation').style.width = '300px';
        } */
        
    }



}