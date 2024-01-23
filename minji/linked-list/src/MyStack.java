public class MyStack<T> {
    private MyLinkedList<T> linkedList;
    public MyStack(){
        linkedList = new MyLinkedList<T>();
    }
    public void push(T data){
        linkedList.add(data, linkedList.length);
    }

    public T pop(){
        return linkedList.get(linkedList.length);
    }
}
