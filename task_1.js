const random_num = () => { 
    let item = (Math.random() * 0xFFFFF * 1000000).toString(16); 
    return item.slice(0, 6); 
    }; 
    console.log(random_num())