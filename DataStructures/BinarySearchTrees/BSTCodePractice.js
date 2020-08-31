class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  add(data){
    const node = this.root;
    if (node === null){
      node = new Node(data);
      return;
    }
    else{
      const searchTree = function(node){
        if( data <node.data){
          if(node.left === null){
            node.left = new Node(data);
            return;
          }
          else{
            return searchTree(node.left);
          }
        }
        else if(data>node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          }
          else{
            return searchTree(node.right);
          }
        }
        else{
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMax(){
    let current = this.root;
    while(current !== null){
      current = current.right;
    }
    return current.data;
  }

  findMin(){
    let current = this.root; 
    while(current !== null){
      current = current.left;
    }
    return current.data;
  }
  find(data){
    let current = this.root;
    while(current.data !== data){
      if(current.data<data){
        current = current.right;
      }else{
        current = current.left;
      }
      if(current === null){
        return null; 
      }
    }
    return current;
  }

  isPresent(data){
    let current = this.root;
    while(current){ //i.e. current !== null
      if(current.data === data){
        return true;
      }
      else if(current.data<data){
        current = current.right;
      }
      else{
        current= current.left;
      }
    }
    return false; 
  }

  remove(data){
    const removeNode = function(node, data){
      if(node === null){
        return null;
      }
      if(node.data == data){
        //1. node has no children
        if(node.right == null & node.left == null){
          return null;
        }
        //2. node has no right children
        if(node.right == null){
          return node.left;
        }
        //3. node has no left children
        if(node.left == null){
          return node.right;
        }
        //4. node has a right and left child.
        var tempNode = node.right;
        while(tempNode.left !== null){
          tempNode = tempNode.left;
        }
        node.data = tempNode.data; 
        node.right = removeNode(node.right, tempNode.data);
        return node; // I get this if after iterating the node has two children but no grandchildren, i.e. I don't understand iterative part exactly...
      }
      else if( data < node.data){
        node.left = removeNode(node.left, data);
      }
      else{
        node.right = removeNode(node.right, data);
      }
    }
    this.root = removeNode(this.root, data);
  }

  findRange(){
    return findMax() - findMin();
  }

  /*
  findHeight(){

  }
  
  findWidth(){

  }

  findSum(){
    
    
  }
  findMean(){

  }
  combineTwoBSTs(node1, node2){

  }
  
  
  
  
  */
}