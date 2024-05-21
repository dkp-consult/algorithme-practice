const app = (l1, l2) => {
  function linkedListToArray(node) {
    const array = [];
    while (node !== null) {
      array.push(node.val);
      node = node.next;
    }
    return array;
  }

  function arrayToLinkedList(array) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    array.forEach((val) => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return dummyHead.next;
  }

  var l1Array = linkedListToArray(l1);
  var l2Array = linkedListToArray(l2);

  var l1Reverse = l1Array.reverse();
  var l1Joinded = l1Reverse.join("");
  var l1Nums = BigInt(l1Joinded);

  var l2Reverse = l2Array.reverse();
  var l2Joinded = l2Reverse.join("");
  var l2Nums = BigInt(l2Joinded);

  var sum = l1Nums + l2Nums;

  // Convertir la somme en tableau de chiffres, chaque chiffre étant un élément du tableau
  var sumArray = Array.from(sum.toString()).map(Number).reverse();

  // Convertir le tableau de chiffres en une liste chaînée et retourner cette liste
  return arrayToLinkedList(sumArray);
};

module.exports = { app };
