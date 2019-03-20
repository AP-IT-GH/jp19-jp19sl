import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)

prefix = ' '

while prefix != ']C1S0000':
    barcode = input("Scan uw studentenkaart")
    prefix = barcode[0:8]
    
    if prefix != ']C1S0000':
        print("Geen studentenkaart van AP")

snummer = barcode[8:14]
print(snummer)
print("Prefix is juist studentenkaart van AP")

GPIO.output(17, True)
time.sleep(5)
GPIO.output(17, False)

GPIO.cleanup()