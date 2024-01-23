class MyLinkedList<T>{
    public Node head;
    public Node tail;
    public int length;

    public MyLinkedList(){
        head = new Node<T>(null);
        tail = new Node<T>(null);
        head.next = tail;
        tail.prev = head;
        length = 0;
    }

    public int getLength() {
        return length;
    }

    public T get(int i) {
        Node<T> cur = head;
        for(int k = 0;k<i;k++){
            cur = cur.next;
        }
        return cur.data;
    }
    public void add(T data, int i){
        Node<T> cur = this.head;
        for(int k = 0;k<i-1;k++){
            cur = cur.next;
        }

        final Node<T> newNode = new Node(data);
        cur.next.prev = newNode;
        newNode.next = cur.next;
        cur.next = newNode;
        newNode.prev = cur;
        length++;
    }
    public T remove(int i){
        Node<T> cur = this.head;
        for(int k = 0;k<i;k++){
            cur = cur.next;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        length--;

        return cur.data;
    }

}