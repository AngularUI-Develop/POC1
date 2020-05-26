import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';
@Injectable({
    providedIn: 'root',
})
export class WebNotificationService {
    readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';
    private baseUrl = 'http://127.0.0.1:8080/';
    constructor(
        private http: HttpClient,
        private swPush: SwPush) { }
    public subscribeToNotification() {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
            .then(sub => this.sendToServer(sub))
            .catch(err => console.error('Could not subscribe to notifications', err));
    }
    sendToServer(params: any) {
        this.http.post(this.baseUrl, { notification: params }).subscribe();
    }
}