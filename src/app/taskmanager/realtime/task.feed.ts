import { Injectable } from "@angular/core";
import { IFeed } from "../../common/realtime/IFeed";
import { TaskManagerConstants } from "../utils/taskmanager.constants";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
    providedIn : 'root'
})
export class TaskFeed implements IFeed
{
    private stompClient;
 
    public start()
    {
        let webSocket = new SockJS(TaskManagerConstants.TASK_FEED_SERVER_URL);
        this.stompClient = Stomp.over(webSocket);
        this.addEventListeners();
    }

    public close()
    {
        //this.socket.close();
    }

    private addEventListeners()
    {
        let self = this;
        this.stompClient.connect({}, function(frame){
            self.stompClient.subscribe(TaskManagerConstants.TASK_FEED_TOPIC, (message) => {
                if(message.body) {
                  console.log(message.body);
                }
              });
        })
    }
}