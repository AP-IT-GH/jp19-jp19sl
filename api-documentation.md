---
description: 'https://smart-locker-234209.appspot.com/api'
---

# API Documentation

### Lockers

{% tabs %}
{% tab title="Model" %}
```text
  Locker {
        _id: string;
        reservation: Reservation[];
        open: boolean;
        className: string;
        lockerName: string;
        isReserved: boolean;
        created_at: Date;
   }
```
{% endtab %}

{% tab title="Description" %}

{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/lockers" %}
{% api-method-summary %}
Get all lockers
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
[
   {
      "reservation":[
         {
            "student":[
               "5c891efa84171f02947be831"
            ],
            "_id":"5c90e9189ddac526544842ea",
            "locker":"5c891c17d7fd701ca433173a",
            "startDate":"2019-03-19T12:59:34.702Z",
            "endDate":"2019-03-25T13:19:34.702Z",
            "created_at":"2019-03-19T13:05:28.339Z",
            "__v":0
         }
      ],
      "_id":"5c891c17d7fd701ca433173a",
      "open":false,
      "className":"Lokaal 1",
      "lockerName":"1.1",
      "isReserved":false,
      "created_at":"2019-03-13T15:04:55.655Z",
      "__v":0
   },
   {
      "reservation":[

      ],
      "_id":"5c891c17d7fd701ca433173c",
      "open":false,
      "className":"Lokaal 1",
      "lockerName":"1.2",
      "isReserved":false,
      "created_at":"2019-03-13T15:04:55.659Z",
      "__v":0
   }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/lockers/:id" %}
{% api-method-summary %}
Get locker
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="number" required=true %}
locker Id
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Locker successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "reservation": [
        "5c90e9189ddac526544842ea"
    ],
    "_id": "5c891c17d7fd701ca433173a",
    "open": true,
    "className": "Lokaal 1",
    "lockerName": "1.1",
    "isReserved": false,
    "created_at": "2019-03-13T15:04:55.655Z",
    "__v": 0
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://smart-locker-234209.appspot.com/api" path="/lockers/:id" %}
{% api-method-summary %}
Update locker
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
Id of the locker
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="className" type="string" required=false %}
The name of the class where the locker is placed
{% endapi-method-parameter %}

{% api-method-parameter name="lockerName" type="string" required=false %}
The name of the locker
{% endapi-method-parameter %}

{% api-method-parameter name="open" type="boolean" required=false %}
Specifies if locker is open or closed
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful
{% endapi-method-response-example-description %}

