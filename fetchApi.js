console.log('Fetch Api');

display("fetch.txt");

async function display(file){
   let  x =  await fetch(file);
   let  y = await x.text();
    console.log(y)
}
