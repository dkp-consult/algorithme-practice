// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var deleteDuplicates = function(head) {
    let current = head;
    while (current != null && current.next != null) {
        if (current.val === current.next.val) {
            // Si le nœud actuel et le nœud suivant sont identiques, sauter le nœud suivant
            current.next = current.next.next;
        } else {
            // Sinon, passer simplement au nœud suivant
            current = current.next;
        }
    }
    return head;
};

/* Faire une grande recherche sur la différence entre noeud et tableau et la manière d'aborder ceux-ci.  */