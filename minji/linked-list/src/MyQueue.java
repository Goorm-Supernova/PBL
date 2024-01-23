public class MyQueue<T> {
    private MyLinkedList<T> linkedList;
    public MyQueue(){
        linkedList = new MyLinkedList<T>();
    }

    public void enqueue(T data){
        linkedList.add(data, linkedList.length);
    }

    public T dequeue(){
        return linkedList.remove(1);
    }
}
