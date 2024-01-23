import java.util.Iterator;



class MyLinkedList<T> implements Iterable<T> {
    public Node<T> head;
    public Node<T> tail;
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

        final Node<T> newNode = new Node<T>(data);
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
    class LinkedListIterator implements  Iterator<T>{
        private Node<T> cur;
        public LinkedListIterator(){
            cur = head;
        }

        @Override
        public boolean hasNext() {
            return cur.next.next!=null;
        }

        @Override
        public T next() {
            cur = cur.next;
            return cur.data;
        }
    }

    @Override
    public Iterator<T> iterator() {
        return new LinkedListIterator();
    }
}