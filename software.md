---
description: Uitleg software
---

# Software

## SmartLocker Website

### Ionic 4

> **HttpModule** om api GET, POST, PUT & DELETE requests te kunnen doen.

#### Barcode Service

{% hint style="info" %}
Service om uit de string dat op de barcode van de studentenkaart staat een studentennummer te krijgen.
{% endhint %}

| String studentenkaart | Studentnummer |
| :--- | :--- |
|  \]C1S0000**102518**86 | 102518 |

De _BarcodeService_ filtert de studentnummer uit de string.

**"\]C1S0000"** is de prefix van AP studentenkaarten hier wordt ook op nagekeken zodat niet andere barcodes gescand worden en onnodige foute requests gebeuren.

#### Locker Service

{% hint style="info" %}
Service om de API aan te roepen en gegevens te veranderen in de database.
{% endhint %}

_Bv. locker 1 wordt geopend dus de open variable van locker 1 wordt **true** gezet_

## Rest API

{% page-ref page="api-documentation.md" %}

### Socket.IO

> Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.





