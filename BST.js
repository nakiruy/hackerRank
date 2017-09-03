function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

function BinarySearchTree() {
  this.insert = function(root, data) {
      if (root === null) {
          this.root = new Node(data);
          
          return this.root;
      }
      
      if (data < root.data) {
          if (root.left) {
              this.insert(root.left, data);
          } else {
              root.left = new Node(data);
          }
      } else {
          if (root.right) {
              this.insert(root.right, data);
          } else {
              root.right = new Node(data);
          }
      }
      
      return this.root;
  };

    
  this.isPresent = function(root, val) {
    if (root.data === val) {
        return 1;
    } else if (root.data > val && root.left !== null) {
        if (this.isPresent(root.left, val)) {
            return 1;
        } else {
            return 0;
        }
    } else if (root.data < val && root.right !== null) {
        if (this.isPresent(root.right, val)) {
            return 1;
        } else {
            return 0;
        }
    } 
};