class Node<T>{
    public T data;
    public Node next;
    public Node prev;

    public Node(T data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
