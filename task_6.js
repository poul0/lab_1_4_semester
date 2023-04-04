function traverseTree(node) {
	console.log(node.value); // виконуємо певну дію з поточним вузлом
	if (node.children.length > 0) { // перевіряємо, чи має вузол дітей
	  for (let i = 0; i < node.children.length; i++) { // проходимо по всіх дітях поточного вузла
		traverseTree(node.children[i]); // рекурсивно викликаємо traverseTree з кожною дитиною
	  }
	}
  }
  const tree = {
	value: 1,
	children: [
	  {
		value: 2,
		children: [
		  {
			value: 4,
			children: []
		  },
		  {
			value: 5,
			children: []
		  }
		]
	  },
	  {
		value: 3,
		children: [
		  {
			value: 6,
			children: []
		  },
		  {
			value: 7,
			children: []
		  }
		]
	  }
	]
  };
  function traverseTree(node) {
	console.log(node.value); // виводимо значення поточного вузла
	if (node.children.length > 0) {
	  for (let i = 0; i < node.children.length; i++) {
		traverseTree(node.children[i]); // рекурсивно викликаємо traverseTree з кожною дитиною
	  }
	}
  }
  
  traverseTree(tree); // викликаємо traverseTree з кореневим вузлом
	  