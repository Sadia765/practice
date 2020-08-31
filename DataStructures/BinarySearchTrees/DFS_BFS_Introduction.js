var treeRoot = {
  value: 4,
  children: [
    {
      value: 9,
      children: [
        {
          value: 2,
          children: []
        },
        {
          value: 10,
          children: []
        }
      ]
    }, 
    {
      value: 7, 
      children: [
        {
          value: 38, 
          children: []
        },
        {
          value: 88,
          children: []
        }
      ]
    }
  ]
};

//console.log(treeRoot)

var DFS = function(root, target){
  
  var innerFunction = function(node){
    //console.log('node.value: ', node.value, 'target:', target);
    //console.log('type of node.value: ',typeof node.value, 'type of target: ', typeof target)
    //console.log('node: ', node);
    //console.log('node.value == target', node.value == target);
    if(node.value === target){
      var answerNode = node;
      console.log('AN: ',answerNode);
      //console.log(node);
      return answerNode;
    } 
    else{
      for (var i = 0; i < node.children.length; i++){
        //node = node.children[i];
        /*if(node.children[i].children.length != 0){
          return innerFunction(node.children[i]);
        }
        else{
          innerFunction(node.children[i]);
        }*/
        innerFunction(node.children[i]);
        
      }
    }
    //return answerNode;
  }
  return innerFunction(root);
}

console.log('DFS: ', DFS(treeRoot, 4), '\n');
console.log('DFS: ', DFS(treeRoot, 9), '\n');
console.log('DFS: ', DFS(treeRoot, 2), '\n');
console.log('DFS: ', DFS(treeRoot, 10), '\n');
console.log('DFS: ', DFS(treeRoot, 7), '\n');
console.log('DFS: ', DFS(treeRoot, 38), '\n');
console.log('DFS: ', DFS(treeRoot, 88), '\n');


var BFS = function(root, target){

  var queue = [root];

  while(queue.length){
    var node = queue.shift();
    //console.log('node.value: ', node.value);
    //console.log('node: ', node);
    //console.log(node.value === target);
    if(node.value === target){
      //console.log(node);
      return node;
    } else {
      for(var i = 0; i < node.children.length; i++){
        queue.push(node.children[i]);
      }
    }
  }

}

//console.log('BFS: ', BFS(treeRoot, 38))
//console.log('BFS: ', BFS(treeRoot, 9))
