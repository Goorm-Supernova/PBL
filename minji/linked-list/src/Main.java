//for test!
public class Main {
    public static void main(String[] args) {
        final MyLinkedList<Integer> linkedList = new MyLinkedList<Integer>();
        linkedList.add(1,1);
        linkedList.add(2,2);
        linkedList.add(3,3);

        System.out.println(linkedList.get(1));
        linkedList.remove(1);
        System.out.println(linkedList.get(1));

        final MyQueue<Integer> queue = new MyQueue<Integer>();
        queue.enqueue(1);
        System.out.println(queue.dequeue());

        final MyStack<Integer> stack = new MyStack<Integer>();
        stack.push(1);
        System.out.println(stack.pop());
    }
}