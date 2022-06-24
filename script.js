btn = document.getElementById('searchBtn');
btn.addEventListener('click',function () {
    input = document.getElementById('input');
    if (input.value == "" ) {
        alert('please enter the name of a pokemon')
    }
else{ 
xhr = new XMLHttpRequest();
url = `https://pokeapi.co/api/v2/pokemon/${input.value}`
xhr.open('GET',url, true);
response = document.getElementById('response')
console.log('clicked')
xhr.send(); 
xhr.onload = function(){
    try {
       var data = JSON.parse(this.responseText);
    } catch (error) {
        alert('Something went wrong , please try again')
    }

// console.log(data)
response.innerHTML = `<img class="w-24 py-2" src="${data.sprites.other.dream_world.front_default}" alt="">
<h1 class="text-xl font-semibold text-black">${data.name}</h1>
<p class="text-sm font-semibold py-2 px-1 ">
${data.name} is a ${data.types[0].type.name} type pokemon , it's weight is ${data.weight} and height is ${data.height} . Some of it's attacks are ${data.abilities[0].ability.name} , ${data.abilities[1].ability.name} 
</p>`

}
}}
)