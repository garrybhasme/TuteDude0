const data = [
  { name: "Gaurav Bhasme", marks: 95, class: "10A", address: "Karad Maharashtra" },
  { name: "Gaurav Patil", marks: 88, class: "10B", address: "Kolhapur Maharashtra" },
  { name: "Ganesh Shinde", marks: 76, class: "10C", address: "Satara Maharashtra" },
  { name: "Gopal Sharma", marks: 82, class: "10A", address: "Jaipur Rajasthan" },
  { name: "Gokul Iyer", marks: 91, class: "10B", address: "Chennai Tamil Nadu" },
  { name: "Rahul Verma", marks: 85, class: "10A", address: "Delhi NCR India" },
  { name: "Rakesh Verma", marks: 78, class: "10B", address: "Lucknow Uttar Pradesh" },
  { name: "Ravi Kumar", marks: 69, class: "10C", address: "Patna Bihar India" },
  { name: "Rohan Singh", marks: 92, class: "10A", address: "Noida Uttar Pradesh" },
  { name: "Amit Sharma", marks: 80, class: "10B", address: "Mumbai Maharashtra" },
  { name: "Ankit Sharma", marks: 74, class: "10C", address: "Pune Maharashtra" },
  { name: "Anil Kumar", marks: 67, class: "10A", address: "Bhopal Madhya Pradesh" },
  { name: "Aman Gupta", marks: 89, class: "10B", address: "Indore Madhya Pradesh" },
  { name: "Priya Singh", marks: 93, class: "10A", address: "Varanasi Uttar Pradesh" },
  { name: "Pooja Singh", marks: 87, class: "10B", address: "Allahabad Uttar Pradesh" },
  { name: "Pankaj Yadav", marks: 72, class: "10C", address: "Gorakhpur Uttar Pradesh" },
  { name: "Sneha Iyer", marks: 90, class: "10A", address: "Chennai Tamil Nadu" },
  { name: "Suresh Nair", marks: 65, class: "10B", address: "Kochi Kerala India" },
  { name: "Sunil Patil", marks: 77, class: "10C", address: "Nashik Maharashtra" },
  { name: "Kiran Joshi", marks: 84, class: "10A", address: "Udaipur Rajasthan" },
  { name: "Kunal Mehta", marks: 79, class: "10B", address: "Ahmedabad Gujarat" }
];
const divContiner = document.querySelector('.container');
const searchResult = document.querySelector('.searchResult');

function createCardFromInfo(info){
  const div=document.createElement('div');
  div.className='card';
  const ul=document.createElement('ul');
  Object.keys(info).forEach((key)=>{
    const li=document.createElement('li');
    li.innerHTML=`${key}: <span>${info[key]}</span>`;
    ul.appendChild(li)
  });
  div.appendChild(ul);
  return div;
}

data.forEach((card)=>{
  divContiner.appendChild(createCardFromInfo(card));
});

const input = document.getElementById("search");
input.addEventListener("input", () => {
  divContiner.innerHTML='';
  const value=document.getElementById('search').value
  searchResult.innerHTML=`<h2>Search Results for ${value}</h2>`;
  const filterData=data.filter(info=>info.name.toLowerCase().startsWith(value.toLowerCase()));
  filterData.forEach((card)=>{
    divContiner.appendChild(createCardFromInfo(card));
  });
})