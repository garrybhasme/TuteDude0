const data=[
  {service: 'Dry Cleaning', price: 200.00, img:'./images/dryCleaning.jpg'},
  {service: 'Leathehr & Suede Cleaning', price: 999.00, img:'./images/leatherCleaning.jpg'},
  {service: 'Ironing', price: 300.00, img:'./images/ironong.jpg'},
  {service: 'Wedding Dress Cleaning', price: 2400.00, img:'./images/weddingDressCleaning.jpg'},
  {service: 'Wash & Fold', price: 140.00, img:'./images/washAndFold.jpg'},
  {service: 'Stain Removal', price: 500.00, img:'./images/stainRemoval.jpg'}
]
let counter=0;
let srNo=0;
const addedItemsList=[];
let totalAmount=0;
function changeItem(){
  counter++;
  counter=counter==data.length?counter=0:counter;
  const div=document.createElement('div');
  const img=document.createElement('img');
  img.src=data[counter].img;
  img.alt=data[counter].service;
  div.appendChild(img);
  const innerdiv=document.createElement('div');
  innerdiv.className='namePrice';
  innerdiv.innerHTML=`<h3>${data[counter].service}</h3><h3 id="price">₹${data[counter].price}</h3>`
  div.appendChild(innerdiv);
  const targetDiv=document.getElementById('item');
  targetDiv.innerHTML='';
  targetDiv.appendChild(div);
}
function addItemBill(item){
  const tr=document.createElement('tr');
  tr.innerHTML=`<td>${srNo}</td><td>${item.service}</td><td>₹${item.price}</td>`;
  const tobody=document.getElementsByTagName('tbody')
  tobody[0].appendChild(tr);  
  totalAmount+=item.price;
  document.getElementById('amount').innerText=`₹${totalAmount}`;
}

document.getElementById('add-btn').addEventListener('click',()=>{
  srNo++;
  addedItemsList.push(data[counter]);
  addItemBill(data[counter]);
  changeItem();
  document.getElementById('bookNowBtn').classList.add('btn-secondary');
  document.getElementById('bookNowMsg').innerHTML='';
});
document.getElementById('skip-btn').addEventListener('click',()=>{
  changeItem();
});
document.getElementById('bookNowBtn').addEventListener('click',()=>{
  const message=document.getElementById('bookNowMsg')
  if(addedItemsList.length==0){
    message.className='warningText'
    message.innerHTML=`<span class="info-icon warning">i</span>Add the items to the cart and book now`
  }else{
    message.className='successText'
    message.innerHTML=`<span class="info-icon success">i</span>Thank you for contacting, we Will get back to you`
  }
});

