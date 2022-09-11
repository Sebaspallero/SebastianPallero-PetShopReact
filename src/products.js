const products = [
    {id:1, title:'New Zealand - Pollo', category:"perros", price:1350, img_url:"/assets/producto1.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:2, title:'New Zealand - Carne', category:"perros", price:1500, img_url:"/assets/producto2.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:3,title:'New Zealand - Cordero',category:"perros", price:1600,img_url:"/assets/producto3.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:4,title:'New Zealand - Snack Carne', category:"perros", price:1200,img_url:"/assets/producto4.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:5,title:'New Zealand - Snack Ciervo', category:"perros", price:1400,img_url:"/assets/producto5.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:6,title:'New Zealand - Salmon', category:"gatos",price:1400,img_url:"/assets/producto6.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:7,title:'New Zealand - Carne Premuim',category:"perros",price:1700,img_url:"/assets/producto7.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."},
    {id:8,title:'New Zealand - Pescado', category:"gatos", price:1200,img_url:"/assets/producto8.jpg",description: "Lorem ipsum dolor sit amet, Nam pretium nisl tincidunt porta elementum. Duis vel enim lacinia, porta augue in, lobortis velit. Sed id cursus lacus. Donec eu scelerisque nisi. Donec vitae dignissim metus. Ut nec iaculis arcu. Nunc accumsan posuere dolor, sed tempus sem aliquam nec."}
]

export const fetchData = new Promise((res,rej)=>{
    let data = products
    if(data===products){
        setTimeout(()=>{
            res(products)
        },3000)
    }else{
        rej('Products Not Found')
    }
})