/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class notification {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
    send(): void {
        console.log("send notification");
    }
}

class emailNotification extends notification {
    email: string;
    constructor(email: string, message: string) {
        super(message);
        this.email = email;
    }
    override send(): void {
        console.log("send email");
    }
}

class smsNotification extends notification {
    send(): void {
        console.log("send sms");
    }
}
class pushNotification extends notification {
    send(): void {
        console.log("send push notification");  
}
}

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}