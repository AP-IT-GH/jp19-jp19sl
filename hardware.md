---
description: Uitleg hardware
---

# Hardware

## Voeding

![Voeding ontwerp met aansluitingen solenoid + aansturing solenoid](.gitbook/assets/image%20%283%29.png)

> Schakeling voor de demo hierboven. De aansturing van de solenoid is mee in deze schakeling verwerkt zodat op de demo minder bedrading zou zijn.

### Transformator 230V 50Hz AC - 12/24V 50Hz AC

Aangezien onze solenoid lock op 12V werkt moeten we een omzetting maken om van het net stroom te krijgen. Een alternatief was lithium batterijen maar hiervoor zou je iemand telkens moeten sturen om deze te vervangen en aangezien het verbruik hoog ligt om te solenoid te openen hebben we voor net spanning gekozen.

### Diodebrug

Zorgt voor de gelijkrichting van het AC signaal. Zet het inkomende signaal om naar een gerimpeld DC-signaal.

### Condensatoren

We gebruiken 2 condensatoren om het voedingssignaal te stabiliseren en te filteren. Het afvlakken van de rimpels in het DC-signaal.

### Voltage regulator 7812

De voltage regulator wordt gebruikt om de output voltage op 12V te houden.

![Voeding schakeling](https://lh5.googleusercontent.com/gVo6TJ254JNzuJsjrxzeCHRuQRK2_9W_6aZu0vntkGp-F_ieKx6zqj7QLR2_VDXf-3tKRo5ni5ly4QOhDAAjhJCnw9DfX_T7wIiCNyjzfpEkWi5n0KU9asm2VApmhKWCzOp94_9LuHfm_JV2eA)

## Solenoid lock

> Solenoids zijn elektromagneten: gemaakt van een grote spoel van koperdraad met een stuk metaal in het midden. Wanneer er stroom door de spoel wordt gezet, wordt het stuk metaal in het midden van de spoel getrokken. Hierdoor kan de solenoid trekken.

{% hint style="info" %}
650mA at 12V
{% endhint %}

{% hint style="danger" %}
Designed for 1-10 seconds long activation time
{% endhint %}

