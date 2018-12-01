import { NameValueItem } from "../../common/model/NameValueItem";

export class TaskManagerConstants
{
    public static LOAD_TASKS_URL : string = "http://localhost:8080/task/list/";
    public static TASK_FEED_TOPIC : string = "/topic/tasks";
    public static TASK_FEED_SERVER_URL : string = "/gettasks";
    
    public static FIELD_TYPE_MAP : { [key : string] : number } = {
        "uuid" : 1,  
        "title" : 1, //1 is for type string
        "description" : 1,
        "duedate": 2,
        "createdat" : 2,
        "postponedat" : 2,
        "postponedtime" : 4,
        "resolvedat" : 2,
        "updatedat" : 2,
        "priority": 4,
        "status": 3
    }

    public static FIELD_MAP : { [key :string] : string } = {
        "uuid" : "id", 
        "title" : "title", //1 is for type string
        "description" : "description",
        "duedate": "dueDate",
        "createdat" : "createdAt",
        "postponedat" : "postponedAt",
        "postponedtime" : "postponedTime",
        "resolvedat" : "resolvedAt",
        "updatedat" : "updatedAt",
        "priority": "priority",
        "status": "status"
    }

    public static MILLISECONDS : number = 1000;
    public static SECONDS : number = 60;
    public static MINUTES : number = 60;

    public static POSTPONE_TIME : NameValueItem[] = [
        new NameValueItem('5 Minutes', 5),
        new NameValueItem('10 Minutes', 10),
        new NameValueItem('15 Minutes', 15),
        new NameValueItem('30 Minutes', 30),
        new NameValueItem('1 Hour', 60),
        new NameValueItem('2 Hours', 2 * TaskManagerConstants.MINUTES)
    ]
}