```
OK
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Incorrect locker id
{% endapi-method-response-example-description %}

```javascript
{
    "message": "Cast to ObjectId failed for value \"1\" at path \"_id\" for model \"Locker\"",
    "name": "CastError",
    "stringValue": "\"1\"",
    "kind": "ObjectId",
    "value": "1",
    "path": "_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Students

{% tabs %}
{% tab title="Model" %}
```javascript
   Student {
        _id: string;
        name: string;
        lastName: string;
        student_number: number;
        group: string;
        created_at: Date;
    }
```
{% endtab %}

{% tab title="Description" %}

{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/students" %}
{% api-method-summary %}
Get all students
{% endapi-method-summary %}

{% api-method-description %}
This endpoint retrieves all the students
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
[
   {
      "_id":"5c891efa84171f02947be831",
      "name":"Oussama",
      "lastName":"Es-Salhi",
      "student_number":101329,
      "group":"2ea2",
      "__v":0,
      "created_at":"2019-05-25T18:01:56.159Z"
   },
   {
      "_id":"5c891efa84171f02947be833",
      "name":"Imad",
      "lastName":"El-Azouzzi",
      "student_number":101330,
      "group":"2ea2",
      "__v":0,
      "created_at":"2019-05-25T18:01:56.159Z"
   },
   {
      "_id":"5c891efa84171f02947be832",
      "name":"Jarno",
      "lastName":"Cools",
      "student_number":102518,
      "group":"2ea2",
      "__v":0,
      "created_at":"2019-05-25T18:01:56.160Z"
   },
   {
      "_id":"5c893191cf2ab546cccfe986",
      "name":"Afaq",
      "lastName":"Mughal",
      "student_number":100950,
      "group":"2ea2",
      "created_at":"2019-03-13T16:36:33.304Z",
      "__v":0
   }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/students/:student\_number" %}
{% api-method-summary %}
Get student
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get a specific student.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="student\_number" type="number" required=true %}
Student number of the student.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Student successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "_id": "5c891efa84171f02947be831",
    "name": "Oussama",
    "lastName": "Es-Salhi",
    "student_number": 101329,
    "group": "2ea2",
    "__v": 0,
    "created_at": "2019-05-25T15:24:29.196Z"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Not Found
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://smart-locker-234209.appspot.com/api" path="/students" %}
{% api-method-summary %}
Add new student
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="group" type="string" required=false %}
Class group a student belongs to
{% endapi-method-parameter %}

{% api-method-parameter name="student\_number" type="number" required=false %}
Student's student number
{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=true %}
Student's surname
{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=true %}
Student's last name
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
Successful
{% endapi-method-response-example-description %}

```
Created
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Required body parameter missing \(e.g. group\)
{% endapi-method-response-example-description %}

    Student validation failed: group: Path `group` is required.
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://smart-locker-234209.appspot.com/api" path="/students/:student\_number" %}
{% api-method-summary %}
Update student
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="student\_number" type="number" required=true %}
Student's student number
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="lastName" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="group" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
OK
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Student doesn't exist
{% endapi-method-response-example-description %}

```
Not Found
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/students/:student\_number/reservations" %}
{% api-method-summary %}
Get student's reservations
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="student\_number" type="string" required=true %}
Student's student number
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
[
   {
      "student":[
         "5c891efa84171f02947be831"
      ],
      "_id":"5c90e9189ddac526544842ea",
      "locker":{
         "reservation":[
            "5c90e9189ddac526544842ea"
         ],
         "_id":"5c891c17d7fd701ca433173a",
         "open":false,
         "className":"Lokaal 1",
         "lockerName":"1.1",
         "isReserved":false,
         "created_at":"2019-03-13T15:04:55.655Z",
         "__v":0
      },
      "startDate":"2019-03-19T12:59:34.702Z",
      "endDate":"2019-03-25T13:19:34.702Z",
      "created_at":"2019-03-19T13:05:28.339Z",
      "__v":0
   },
   {
      "student":[
         "5c891efa84171f02947be831",
         "5c891efa84171f02947be833"
      ],
      "_id":"5ce565fb07c6470012829f34",
      "locker":{
         "reservation":[
            "5c90e9189ddac526544842ea"
         ],
         "_id":"5c891c17d7fd701ca433173a",
         "open":false,
         "className":"Lokaal 1",
         "lockerName":"1.1",
         "isReserved":false,
         "created_at":"2019-03-13T15:04:55.655Z",
         "__v":0
      },
      "startDate":"2019-03-19T12:59:34.702Z",
      "endDate":"2019-03-25T13:19:34.702Z",
      "created_at":"2019-05-22T15:08:43.857Z",
      "__v":0
   }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Reservations

{% tabs %}
{% tab title="Model" %}
```javascript
Reservation {
        _id: string;
        student: Student[];
        locker: string;
        startDate: Date;
        endDate: Date;
        created_at: Date;
    }
```
{% endtab %}

{% tab title="Description" %}

{% endtab %}
{% endtabs %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/reservations" %}
{% api-method-summary %}
Get all reservations
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
[
   {
      "student":[
         {
            "_id":"5c891efa84171f02947be831",
            "name":"Oussama",
            "lastName":"Es-Salhi",
            "student_number":101329,
            "group":"2ea2",
            "__v":0,
            "created_at":"2019-05-25T18:45:25.317Z"
         }
      ],
      "_id":"5c90e9189ddac526544842ea",
      "locker":"5c891c17d7fd701ca433173a",
      "startDate":"2019-03-19T12:59:34.702Z",
      "endDate":"2019-03-25T13:19:34.702Z",
      "created_at":"2019-03-19T13:05:28.339Z",
      "__v":0
   },
   {
      "student":[
         {
            "_id":"5c891efa84171f02947be831",
            "name":"Oussama",
            "lastName":"Es-Salhi",
            "student_number":101329,
            "group":"2ea2",
            "__v":0,
            "created_at":"2019-05-25T18:45:25.317Z"
         },
         {
            "_id":"5c891efa84171f02947be833",
            "name":"Imad",
            "lastName":"El-Azouzzi",
            "student_number":101330,
            "group":"2ea2",
            "__v":0,
            "created_at":"2019-05-25T18:45:25.317Z"
         }
      ],
      "_id":"5ce565fb07c6470012829f34",
      "locker":"5c891c17d7fd701ca433173a",
      "startDate":"2019-03-19T12:59:34.702Z",
      "endDate":"2019-03-25T13:19:34.702Z",
      "created_at":"2019-05-22T15:08:43.857Z",
      "__v":0
   },
   {
      "student":[
         {
            "_id":"5c891efa84171f02947be832",
            "name":"Jarno",
            "lastName":"Cools",
            "student_number":102518,
            "group":"2ea2",
            "__v":0,
            "created_at":"2019-05-25T18:45:25.317Z"
         }
      ],
      "_id":"5ce5afa807c6470012829f3e",
      "startDate":"2019-05-22T20:22:56.305Z",
      "endDate":"2019-05-22T20:22:56.305Z",
      "locker":"5c891c17d7fd701ca4331741",
      "created_at":"2019-05-22T20:23:04.583Z",
      "__v":0
   }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://smart-locker-234209.appspot.com/api" path="/reservations/:id" %}
{% api-method-summary %}
Get reservation
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
Reservation id
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
      "student":[
         {
            "_id":"5c891efa84171f02947be831",
            "name":"Oussama",
            "lastName":"Es-Salhi",
            "student_number":101329,
            "group":"2ea2",
            "__v":0,
            "created_at":"2019-05-25T18:45:25.317Z"
         }
      ],
      "_id":"5c90e9189ddac526544842ea",
      "locker":"5c891c17d7fd701ca433173a",
      "startDate":"2019-03-19T12:59:34.702Z",
      "endDate":"2019-03-25T13:19:34.702Z",
      "created_at":"2019-03-19T13:05:28.339Z",
      "__v":0
   }
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Reservation doesn't exist
{% endapi-method-response-example-description %}

```
Not Found
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://smart-locker-234209.appspot.com/api" path="/reservations" %}
{% api-method-summary %}
Add new reservation
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="endDate" type="object" required=true %}
Reservation end date \(Date object\)
{% endapi-method-parameter %}

{% api-method-parameter name="startDate" type="object" required=true %}
Reservation start date \(Date object\)
{% endapi-method-parameter %}

{% api-method-parameter name="student" type="array" required=true %}
Array of student id's that are reserving this locker
{% endapi-method-parameter %}

{% api-method-parameter name="locker" type="string" required=true %}
locker id associated with this reservation
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
Successfully created new reservation
{% endapi-method-response-example-description %}

```
Created
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Required body parameter missing \(e.g. startDate\)
{% endapi-method-response-example-description %}

    Reservation validation failed: startDate: Path `startDate` is required
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://smart-locker-234209.appspot.com/api" path="/reservations/:id" %}
{% api-method-summary %}
Delete reservation
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

