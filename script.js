document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#search-box');
  const itemsCategory = document.querySelector('#item-category');
  const itemContainer = document.querySelector('#items-container');

  const items = [
    {
      id:1,
      name: "Thuppaki",
      category: "Action",
      description: "army man story",
    },
    {
      id:2,
      name: "Remo",
      category:"Love",
      description:"a guy fall love in commited girl",
    },
    {
      id:3,
      name:"soothu kavvum",
      category:"Comedy",
      description:"a comedy theif movie",
    },
    {
      id:4,
      name:"Kanchana",
      category:"Horror",
      description:"the evil inside a man ",
    },
    {
      id:5,
      name:"Pokkiri",
      category:"Action",
      description:"a undercop police acts as a rowdy",
    },
    {
      id:6,
      name:"vtv",
      category:"Love",
      description:"young boy loves aged girl",
    },
    {
      id:7,
      name:"oru kal kannadi",
      category:"Comedy",
      description:"two boys comedy skit",
    },
    {
      id:8,
      name:"Aranmanai",
      category:"Horror",
      description:"devil lives in place",
    },
    {
      id:9,
      name:"Premalu",
      category:"Love",
      description:"unemployed boy loves girls",
    },
    {
      id:10,
      name:"vikram",
      category:"Action",
      description:"retired cop revenge story",
    },
  ];

  /* display items */
  function displayItems(filterItems){
    itemContainer.innerHTML = '';
    if(filterItems.length === 0){
      itemContainer.innerHTML = '<p>no items found</p>';
      return;
    }

    filterItems.forEach(item => {
      const divElement = document.createElement('div');
      divElement.classList.add('item');
      divElement.innerHTML = `
      <h2>${item.name}</h2>
      <p class="category">category:${item.category}</p>
      <p class="desc">${item.description}</p>
      `;
      itemContainer.appendChild(divElement);
    })
  }

  /* filter functionality */
  function filterItems(){
    const input = searchInput.value.toLowerCase();
    const category = itemsCategory.value;

    const filterItems = items.filter(item => {
      const searchFilter = item.name.toLowerCase().includes(input) || item.description.toLowerCase().includes(input);
      const categoryFilter = category === '' || item.category === category;
      return searchFilter && categoryFilter;
    });

    displayItems(filterItems);
  }

  /* add event listeners in input box and category box */
  searchInput.addEventListener('input', filterItems);
  itemsCategory.addEventListener('change', filterItems)

  /* display items fun render */
  displayItems(items);
});