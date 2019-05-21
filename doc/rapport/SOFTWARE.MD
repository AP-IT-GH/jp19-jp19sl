# Software - *Smart Locker*

## SmartLockerWebsite

### Ionic 4
**HttpModule** om api GET, POST, PUT & DELETE requests te kunnen doen.
#### BarcodeService
Service om uit de string dat op de barcode van de studentenkaart staat een studentnummer te krijgen.
| String studentenkaart | Studentnummer|
|---------------------- | -------------|
| ]C1S0000**102518**86      | 102518
De *BarcodeService* filtert de studentennummer uit de string.

**]C1S0000** is de prefix van AP studentenkaarten hier wordt ook op nagekeken zodat niet andere barcodes gescant worden en onnodige foute requests gebeuren.
#### LockerService
Service om de API aan te roepen en gegevens te veranderen in de database.

*Bv. locker 1 wordt geopend dus de open variable van locker 1 wordt __true__ gezet*
## Rest API
**https://smart-locker-234209.appspot.com/api**