const listData = [
    {id: 1, name: "Phu"},
    {id: 2, name: "Linh"},
    {id: 4, name: "123123"},  
    {id: 3, name: "123123", parent: 1}
  ];
listData.forEach((item, index) => {
  if (item && item.parent) {
    const hmm = listData.find(data=>data.id == item.parent)
    if (hmm && hmm.child){
      hmm.child.push(item)
    }
    else{
      hmm.child = [item]
      listData.splice(index,1)
     }
    return listData
  }
  return listData;
})
console.log(listData);

