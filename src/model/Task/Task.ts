import { uuid } from "uuidv4";

export class Task {
  public id?: string;

  public title?: string;
  public content?: string;
  public is_favorite?: boolean;
  public color?: string;

  constructor(title: string, is_favorite: boolean, color?: string, content?: string, id?: string) {
    if (!title) throw new Error("Error in task structure");

    this.id = !id ? uuid() : id;
    this.title = title;
    this.content = content;
    this.is_favorite = is_favorite || false;
    this.color = color || "white";
  }
}
