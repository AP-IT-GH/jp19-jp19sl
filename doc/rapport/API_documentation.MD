# API Documentation
This API reference is organized by resource type. 
The base api url is : [https://smart-locker-234209.appspot.com/api](https://smart-locker-234209.appspot.com/)
## Lockers
###  Model
open: Boolean, Required   
lockerName: String, Required  
className: String, Required  
reservation: Refer to the Reservation section of this documentation  
isReserved: Boolean, Required  
gpio: Number, Required  
created_at: Date  
updated_at:  Date  


|Http request                   |Description                  |
|-------------------------------|-----------------------------|
|GET `/lockers`                 |Gets all the lockers         |
|GET `/lockers/id`              |Gets specified locker        |
|PUT `/lockers/id`				|Updates specified locker	  |

## Students
###  Model
name: String, Required  
lastName: String, Required  
student_number: String, Required  
group: String, Required  
created_at: Date  
updated_at:  Date   


|Http request                   |Description                  |
|-------------------------------|-----------------------------|
|GET `/students`                 |Gets all the students         |
|POST `/students`              |Creates new student        |
|GET `/students/student_number`| Gets specified student |
|PUT `/students/student_number`				|Updates specified student	  |
|GET `/students/student_number/reservations` |Gets reservations of specified student|
 
## Reservations
###  Model
student: Student, Required  
locker: Locker, Required  
startDate: Date, Required  
endDate: Date, Required  
created_at: Date  
updated_at:  Date  


|Http request                   |Description                  |
|-------------------------------|-----------------------------|
|GET `/reservations`                 |Gets all the reservations         |
|POST `/reservations`              |Creates new reservation        |
|GET `/reservations/id`| Gets specified reservation |
|PUT `/reservations/id`				|Updates specified reservation	  |
 


 
 


