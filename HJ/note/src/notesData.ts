import { v4 } from "uuid";
import { Note } from "./types/note";

const notes: Note[] = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tag: "exercise", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/22 2.55 PM",
    createTime: new Date("Sat Dec 10 2022 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tag: "coding", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/22 3.02 PM",
    createTime: new Date("Sat Dec 10 2022 15:02:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
